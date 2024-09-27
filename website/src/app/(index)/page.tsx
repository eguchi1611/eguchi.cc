import { ActivitiesCard } from "./_components/cards/activities-card";
import { ArticlesCard } from "./_components/cards/articles-card";
import { ProfileCard } from "./_components/cards/profile-card";

function IndexPage() {
  return (
    <div className="container mx-auto space-y-4 px-2">
      <ProfileCard />
      <ArticlesCard />
      <ActivitiesCard />
    </div>
  );
}

export default IndexPage;
