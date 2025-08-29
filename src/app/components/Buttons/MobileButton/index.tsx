import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa6';
import '@/app/style/globals.css';

type MenuItem = {
  label: string;
  href?: string;
  type?: 'link' | 'button' | 'separator';
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'ghost';
};

interface MobileMenuProps {
  items: MenuItem[];
}

export function MobileMenu({ items }: MobileMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-primary hover:bg-primary-hover hover:text-primary-foreground text-primary-foreground md:hidden z-50"
        >
          <FaBars className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        {items.map((item, index) => {
          if (item.type === 'separator') {
            return <DropdownMenuSeparator key={index} />;
          }

          if (item.type === 'button') {
            return (
              <DropdownMenuItem key={index} asChild>
                <Button
                  onClick={item.onClick}
                  variant={item.variant || 'default'}
                  className="w-full bg-primary cursor-pointer hover:bg-primary-hover text-primary-foreground"
                >
                  {item.label}
                </Button>
              </DropdownMenuItem>
            );
          }

          return (
            <DropdownMenuItem key={index} asChild>
              <Link
                href={item.href || '#'}
                className=" hover:bg-blue-100 mb-1 "
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
