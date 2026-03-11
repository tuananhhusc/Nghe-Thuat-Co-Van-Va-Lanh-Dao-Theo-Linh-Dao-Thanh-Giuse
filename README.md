# Nghệ Thuật Cố Vấn Và Lãnh Đạo Theo Linh Đạo Thánh Giuse

Dự án này là một nền tảng trình bày báo cáo nghiên cứu thần học và quản trị chuyên sâu với chủ đề: **"Nghệ Thuật Cố Vấn Và Lãnh Đạo Theo Linh Đạo Thánh Giuse"**. Website được thiết kế theo tiêu chuẩn học thuật cao cấp (Academic Style), mang lại trải nghiệm đọc nội dung văn bản dài (long-form) tối ưu nhất, kết hợp thẩm mỹ cổ điển với công nghệ web hiện đại.

## 🌟 Tính Năng Nổi Bật (Key Features)

- **Giao Diện Học Thuật (Academic Aesthetics):** Sử dụng các gam màu Hoàng gia (Navy, Gold, Burgundy, Cream) và phông chữ Serif (Playfair Display, Lora) để tạo cảm giác trang trọng, cổ điển như một cuốn sách hay văn bản hàn lâm.
- **Chế Độ Giao Diện Kép (Light / Dark Mode Kéo Mượt):** Hỗ trợ đầy đủ chủ đề Tối/Sáng, được tinh chỉnh màu sắc cho từng chi tiết nhỏ (kể cả các con số trích dẫn, khung viền), bảo vệ mắt người đọc.
- **Chế Độ Tập Trung (Zen Mode / Focus Mode):** Nút xoay chuyển giao diện cho phép ẩn toàn bộ mọi thanh điều hướng, menu, và nút bấm cố định (Fixed UI), chỉ để lại nội dung thuần túy để đọc.
- **Mục Lục Tương Tác (Interactive Table of Contents):**
  - **Trên PC:** Thanh menu cố định bên trái (Sidebar), tự động bám theo (Spy-scroll) nội dung người dùng đang đọc.
  - **Trên Mobile:** Thanh menu ẩn (Bottom Sheet) hiện lên từ dưới màn hình mượt mà, tối ưu không gian hiển thị.
- **Hoạt Ảnh Xuất Hiện (Scroll Reveal Animations):** Mọi đoạn văn, thẻ Quote, và Bảng điều khiển đều được tích hợp công nghệ Framer Motion, từ từ hiện ra theo nhịp cuộn của độc giả (Fade-up on Scroll).
- **Thanh Công Cụ Hỗ Trợ Đọc:**
  - Thanh Tiến Trình Đọc (Reading Progress Bar) nằm ngang mép trên cùng.
  - Nút Mũi Tên Cuộn Lên Đầu Trang (Back to Top).
  - Thanh Chia Sẻ Mạng Xã Hội (Social Share Bar) đa nền tảng.
- **Hệ Thống Phụ Chú Thông Minh (Smart Citations):** Tự động format các đuôi số trích dẫn thành dạng superscript (`[1]`, `[2]`), có thiết kế nổi bật và liên kết với phần thư mục tài liệu ở cuối trang.

## 🛠 Công Nghệ Sử Dụng (Tech Stack)

Dự án được xây dựng dựa trên các công nghệ lõi mạnh mẽ và mới nhất (Năm 2024-2025):

