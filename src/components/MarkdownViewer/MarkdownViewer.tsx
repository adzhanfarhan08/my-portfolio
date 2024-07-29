import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownViewerProps {
  filePath: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ filePath }) => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`);
        }
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error fetching or processing markdown:', error);
      }
    };

    fetchMarkdown();
  }, [filePath]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xl">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => <h1 className="text-4xl font-bold my-5 text-center" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-3xl font-bold mb-4" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-2xl font-bold mb-3" {...props} />,
            p: ({ node, ...props }) => <p className="mb-4" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownViewer;
