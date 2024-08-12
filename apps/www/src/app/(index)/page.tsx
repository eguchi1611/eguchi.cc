import { Layout } from "@/ui/Layout";

import { AboutSection } from "./_components/AboutSection";
import { ActivitiesSection } from "./_components/ActivitiesSection";
import { ArticleSection } from "./_components/ArticlesSection";
import { ContactSection } from "./_components/ContactSection";
import { SkillsSection } from "./_components/SkillsSection";

export default function IndexPage() {
  return (
    <Layout>
      <main className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
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
    </Layout>
  );
}
