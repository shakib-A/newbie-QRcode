import React from 'react'
import Button from './components/Button'
import Results from './components/Results'
import Summary from './components/Summary'

const App = () => {
  return (
    <>
      <div id="main" className='flex flex-col justify-center items-center shadow-2xl p-4 pt-0 gap-4 lg:flex-row'>
        <Results  />
        <div id="wrapper" className='flex flex-col gap-4'>
          <Summary />
          <Button />
        </div>
      </div>
    </>
  )
}

export default App