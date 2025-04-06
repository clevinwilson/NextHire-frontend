import { Component, input } from '@angular/core';

@Component({
    selector: 'app-outline-button',
    templateUrl: './outline-button.component.html',
    styleUrl: './outline-button.component.scss'
})
export class OutlineButtonComponent {
    label = input.required<string>();
    color = input<string>('primary');
    type = input<string>('button');
    disabled = input<boolean>(false);
    customClasses = input<string>('');
}
