import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const SideMenuSlideAnimation = trigger('slideInOut', [
  state(
    'expand',
    style({
      width: '300px',
    })
  ),
  state(
    'collapse',
    style({
      width: '100px',
    })
  ),

  transition('collapse => expand', [animate('200ms ease-in-out')]),
  transition('expand => collapse', [animate('200ms ease-in-out')]),
]);
