
interface OverviewProps {
  summary: string;
}

export default function Overview({ summary }: Readonly<OverviewProps>) {
  return (
    <section className={`overview${summary ? "" : " overview-pending"}`}>
      <h2>{summary ? "The big picture" : "Overview unavailable"}</h2>
      <p>
        {summary ||
          "The page was extracted, but Briefly couldn’t generate a summary."}
      </p>
    </section>
  );
}
