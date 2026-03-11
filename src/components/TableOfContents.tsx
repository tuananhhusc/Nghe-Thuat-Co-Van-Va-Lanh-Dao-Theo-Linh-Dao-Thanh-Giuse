"use client";

import { useState, useEffect, useCallback } from "react";

interface TocItem {
  id: string;
  title: string;
}

const tocItems: TocItem[] = [
  { id: "khai-luan", title: "Khái Luận" },
  { id: "nen-tang-than-hoc", title: "Nền Tảng Thần Học" },
  { id: "phan-tich-so-sanh", title: "Phân Tích So Sánh" },
  { id: "thach-thuc", title: "Thách Thức Hiện Đại" },
  { id: "ung-dung", title: "Ứng Dụng Thực Tiễn" },
  { id: "tien-trinh", title: "Tiến Trình Cố Vấn" },
  { id: "ket-luan", title: "Lời Kết Luận" },
  { id: "nguon-trich-dan", title: "Nguồn Trích Dẫn" },
];

export default function TableOfContents() {
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  }, []);

  return (
    <>
      {/* Mobile FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-navy text-white rounded-full shadow-lg flex items-center justify-center hover:bg-navy-light transition-colors"
        aria-label="Mục lục"
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h12M4 18h8" strokeLinecap="round" />
        </svg>
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="toc-overlay lg:hidden fixed inset-0 z-40 bg-black/40" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile bottom sheet */}
      <div className={`toc-mobile lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-cream dark:bg-navy-light rounded-t-2xl shadow-2xl transition-transform duration-300 ${isOpen ? "translate-y-0" : "translate-y-full"}`}>
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          <div className="w-10 h-1 bg-navy/20 dark:bg-cream/20 rounded-full mx-auto mb-4" />
          <h3 className="font-serif text-lg font-bold text-navy dark:text-cream mb-4">Mục Lục</h3>
          <nav>
            <ul className="space-y-1">
              {tocItems.map(({ id, title }) => (
                <li key={id}>
                  <button
                    onClick={() => handleClick(id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all ${
                      activeId === id
                        ? "bg-gold/15 text-navy dark:text-gold font-semibold border-l-3 border-gold"
                        : "text-navy/60 dark:text-cream/60 hover:text-navy dark:hover:text-cream hover:bg-navy/5 dark:hover:bg-cream/5"
                    }`}
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Desktop sticky sidebar */}
      <nav className="hidden lg:block sticky top-8 self-start w-64 shrink-0">
        <div className="bg-white dark:bg-navy-light rounded-xl shadow-sm border border-navy/5 dark:border-cream/5 p-5 transition-colors">
          <h3 className="font-serif text-sm font-bold text-navy dark:text-cream uppercase tracking-wider mb-4">
            Mục Lục
          </h3>
          <ul className="space-y-0.5">
            {tocItems.map(({ id, title }) => (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                    activeId === id
                      ? "bg-gold/10 text-navy dark:text-gold font-semibold border-l-3 border-gold"
                      : "text-navy/50 dark:text-cream/50 hover:text-navy dark:hover:text-cream hover:bg-parchment dark:hover:bg-navy/50"
                  }`}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
