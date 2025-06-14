import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchCardComponent } from '../../../shared/components/search-card/search-card.component';
import { IconCardComponent } from '../../../shared/components/icon-card/icon-card.component';
import { JobInfoCardComponent } from '../../../shared/components/job-info-card/job-info-card.component';
import { SolidButtonComponent } from '../../../shared/components/solid-button/solid-button.component';

@Component({
    selector: 'app-job-listing',
    templateUrl: './job-listing.component.html',
    styleUrl: './job-listing.component.scss',
    standalone: true,
    imports: [CommonModule, RouterModule, SearchCardComponent, IconCardComponent, JobInfoCardComponent, SolidButtonComponent]
})
export class JobListingComponent {}
