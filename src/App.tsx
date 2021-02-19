import React, { useState } from 'react';
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

  const [input, setInput] = useState("")

  const mapEpisodeDetails = ( {name, season, number, image, summary}: IEpisode) => {
    return <Episode 
            name = {name}
            season = {season}
            number = {number}
            image = {image}
            summary = {summary}
            />
  }

  const episodesShowing = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  const episodePick = ( {name}: {name: string} ) => {
    return (
      input.length > 0 ? (`${name.toLowerCase()}`).startsWith(`${input.toLowerCase()}`)
    : true
    )
  }

  let filteredEpisodes = episodes.filter(episodePick);
  let mappedEpisodes = filteredEpisodes.map(mapEpisodeDetails);

  return (
    <div>
      <input 
      type="text"
      onChange={episodesShowing}
      />
      <p>The number of episodes which match your search: {filteredEpisodes.length}/{episodes.length}.</p>
     {mappedEpisodes}
    </div>
  );
}

export default App;
