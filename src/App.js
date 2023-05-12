import { useState, useEffect } from "react";
import { searchUnsplashPhotos } from "./APIs/Unsplash";

import CardsContainer from "./Components/CardsContainer";

function App() {

  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    searchUnsplashPhotos("landmarks", 2, 20).then((response) => {
      if (response && response.results && response.results.length > 0) {
        const imageData = response.results.map((image) => {
          return {
            alt: image.alt_description,
            url: image.urls.small,
          }
        })
        setImageData(imageData);
      }
    });
  }, []);

  return (
    <div className="App">
      <CardsContainer images={imageData} />
    </div>

  );
}

export default App;
