import { ActivitiesCard } from "./_components/cards/activities-card";
import { ArticlesCard } from "./_components/cards/articles-card";
import { ContactCard } from "./_components/cards/contact-card";
import { ProfileCard } from "./_components/cards/profile-card";
import { SkillsCard } from "./_components/cards/skills-card";

function IndexPage() {
  return (
    <div className="space-y-4">
      <ProfileCard />
      <ArticlesCard />
      <ActivitiesCard />
      <SkillsCard />
      <ContactCard />
    </div>
  );
}

export default IndexPage;
