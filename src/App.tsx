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

  const mapEpisodeDetails = ( {id, name, season, number, image, summary}: IEpisode) => {
    return <Episode 
            id = {id}   
            name = {name}
            season = {season}
            number = {number}
            image = {image}
            summary = {summary}
            />
  }

  const episodesDropdown = ( {id, name, season, number}: IEpisode) => {
    return (
      <option value={`${id}`}> S{season<10?`0${season}`:season}E{number<10?`0${number}`:number} - {name}</option>
    )
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

  const scrollToEpisode = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const element = document.getElementById(`${event.target.value}`);
    element?.scrollIntoView({behavior: "smooth"});
  }

  let filteredEpisodes = episodes.filter(episodePick);
  let mappedEpisodes = filteredEpisodes.map(mapEpisodeDetails);
  let episodeOption = episodes.map(episodesDropdown);

  return (
    <div>
      <select onChange={scrollToEpisode}>
        {episodeOption}
      </select>
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
