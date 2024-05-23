import './App.css'
import data from './data/etsy.json';
import Listing from './components/Listing/Listing';

function App() {
  return (
      <Listing items = {data}/>
  )
}

export default App