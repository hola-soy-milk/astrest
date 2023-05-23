import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function RandomTalk({talks}) {

  const randomTalk = () => talks[(Math.floor(Math.random() * talks.length))];
  
  const [talk, setTalk] = useState(talks[0]);

  return (
    <div> 
      <h1>{video}!</h1>
      <button onClick={() => setTalk(randomTalk())}>
        Gimme Another Talk!
      </button>
    </div>
  );
}