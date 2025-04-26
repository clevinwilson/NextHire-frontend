import { Component, input } from '@angular/core';

@Component({
    selector: 'app-search-card',
    templateUrl: './search-card.component.html',
    styleUrl: './search-card.component.scss'
})
export class SearchCardComponent {
    placeholder = input.required<string>();
}
