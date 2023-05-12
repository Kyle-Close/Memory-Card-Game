import { useState, useEffect } from "react";
import { searchUnsplashPhotos } from "./APIs/Unsplash";

import Cards from "./Components/Cards";

function App() {

  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    searchUnsplashPhotos("landmarks", 1, 4).then((response) => {
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
      <Cards images={imageData} />
    </div>

  );
}

export default App;
