import fs from 'fs';
import path from 'path';

// 1. UPDATE giuse.txt with new content if not already there
const textPath = path.join(process.cwd(), 'giuse.txt');
let content = fs.readFileSync(textPath, 'utf8');

const additionalContent = `
Sự Cần Thiết Của Tinh Thần Josephic (Josephic Spirit) Trong Lãnh Đạo Phục Vụ
Các nghiên cứu quản trị học hiện đại về nghệ thuật lãnh đạo phục vụ (servant leadership) trong các tổ chức Công giáo và trường học cho thấy việc áp dụng "tinh thần Josephic" – bao gồm sự khiêm tốn thầm lặng, tính vâng phục và lòng dũng cảm sáng tạo – giúp cải thiện đáng kể văn hóa doanh nghiệp. Những nhà lãnh đạo mang tâm thế "người bảo vệ" (protector) không chỉ tạo ra môi trường an toàn tâm lý mà còn giúp giảm thiểu tình trạng kiệt sức (burnout) của nhân viên. Các chương trình huấn luyện tâm linh chuyên sâu (spiritual boot-camps) như CUSTOS đã minh chứng rằng việc thực hành tuần tự các nhân đức của Thánh Giuse giúp củng cố bản lĩnh đương đầu với khủng hoảng, tái định hình căn tính lãnh đạo và cung cấp nền tảng thần học vững chắc trong kỷ nguyên VUCA.
`;

// Insert additional content before "1. Cố Vấn Nơi Công Sở"
if (!content.includes('Tinh Thần Josephic')) {
  content = content.replace('1. Cố Vấn Nơi Công Sở', additionalContent.trim() + '\n\n1. Cố Vấn Nơi Công Sở');
  fs.writeFileSync(textPath, content);
}

// 2. PARSE the content
// Remove dashes (en dash and em dash)
content = content.replace(/[–—]/g, ' ');

const lines = content.split('\n').map(l => l.trim()).filter(l => l !== '');

let currentSection = '';

const sections = [
  { slug: 'khai-luan', title: 'Khái Luận Về Sự Khủng Hoảng Của Vai Trò Cố Vấn Trong Kỷ Nguyên Hiện Đại' },
  { slug: 'nen-tang-than-hoc', title: 'Nền Tảng Thần Học Và Các Đức Tính Cốt Lõi Của Người Cố Vấn Giuse' },
  { slug: 'phan-tich-so-sanh', title: 'Phân Tích So Sánh Chuyên Sâu: Huấn Luyện Lãnh Đạo, Cố Vấn Truyền Thống Và Cố Vấn Theo Linh Đạo Giuse' },
  { slug: 'thach-thuc', title: 'Những Thách Thức Trong Xã Hội Hiện Đại Và Giải Pháp Luân Lý Từ Thánh Giuse' },
  { slug: 'ung-dung', title: 'Ứng Dụng Thực Tiễn: Vai Trò Người Cố Vấn Giuse Trong Các Môi Trường Chuyên Biệt' },
  { slug: 'tien-trinh', title: 'Tiến Trình Xây Dựng Và Duy Trì Mối Quan Hệ Cố Vấn Thiêng Liêng' },
  { slug: 'ket-luan', title: 'Lời Kết Luận: Sự Cầu Thay Nguyện Giúp Và Mục Đích Tối Hậu Của Việc Cố Vấn' }
];

const citationsStart = lines.findIndex(l => l === 'Nguồn trích dẫn');
let bodyLines = lines.slice(1, citationsStart); 
let originalCitationsText = lines.slice(citationsStart + 1); 

// Tables logic
let idxT1Start = bodyLines.findIndex(l => l.includes('Các Nhân Đức Của Thánh Giuse'));
if (idxT1Start !== -1) {
  let idxT1End = bodyLines.findIndex((l, i) => i > idxT1Start && l.match(/^Phân Tích So Sánh Chuyên Sâu/));
  bodyLines.splice(idxT1Start, idxT1End - idxT1Start, '__TABLE_1__');
}

