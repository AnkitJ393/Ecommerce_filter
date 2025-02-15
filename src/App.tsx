import './App.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'

function App() {
  return (
    <>
      <Sidebar/>
      <Nav/>
      <Products/>
      <Recommended/>
    </>
  )
}

export default App
