import axios from "axios";
export const FETCH_GUARDIAN_LOADING = "FETCH_GUARDIAN_LOADING";
export const FETCH_GUARDIAN_SUCCESS = "FETCH_GUARDIAN_SUCCESS";
export const FETCH_GUARDIAN_FAILED = "FETCH_GUARDIAN_FAILED";

export const guardianLoading = () => ({ type: FETCH_GUARDIAN_LOADING });
export const guardianLoadSuccess = data => ({
    type: FETCH_GUARDIAN_SUCCESS,
    payload: data
  });
export const guardianLoadFailure = error => ({
    type: FETCH_GUARDIAN_FAILED,
    payload: error
});

export function fetchGuardian(username) {
    const header = {params:{}, headers:{"X-API-KEY": "1329545dd76f44199700614b7782cb0e"}}
    let playerData = {};
    return function(dispatch) {
      dispatch(guardianLoading());
      return axios.get(`https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/${username}/`, header)
      .then((response)=>{
        //console.log(response.data.Response[0]);
       // dispatch(guardianLoadSuccess(response.data.Response[0]))
       playerData = {
           ...playerData,
           membershipType: response.data.Response[0].membershipType,
           membershipId: response.data.Response[0].membershipId,
           displayName: response.data.Response[0].displayName
       }

       return axios.get(`https://www.bungie.net/Platform/Destiny2/${playerData.membershipType}/Profile/${playerData.membershipId}/?components=100`, header)
      })
      .then((response)=>{
        //console.log(response.data.Response.profile.data);
        playerData = {
            ...playerData,
            characterIds: response.data.Response.profile.data.characterIds
        }
        return axios.get(`https://www.bungie.net/Platform/GroupV2/User/${playerData.membershipType}/${playerData.membershipId}/0/1/`, header)
    })
    .then((response)=>{
        //console.log(response.data.Response.results[0].group)
        playerData = {
            ...playerData,
            clan: response.data.Response.results[0].group,
            characterData:[]
        }
        playerData.characterIds.forEach((characerId)=>{
            axios.get(`https://www.bungie.net/Platform/Destiny2/${playerData.membershipType}/Profile/${playerData.membershipId}/Character/${characerId}/?components=200`, header)
                .then((response=>{
                    //console.log(response.data)
                    playerData = {
                        ...playerData,
                        characterData: [...playerData.characterData,response.data.Response.character.data]
                    }
                    dispatch(guardianLoadSuccess(playerData))
                }))
        })
    })
      .catch((error)=>{
          dispatch(guardianLoadFailure('Cannot find Guardian'));
      })
    };
  }