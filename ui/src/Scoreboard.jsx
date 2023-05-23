import { useState, useEffect } from 'react';
import './Scoreboard.css';

const Scoreboard = () => {

  const [userArray, setUserArray] = useState(null);

  useEffect(() => {
    fetch(` https://7wpo57scz7.execute-api.eu-north-1.amazonaws.com/default/getUsers`,)
      .then(res => res.json())
      .then(
        (result) => {
          setUserArray(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  const renderScoreboard = (userArray) => {
    if (userArray) {
        const users = userArray.map(
            (elem, index, array) => {
                return(
                    <tr key={elem._id}>
                        <td> {index + 1}</td>
                        <td> {elem.username}</td>
                        <td> {elem.elo}</td>
                    </tr>
                )
            }
        )
        return users
    }

  };

  return (
    <div>
      <div className='scoreboard'> 
        <table>
          <thead>
            <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>ELO</th>
            </tr>
          </thead>
          <tbody>{renderScoreboard(userArray)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Scoreboard;