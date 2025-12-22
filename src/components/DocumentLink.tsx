"use client";

import Link from "next/link";

interface DocumentLinkProps {
  href: string;
  title: string;
  external?: boolean;
}

export default function DocumentLink({
  href,
  title,
  external = true,
}: DocumentLinkProps) {
  return (
    <div className="border-l-4 border-primary-400 pl-4 py-2">
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-primary-500 hover:underline transition-colors"
        >
          {title}
        </a>
      ) : (
        <Link
          href={href}
          className="text-gray-700 hover:text-primary-500 hover:underline transition-colors"
        >
          {title}
        </Link>
      )}
    </div>
  );
}
