import { ADDFAV } from "../Types";



export const counterReducer=(state={count:0},action)=>
{
    console.log(state.count);

    switch(action.type)
    {
        case ADDFAV:
            {
                
                return{
                    ...state,
                    count:state.count+1
                }
            }
        default:
            {
                console.log(state.count);
                return state;
                
            }
    }

}