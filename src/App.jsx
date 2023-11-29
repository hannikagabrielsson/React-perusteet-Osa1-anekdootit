import { useState } from 'react'


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  let points = new Uint8Array(anecdotes.length);

  console.log(points);

  const App = () => {

  const [selected, setSelected] = useState(0)
  const [votesNow, setVotesNow] = useState(0)
  const [mostPoints, setMostPoints] = useState(0)
  const [chosen, setChosen] = useState(0)
  
  console.log("Tämä on mostPoints " + mostPoints)

  const randomNumber = (max) => {
    return Math.floor(Math.random() * max);
  }

  const handleAnecdotes = () => {
    // setSelected(randomNumber());
    const newNumber = randomNumber(anecdotes.length)
    setSelected(newNumber)
    setVotesNow(points[newNumber])
  };

  const handleVotes = () => {
    let copy = [...points]
    console.log(selected)
    console.log(copy)
    console.log(points)
    copy[selected]++
    points = null
    points = [...copy]
    console.log(points[selected])
    setVotesNow(points[selected])

    console.log("these are the points " + points)
    console.log(votesNow);
    let updatePoints = points[selected]++
    points[selected] = updatePoints
    console.log("TÄMÄ " + points[selected])
    
  }
  // jos 1 ääni, points[selected] on 1.
// mostPoints on 0.

  for (let i = 0; i < anecdotes.length; i++)
  {
  
    console.log("62 tämä on mostPoints " + mostPoints)
    console.log("63 tämä on for points selected " + points[selected])
    // points selected on 1

    if (points[selected] > mostPoints) 
    // points[selected] on suurempi (1) kuin mostPoints (0)
    {
      console.log("menee tänne")
      setMostPoints(points[selected])
      // mostPoints on 1.
      console.log("Tämä on mostPoints " + mostPoints)
      console.log(mostPoints)
      setChosen(selected)
      console.log("tämä on chosen " + chosen)
      
    }

  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <p>has {votesNow} votes</p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleAnecdotes}>next anecdote</button>
      <br />
      <h1>Anecdote with most votes</h1>
      {anecdotes[chosen]}

    </div>
  )

  }
  

export default App