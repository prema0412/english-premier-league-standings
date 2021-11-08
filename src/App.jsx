import React, { useState, useEffect } from 'react'

import Button from './Components/Button/Button'

import Table from './Components/Table/Table'

import './App.scss'

import './Components/Button/Button.scss'

import './Components/Table/Table.scss'

import legends from './Assets/images/legends.png'

const App = () => {

const [standings, changeStandings] = useState(null)
const [fetchStandings, setFetchStandings] = useState(false);


useEffect( () => {
  fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings')
    .then (res => res.json())
    .then (data => changeStandings(data.data.standings))
    .catch (err => console.log(err))
}, [fetchStandings]);


const handleClick = ( (event) => {
  setFetchStandings(!fetchStandings);
});

  return (
    <>
      <Button className="button" buttonText={"EPL Standings"} onClick={handleClick}/>
     
      { standings && <Table className="table" teamData={standings} />  }

      <img className="legend" src={legends} alt="" />
     
     
    </>
  )
}

export default App
