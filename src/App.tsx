import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import episodes from './episodes.json';
import Episode from './Components/episode'

interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}
function App() {

  const mapEpisodeDetails = ({name, season, number, image, summary}:IEpisode) => {
    return <Episode 
            name={name}
            season={season}
            number={number}
            image= {image}
            summary = {summary}
            />
  }

  let mappedEpisodes = episodes.map(mapEpisodeDetails)

  return (
    <div>
     {mappedEpisodes}
    </div>
  );
}

export default App;
