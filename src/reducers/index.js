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
    classData: {
        "3655393761": {
            "classType": 0,
            "displayProperties": {
                "name": "Titan",
                "hasIcon": false
            },
            "genderedClassNames": {
                "Male": "Titan",
                "Female": "Titan"
            },
            "genderedClassNamesByGenderHash": {
                "3111576190": "Titan",
                "2204441813": "Titan"
            },
            "hash": 3655393761,
            "index": 0,
            "redacted": false,
            "blacklisted": false
        },
        "671679327": {
            "classType": 1,
            "displayProperties": {
                "name": "Hunter",
                "hasIcon": false
            },
            "genderedClassNames": {
                "Male": "Hunter",
                "Female": "Hunter"
            },
            "genderedClassNamesByGenderHash": {
                "3111576190": "Hunter",
                "2204441813": "Hunter"
            },
            "hash": 671679327,
            "index": 1,
            "redacted": false,
            "blacklisted": false
        },
        "2271682572": {
            "classType": 2,
            "displayProperties": {
                "name": "Warlock",
                "hasIcon": false
            },
            "genderedClassNames": {
                "Male": "Warlock",
                "Female": "Warlock"
            },
            "genderedClassNamesByGenderHash": {
                "3111576190": "Warlock",
                "2204441813": "Warlock"
            },
            "hash": 2271682572,
            "index": 2,
            "redacted": false,
            "blacklisted": false
        }
    },
    raceData: {
        "3887404748": {
            "displayProperties": {
                "description": "Human",
                "name": "Human",
                "hasIcon": false
            },
            "raceType": 0,
            "genderedRaceNames": {
                "Male": "Human Male",
                "Female": "Human Female"
            },
            "genderedRaceNamesByGenderHash": {
                "3111576190": "Human Male",
                "2204441813": "Human Female"
            },
            "hash": 3887404748,
            "index": 0,
            "redacted": false,
            "blacklisted": false
        },
        "2803282938": {
            "displayProperties": {
                "description": "The Awoken survived the Collapse in deep space. But they were forever changed.",
                "name": "Awoken",
                "hasIcon": false
            },
            "raceType": 1,
            "genderedRaceNames": {
                "Male": "Awoken Male",
                "Female": "Awoken Female"
            },
            "genderedRaceNamesByGenderHash": {
                "3111576190": "Awoken Male",
                "2204441813": "Awoken Female"
            },
            "hash": 2803282938,
            "index": 1,
            "redacted": false,
            "blacklisted": false
        },
        "898834093": {
            "displayProperties": {
                "description": "Self-aware machines built for a long-forgotten war.",
                "name": "Exo",
                "hasIcon": false
            },
            "raceType": 2,
            "genderedRaceNames": {
                "Male": "Exo Male",
                "Female": "Exo Female"
            },
            "genderedRaceNamesByGenderHash": {
                "3111576190": "Exo Male",
                "2204441813": "Exo Female"
            },
            "hash": 898834093,
            "index": 2,
            "redacted": false,
            "blacklisted": false
        }
    },
    error: null,
    isFetching: false
  };