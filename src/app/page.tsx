import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleBody from "@/components/ArticleBody";
import TableOfContents from "@/components/TableOfContents";
import BackToTop from "@/components/BackToTop";
import ProgressBar from "@/components/ProgressBar";
import ZenModeToggle from "@/components/ZenModeToggle";
import ShareBar from "@/components/ShareBar";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ProgressBar />
      <Header />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 flex flex-col lg:flex-row gap-10">
        <TableOfContents />
        <article className="flex-1 min-w-0">
          <ArticleBody />
        </article>
      </div>
      <ShareBar />
      <ZenModeToggle />
      <BackToTop />
      <Footer />
    </main>
  );
}
