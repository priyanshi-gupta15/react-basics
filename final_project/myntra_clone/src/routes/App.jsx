import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'
import { Outlet } from 'react-router-dom'
import FetchItems from '../components/FetchItems'
import { useSelector } from 'react-redux'
import { Spinner } from '../components/LoaderSpinner'

function App() {


  const fetchStatus = useSelector((store) => store.fetchStatus);
 
  return (
    <>
   <Header></Header>
   <FetchItems></FetchItems>
   {fetchStatus.currentlyFetching ? <Spinner></Spinner>:   <Outlet></Outlet>}

   <Footer></Footer>
   
     
    </>
  )
}

export default App
//comment
