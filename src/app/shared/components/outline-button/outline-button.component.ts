import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-outline-button',
    templateUrl: './outline-button.component.html',
    styleUrl: './outline-button.component.scss',
    standalone: true,
    imports: [CommonModule]
})
export class OutlineButtonComponent {
    label = input.required<string>();
    color = input<string>('primary');
    type = input<string>('button');
    disabled = input<boolean>(false);
    customClasses = input<string>('');
}
