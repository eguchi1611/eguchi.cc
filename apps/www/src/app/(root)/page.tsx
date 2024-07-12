import { Layout } from "@/layouts/Layout";
import { Aboutme } from "./_components/Aboutme";
import { Activities } from "./_components/Activities";
import { Contact } from "./_components/Contact";
import { Environment } from "./_components/Environment";
import { Hero } from "./_components/Hero";
import { Articles } from "./_components/Articles";
import { Skills } from "./_components/Skills";
import { Sns } from "./_components/Sns";
import { Works } from "./_components/Works";

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
          <div id="articles" className="box lg:col-span-2 lg:row-span-4">
            <Articles />
          </div>
          <div id="works" className="box lg:col-span-2 lg:row-span-3">
            <Works />
          </div>
          <div id="skills" className="box lg:col-span-2 lg:row-span-4">
            <Skills />
          </div>
          <div id="activities" className="box lg:col-span-2 lg:row-span-6">
            <Activities />
          </div>
          <div id="environment" className="box lg:col-span-2 lg:row-span-2">
            <Environment />
          </div>
          <div id="contact" className="box lg:col-span-4">
            <Contact />
          </div>
        </div>
      </div>
    </Layout>
  );
}
