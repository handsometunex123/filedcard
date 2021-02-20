import { Card } from './../models/cards.model';
import { Action } from '@ngrx/store';
import * as CardActions from './../actions/cards.action'

const initialState: Card = {
    id: 0,
    name: '',
    cardno: '',
    expiration: '',
    cvv: '',
    amount: 0
}

export function reducer(state: Card = initialState, action: CardActions.Actions){
    switch (action.type) {
        case CardActions.SAVE_CARD:
            return {...state, ...action.payload}
    
        default:
            return state;
    }
}