import Image from "next/image";

import blueskyIcon from "../_assets/bluesky.svg";
import githubIcon from "../_assets/github.svg";
import qiitaIcon from "../_assets/qiita.svg";
import twitterIcon from "../_assets/twitter.svg";
import zennIcon from "../_assets/zenn.svg";

const items = [
  {
    label: "Twitter",
    href: "https://twitter.com/keita_ito_",
    icon: (
      <Image
        src={twitterIcon.src}
        alt="zenn"
        width={1200}
        height={1227}
        className="h-6 w-auto"
      />
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/eguchi1611",
    icon: (
      <Image
        src={githubIcon.src}
        alt="qiita"
        width={98}
        height={96}
        className="h-auto w-6"
      />
    ),
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/eguchi.cc",
    icon: (
      <Image
        src={blueskyIcon.src}
        alt="bluesky"
        width={24}
        height={24}
        className="h-6 w-6"
      />
    ),
  },
  {
    label: "Zenn",
    href: "https://zenn.dev/kk79it",
    icon: (
      <Image
        src={zennIcon.src}
        alt="zenn"
        width={88.3}
        height={88.3}
        className="h-6 w-6"
      />
    ),
  },
  {
    label: "Qiita",
    href: "https://qiita.com/eguchi1611",
    icon: (
      <Image
        src={qiitaIcon.src}
        alt="qiita"
        width={105.83}
        height={105.83}
        className="h-6 w-6"
      />
    ),
  },
];

export function Sns() {
  return (
    <div className="grid h-full auto-cols-fr grid-flow-col place-items-center">
      {items.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full w-full flex-col items-center justify-center"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white">
            {icon}
          </div>
          <div className="mt-1 font-mono">{label}</div>
        </a>
      ))}
    </div>
  );
}
