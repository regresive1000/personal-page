
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import "./fonts/Ubuntu/Ubuntu-Regular.ttf"
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import Landing from './pages/Landing'


function App() {
  

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={ <HomeLayout /> }>
            <Route index element={ <Landing /> } />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
