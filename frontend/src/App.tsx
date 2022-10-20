import React, { useEffect, useState } from 'react';
import './App.css';
import Media from './components/Media';
export interface Media {
  id: number;
  title: Title;
  coverImage: CoverImage;
  description: string;
}

export interface CoverImage {
  extraLarge: string;
  large: string;
  medium: string;
  color: string;
}

export interface Title {
  romaji: string;
  english: string;
  native: string;
}
function App() {
  let [medias, setMedia] = useState<Media[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/assignment-be/media")
      .then(response => response.json())
      .then(data => setMedia(data.data))
  }, [])
  return (
    <div className="App">
      {
        medias.map(media => {
          return (
            <Media id={String(media.id)} title={media.title.english} image={media.coverImage.medium}
              description={media.description} />
          )
        })
      }
    </div>
  );
}

export default App;
