import { ADD_JOKE } from "./action";
import { jokeInitialState } from "./jokeInitialState";

export function jokeReducer(oldState = jokeInitialState, action) {
    switch(action.type) {
        case ADD_JOKE:
            const addJokeList = action.payload;
            console.log(addJokeList);
            return {...oldState, jokes: [...oldState.jokes, addJokeList]};
        default:
            return oldState;
    }
}

