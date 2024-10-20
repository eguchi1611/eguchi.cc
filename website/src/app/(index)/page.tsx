import { ActivitiesCard } from "./_components/activities-card";
import { ArticlesCard } from "./_components/articles-card";
import { ContactCard } from "./_components/contact-card";
import { ProfileCard } from "./_components/profile-card";
import { SkillsCard } from "./_components/skills-card";

export default function IndexPage() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="contents space-y-0 sm:block sm:space-y-4">
        <div className="order-1 sm:order-none">
          <ProfileCard />
        </div>
        <div className="order-3 sm:order-none">
          <ActivitiesCard />
        </div>
      </div>
      <div className="contents space-y-0 sm:block sm:space-y-4">
        <div className="order-2 sm:order-none">
          <ArticlesCard />
        </div>
        <div className="order-4 sm:order-none">
          <SkillsCard />
        </div>
        <div className="order-5 sm:order-none">
          <ContactCard />
        </div>
      </div>
    </div>
  );
}
