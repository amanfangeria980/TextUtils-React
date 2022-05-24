import './App.css';
import About from './components/About';
import Navbar from './components/navbar';
// import Textform from './components/textform';
function App() {
  return (
    <>
    <Navbar title="Aman Fang"/>
    <div className="container my-3">
    {/* <Textform heading="Enter the text to analyze"/> */}
    <About/>

    </div>
    </>
  );
}

export default App;
