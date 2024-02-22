import Actions from './action'

const defaultState = {
    postPaymentData:null,
    postPaymentDataInprogress:false,
    postPaymentDataSuccess:false,
    postPaymentDataFail:false,
}

const paymentReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case Actions.POST_PAYMENT_DATA:
            return {
                ...state,
                postPaymentDataInprogress:true,
                postPaymentDataSuccess:false,
                postPaymentDataFail:false
            }
        case Actions.POST_PAYMENT_DATA_SUCCESS:
            return {
                ...state,
                postPaymentData: action.details,
                postPaymentDataInprogress:false,
                postPaymentDataSuccess:true,
                postPaymentDataFail:false
            }
        case Actions.POST_PAYMENT_DATA_FAIL:
            return {
                ...state,
                postPaymentDataInprogress:false,
                postPaymentDataSuccess:false,
                postPaymentDataFail:true
            }
        default:
            return {...state}
    }
}

export default paymentReducer