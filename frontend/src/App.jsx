
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import "./fonts/Ubuntu/Ubuntu-Regular.ttf"
import './App.scss'
import {Helmet} from "react-helmet";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import Landing from './pages/Landing'
import DragAndDrop from './pages/DragAndDrop'

function App() {

  return (
    <>
      {/* <Helmet>
        <script src=
         "./scroll/ScrollSmoother.min.js"
          type="text/javascript" />
      </Helmet> */}
      <BrowserRouter>

        <Routes>
  
          <Route path="/" element={ <HomeLayout /> }>
            <Route index element={ <Landing /> } />
            
          </Route>
  
          <Route path='/dnd'>
            <Route index element={ <DragAndDrop /> } />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
