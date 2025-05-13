import './stylesheets/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Form from './components/Form.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Form />} />
      </Routes>
    </BrowserRouter> 
    )
}

export default App
