import React, { useState, useEffect } from "react";

function App() {
  const [catData, setCatData] = useState(null);

  const handleRefresh = () => {
    fetchCatData();
  };

  const fetchCatData = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?breed_ids=beng");
      const data = await response.json();
      setCatData(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCatData();
  }, []);

  return (
    <div>
      <h1>Images de chats aléatoires</h1>
      {catData && (
        <div>
          <img src={catData.url} alt="cat" />
          
        </div>
      )}
      <button onClick={handleRefresh}>Actualiser</button>
    </div>
  );
}

export default App;