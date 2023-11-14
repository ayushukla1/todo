import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';

function App() {
  return (
    <div>
      <Header title="My Todos List"/>
      <Todos/>
      <Footer/>
    </div>
  );
}

export default App;
