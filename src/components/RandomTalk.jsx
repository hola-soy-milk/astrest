import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function RandomTalk({talks}) {

  const randomTalk = () => talks[(Math.floor(Math.random() * talks.length))];

  const [talk, setTalk] = useState(talks[0]);

  const { slug, data: { title, event, year, videoId } } = talk

  return (
    <div>
      <h2>{title}!</h2>
      <a href={`/talks/${slug}`}>
        <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={`Thumbnail for my talk "${title}"`}/>
      </a>
      <button onClick={() => setTalk(randomTalk())}>
        Gimme Another Talk!
      </button>
    </div>
  );
}
