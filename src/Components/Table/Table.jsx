

import React from 'react'

const TableHeader = () => {
    return (
            <thead>
                 <tr>
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

        let gd = parseFloat(row.stats[4].value) - parseFloat(row.stats[5].value)

        return (
       <> 
        <tr >
              <td>{row.team.displayName}</td>
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

    console.log(props);

    const { teamData } = props;

    console.log(teamData);
    return (
        <table>
            <TableHeader />
            <TableBody teamData={teamData}/>
        </table>
    )
}
    

export default Table
