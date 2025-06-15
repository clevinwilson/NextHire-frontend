import { Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { JobListingComponent } from './modules/jobs/job-listing/job-listing.component';
import { CompaniesListingComponent } from './modules/companies/companies-listing/companies-listing.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { AuthRedirectGuard } from './core/auth/auth-redirect.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'jobs',
        component: JobListingComponent
    },
    {
        path: 'companies',
        component: CompaniesListingComponent
    },
    {
        path: 'auth',
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent }
        ],
        canActivate: [AuthRedirectGuard]
    }
];
