import { ADDFAV, INC } from "../Types"


export const addFav=(data)=>
{
    return{
        type:ADDFAV,
        payload:data
    }
}

export const addInc=(data)=>
{
    return{
        type:INC,
        payload:data
    }
}