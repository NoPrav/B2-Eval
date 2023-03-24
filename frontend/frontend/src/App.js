import React, { useState, useEffect } from "react"
import axios from 'axios'
import '../src/App.css'
import Datas from "./components/Datas"

function Refresh() {
  const [catData, setCatData] = useState()

  const loadData = async () => {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p`)
    if (response.status === 200) {
      const data = response.data[0]
      setCatData(data)
    }
  }

  const handleRefresh = () => {
    loadData();
  }

  useEffect(() => {
    loadData()
  }, [])

  console.log(catData)

  return (
    <div className="appbody">
      <div className="baby">
        <h1>Random Cats pictures</h1>
        <div></div>
        <button className="bouton" onClick={handleRefresh}>Reload</button>
      </div>
      {catData && (
        <div className="card">
          <div className="description">
            <h2>Name : {catData.breeds[0].name}</h2>
            <p>Temperament : {catData.breeds[0].temperament}</p>
            <p>Origin : {catData.breeds[0].origin}</p>
            <h2>Description : </h2>
            <p>{catData.breeds[0].description}</p>
            <div className="datas">
              <Datas catData={catData} />
            </div>
          </div>
          <img className="image" src={catData.url} alt="cat" />
        </div>
      )}
    </div>
  )
      }

export default Refresh