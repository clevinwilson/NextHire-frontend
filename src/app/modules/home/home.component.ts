import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IconCardComponent } from '../../shared/components/icon-card/icon-card.component';
import { JobInfoCardComponent } from '../../shared/components/job-info-card/job-info-card.component';
import { SolidButtonComponent } from '../../shared/components/solid-button/solid-button.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: true,
    imports: [CommonModule, RouterModule, IconCardComponent, JobInfoCardComponent, SolidButtonComponent]
})
export class HomeComponent {}
