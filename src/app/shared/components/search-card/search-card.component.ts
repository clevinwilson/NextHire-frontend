import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SolidButtonComponent } from '../solid-button/solid-button.component';

@Component({
    selector: 'app-search-card',
    templateUrl: './search-card.component.html',
    styleUrl: './search-card.component.scss',
    standalone: true,
    imports: [CommonModule, FormsModule, SolidButtonComponent]
})
export class SearchCardComponent {
    placeholder = input.required<string>();
}
