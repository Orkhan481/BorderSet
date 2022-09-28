
import './App.css';
import Lessons from './components/Lessons';
import Navbar from './components/Navbar';
import Teachers from './components/Teachers';

function App() {
  return (
    <div className="app">
     <Navbar />
     <Teachers />
     <Lessons />
    </div>
  );
}

export default App;
