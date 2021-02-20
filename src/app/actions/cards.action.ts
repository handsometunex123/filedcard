import {Action} from '@ngrx/store'
import {Injectable} from '@angular/core'
import { Card } from '../models/cards.model';
export const SAVE_CARD = '[CARD] Save';

export class SaveCard implements Action {
    readonly type = SAVE_CARD

    constructor(public payload: Card){}
}

export type Actions = SaveCard