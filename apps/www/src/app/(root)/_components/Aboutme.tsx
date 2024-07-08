import Image from "next/image";

import {
  IconCake,
  IconMapPin,
  IconSchool,
  IconSignature,
} from "@tabler/icons-react";
import icon from "../_assets/icon.png";

export function Aboutme() {
  return (
    <div className="grid h-full grid-cols-2 place-items-center">
      <h2 className="col-span-2 text-center text-xl font-bold text-gray-900">
        <a href="#aboutme">About me</a>
      </h2>
      <div>
        <Image
          src={icon.src}
          alt="Keita Ito"
          width={500}
          height={500}
          className="h-32 w-32 rounded-full"
        />
      </div>
      <ul className="flex flex-col gap-2">
        <li className="flex gap-4">
          <IconSignature />
          <div>
            伊藤啓太 (Keita Ito)
            <br />
            えぐち
          </div>
        </li>
        <li className="flex gap-4">
          <IconCake />
          <div>2004年7月9日 (20歳)</div>
        </li>
        <li className="flex gap-4">
          <IconMapPin />
          <div>東京都調布市</div>
        </li>
        <li className="flex gap-4">
          <IconSchool />
          <div>
            電気通信大学 情報理工学域
            <br />
            メディア情報学プログラム
          </div>
        </li>
      </ul>
    </div>
  );
}
