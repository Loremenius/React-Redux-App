import {
    FETCH_GUARDIAN_LOADING, 
    FETCH_GUARDIAN_SUCCESS,
    FETCH_GUARDIAN_FAILED
} from "../actions"

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_GUARDIAN_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case FETCH_GUARDIAN_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case FETCH_GUARDIAN_SUCCESS:
            return {
                ...state,
                guardian: action.payload,
                isFetching: false,
                error: null
            }
        default:
            return state;
    }
}

const initialState = {
    guardian: {
        membershipType:'',
        membershipId:'',
        displayName:'',
        clan:{},
        characterIds:[],
        characterData:[]

    },
    error: null,
    isFetching: false
  };