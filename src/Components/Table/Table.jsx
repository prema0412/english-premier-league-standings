

import React from 'react'

import '../Table/Table.scss'



const TableHeader = () => {
    return (
            <thead className="table__header">
                 <tr>
                     <th>Club</th>
                     <th></th>
                     <th></th>
                     <th>MP</th>
                      <th>W</th>  
                      <th>D</th>
                     <th>L</th>
                      <th>GF</th> 
                     <th>GA</th>
                      <th>GD</th>
                      <th>PTS</th>
                  </tr>
              </thead>
        )

    }    


const TableBody = (props) => {

    const { teamData } = props

    const rows = teamData.map( (row, index) => {

        let highlight = ""

         if (index >=0 && index<=3) {

            highlight = "champion"
            
        } else 

        if (index === 4) {

            highlight = "europa"
        } else


        if (index >=17 && index<=20) {

            highlight = "relegation"
            
        } else

        {
            highlight = "normal"
        }

        let gd = parseFloat(row.stats[4].value) - parseFloat(row.stats[5].value)
        let logo = (row.team.logos[0].href)

        return (
       <> 
        <tr className="table__row">
            
              <td className={highlight} >{index+1}
              
              </td>
              <td><img className="logo" src={logo} alt=""></img></td>
              <td className="team-name">{row.team.displayName}</td>
              <td>{row.stats[3].value}</td>
              <td>{row.stats[0].value}</td>
              <td>{row.stats[2].value}</td>
              <td>{row.stats[1].value}</td>
              <td>{row.stats[4].value}</td>
              <td>{row.stats[5].value}</td>
              <td>{gd}</td>
              <td>{row.stats[6].value}</td>
            </tr>
          </>  

     ) })


        return (
            <tbody>{rows}</tbody>

    )
}

const Table = (props) => {

    const { teamData } = props;
    return (
        <table className="table">
            <TableHeader />
            <TableBody teamData={teamData}/>
        </table>
    )
}
    

export default Table
