import { Component, input } from '@angular/core';

@Component({
    selector: 'app-icon-card',
    templateUrl: './icon-card.component.html',
    styleUrl: './icon-card.component.scss'
})
export class IconCardComponent {
    customClasses = input<string>('bg-white');
}
