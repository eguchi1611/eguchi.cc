import { Layout } from "@/layouts/Layout";
import { Aboutme } from "./_components/Aboutme";
import { Hero } from "./_components/Hero";
import { Sns } from "./_components/Sns";

export default function IndexPage() {
  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <div id="top">
          <Hero />
        </div>
        <div className="container grid gap-4 px-2 lg:grid-cols-4 lg:[grid-auto-rows:theme('height.32')]">
          <div id="aboutme" className="box lg:col-span-2 lg:row-span-2">
            <Aboutme />
          </div>
          <div id="sns" className="box lg:col-span-2">
            <Sns />
          </div>
          <div id="posts" className="box lg:col-span-2 lg:row-span-3">
            posts
          </div>
          <div id="works" className="box lg:col-span-2 lg:row-span-2">
            works
          </div>
          <div id="hobby" className="box lg:col-span-3">
            hobby
          </div>
          <div id="c" className="box">
            (c)
          </div>
        </div>
      </div>
    </Layout>
  );
}
