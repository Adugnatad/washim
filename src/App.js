import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import { lazy, Suspense, useState } from 'react';
import Resources from './pages/Resources.page';

const Home = lazy(() => import("./pages/Home.page"));
const Data = lazy(() => import("./pages/Data.page"));

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div className="App">
      <Suspense fallback={<>Loading...</>}>
        <div>
          <Header setPage={setPage} page={page} />
          {page === "Home" && <Home />}
          {page === "Data" && <Data />}
          {page === "Resources" && <Resources />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
