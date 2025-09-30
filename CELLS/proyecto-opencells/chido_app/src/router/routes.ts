import { RouteDefinition } from '@open-cells/core/types'; 

export const routes: RouteDefinition[] = [
  {
    path: '/',
    name: 'home',
    component: 'home-page',
    action: async () => {
      await import('../pages/home/home-page.js');
    },
  },
  {
    path: '/second',
    name: 'second',
    component: 'second-page',
    action: async () => {
      await import('../pages/second/second-page.js');
    },
  },
  {
    path: '/contador',
    name: 'contador',
    component: 'contador-page',
    action: async () => {
      await import('../pages/contador/contador-page.js');
    },
  },
  /* {
    path: '/nav',
    name: 'nav',
    component: 'nav-page',
    action: async () => {
      await import('../pages/nav/nav-page.js');
    },
  }, */
];
