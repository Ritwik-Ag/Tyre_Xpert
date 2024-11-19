import React from "react";
import  {useState} from "react";
import RaceStrategy from "./RaceStrategy";


export default function RaceDataEntry(){

    const [ setLaps]=useState("");
    const [ setTemp]=useState("");
    const [isFormSubmitted, setIsFormSubmitted]=useState(false);
    const [softTyreLaps, setSoftTyreLaps]=useState("")
    
    function handleLapChange(evnt){
        setLaps(evnt.target.value);
    }
    function handleTempChange(evnt){
        setTemp(evnt.target.value);
    }
    function  handleFormSubmit(event){
        event.preventDefault();
        // Read the form data
        const form = event.target;
        const formData = new FormData(form);
        setIsFormSubmitted(true)
        setSoftTyreLaps("20");

    }

    return(
        <>
            <form method="post" onSubmit={handleFormSubmit}>
                <table>
                    <tr>
                        <td className="table-text">
                            Number of race laps
                        </td>
                        <td>
                            <input name="txtLaps" defaultValue="60" onChange={handleLapChange} />
                        </td>
                    </tr>
                    <tr>
                        <td className="table-text">
                            Temperature at Race track venue (in Centirgrade)
                        </td>
                        <td>
                            <input name="txtTemp" defaultValue="25" onChange={handleTempChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" />
                        </td>
                    </tr>
                    {isFormSubmitted?  <RaceStrategy softTyreLaps={softTyreLaps} /> :''}
                </table>
            </form>
         </>
    )
}