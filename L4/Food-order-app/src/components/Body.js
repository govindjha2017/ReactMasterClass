import ResturentCrad from "./Resurantcard"
import resData from "../utils/mockData"
import { useState } from "react";
const Body = ()=>{
    let [resList, updateResList] = useState(resData)
    return (
        <div>
             <button className="filter-resturent" onClick={()=>{
                let x = resData.filter((item)=>{
                    return item.info.avgRating>4
                })
                 updateResList(x);
             }}>Top Rated Resturent</button>
            <div className="resturent-list">
                 {
                    resList.map((resturent)=>{
                        return <ResturentCrad key={resturent.info.id} resData={resturent}></ResturentCrad>
                    })
                 }
            </div>
        </div>

    )
}

module.exports = Body