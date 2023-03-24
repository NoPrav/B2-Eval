function Datas({catData}) {

  return ( 

<div className="datas">
              <span>
                <p>Adaptability : {catData.breeds[0].adaptability}⭐</p>
                <p>Affection : {catData.breeds[0].affection_level}⭐</p>
                <p>Child Friendly : {catData.breeds[0].child_friendly}⭐</p>
                <p>Dog Friendly : {catData.breeds[0].dog_friendly}⭐</p>
              </span> 
              <span>
                <p>Energy : {catData.breeds[0].energy_level}⭐</p>
                <p>Affection : {catData.breeds[0].grooming}⭐</p>
                <p>Health : {catData.breeds[0].health_issues}⭐</p>
                <p>Intelligence : {catData.breeds[0].intelligence}⭐</p>
              </span> 
              <span>
                <p>Shedding : {catData.breeds[0].shedding_level}⭐</p>
                <p>Social needs : {catData.breeds[0].social_needs}⭐</p>
                <p>Strager Friendly : {catData.breeds[0].stranger_friendly}⭐</p>
                <p>Vocalisation : {catData.breeds[0].vocalisation}⭐</p>
              </span>
              <span>
                <p>Experimental : {catData.breeds[0].experimental}⭐</p>
                <p>Hairless : {catData.breeds[0].hairless}⭐</p>
                <p>Natural : {catData.breeds[0].natural}⭐</p>
                <p>Rarity : {catData.breeds[0].rare}⭐</p>
              </span>
            </div>
   )
}

export default Datas