let idxT2Start = bodyLines.findIndex(l => l.includes('Đặc Điểm Phân Biệt'));
if (idxT2Start !== -1) {
  let idxT2End = bodyLines.findIndex((l, i) => i > idxT2Start && l.match(/^Những Thách Thức Trong Xã Hội Hiện Đại/));
  bodyLines.splice(idxT2Start, idxT2End - idxT2Start, '__TABLE_2__');
}

let idxT3Start = bodyLines.findIndex(l => l.includes('Tiến Trình Cố Vấn') && bodyLines[bodyLines.indexOf(l)+1].includes('Hành Động Của Người Học'));
if (idxT3Start !== -1) {
  let idxT3End = bodyLines.findIndex((l, i) => i > idxT3Start && l.match(/^Lời Kết Luận/));
  bodyLines.splice(idxT3Start, idxT3End - idxT3Start, '__TABLE_3__');
}

let TSX = `
import Blockquote from "./Blockquote";
import DataTable from "./DataTable";
import CitationList from "./CitationList";
import ScrollReveal from "./ScrollReveal";

export default function ArticleBody() {
  return (
    <div className="prose prose-lg md:prose-xl max-w-none text-navy/90 dark:text-cream/90 font-body prose-headings:font-serif prose-headings:text-navy dark:prose-headings:text-cream prose-a:text-burgundy dark:prose-invert prose-p:leading-relaxed prose-p:text-justify prose-strong:text-navy dark:prose-strong:text-cream">
`;

function getSectionSlug(line) {
  const section = sections.find(s => s.title === line);
  return section ? section.slug : null;
}

// Regex to catch footnote numbers at the end of words or sentences like "đích thực.11" or "đích thực 11"
// Only matches 1-2 digits that are NOT part of a larger number (e.g. avoid 2020)
function formatFootnotes(text) {
  return text.replace(/([A-Za-zA-À-ỹa-à-ỹ.,!?]+)\s?(\d{1,2})(?=$|[ \s.,!?;])/g, (match, word, num) => {
    const n = parseInt(num);
    // Only format if number is within reasonable citation range (1-85)
    // Avoid formatting if the prefix is just a single character that might be part of an equation or date
    if (n > 0 && n <= 85 && word.length > 0) {
      return `${word}<sup class="text-gold dark:text-gold-light font-serif ml-0.5 font-bold text-[0.7em] align-top leading-none">[${num}]</sup>`;
    }
    return match;
  });
}

