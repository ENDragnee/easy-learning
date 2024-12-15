"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import { LoaderContainer, Loader } from "@/components/ui/StyledComponent";

interface ContentItem {
  type: string;
  className?: string;
  content?: string | ContentItem[] | any;
  children?: ContentItem[];
  items?: string[];
  math?: string;
}

interface ContentResponse {
  content: ContentItem[];
}

const Content = () => {
  const [content, setContent] = useState<ContentItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  
  const grade = searchParams.get('grade');
  const course = searchParams.get('course');
  const chapter = searchParams.get('chapter');
  const subChapter = searchParams.get('subChapter');

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      setError(null);
      setContent(null);

      if (!grade || !course || !chapter || !subChapter) {
        setError("Missing query parameters");
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `/api/nav/content?grade=${grade}&course=${course}&chapter=${chapter}&subChapter=${subChapter}`
        );
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [grade, course, chapter, subChapter]);

  const renderContent = (item: ContentItem): JSX.Element | null => {
    if (!item.type) return null;

    const Element = item.type as keyof JSX.IntrinsicElements;

    // Handle BlockMath components
    if (item.type === "BlockMath") {
      return (
        <div key={Math.random()} className={item.className}>
          <BlockMath math={item.math || ''} />
        </div>
      );
    }

    // Handle InlineMath components
    if (item.type === "InlineMath") {
      return <InlineMath key={Math.random()} math={item.math || ''} />;
    }

    // Handle table structures
    if (item.type === "table") {
      return (
        <table key={Math.random()} className={item.className}>
          {item.children?.map((child) => renderContent(child))}
        </table>
      );
    }

    if (item.type === "thead" || item.type === "tbody") {
      return (
        <Element key={Math.random()}>
          {item.children?.map((child) => renderContent(child))}
        </Element>
      );
    }

    if (item.type === "tr") {
      return (
        <tr key={Math.random()} className={item.className}>
          {item.children?.map((child) => renderContent(child))}
        </tr>
      );
    }

    if (item.type === "th" || item.type === "td") {
      return (
        <Element key={Math.random()} className={item.className}>
          {item.content}
        </Element>
      );
    }

    // Handle regular elements with children
    if (item.children) {
      return (
        <Element key={Math.random()} className={item.className}>
          {item.children.map((child) => renderContent(child))}
        </Element>
      );
    }

    // Handle elements with direct content
    return (
      <Element
        key={Math.random()}
        className={item.className}
      >
        {item.content}
      </Element>
    );
  };

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  if (error) {
    return <div className="px-6 py-10 max-w-4xl mx-auto text-justify">Error: {error}</div>;
  }

  if (!content) {
    return <div className="px-6 py-10 max-w-4xl mx-auto text-justify">No content available.</div>;
  }

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      {content.map((item) => renderContent(item))}
    </div>
  );
};

export default Content;