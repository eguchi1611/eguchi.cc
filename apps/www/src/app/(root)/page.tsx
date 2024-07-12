import { Layout } from "@/layouts/Layout";
import { Aboutme } from "./_components/Aboutme";
import { Hero } from "./_components/Hero";
import { Sns } from "./_components/Sns";
import { Posts } from "./_components/Posts";
import { Works } from "./_components/Works";
import { Skills } from "./_components/Skills";

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
          <div id="posts" className="box lg:col-span-2 lg:row-span-4">
            <Posts />
          </div>
          <div id="works" className="box lg:col-span-2 lg:row-span-3">
            <Works />
          </div>
          <div id="skills" className="box lg:col-span-2 lg:row-span-4">
            <Skills />
          </div>
          <div id="activities" className="box lg:col-span-2 lg:row-span-6">
            activities
          </div>
          <div id="env" className="box lg:col-span-2 lg:row-span-2">
            env
          </div>
          <div id="contact" className="box lg:col-span-4">
            contact
          </div>
        </div>
      </div>
    </Layout>
  );
}
