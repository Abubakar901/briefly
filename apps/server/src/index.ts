import "dotenv/config";
import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = process.env.PORT || 3000;

const apiKey = process.env.GEMINI_API_KEY;

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "Briefly server is running!",
  });
});

app.post("/api/summarize", async (req, res) => {
  const { title, content } = req.body ?? {};

  if (typeof content !== "string" || !content.trim()) {
    res.status(400).json({
      error: "Article content is required.",
    });
    return;
  }

  if (content.length > 100_000) {
    res.status(413).json({
      error: "Article is too long to summarize.",
    });
    return;
  }

  if (!ai) {
    res.status(500).json({
      error: "Gemini API key is not configured on the server.",
    });
    return;
  }

  try {
    const response = await Promise.race([
      ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: `
You are Briefly, an assistant that helps people understand webpages quickly.

Write a useful overview in exactly 2-3 complete sentences.
Explain the main topic and the most important takeaway.
Make the overview informative, concise, and easy to understand.
Never stop mid-sentence. Do not begin with filler such as "This page explains".
Use only the information provided.

Page title: ${typeof title === "string" ? title : "Untitled page"}

Article content:
${content}
`,
        config: {
          temperature: 0.2,
          maxOutputTokens: 1024,
        },
      }),
      new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("Gemini request timed out")), 60_000);
      }),
    ]);

    console.log(
      "Gemini finish reason:",
      response.candidates?.[0]?.finishReason,
    );

    console.log("Gemini raw response:", response.text);

    const summary = response.text?.trim();

    if (!summary) {
      res.status(502).json({
        error: "The AI did not return a summary. Please try again.",
      });
      return;
    }

    res.json({
      title: typeof title === "string" ? title : "Untitled page",
      summary,
    });
  } catch (error: unknown) {
    console.error("Summarization failed:", error);

    const message = error instanceof Error ? error.message : String(error);

    res.status(502).json({
      error: "Could not generate a summary.",
      details: message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Briefly server running at http://localhost:${PORT}`);
});
