export default function Footer() {
  return (
    <footer className="bg-navy text-white/80 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
        <p className="font-serif text-lg text-gold mb-2">
          Ad Maiorem Dei Gloriam
        </p>
        <p className="text-sm text-white/50">
          Báo Cáo Nghiên Cứu Học Thuật &middot; Nghệ Thuật Cố Vấn Và Lãnh Đạo Theo Linh Đạo Thánh Giuse
        </p>
        <p className="text-xs text-white/30 mt-4">
          &copy; {new Date().getFullYear()} &mdash; Mọi quyền được bảo lưu
        </p>
      </div>
    </footer>
  );
}
