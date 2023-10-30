import { useEffect, useState } from "react"
import Navbar from "./components/navbar/Navbar"
import User from "./components/user/User"
import axios from "axios";


function App() {
  const [data, setData] = useState([]);
  const [isReload, setIsReload] = useState(false);
  const URL = "https://randomuser.me/api";

  const handleGeneratedUser = (e) => {
    e.preventDefault();
    setIsReload(true)
  }
  

  useEffect(() => {
     axios.get(URL)
     .then(function (response) {
     // handle success
     if(response){
      setData(response.data.results[0]);
      setIsReload(false);
     }
     else {
      setData([]);
     }
     
     // console.log(response);
     })
     .catch(function (error) {
     // handle error
     console.log(error);
    });
    
  }, [isReload])
  // console.log(data);




  return (
    <>
      <Navbar handleGeneratedUser={handleGeneratedUser}/>
      <User data = {data}/>
    </>
  )
}

export default App
