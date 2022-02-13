import React, { useState, useEffect} from "react";
import StreamingHistory from './../data/StreamingHistory0.json'
import StreamingHistory1 from './../data/StreamingHistory1.json'
import StreamingHistory2 from './../data/StreamingHistory2.json'

const ParseData = () => {

    const [trackName, setTrackName] = useState('');
    const [artistName, setArtistName] = useState('');
    const [totalTime, setTotalTime] = useState(0);
    const [totalPlayed, setTotalPlayed] = useState(0);

    const connectedData = [...StreamingHistory, ...StreamingHistory1, ...StreamingHistory2 ]
  
    useEffect(() => {

        let timeTemp = 0
        let timesPlayedTemp = 0;

        connectedData.filter(data => data.trackName === "STAY (with Justin Bieber)").map((data) => {
            timeTemp += data.msPlayed;
            timesPlayedTemp += 1
        })

        setTrackName('STAY (with Justin Bieber)')
        setArtistName('The Kid LAROI')
        setTotalTime((timeTemp / 60000) / 60)
        setTotalPlayed(timesPlayedTemp)
    }, [])




const unique = [...new Set(
                    StreamingHistory2.map(item =>
                         item.trackName 
                    )
                )];



    return ( 
        <div className="data">

            <pre>
            {
            unique.map(item =>
                item
            )
            
            }
            </pre>

            <p className="artistName">Artist name: { trackName }</p>
            <p className="trackName">Track name: { artistName }</p>
            <p className="totalTime">Total time listened: { totalTime.toFixed(2) } hours</p>
            <p className="totalPlayed">Total times played: { totalPlayed }</p>
        </div>
     );
}
 
export default ParseData;