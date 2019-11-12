// import React, { useState, useEffect } from "react";
import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import video from "./videos/sculpture.mp4";

function App() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await fetch(
    //             "http://orangevalleycaa.org/api/videos"
    //         ).then(response => response.json());
    //         setData(result);
    //     };
    //     fetchData();
    // }, []);
    return (
        <div className="App">
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       */}
            <header>
                <h1>Art Videos</h1>
            </header>
            {/* {data.map(video => (
                <div key={video.id}>
                    <h2>{video.name}</h2>
                    <video height={200} controls src={video.video_url} />
                </div>
            ))} */}
            <div>
                <video src={video} controls height={200} />
            </div>
        </div>
    );
}

export default App;
