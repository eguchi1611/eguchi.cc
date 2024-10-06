import { IconBrandX, IconMail } from "@tabler/icons-react";
import { CardBase } from "./card-base";

function ContactCard() {
  return (
    <CardBase title="Contact">
      <ul className="space-y-2">
        <li className="flex">
          <IconMail className="flex-shrink-0" />
          <a className="ml-2" href="mailto:keitaito@keitaito.net">
            keitaito (at) keitaito.net
          </a>
        </li>
        <li className="flex">
          <IconBrandX className="flex-shrink-0" />
          <a className="ml-2" href="https://x.com/keita_ito_" target="_blank" rel="noopener noreferrer">
            @keita_ito_
          </a>
        </li>
      </ul>
    </CardBase>
  );
}

export { ContactCard };
