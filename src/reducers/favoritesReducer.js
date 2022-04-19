import movies from './../data.js';
import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from '../actions/favoritesActions.js';

const initialState = {
    favorites: [
        // {id: 35, title:'jumanji' , director: 'houdini', genre:"fun" , metascore: 35}
    ],
    displayFavorites: true,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        default:
            return state;
    }
}

export default reducer;