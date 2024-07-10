import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const HideAnimation = trigger('hideAnimation', [
  state(
    'hide',
    style({
      opacity: 0,
      fontSize: '0px',
      display: "none",
    })
  ),
  state(
    'visible',
    style({
      opacity: 1,
    })
  ),
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
  transition('hide => visible', [animate('400ms  ease-in-out')]),
  transition('visible => hide', [animate('200ms  ease-in-out')]),

  transition('collapse => expand', [animate('2000ms ease-in-out')]),
  transition('expand => collapse', [animate('2000ms ease-in-out')]),
]);
