import { Tutorial } from './models/tutorial.model';
import { reducer } from './reducers/tutorial.reducer';
export interface AppState{
    readonly tutorial: Tutorial[];
}

export const reducers = {
    tutorial: reducer
}