const {CDN_URL} = require('../utils/constant')

const ResturentCrad = (props)=>{
    return (
        <div className="resturentcard">

            <img className="rseturentLogo" src={CDN_URL+props.resData.info.cloudinaryImageId}></img>
            <h3>{(props.resData.info.name)}</h3>
            <h4>{props.resData.info.avgRating}</h4>
            <p>{props.resData.info.sla.slaString}</p> 
            <p> {props.resData.info.cuisines[0]},  {props.resData.info.cuisines[1]}</p>
        </div>
    )
}

module.exports = ResturentCrad;