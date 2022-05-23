import './App.css';
import Navbar from './components/navbar';
import Textform from './components/textform';
function App() {
  return (
    <>
    {/* <Navbar title="Aman Fang"/> */}
    <Navbar/>
    <div className="container my-3">
    <Textform heading="Enter the text to analyze"/>
    </div>
    </>
  );
}

export default App;
