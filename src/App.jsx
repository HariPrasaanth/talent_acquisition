import Navbar from './components/Navbar/Navbar';
import Leftbar from './components/Leftbar/Leftbar';

import './style.scss';
import Home from './components/Home/Home';

function App() {

  return (
    <>
    <div>
      <Navbar />
      <div style={{display: "flex", marginTop: "2rem"}}>
        <Leftbar />
        <div style={{flex: 11, padding: "0rem 1rem"}}>
          <Home />
        </div>
      </div>
      </div>
    </>
  )
}

export default App
