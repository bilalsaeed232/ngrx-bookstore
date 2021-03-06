import { createReducer, on } from "@ngrx/store";
import { addBook, removeBook } from "./books.actions";


export const initialState: ReadonlyArray<string> = [];


export const collectionReducer = createReducer(
    initialState,
    on(addBook, (state, { bookId }) => {
        //check if already exist
        if(state.indexOf(bookId) > -1) {
            return state;
        }

        return [...state, bookId]
    }),
    on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId))
);

