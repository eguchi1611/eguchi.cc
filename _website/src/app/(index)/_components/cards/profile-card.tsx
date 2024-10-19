import { IconCake, IconMapPin, IconSchool, IconSignature } from "@tabler/icons-react";
import Image from "next/image";
import { CardBase } from "./card-base";

function ProfileCard() {
  return (
    <CardBase title="Profile">
      <Image alt="icon" src="/icon.png" width={500} height={500} className="mx-auto h-32 w-auto rounded-full" />
      <ul className="mt-4 space-y-2">
        <li className="flex">
          <IconSignature className="flex-shrink-0" />
          <span className="ml-2">
            伊藤 啓太
            <br />
            Keita Ito
          </span>
        </li>
        <li className="flex">
          <IconCake className="flex-shrink-0" />
          <span className="ml-2">&apos;04 (20)</span>
        </li>
        <li className="flex">
          <IconMapPin className="flex-shrink-0" />
          <span className="ml-2">Tokyo, Japan</span>
        </li>
        <li className="flex">
          <IconSchool className="flex-shrink-0" />
          <span className="ml-2">
            国立大学法人 電気通信大学
            <br />
            情報理工学域 I類 メディア情報学プログラム
          </span>
        </li>
      </ul>
    </CardBase>
  );
}

export { ProfileCard };
