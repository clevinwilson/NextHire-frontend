import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchCardComponent } from '../../../shared/components/search-card/search-card.component';
import { CompanyCardComponent } from '../../../shared/components/company-card/company-card.component';

@Component({
    selector: 'app-companies-listing',
    templateUrl: './companies-listing.component.html',
    styleUrl: './companies-listing.component.scss',
    standalone: true,
    imports: [CommonModule, RouterModule, SearchCardComponent, CompanyCardComponent]
})
export class CompaniesListingComponent {}
