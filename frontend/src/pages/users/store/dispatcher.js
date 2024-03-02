import Actions from "./actions";

export const verify_paymnets = (id) =>{
    console.log(id)
    return{
        type: Actions.VERIFY_PAYMENT,
        id
    }
}