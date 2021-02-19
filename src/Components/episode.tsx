interface IEpisode {
    id: number;
    // url: string;
    name: string;
    season: number;
    number: number;
    // type: string;
    // airdate: string;
    // airtime: string;
    // airstamp: string;
    // runtime: number;
    image: {
      medium: string | null;
      original: string | null;
    };
    summary: string;
    // _links: { self: { href: string } };
  }

const Episode = ( {id, name, season, number, image, summary}: IEpisode) => {
    
    // const cleanedSummary = summary.replace(/<p>|<\/p>|<br>/g, "") //figure out how to remove all <>
    const cleanedSummary = summary.replace(/<(.*?)>/g, "");

    return (
        <div id={`${id}`}>
            <p>{name}
             <span> S{season<10?`0${season}`:season}</span> 
             <span>E{number<10?`0${number}`:number}</span>
            </p>
            <img src={typeof(image.medium) === "string"? `${image.medium}` : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"} alt="episode item" width="250px"/>
            <p>{cleanedSummary}</p>
        </div>
    )
}

export default Episode;