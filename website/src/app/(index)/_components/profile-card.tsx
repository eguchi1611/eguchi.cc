import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import {
  IconCake,
  IconMapPin,
  IconSchool,
  IconSignature,
} from "@tabler/icons-react";
import Image from "next/image";

function ProfileCard() {
  return (
    <Card shadow="sm">
      <CardHeader>
        <h2 className="text-lg font-bold">Profile</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex flex-col items-center justify-evenly gap-4 md:flex-row">
          <Image
            alt="icon"
            src="/icon.png"
            width={500}
            height={500}
            className="h-32 w-auto min-w-fit rounded-full"
          />
          <ul className="space-y-2 self-start md:self-center">
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
                電気通信大学
                <br />
                情報理工学域 I類
                <br />
                メディア情報学プログラム
              </span>
            </li>
          </ul>
        </div>
      </CardBody>
    </Card>
  );
}

export { ProfileCard };
