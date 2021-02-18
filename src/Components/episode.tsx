interface IEpisode {
    // id: number;
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
      medium: string;
      original: string;
    };
    summary: string;
    // _links: { self: { href: string } };
  }

const Episode = ({name, season,number, image, summary}:IEpisode) => {
    
    const cleanedSummary = summary.replace(/<p>|<\/p>|<br>/g, "") //figure out how to remove all <>


    return (
        <div>
            <p>{name}
             <span> S{season<10?`0${season}`:season}</span> 
             <span>E{number<10?`0${number}`:number}</span>
            </p>
            <img src={image.medium} alt="episode item"/>
            <p>{cleanedSummary}</p>
        </div>
    )
}

export default Episode;