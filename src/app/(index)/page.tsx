import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function IndexPage() {
  return (
    <div className="sm:pr-32">
      <div className="fixed left-0 right-0 top-0 sm:bottom-0 sm:left-auto">
        <Header />
      </div>
      <Hero />
      <p className="text-red-500">Hello World</p>
      <p>Hello</p>
    </div>
  );
}
