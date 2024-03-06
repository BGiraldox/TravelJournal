import React from 'react'
import './App.css'
import travelJournals from './assets/data'
import Header from './components/Header'
import Card from './components/Card'

function App() {

  const cards = travelJournals.map(journal => {
    return (
              <Card 
              key={journal.id}
              journal={journal}
            />
          )
    })
  

  return (
    <>
      <Header />
      {cards}
    </>
  )
}




export default App
