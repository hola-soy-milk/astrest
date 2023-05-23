import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function RandomTalk({talks}) {

  const randomTalk = () => talks[(Math.floor(Math.random() * talks.length))];

  const [talk, setTalk] = useState(talks[0]);

  const { slug, data: { title, event, year } } = talk

  return (
    <div>
      <h2>{title}!</h2>
      <a href={`/talks/${slug}`}>
        <img src={`https://img.youtube.com/vi/<insert-youtube-video-id-here>/mqdefault.jpg`}/>
      </a>
          <Card
            href={}
            title={title}
            body={`${event}, ${year}`}
          />
      <button onClick={() => setTalk(randomTalk())}>
        Gimme Another Talk!
      </button>
    </div>
  );
}
