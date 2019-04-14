import { trigger, animate, transition, state, style } from '@angular/animations';

export const openCloseAnimation =
    trigger('openCloseAnimation', [
        state('open', style({
            overflow: 'hidden',
            height: '*',
            'min-height': '*',
            'max-height': '*',
        })),
        state('closed', style({
            overflow: 'hidden',
            height: '0',
            'min-height': '0',
            'max-height': '0',
            opacity: '0'
        })),
        transition('open => closed', [
            animate('0.3s ease-out')
        ]),
        transition('closed => open', [
            animate('0.3s ease-in')
        ])
    ]);
