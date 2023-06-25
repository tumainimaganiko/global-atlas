import { Outlet,Route,Routes } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import HomePage from './components/HomePage';
import './App.css';

const Layout = () => {
  <>
    <Outlet/>
  </>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path="details" element={<DetailsPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
