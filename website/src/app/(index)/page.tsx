import ProfileCard from "./_components/cards/profile-card";

function IndexPage() {
  return (
    <div className="d-flex">
      <div>sidebar</div>
      <div className="container">
        <h1 className="text-primary">Index Page</h1>
        <p>v1.0.9</p>
        <ProfileCard />
      </div>
    </div>
  );
}

export default IndexPage;