- **[Next.js 16.1 (App Router)](https://nextjs.org/):** Framework React thế hệ mới, hỗ trợ tối ưu biên dịch Turbopack và chuẩn SSR/SSG.
- **[React 19](https://react.dev/):** Library giao diện người dùng mới nhất.
- **[Tailwind CSS v4](https://tailwindcss.com/):** Bộ máy CSS tiện ích cực mạnh, tích hợp `@custom-variant dark` mới nhất và Tailwind Typography plugin.
- **[Framer Motion](https://www.framer.com/motion/):** Thư viện Animations mượt mà số 1 của React để làm hiệu ứng Scroll Reveal.
- **[Next Themes](https://github.com/pacocoursey/next-themes):** Quản lý State cho Dark/Light Mode đồng bộ với hệ điều hành.
- **[Lucide React](https://lucide.dev/):** Bộ icon SVG đẹp, nhẹ nhàng và sắc nét.

## 📂 Cấu Trúc Dự Án (Folder Structure)

\`\`\`text
thanhgiuse/
├── public/                 # Các tài nguyên tĩnh (images, seo)
├── src/
│   ├── app/                # Thư mục gốc của Next.js App Router
│   │   ├── layout.tsx      # Chứa cấu trúc Root, Metadata SEO, Font chữ
│   │   ├── page.tsx        # Trang chủ của báo cáo
│   │   └── globals.css     # Định nghĩa CSS toàn cục và config biến Tailwind V4
│   │
│   ├── components/         # Các mảnh ghép (React Components)
│       ├── ArticleBody.tsx     # Nội dung báo cáo chính yếu (Chứa HTML)
│       ├── CitationList.tsx    # Khu vực danh sách Tài liệu tham khảo
│       ├── TableOfContents.tsx # Menu mục lục (Sidebar/Bottom Sheet)
│       ├── ThemeToggle.tsx     # Nút đổi màu Sáng/Tối
│       ├── ZenModeToggle.tsx   # Nút chế độ tập trung
│       ├── ProgressBar.tsx     # Thanh đo tiến độ đọc
│       ├── BackToTop.tsx       # Nút chuyển nhanh lên màn hình
│       ├── ShareBar.tsx        # Nút tính năng chia sẻ
│       ├── Blockquote.tsx      # Hộp thoại trích dẫn nhấn mạnh
│       ├── DataTable.tsx       # Khối hiển thị bảng dữ liệu (Bảng 1,2,3)
│       └── ScrollReveal.tsx    # Hộp điều khiển Animations lúc cuộn
│
├── generate-content-v2.js  # Node Script (Trình tự động tạo HTML hóa ArticleBody từ file Text)
├── tailwind.config.ts / mjs# Cấu hình Tailwind (Đã lên V4 chuyển vào globals.css)
└── package.json            # Chứa thông tin các Package NPM
\`\`\`

## 🚀 Hướng Dẫn Cài Đặt và Chạy Dự Án (Setup)

Yêu cầu môi trường: Cài đặt **Node.js** (Phiên bản v18.x hoặc mới nhất).

1. **Clone hoặc tải dự án về máy.**
2. **Cài đặt thư viện phụ thuộc (Dependencies):**
   Mở terminal tại thư mục gốc của dự án (\`d:\\thanhgiuse\`) và chạy:
   \`\`\`bash
   npm install
   \`\`\`
3. **Khởi động server phát triển (Development):**
   \`\`\`bash
   npm run dev
   \`\`\`
   Truy cập \`http://localhost:3000\` trên trình duyệt để xem kết quả. Mọi thay đổi code sẽ được tự động làm mới (Hot Reloading).

## 🛠 Các Script Lệnh Của NPM (NPM Scripts)

- \`npm run dev\`: Khởi chạy bản nháp dành cho việc lập trình trực tiếp.
- \`npm run build\`: Biên dịch đóng gói dự án ra cấu trúc chuẩn sản xuất (Production Build). Quá trình này sẽ sinh ra các tệp tin được tối ưu hóa tĩnh siêu nhẹ.
- \`npm start\`: Khởi chạy dự án ở môi trường Production (sau khi đã Build).
- \`npm run lint\`: Quét lỗi cú pháp, quy chuẩn và an toàn của mã code sử dụng hệ thống ESLint. (Hiện tại dự án đang *Zero Warnings/Errors*).

## ✍️ Chỉnh Sửa Nội Dung (Content Editing)

Nội dung báo cáo (Phần Text) của dự án này khá dài và phức tạp, chứa nhiều trích dẫn. Dự án đang sử dụng mô hình tạo JSX Tự động.

**Cách chỉnh sửa một đoạn văn/nội dung chữ:**
1. Chỉnh sửa nội dung chữ tại file thô \`giuse.txt\` (Trong thư mục gốc).
2. Mở Terminal và gõ:
   \`\`\`bash
   node generate-content-v2.js
   \`\`\`
3. Hệ thống sẽ tự động tổng hợp, tìm mốc Chú thích, ngắt nhịp và gen (ghi đè) mã HTML hoàn hảo vào file \`src/components/ArticleBody.tsx\`. Không nên chỉnh sửa phần văn bản chữ thủ công qua thẻ HTML trong \`ArticleBody.tsx\`.

## 📌 Khẳng Định Chất Lượng 

Dự án hiện đã hoàn tất quy trình tối ưu, dọn dẹp mã Code (*Clean Architecture*). Không có tệp rác, không có lỗi linter, khả năng đáp ứng trên các thiết bị Mobile / Tablet / Desktop là hoàn hảo (*Responsive Design*). Sẵn sàng phục vụ một cách thẩm mỹ và chuyên nghiệp nhất cho trải nghiệm người dùng cuối.
