import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesListingComponent } from './companies-listing/companies-listing.component';
import { CompanyRoutingRoutingModule } from './company-routing-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [CompaniesListingComponent],
    imports: [CommonModule, CompanyRoutingRoutingModule, SharedModule]
})
export class CompanyModule {}
