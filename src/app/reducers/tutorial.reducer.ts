import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.action';

const initialState: Tutorial = {
    name: 'xyz',
    url: 'https://www.udemy.com/'
}

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.index, 1);
            return state;
        default:
            return state;
    }
}