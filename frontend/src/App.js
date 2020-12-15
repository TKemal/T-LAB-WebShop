import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Welcome to Web Shop!</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
