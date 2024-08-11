import { DesktopSidebar } from "../_components/DesktopSidebar";
import { MobileFooter } from "../_components/MobileFooter";
import { MobileHeader } from "../_components/MobileHeader";

import { AboutSection } from "./_components/AboutSection";
import { ActivitiesSection } from "./_components/ActivitiesSection";
import { ArticleSection } from "./_components/ArticlesSection";
import { ContactSection } from "./_components/ContactSection";
import { SkillsSection } from "./_components/SkillsSection";

export default function IndexPage() {
  return (
    <div className="lg:bg-main" id="top">
      <div className="fixed inset-x-0 top-0 z-10 h-16 border-b bg-white lg:hidden">
        <MobileHeader />
      </div>
      <div className="mx-auto flex pt-16 lg:container lg:pt-0">
        <div className="sticky top-0 hidden h-screen w-56 border-r bg-white lg:block">
          <DesktopSidebar />
        </div>
        <main className="grid flex-1 grid-cols-1 gap-4 bg-teal-50 p-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <AboutSection />
            <ActivitiesSection />
          </div>
          <div className="flex flex-col gap-4">
            <ArticleSection />
            <SkillsSection />
            <ContactSection />
          </div>
        </main>
      </div>
      <div className="mx-auto bg-primary-100 px-4 lg:container lg:hidden">
        <MobileFooter />
      </div>
    </div>
  );
}
