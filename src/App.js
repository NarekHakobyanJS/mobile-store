import {Route, Routes} from "react-router-dom"
import './App.scss';
import Header from './componenets/Header/Header';
import HomePage from "./pages/HomePage/HomePage";
import StorePage from "./pages/StorePage/StorePage";
import FullItemPage from "./pages/FullItemPage/FullItemPage";
import {useSelector} from "react-redux"


function App(props) {
  let fullPage = useSelector(state => state.mobilePage.fullPage)
 
  return (
    <div className="app">
      <Header />
      <div className='wrapper'>
        <div className='pages'>
          <Routes>
            <Route path="/fullItem" element={<FullItemPage fullPage={fullPage}/>} />
            <Route path="/" element={<HomePage />}/>
            <Route path="/store" element={<StorePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
