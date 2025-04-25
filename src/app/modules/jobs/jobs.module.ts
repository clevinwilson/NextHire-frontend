import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { JobListingComponent } from './job-listing/job-listing.component';
import { JobRoutingModule } from './job-routing.module';

@NgModule({
    declarations: [JobListingComponent],
    imports: [JobRoutingModule, CommonModule, SharedModule]
})
export class JobsModule {}
