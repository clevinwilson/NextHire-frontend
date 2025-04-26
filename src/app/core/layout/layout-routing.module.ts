import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('../../modules/home/home.module').then((m) => m.HomeModule) },
    {
        path: 'auth',
        loadChildren: () => import('../../modules/auth/auth.module').then((m) => m.AuthModule)
    },
    {
        path: 'jobs',
        loadChildren: () => import('../../modules/jobs/jobs.module').then((m) => m.JobsModule)
    },
    {
        path: 'companies',
        loadChildren: () => import('../../modules/companies/company.module').then((m) => m.CompanyModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
