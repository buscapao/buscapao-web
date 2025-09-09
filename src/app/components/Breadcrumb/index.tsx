'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const breadcrumbNameMap: { [key: string]: string } = {
  Dashboard: 'Dashboard',
  RetailList: 'Lista de varejos',
  NewRetail: 'Novo Varejo',
};

const formatBreadcrumbName = (name: string) => {
  return (
    breadcrumbNameMap[name] ||
    name
      .replace(/([A-Z])/g, ' $1')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase())
  );
};

export default function MainBreadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const formattedName = formatBreadcrumbName(segment);

          return (
            <React.Fragment key={href}>
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{formattedName}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{formattedName}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
