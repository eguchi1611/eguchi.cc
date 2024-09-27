import { ActivitiesCard } from "./_components/cards/activities-card";
import { ArticlesCard } from "./_components/cards/articles-card";
import { ContactCard } from "./_components/cards/contact-card";
import { ProfileCard } from "./_components/cards/profile-card";
import { SkillsCard } from "./_components/cards/skills-card";

function IndexPage() {
  return (
    <>
      <div className="container mx-auto space-y-4 px-2 pt-4">
        <ProfileCard />
        <ArticlesCard />
        <ActivitiesCard />
        <SkillsCard />
        <ContactCard />
      </div>
      <div className="mt-4 bg-teal-100 py-8 text-center">(c) 2021 Keita Ito</div>
    </>
  );
}

export default IndexPage;
