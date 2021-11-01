import React, { useState, useEffect } from 'react'

import Button from './Components/Button/Button'

import Table from './Components/Table/Table'

import './App.scss'

const App = () => {

const [standings, changeStandings] = useState(null)
const [fetchStandings, setFetchStandings] = useState(true);

useEffect( () => {
  fetch('http://api-football-standings.azharimm.site/leagues/eng.1/standings')
    .then (res => res.json())
    .then (data => changeStandings(data.data.standings))
    .catch (err => console.log(err))
}, [fetchStandings]);


const handleClick = (event => {
  setFetchStandings( !fetchStandings )
})

  return (
    <>
      <Button buttonText={"View latest English Premier League Standings"} onClick={handleClick}/>
      <div>
      { standings && <Table teamData={standings} />  }
      </div>
     
    </>
  )
}

export default App
