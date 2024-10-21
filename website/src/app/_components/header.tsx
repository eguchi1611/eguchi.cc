"use client";

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
import { useCallback, useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <Navbar maxWidth="xl" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} classNames={{ wrapper: "px-4" }}>
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
        <NavbarMenuItem>
          <Link href="/" color="foreground" onPress={handleLinkClick} className="block">
            Overview
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/works" color="foreground" onPress={handleLinkClick} className="block">
            Works
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/blog" color="foreground" onPress={handleLinkClick} className="block">
            Blog
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
