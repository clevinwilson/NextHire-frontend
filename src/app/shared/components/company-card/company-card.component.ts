import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SolidButtonComponent } from '../solid-button/solid-button.component';

@Component({
    selector: 'app-company-card',
    templateUrl: './company-card.component.html',
    styleUrl: './company-card.component.scss',
    standalone: true,
    imports: [CommonModule, RouterModule, SolidButtonComponent]
})
export class CompanyCardComponent {}
