import { Button } from "@nextui-org/react";
import Image from "next/image";
import GitHubLogo from "../_assets/mediakit/github.svg";
import ZennLogo from "../_assets/mediakit/zenn.svg";
import QiitaLogo from "../_assets/mediakit/qiita.svg";
import XLogo from "../_assets/mediakit/x.svg";
import BlueskyLogo from "../_assets/mediakit/bluesky.png";

const items = [
  { label: "GitHub", href: "#", logo: GitHubLogo },
  { label: "Zenn", href: "#", logo: ZennLogo },
  { label: "Qiita", href: "#", logo: QiitaLogo },
  { label: "X", href: "#", logo: XLogo },
  { label: "Bluesky", href: "#", logo: BlueskyLogo },
];

function MediaList() {
  return (
    <div className="flex gap-4">
      {items.map((item) => (
        <Button
          key={item.label}
          variant="bordered"
          className="bg-white px-2"
          startContent={
            <Image alt={item.label} src={item.logo} className="h-6 w-auto" />
          }
          href={item.href}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
}

export default MediaList;
