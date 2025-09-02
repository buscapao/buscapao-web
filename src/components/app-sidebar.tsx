'use client';

import * as React from 'react';
import { Circle, Frame, Map, PieChart, User } from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { FaUserCog } from 'react-icons/fa';

// DADOS DO SIDEBAR - MUDAR PARA DADOS REAIS
const data = {
  user: {
    name: 'Leozin do back',
    email: 'leogodoy.gamer2020@email.com',
    avatar: '/avatars/shadcn.jpg',
  },
  //DADOS DO PERFIL - MUDAR PARA DADOS REAIS
  teams: [
    {
      name: 'Leozin do back',
      logo: User,
      plan: 'Admin',
    },
  ],
  //NAVEGAÇÃO PRINCIPAL - MUDAR PARA DADOS REAIS
  navMain: [
    {
      title: 'Inicio',
      url: '#',
      icon: Circle,
      isActive: true,
      items: [
        {
          title: 'Item 1',
          url: '#',
        },
        {
          title: 'Item 2',
          url: '#',
        },
        {
          title: 'Item 3',
          url: '#',
        },
      ],
    },
    // titulo item 2
    {
      title: 'teste',
      url: '#',
      icon: Circle,
      items: [
        {
          title: 'item 4',
          url: '#',
        },
        {
          title: 'item 5',
          url: '#',
        },
        {
          title: 'item 6',
          url: '#',
        },
      ],
    },
    // titulo item 3
    {
      title: 'teste2',
      url: '#',
      icon: Circle,
      items: [
        {
          title: 'teste 7',
          url: '#',
        },
      ],
    },
    {
      title: 'ADMIN',
      url: '#',
      icon: FaUserCog,
      items: [
        {
          title: 'Lista de varejos',
          url: '/Dashboard/RetailList',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
