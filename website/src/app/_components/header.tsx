import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { IconBrandGithub } from "@tabler/icons-react";
import NextImage from "next/image";
import NextLink from "next/link";

export function Header() {
  return (
    <Navbar maxWidth="xl">
      <NavbarContent as="div" justify="start">
        <NavbarBrand>
          <NextLink href="/">
            <NextImage alt="" src="/logo.svg" width={317} height={39} className="h-6 w-auto min-w-fit" />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <NextLink href="/">Overview</NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href="/works">Works</NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href="/blog">Blog</NextLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            isExternal
            href="https://github.com/eguchi1611"
            isIconOnly
            aria-label="GitHub"
            variant="light"
          >
            <IconBrandGithub />
          </Button>
        </NavbarItem>
        <NavbarMenuToggle className="sm:hidden" />
      </NavbarContent>
      <NavbarMenu>
        {/* TODO: メニューの実装 */}
        <NavbarMenuItem>Hello</NavbarMenuItem>
        <NavbarMenuItem>Hello</NavbarMenuItem>
        <NavbarMenuItem>Hello</NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
