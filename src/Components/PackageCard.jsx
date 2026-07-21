import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Code2 } from 'lucide-react';

const GithubIcon = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.2 5.2 0 0 0-1.5-3.8c.16-.4.65-1.84-.15-3.8 0 0-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0C6.2 2.12 5 2.5 5 2.5c-.8 1.96-.3 3.4-.15 3.8a5.2 5.2 0 0 0-1.5 3.8c0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const PackageCard = ({ name, description, githubUrl, docUrl, installCommand, lang }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col justify-between p-8 md:p-10 border-2 border-black bg-white rounded-md transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] cursor-none hover:-translate-y-2.5 hover:shadow-[0_20px_30px_rgba(0,0,0,0.1)] group hoverable">
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-start gap-3 min-w-0">
            <div className="p-2 bg-black text-white rounded shrink-0">
              <Code2 size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight break-all min-w-0">{name}</h3>
          </div>
          <span className="px-3 py-1 bg-gray-100 text-black border border-black rounded-full text-xs font-bold uppercase tracking-wider shrink-0">
            {lang}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
          {description}
        </p>

        {/* Copy command box */}
        <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded p-3 mb-8 font-mono text-sm overflow-x-auto relative">
          <span className="text-gray-800 select-all pr-8 whitespace-nowrap">{installCommand}</span>
          <button
            onClick={handleCopy}
            className="absolute right-3 p-1.5 bg-white border border-gray-300 rounded hover:border-black transition-colors cursor-none hoverable"
            title="Copy install command"
          >
            {copied ? (
              <Check size={14} className="text-green-600" />
            ) : (
              <Copy size={14} className="text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Action Links */}
      <div className="flex items-center gap-6 border-t border-gray-100 pt-6 mt-auto">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-black hover:text-gray-600 font-semibold transition-colors cursor-none hoverable"
          >
            <GithubIcon size={18} />
            <span>GitHub</span>
          </a>
        )}
        {docUrl && (
          <a
            href={docUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-black hover:text-gray-600 font-semibold transition-colors cursor-none hoverable"
          >
            <ExternalLink size={18} />
            <span>Docs</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default PackageCard;
