import styles from "./Section.module.css";

import { SectionTitle } from "./SectionTitle";

const skills = {
  special: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
  ],
  lang: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  ],
} as const;

export function SkillsSection() {
  return (
    <div className={styles.section}>
      <SectionTitle href="skills" label="Skills" />
      <div className="flex flex-wrap gap-4">
        {skills.special.map((v) => (
          <div key={v} className="rounded border p-2">
            <img
              src={v}
              alt=""
              width={128}
              height={128}
              className="h-auto w-12"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {skills.lang.map((v) => (
          <div key={v} className="rounded border p-2">
            <img
              src={v}
              alt=""
              width={128}
              height={128}
              className="h-auto w-8"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
