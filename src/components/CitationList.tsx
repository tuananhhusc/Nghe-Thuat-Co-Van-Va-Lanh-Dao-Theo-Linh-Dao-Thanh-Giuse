interface CitationListProps {
  citations: string[];
}

export default function CitationList({ citations }: CitationListProps) {
  return (
    <section id="nguon-trich-dan" className="mt-16 pt-10 border-t border-navy/10 dark:border-cream/10">
      <h2 className="font-serif text-3xl font-bold text-navy dark:text-cream mb-8">Tài Liệu Tham Khảo</h2>
      <div className="space-y-4 text-base leading-relaxed text-navy/80 dark:text-cream/80">
        {citations.map((c, i) => (
          <p 
            key={i} 
            className="pl-8 -indent-8 break-words"
            dangerouslySetInnerHTML={{ __html: c }} 
          />
        ))}
      </div>
    </section>
  );
}
