
import Icon from "@/components/Icon/Icon";

import type { KeyLink } from "@/types/pageReader";

interface KeyLinksProps {
  links: KeyLink[];
}

export default function KeyLinks({ links }: Readonly<KeyLinksProps>) {
  if (links.length === 0) return null;

  return (
    <section className="content-section">
      <div className="section-heading">
        <h2>Key links</h2>
        <span>{links.length} links</span>
      </div>

      <div className="link-list">
        {links.map((link) => (
          <a
            className="key-link"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            key={link.url}
            title={link.url}
          >
            <span>{link.title}</span>
            <Icon name="external" />
          </a>
        ))}
      </div>
    </section>
  );
}
