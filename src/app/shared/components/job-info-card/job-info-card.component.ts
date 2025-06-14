import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-job-info-card',
    templateUrl: './job-info-card.component.html',
    styleUrl: './job-info-card.component.scss',
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class JobInfoCardComponent {}
