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

const formatBreadcrumbName = (name: string) => {
  return name
    .replace(/([A-Z])/g, ' $1')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export default function MainBreadcrumb() {
  const pathname = usePathname();
  // Divide a URL e exibe cada parte
  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Item inicial, que sempre aponta para o Dashboard. */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/Dashboard">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* Cria um item para cada parte da URL */}
        {pathSegments.map((segment, index) => {
          // Pula o primeiro o primeiro item /Dashboard >>>
          if (index === 0) return null;

          // Monta o link
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          // Verifica se este é o último item
          const isLast = index === pathSegments.length - 1;
          // Formata o nome
          const formattedName = formatBreadcrumbName(segment);

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {/* ultimo item não é link (ja esta na tela)*/}
                {isLast ? (
                  <BreadcrumbPage>{formattedName}</BreadcrumbPage>
                ) : (
                  // cria link para o item se nao for o ultimo
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
