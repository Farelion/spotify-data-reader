import React, { useState, useEffect} from "react";
import StreamingHistory from './../data/StreamingHistory0.json'
import StreamingHistory1 from './../data/StreamingHistory1.json'
import StreamingHistory2 from './../data/StreamingHistory2.json'

const ParseData = () => {

    const [trackName, setTrackName] = useState('');
    const [artistName, setArtistName] = useState('');
    const [totalTime, setTotalTime] = useState(0);
    const [totalPlayed, setTotalPlayed] = useState(0);

    const [allData, setAllData] = useState([{
        artistName: '',
        trackNname: '',
        totalTime: 0,
        timesPlayed: 0,
    }]);
    
    const connectedData = [...StreamingHistory, ...StreamingHistory1, ...StreamingHistory2]

    const unique = [...new Set(
        connectedData.map(item =>
             item.trackName 
        )
    )];
           
    let mappedData = []
    let startDate = new Date();
    let endDate = 0;

    unique.map((uniqueData) => {
                let timeTemp = 0
                let timesPlayedTemp = 0;
                let artistName = '';

                connectedData.filter(connectedData => connectedData.trackName === uniqueData)
                    .map((connectedData) => {
                        timeTemp += connectedData.msPlayed;
                        timesPlayedTemp += 1;
                        artistName = connectedData.artistName;

                        let itemDate = new Date(connectedData.endTime);
                        if (itemDate < startDate){
                            startDate = itemDate;
                        }
                        if (itemDate > endDate){
                            endDate = itemDate;
                        }
                    })

                let dataObject = 
                    {
                        artistName: artistName,
                        trackName: uniqueData,
                        totalTime: (timeTemp / 60000).toFixed(2),
                        timesPlayed: timesPlayedTemp,
                    }
                mappedData.push(dataObject)
            })
            
    let sortedData = [...mappedData].sort((a, b) => b.totalTime - a.totalTime)

    useEffect(() => {

        // let timeTemp = 0
        // let timesPlayedTemp = 0;

        // connectedData.filter(data => data.trackName === "STAY (with Justin Bieber)")
        //                 .map((data) => {
        //                     timeTemp += data.msPlayed;
        //                     timesPlayedTemp += 1
        //                 })

        // setTrackName('STAY (with Justin Bieber)')
        // setArtistName('The Kid LAROI')
        // setTotalTime((timeTemp / 60000) / 60)
        // setTotalPlayed(timesPlayedTemp)


    }, [])

    return ( 
        <div className="main">

            <div className="dates">From: { startDate.toDateString('DD-MM-YYYY') } To: { endDate.toDateString() } </div>
            <div className="list__wrapper">
                {
                    sortedData.map((item,i) => 
                        <div className="list__item" key={ i }>
                            <p className="number">#{ i+1 }</p>
                            <p className="artistName">Artist name: { item.artistName }</p>
                            <p className="trackName">Track name: { item.trackName }</p>
                            <p className="totalTime">Total time listened: { item.totalTime } minutes</p>
                            <p className="totalPlayed">Total times played: { item.timesPlayed }</p>
                        </div>
                    )
                }
            </div>

        </div>
     );
}
 
export default ParseData;