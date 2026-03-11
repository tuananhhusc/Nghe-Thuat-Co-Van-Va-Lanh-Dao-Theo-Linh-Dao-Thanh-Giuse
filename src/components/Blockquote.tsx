interface BlockquoteProps {
  children: React.ReactNode;
}

export default function Blockquote({ children }: BlockquoteProps) {
  return (
    <blockquote className="relative my-8 pl-6 pr-4 py-5 bg-parchment dark:bg-navy-light/50 border-l-4 border-gold rounded-r-lg italic text-navy/80 dark:text-cream/80 font-serif text-lg leading-relaxed">
      <span className="absolute -top-3 left-3 text-gold/30 text-5xl font-serif select-none">&ldquo;</span>
      {children}
    </blockquote>
  );
}
