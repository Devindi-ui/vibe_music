import { useState } from 'react'
import Header from './components/common/Header'
import LoadingSpinner from './components/common/LoadingSpinner'
import "./styles/globals.css";
import "./styles/theme.css";
import "./styles/components.css";

function App() {

  return (
    <>
    <LoadingSpinner/>
    <Header/>
    </>
  )
}

export default App
