import React, { useState, useEffect } from 'react'

import Button from './Components/Button/Button'

import Table from './Components/Table/Table'

import './App.scss'

import './Components/Table/Table.scss'

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
       <Button className="button" buttonText={"View latest English Premier League Standings"} onClick={handleClick}/>
      <h1>Tables</h1>
      <div>
      { standings && <Table className="table" teamData={standings} />  }
      </div>
     
    </>
  )
}

export default App
