import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-navy via-navy-light to-navy text-white py-16 md:py-24 px-6 text-center relative overflow-hidden transition-colors">
      <div className="absolute top-6 right-6 z-20 flex gap-4">
        <ThemeToggle />
      </div>
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/30 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold/20 rounded-full" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-gold font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-6">
          Báo Cáo Nghiên Cứu
        </p>
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Nghệ Thuật Cố Vấn Và Lãnh Đạo Theo Linh Đạo Thánh Giuse
        </h1>
        <div className="w-24 h-0.5 bg-gold mx-auto mt-8" />
      </div>
    </header>
  );
}
