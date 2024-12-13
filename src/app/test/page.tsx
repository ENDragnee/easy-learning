// Updated React Component
"use client";
import { useEffect, useState } from "react";


interface ContentItem {
  type: string;
  className?: string;
  content?: string | ContentItem[] | any;
  children?: ContentItem[];
  items?: string[];
}

interface ContentResponse {
  content: ContentItem[];
}

const ContentPage = () => {
  const [content, setContent] = useState<ContentItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch("/api/content");
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data: ContentResponse = await res.json();
        setContent(data.content);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchContent();
  }, []);

  const renderContent = (item: ContentItem): JSX.Element | null => {
    const Element = item.type as keyof JSX.IntrinsicElements;

    if (item.type === "math") {
      return (
        <div key={Math.random()} className={item.className}>
          <code>{item.content}</code>
        </div>
      );
    }

    if (Array.isArray(item.content)) {
      return (
        <Element key={Math.random()} className={item.className}>
          {item.content.map((child) =>
            typeof child === "string" ? (
              <span key={Math.random()}>{child}</span>
            ) : (
              renderContent(child)
            )
          )}
        </Element>
      );
    }

    if (item.children) {
      return (
        <Element key={Math.random()} className={item.className}>
          {item.children.map((child) => renderContent(child))}
        </Element>
      );
    }

    if (item.items) {
      return (
        <Element key={Math.random()} className={item.className}>
          {item.items.map((li, index) => (
            <li key={index}>{li}</li>
          ))}
        </Element>
      );
    }

    return (
      <Element
        key={Math.random()}
        className={item.className}
        dangerouslySetInnerHTML={
          item.content ? { __html: item.content } : undefined
        }
      />
    );
  };

  if (error) {
    return <div className="px-6 py-10 max-w-4xl mx-auto text-justify">Error: {error}</div>;
  }

  if (!content) {
    return <div className="px-6 py-10 max-w-4xl mx-auto text-justify">Loading...</div>;
  }

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      {content.map((item) => renderContent(item))}
    </div>
  );
};

export default ContentPage;