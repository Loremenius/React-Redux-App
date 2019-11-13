import React from "react";
import { connect } from "react-redux"

const Clan = (props) =>{


    return(
        <div className="clan">
            <h2>Clan</h2>
            <img className="clanBannerImg" src={props.bannerURL}/>
            <h3>{props.clanName} [{props.callsign}]</h3>
            <p>{props.motto}</p>
            <p>{props.about}</p>
            <p>Current amount of members: {props.memberCount}</p>
        </div>
    )
}

function mapStateToProps(state){
    return {
        about: state.guardian.clan.about,
        bannerURL: `https://www.bungie.net/${state.guardian.clan.bannerPath}`,
        memberCount: state.guardian.clan.memberCount,
        motto: state.guardian.clan.motto,
        clanName: state.guardian.clan.name,
        callsign: state.guardian.clan.clanInfo.clanCallsign
    }
}

export default connect(mapStateToProps,{})(Clan)