import { trigger, transition, style, query, animateChild, animate, group } from "@angular/animations";

/*
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> HomePage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ])
  ]);*/
  export const fader =
  trigger('routeAnimations', [
    transition('MainPage<=>Alltips, MainPage<=>Questionnaire, MainPage<=>Quiz, MainPage<=>Data,Quiz<=>Alltips,Quiz<=>Questionnaire, Questionnaire<=>Alltips,MainPage<=>Alltips, Data<=>Quiz, Data<=>Questionnaire, Data<=>Alltips, Data<=>Dataunder, Alltips<=>ATunder', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ], { optional: true }),
      // Animate the new page in
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ], { optional: true })
    ]),
]);
