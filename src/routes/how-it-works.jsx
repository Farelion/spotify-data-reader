import React from "react";
import { Link } from "react-router-dom";
import './../index.scss';

export default function HowItWorks() {
    return (
        <div className="main">
            <div className="nav">
                <div className='nav__link'> <Link to="/">Return</Link></div>
            </div>
            <div className="how-it-works__wrapper">
                <div className="how-it-works">
                    <div className="step">
                        <h2>#1 Get your data from spotify</h2>
                        <p>Head over to <a href="https://www.spotify.com/us/account/privacy/">spotify</a> and request your data by clicking "Request" button.</p>
                        <img alt="step-1 spotify verification" src={require('./../imgs/step-1.png')}/>
                    </div>

                    <div className="step">
                        <h2>#2 After requesting your data</h2>
                        <p>It might take few days to complete process of getting your data, but after it's done, you will get an e-mail with link to download your data.</p>
                        <p>Simply click the link and .zip with your data will download.</p>
                    </div>

                    <div className="step">
                        <h2>#3 After downloading your data</h2>
                        <p>Find your .zip file that you just downloaded (it's called "my_spotify_data"), open it/unpack anywhere you want. </p>
                    </div>

                    <div className="step">
                        <h2>#4 After unpacking your data</h2>
                        <p>Now we are ready to open files with your data, simply go back to <a href="https://farelion.github.io/spotify-data-reader/">main page</a></p>
                        <p>Click on input to upload files.</p>
                        <p>Locate folder that you just unpacked, there should be another folder inside called "MyData".</p>
                        <p>Choose ALL files that have "StreamingHistory" in name (you can to that by holding CTRL and clicking every file or select them with your mouse).</p>
                        <img alt="step-2 file folder" src={require('./../imgs/step-2.png')}/>
                    </div>

                    <div className="step">
                        <h2>#5 After upload</h2>
                        <p>Now just wait until code process all your data and you will get your results!</p>
                        <p>Note: there are no servers, no data is stored anywhere, everything happens on client-side so no worries :D</p>
                    </div>
                </div>
            </div>
        </div>
    );
}