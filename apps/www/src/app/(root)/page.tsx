import { Layout } from "@/layouts/Layout";
import { Aboutme } from "./_components/Aboutme";
import { Hero } from "./_components/Hero";

export default function IndexPage() {
  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <div id="top">
          <Hero />
        </div>
        <div className="container grid gap-4 px-2 sm:grid-cols-4 sm:[grid-auto-rows:theme('height.32')]">
          <div id="aboutme" className="box sm:col-span-2 sm:row-span-2">
            <Aboutme />
          </div>
          <div id="sns" className="box sm:col-span-2">
            sns
          </div>
          <div id="posts" className="box sm:col-span-2 sm:row-span-3">
            posts
          </div>
          <div id="works" className="box sm:col-span-2 sm:row-span-2">
            works
          </div>
          <div id="hobby" className="box sm:col-span-3">
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
