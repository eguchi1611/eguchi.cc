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
    <div className="flex h-full flex-col">
      <h2 className="mb-2 text-center text-xl font-bold text-gray-900">
        <a href="#aboutme" className="block">
          About me
        </a>
      </h2>
      <div className="grid flex-1 items-center gap-4 lg:grid-cols-2">
        <Image
          src={icon.src}
          alt="Keita Ito"
          width={500}
          height={500}
          className="mx-auto h-32 w-32 rounded-full"
        />
        <ul className="grid grid-cols-1 gap-2">
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
    </div>
  );
}
