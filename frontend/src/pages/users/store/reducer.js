const defaultState = {
    verifyPaymentData:null,
    verifyPaymentLoading:false,
    verifyPaymentSuccess:false,
    verifyPaymentFail:false
}

const verifyPaymnetReducer = (state = defaultState, action) =>{
   switch(action.type) {
    case "VERIFY_PAYMENT":
        return {
            ...state,
            verifyPaymentLoading:true,
            verifyPaymentSuccess:false,
            verifyPaymentFail: false
        }
    case "VERIFY_PAYMENT_SUCCESS":
        return {
            ...state,
            verifyPaymentData:action.details,
            verifyPaymentLoading:false,
            verifyPaymentSuccess:true,
            verifyPaymentFail: false
        }
    case "VERIFY_PAYMENT_FAIL":
        return {
            ...state,
            verifyPaymentLoading:false,
            verifyPaymentSuccess:false,
            verifyPaymentFail: true
        }
    default:
    return {...state}
   }
}

export default verifyPaymnetReducer