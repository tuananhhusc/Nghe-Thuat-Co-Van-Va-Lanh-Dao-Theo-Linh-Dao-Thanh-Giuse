"use client";

import { Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";

export default function ShareBar() {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "https://thanhgiuse-report.vercel.app";
  const title = encodeURIComponent("Nghệ Thuật Cố Vấn Và Lãnh Đạo Theo Linh Đạo Thánh Giuse");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("Đã sao chép liên kết!");
  };

  return (
    <div className="fixed top-1/2 right-6 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3 share-bar">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white dark:bg-navy-light text-navy dark:text-cream rounded-full shadow-lg border border-gold/20 hover:bg-gold hover:text-white hover:scale-110 transition-all"
        aria-label="Share on Facebook"
      >
        <Facebook size={20} />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white dark:bg-navy-light text-navy dark:text-cream rounded-full shadow-lg border border-gold/20 hover:bg-gold hover:text-white hover:scale-110 transition-all"
        aria-label="Share on Twitter"
      >
        <Twitter size={20} />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white dark:bg-navy-light text-navy dark:text-cream rounded-full shadow-lg border border-gold/20 hover:bg-gold hover:text-white hover:scale-110 transition-all"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <button
        onClick={copyToClipboard}
        className="p-3 bg-white dark:bg-navy-light text-navy dark:text-cream rounded-full shadow-lg border border-gold/20 hover:bg-gold hover:text-white hover:scale-110 transition-all"
        aria-label="Copy Link"
      >
        <LinkIcon size={20} />
      </button>
    </div>
  );
}
