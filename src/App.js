import React from 'react'
import NewsList from './components/NewsList'
import { NewsContextProvider } from './context/NewsContext'

function App() {
  return (
    <NewsContextProvider>
        <NewsList/>
    </NewsContextProvider>
  )
}

export default App
