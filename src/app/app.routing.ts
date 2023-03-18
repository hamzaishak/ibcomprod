import { Routes } from '@angular/router';

// @ts-ignore
import { FullComponent } from './layouts/full/full.component';

// @ts-ignore

export let AppRoutes: Routes;
AppRoutes = [
    {
        path: '',
        component: FullComponent,
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                'path': '',
                'loadChildren':// @ts-ignore
                    () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
            },
            {
                'path': 'dashboard',// @ts-ignore
                'loadChildren': () => {
                    // @ts-ignore
                    // @ts-ignore
                    return import('./dashboard/dashboard.module').then(m => m.DashboardModule);
                }
            }
        ]
    }
];
