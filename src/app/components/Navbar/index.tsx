'use client';

import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import Image from 'next/image';
import { MobileMenu } from '../Buttons/MobileButton';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white py-2 sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="block">
            <Image src="/logo/logo.png" alt="logo" width={100} height={100} />
          </Link>

          {/* Links de Navegação */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex items-center gap-8">
              <NavigationMenuItem>
                <Link href="#about" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Sobre nós
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#benefits" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Benefícios
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#form" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Seja um parceiro
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Botão de Login */}
        <div className="hidden md:block">
          <Link href="/api/auth/login">
            <Button size="lg">Entrar</Button>
          </Link>
        </div>

        {/* Menu Mobile */}
        <MobileMenu
          items={[
            { label: 'Sobre nós', href: '#about', type: 'link' },
            { label: 'Benefícios', href: '#benefits', type: 'link' },
            { label: 'Seja um parceiro', href: '#form', type: 'link' },
            { label: 'Entrar', href: '/api/auth/login', type: 'button' },
          ]}
        />
      </div>
    </header>
  );
}
