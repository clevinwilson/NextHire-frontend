import { Component, input } from '@angular/core';

@Component({
    selector: 'app-solid-button',
    templateUrl: './solid-button.component.html',
    styleUrl: './solid-button.component.css'
})
export class SolidButtonComponent {
    label = input.required<string>();
    color = input<string>('primary');
    type = input<string>('button');
    disabled = input<boolean>(false);
    customClasses = input<string>('');
}
