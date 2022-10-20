import { ADDFAV, INC } from "../Types";


export const favReducer=(state={fav:[]},action)=>
{
    switch(action.type)
    {
        
        case ADDFAV:
            console.log("add favourite");
            return{
                ...state,
                fav:[...state.fav,action.payload]
            }
        case INC:
            return{
                ...state,
                fav:[...action.payload]
            }
        
        default: return state;
    }
}