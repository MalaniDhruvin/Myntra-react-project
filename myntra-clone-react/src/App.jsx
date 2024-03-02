import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import DisplayItems from './components/DiplayItems';
import FetchInfo from './components/fetchInfo';
import { useSelector } from "react-redux";
import LoadingSpinner from './components/Loading';

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>
      <main>
        <FetchInfo></FetchInfo>
        {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      </main>
      <Footer></Footer>
    </>
  )
}

export default App;
