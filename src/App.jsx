import React, { useState, useEffect } from 'react'

const App = () => {

const [standings, setStandings] = useState(null)

useEffect( () => {
  fetch('http://api-football-standings.azharimm.site/leagues/eng.1/standings')
    .then (res => res.json())
   // .then (data => setStandings(data))
   .then (data => console.log(data.data.standings[0].team.name) )
    .catch (err => console.log(err))
}, [standings]);

  return (
    <div>
      
    </div>
  )
}

export default App
