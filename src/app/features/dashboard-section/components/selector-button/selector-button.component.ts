import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selector-button',
  standalone: true,
  imports: [],
  templateUrl: './selector-button.component.html',
  styleUrl: './selector-button.component.scss'
})
export class SelectorButtonComponent {

  @Input() name : string = ''
  @Input() isSelected : boolean = false

}