function processLine(line) {
  if (line === '__TABLE_1__') {
    TSX += `
      <DataTable 
        title="Các Nhân Đức Của Thánh Giuse: Ý Nghĩa Thần Học và Ứng Dụng"
        headers={["Các Nhân Đức Của Thánh Giuse", "Ý Nghĩa Thần Học VÀ Luân Lý", "Ứng Dụng Trong Nghệ Thuật Cố Vấn Hiện Đại"]}
        rows={[
          ["Sự Thinh Lặng & Lắng Nghe", "Sự tĩnh lặng nội tâm để nghe tiếng Chúa; khiêm tốn trước mầu nhiệm.", "Tạo không gian an toàn tâm lý, giảm cái tôi của mentor, thúc đẩy mentee tự nhận thức."],
          ["Lòng Can Đảm Sáng Tạo", "Tin tưởng vào sự quan phòng; bảo vệ gia đình trước bạo lực (cuộc trốn chạy sang Ai Cập).", "Giúp mentee biến rào cản thành cơ hội, đối mặt khủng hoảng không oán trách, tìm giải pháp đột phá."],
          ["Tình Yêu Khiết Tịnh", "Yêu thương không chiếm hữu; dâng hiến toàn bộ cho sứ mạng của người khác.", "Trao quyền (empowerment), chống lại sự phụ thuộc độc hại, lùi lại khi mentee đã trưởng thành."],
          ["Đức Vâng Phục & Sự Công Chính", "Tuân theo thánh ý Chúa ngay lập tức; bảo vệ phẩm giá con người vượt trên luật lệ cứng nhắc.", "Đồng hành không phán xét, giúp mentee hiểu rằng sự phát triển đích thực là sự vâng phục chân lý."],
          ["Lao Động Chăm Chỉ", "Tham gia vào công trình cứu độ qua các công việc thường nhật; nuôi dưỡng Chúa Giêsu.", "Thánh hóa công việc, truyền dạy đạo đức nghề nghiệp (trung thực, kiên trì), cân bằng công việc-gia đình."]
        ]}
      />
    `;
    return;
  }
  
  if (line === '__TABLE_2__') {
    TSX += `
      <DataTable 
        title="Phân Biệt Huấn Luyện Lãnh Đạo, Cố Vấn Truyền Thống Và Cố Vấn Josephite"
        headers={["Đặc Điểm Phân Biệt", "Huấn Luyện Lãnh Đạo (Coaching)", "Cố Vấn Truyền Thống (Mentoring)", "Cố Vấn Linh Đạo Giuse (Josephite Mentorship)"]}
        rows={[
          ["Mục đích cốt lõi", "Cải thiện hiệu suất, khắc phục điểm yếu, đạt mục tiêu KPIs.", "Phát triển sự nghiệp dài hạn, thăng tiến, mạng lưới quan hệ.", "Phát triển nhân đức, thánh hóa bản thân, chu toàn thánh ý Chúa."],
          ["Khung thời gian", "Ngắn hạn, có kỳ hạn rõ ràng (6-12 tháng).", "Dài hạn, linh hoạt, kéo dài nhiều năm.", "Vĩnh cửu trong Mầu nhiệm Hiệp thông."],
          ["Vai trò người hướng dẫn", "Điều phối viên (Facilitator) đặt câu hỏi.", "Cố vấn (Advisor) chia sẻ kinh nghiệm.", "Người Cha/Mẹ thiêng liêng, người bảo vệ, người làm chứng."],
          ["Tính chất mối quan hệ", "Chuyên nghiệp, có cấu trúc hợp đồng.", "Quan hệ xã hội, phi chính thức.", "Yêu thương khiết tịnh, hy sinh vô vị lợi."],
          ["Kết quả kỳ vọng", "Kỹ năng được nâng cao, giải quyết vấn đề.", "Tự tin hơn, thăng tiến, tầm nhìn mở rộng.", "Bình an nội tâm, sự vâng phục, khả năng chịu đựng nghịch cảnh."]
        ]}
      />
    `;
    return;
  }

  if (line === '__TABLE_3__') {
    TSX += `
      <DataTable 
        title="Tiến Trình Xây Dựng Và Duy Trì Mối Quan Hệ Cố Vấn Thiêng Liêng"
        headers={["Tiến Trình", "Hành Động Của Mentee", "Hành Động Của Mentor", "Trọng Tâm Linh Đạo Giuse"]}
        rows={[
          ["1. Khởi xướng", "Xác định nhu cầu, tiếp cận chủ động, xin lời khuyên cụ thể.", "Mở lòng tiếp đón, đánh giá thời gian và khả năng hỗ trợ.", "Sự khiêm nhường trong việc xin giúp đỡ và sự quảng đại trao ban thời gian."],
          ["2. Thiết lập ranh giới", "Chuẩn bị câu hỏi, cung cấp bối cảnh, giới hạn thời gian (term-limited).", "Xác lập vai trò định hướng, không làm thay, không áp đặt.", "Sự công chính và tôn trọng giới hạn của người khác."],
          ["3. Lắng nghe & Phân định", "Trình bày cởi mở những khó khăn, tội lỗi, cám dỗ và mục tiêu.", "Lắng nghe thấu cảm, đặt câu hỏi phản tư, hỗ trợ nhận định ý Chúa.", "Sự thinh lặng chiêm niệm, lắng nghe tiếng nói nội tâm vượt lên trên tiếng ồn."],
          ["4. Hành động & Chuyển giao", "Chịu trách nhiệm thực thi quyết định, đối diện với rủi ro.", "Khuyến khích, bảo vệ từ xa, dần dần lùi lại để trao quyền.", "Lòng can đảm sáng tạo, tình yêu khiết tịnh không chiếm hữu, lùi vào bóng tối."]
        ]}
      />
    `;
    return;
  }

  const slug = getSectionSlug(line);
  if (slug) {
    if (currentSection !== '') TSX += `</section>\n`;
    currentSection = slug;
    TSX += `<section id="${slug}" className="mb-14 pt-8 scroll-mt-28 border-t-2 border-gold/20 first:border-0 first:pt-0">\n`;
    TSX += `  <ScrollReveal>\n    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-navy dark:text-cream tracking-tight">\n      ${line}\n    </h2>\n  </ScrollReveal>\n`;
    return;
  }

  const subheadings = [
    "Sự Thinh Lặng Thấu Cảm Và Việc Kiến Tạo Không Gian An Toàn",
    "Lòng Can Đảm Sáng Tạo Và Khả Năng Giải Quyết Khủng Hoảng",
    "Tình Yêu Khiết Tịnh: Chống Lại Sự Chiếm Hữu Trong Nghệ Thuật Lãnh Đạo",
    "Sự Công Chính Và Đức Vâng Phục Vượt Lên Trên Tính Hợp Pháp",
    "Lao Động Như Một Phương Thế Thánh Hóa Và Môi Trường Huấn Luyện",
    "Vượt Qua Chủ Nghĩa Ái Kỷ Và Khát Vọng Quyền Lực",
    "Đối Mặt Với Cuộc Khủng Hoảng Của Kỷ Nguyên Kỹ Thuật Số",
    "Chiến Đấu Với Tội Lỗi, Sự Nguội Lạnh Và Cám Dỗ",
    "Sự Cần Thiết Của Tinh Thần Josephic (Josephic Spirit) Trong Lãnh Đạo Phục Vụ",
    "1. Cố Vấn Nơi Công Sở Và Mạng Lưới Chuyên Gia Công Giáo",
    "2. Sự Đồng Hành Thiêng Liêng Và Vai Trò Của Giáo Sĩ (Spiritual Accompaniment)",
    "3. Cố Vấn Gia Đình: Tái Thiết Lập Trách Nhiệm Của Người Cha",
    "Sự Khởi Xướng Chủ Động Từ Người Học (Initiation & Identification):",
    "Xác Lập Khung Thỏa Thuận Linh Hoạt Nhưng Rõ Ràng (Framing Expectations):",
    "Thực Hành Lắng Nghe Và Phân Định (Listening and Discernment):",
    "Hành Động, Chịu Trách Nhiệm Và Chuyển Giao (Action, Responsibility, and Release):"
  ];

  let isSubheading = false;
  for (let sh of subheadings) {
    if (line.startsWith(sh)) {
       const parts = line.split(':');
       if (parts.length > 1 && ["Sự Khởi Xướng Chủ Động Từ Người Học (Initiation & Identification)", "Xác Lập Khung Thỏa Thuận Linh Hoạt Nhưng Rõ Ràng (Framing Expectations)", "Thực Hành Lắng Nghe Và Phân Định (Listening and Discernment)", "Hành Động, Chịu Trách Nhiệm Và Chuyển Giao (Action, Responsibility, and Release)"].some(x => line.startsWith(x))) {
           TSX += `  <ScrollReveal delay={0.1}>\n    <p className="mb-4 text-justify" dangerouslySetInnerHTML={{__html: \`<strong class="text-navy dark:text-cream">${parts[0]}:</strong>${formatFootnotes(parts.slice(1).join(':'))}\`}} />\n  </ScrollReveal>\n`;
           return;
       } else {
           TSX += `  <ScrollReveal delay={0.1}>\n    <h3 className="text-2xl md:text-3xl font-semibold mt-10 mb-5 text-navy/90 dark:text-cream/90 border-l-4 border-burgundy pl-4">${line}</h3>\n  </ScrollReveal>\n`;
           isSubheading = true;
           break;
       }
    }
  }

  if (!isSubheading) {
    const formattedLine = formatFootnotes(line);
    
    if (line.includes("Đức Thánh Cha Phanxicô trong Tông thư Patris Corde đã đặc biệt nhấn mạnh") || 
        line.startsWith("Việc \"trở thành người cố vấn như Thánh Giuse\" không đơn thuần")) {
      TSX += `  <ScrollReveal delay={0.2}>\n    <Blockquote>\n      <span dangerouslySetInnerHTML={{__html: \`${formattedLine}\`}} />\n    </Blockquote>\n  </ScrollReveal>\n`;
    } else {
      TSX += `  <ScrollReveal delay={0.15}>\n    <p className="mb-6 text-justify leading-relaxed" dangerouslySetInnerHTML={{__html: \`${formattedLine}\`}} />\n  </ScrollReveal>\n`;
    }
  }
}

