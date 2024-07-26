import { DesktopSidebar } from "../_components/DesktopSidebar";

import { AboutSection } from "./_components/AboutSection";
import { ActivitiesSection } from "./_components/ActivitiesSection";
import { ArticleSection } from "./_components/ArticlesSection";
import { ContactSection } from "./_components/ContactSection";
import { SkillsSection } from "./_components/SkillsSection";

export default function IndexPage() {
  return (
    <div className="lg:bg-main" id="top">
      <main className="mx-auto flex lg:container">
        <nav className="sticky top-0 hidden h-screen w-56 border-r bg-white lg:block">
          <DesktopSidebar />
        </nav>
        <div className="grid flex-1 grid-cols-1 gap-4 bg-teal-50 p-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <AboutSection />
            <ActivitiesSection />
          </div>
          <div className="flex flex-col gap-4">
            <ArticleSection />
            <SkillsSection />
            <ContactSection />
          </div>
        </div>
      </main>
    </div>
  );
}
