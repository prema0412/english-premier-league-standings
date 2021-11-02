import React, { useState, useEffect } from 'react'

import Button from './Components/Button/Button'

import Table from './Components/Table/Table'

import './App.scss'

import './Components/Button/Button.scss'

import './Components/Table/Table.scss'

import legends from './Assets/images/legends.png'

const App = () => {

const [standings, changeStandings] = useState(null)
const [fetchStandings, setFetchStandings] = useState(true);


console.log(fetchStandings);

useEffect( () => {
  fetch('http://api-football-standings.azharimm.site/leagues/eng.1/standings')
    .then (res => res.json())
    .then (data => changeStandings(data.data.standings))
    .catch (err => console.log(err))
}, [fetchStandings]);


const handleClick = ( (event) => {
  console.log(fetchStandings);
  setFetchStandings( !fetchStandings )
  console.log(fetchStandings);
})

  return (
    <>
      <Button className="button" buttonText={"View Latest English Premier League Standings"} onClick={handleClick}/>
     
      { standings && <Table className="table" teamData={standings} />  }

      <img className="legend" src={legends} alt="" />
     
     
    </>
  )
}

export default App
