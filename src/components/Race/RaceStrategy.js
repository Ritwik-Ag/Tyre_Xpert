import React from "react";


export default function RaceStrategy({softTyreLaps}){
    return(
        <tr>
            <td className="table-text">
            Number of Laps with Soft tyres
            </td>
            <td className="table-text">
                {softTyreLaps}
            </td>
        </tr>
    )
}