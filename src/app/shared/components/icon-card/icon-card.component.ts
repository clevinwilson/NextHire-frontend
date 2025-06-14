import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-icon-card',
    templateUrl: './icon-card.component.html',
    styleUrl: './icon-card.component.scss',
    standalone: true,
    imports: [CommonModule]
})
export class IconCardComponent {
    customClasses = input<string>('bg-white');
}
