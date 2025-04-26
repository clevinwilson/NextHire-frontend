import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesListingComponent } from './companies-listing/companies-listing.component';

const routes: Routes = [{ path: '', component: CompaniesListingComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyRoutingRoutingModule {}
