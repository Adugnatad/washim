import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import Home from './pages/Home.page';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
