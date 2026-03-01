"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-gray-900 mt-10 mb-4 pb-3 border-b border-gray-200">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-gray-600 leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="space-y-2 mb-6 ml-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-2 mb-6 ml-1 list-decimal list-inside">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-gray-600 flex gap-2.5 items-start">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-600 hover:text-indigo-700 underline underline-offset-2 decoration-indigo-300 hover:decoration-indigo-500 transition-colors"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-indigo-400 bg-indigo-50/50 pl-4 py-3 pr-4 my-6 rounded-r-xl">
      {children}
    </blockquote>
  ),
  code: ({ className, children }) => {
    const isBlock = className?.includes("language-") || String(children).includes("\n");
    if (isBlock) {
      const lang = className?.replace("language-", "") || "";
      return (
        <div className="relative group">
          {lang && (
            <span className="absolute top-3 right-3 text-xs text-gray-500 font-mono bg-gray-800 px-2 py-0.5 rounded">
              {lang}
            </span>
          )}
          <code className="block text-sm font-mono text-gray-300 leading-relaxed">
            {children}
          </code>
        </div>
      );
    }
    return (
      <code className="text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded-md text-sm font-mono">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-gray-900 rounded-xl p-5 my-6 overflow-x-auto border border-gray-800">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-gray-50 border-b border-gray-200">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-semibold text-gray-900 text-xs uppercase tracking-wider">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-gray-600 border-t border-gray-100">
      {children}
    </td>
  ),
  hr: () => <hr className="my-8 border-gray-200" />,
  img: ({ src, alt }) => (
    <div className="my-6 rounded-xl overflow-hidden border border-gray-200">
      <img src={src} alt={alt || ""} className="w-full" />
      {alt && (
        <p className="text-center text-xs text-gray-400 py-2 bg-gray-50">{alt}</p>
      )}
    </div>
  ),
};

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
