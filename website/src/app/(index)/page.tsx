import ProfileCard from "./_components/cards/profile-card";

function IndexPage() {
  return (
    <div className="flex">
      <div>sidebar</div>
      <div className="container mx-auto">
        <h1 className="text-teal-500">Index Page</h1>
        <p>v1.0.9</p>
        <ProfileCard />
      </div>
    </div>
  );
}

export default IndexPage;
