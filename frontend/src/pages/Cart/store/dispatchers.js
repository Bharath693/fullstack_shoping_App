import Actions from './action';


export const postPaymentData = (data) =>{
    return {
        type:Actions.POST_PAYMENT_DATA,
        data
    }
}