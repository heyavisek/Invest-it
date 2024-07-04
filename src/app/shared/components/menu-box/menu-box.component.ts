import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-menu-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-box.component.html',
  styleUrl: './menu-box.component.scss'
})
export class MenuBoxComponent {
  @Input() image? : string = ''
  @Input() name : string = ''
  @Input() isSidebarExpanded : boolean= false
  @Input() isExpanded? : boolean = false
  @Input() hasList? : boolean = false

  currentColor : string = 'bg-red-300'

}
