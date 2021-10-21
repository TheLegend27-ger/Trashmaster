import { trigger, transition, style, query, animateChild, animate, group } from "@angular/animations";

  export const fader =
  trigger('routeAnimations', [
    transition('MainPage<=>Alltips, MainPage<=>Questionnaire, MainPage<=>Quiz, MainPage<=>Data,Quiz<=>Alltips,Quiz<=>Questionnaire, Questionnaire<=>Alltips,MainPage<=>Alltips, Data<=>Quiz, Data<=>Questionnaire, Data<=>Alltips, Data<=>Dataunder, Alltips<=>ATunder', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          //left: 0,
          width: '98.6%',
          opacity: 0,
          transform: 'scale(0.95) translateY(0)',
        }),
      ], { optional: true }),
      // Animate the new page in
      query(':enter', [
        animate('500ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ], { optional: true })
    ]),
]);
