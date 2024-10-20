import { ArticlesCard } from "./_components/articles-card";
import { ProfileCard } from "./_components/profile-card";

export default function IndexPage() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="contents space-y-0 sm:block sm:space-y-4">
        <div className="order-1 sm:order-none">
          <ProfileCard />
        </div>
      </div>
      <div className="contents space-y-0 sm:block sm:space-y-4">
        <div className="order-2 sm:order-none">
          <ArticlesCard />
        </div>
      </div>
    </div>
  );
}