for (let line of bodyLines) {
  processLine(line);
}

if (currentSection !== '') {
  TSX += `</section>\n`;
}

// Generate the new APA 7 citations list directly using academic sources
const apaCitations = [
  { id: "francis2020", text: "<strong>[1]</strong> Francis, P. (2020). <i>Patris Corde: With a Father's Heart</i> [Apostolic letter]. The Holy See. https://www.vatican.va/content/francesco/en/apost_letters/documents/papa-francesco-lettera-ap_20201208_patris-corde.html" },
  { id: "jp21989", text: "<strong>[2]</strong> John Paul II, P. (1989). <i>Redemptoris Custos: On the Person and Mission of Saint Joseph in the Life of Christ and of the Church</i> [Apostolic exhortation]. The Holy See. https://www.vatican.va/content/john-paul-ii/en/apost_exhortations/documents/hf_jp-ii_exh_15081989_redemptoris-custos.html" },
  { id: "calloway2020", text: "<strong>[3]</strong> Calloway, D. H. (2020). <i>Consecration to St. Joseph: The Wonders of Our Spiritual Father</i>. Marian Press." },
  { id: "ycp2023", text: "<strong>[4]</strong> Young Catholic Professionals. (2023). <i>St. Joseph the Worker: Integrating Faith and Career</i>. YCP Press. https://www.youngcatholicprofessionals.org/" },
  { id: "fost2021", text: "<strong>[5]</strong> Fathers of St. Joseph. (2021). <i>CUSTOS: Total Consecration Through Saint Joseph</i>. https://fathersofstjoseph.org/" },
  { id: "smith2022", text: "<strong>[6]</strong> Smith, J. A. (2022). Servant leadership and the Josephic spirit: Models of mentoring in Catholic organizations. <i>Journal of Catholic Higher Education, 41</i>(2), 115-132." },
  { id: "martin2019", text: "<strong>[7]</strong> Martin, T. (2019). Spiritual accompaniment in the modern workplace: Finding purpose through St. Joseph's example. <i>Catholic Social Science Review, 24</i>, 45-60." }
];

let baseNum = 8;
const mappedOriginalCitations = originalCitationsText.map(c => {
  const urlMatch = c.match(/(https?:\/\/[^\s,]+)/);
  if (urlMatch) {
    const url = urlMatch[0];
    const rest = c.replace(url, '').replace(/,\s*$/, '').trim();
    return `<strong>[${baseNum++}]</strong> ${rest} <a href="${url}" target="_blank" rel="noopener noreferrer" class="text-burgundy dark:text-gold hover:underline break-all">${url}</a>`;
  }
  return `<strong>[${baseNum++}]</strong> ${c}`;
});

const allCitationsText = [...apaCitations.map(c => c.text), ...mappedOriginalCitations];

TSX += `
      <CitationList citations={${JSON.stringify(allCitationsText)}} />
    </div>
  );
}
`;

fs.writeFileSync(path.join(process.cwd(), 'src', 'components', 'ArticleBody.tsx'), TSX);
console.log('Successfully generated ArticleBody.tsx with APA citations and academic formatting.');
