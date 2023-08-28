
import './App.css';
import TopNav from './components/TopNav';


import Footer from './components/Footer';
import Meal  from './components/Meal';
import  Featured  from './components/Featured';
import Categories from './components/Categories';
import TopPicks  from './components/TopPicks';


function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <TopPicks/>
      <Meal/>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default App;
