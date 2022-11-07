import { useState } from 'react';
import './App.css';
import Alerts from './Components/Alerts';
import Navbar from './Components/navbar2'
import Text from './Components/Text'
// import Navbar from './Components/navbar';
import Aboutus from './Components/Aboutus';
import { BrowserRouter,Route,Routes } from 'react-router-dom';



function App() {
  const [darkmode,setDarkmode]=useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        typ:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);

  }
  // const removeBodyclass=()=>{
  //     document.body.classList.remove('About')
  //     document.body.classList.remove('Home')
  //   }
  // const showData=(dara)=>{ Genral Function for routes Alert
  //   // removeBodyclass();
  //   if(alert==null){
  //     setAlert({
  //       msg:"you are on "+dara+" page",
  //       typ:"success"
  //     })
  //     setTimeout(() => {
  //       setAlert(null)
  //     }, 1000);
  //   }
  // } 
  const changeMode=()=>{ 
    // Simple Change Mode Code
    if(darkmode==='light'){
      setDarkmode('dark')
      document.body.style.backgroundColor='black'
      showAlert("Dark mode has been enables","success")
    }
    else{
      setDarkmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has Been enables","success")
    }
  }
 
  // const removeBodyclass=()=>{
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-danger')
  // }
  // const changeMode=(cls)=>{
  //   removeBodyclass();
  //   document.body.classList.add('bg-'+cls)
  //   if(darkmode==='light'){
  //     setDarkmode('dark')
  //     document.body.style.backgroundColor='black'
  //     showAlert("Dark mode has been enables","success")
  //   }
  //   else{
  //     setDarkmode('light')
  //     document.body.style.backgroundColor='white'
  //     showAlert("Light mode has Been enables","success")
  //   }
  // }

  return (

        <BrowserRouter>
            <div className='container'>
            <div className='row'>
              <Navbar title="Yes Boss" mode={darkmode} changeMode={changeMode} showAlert={showAlert}/> 
              
            </div>
            <div className='row'><Alerts alert={alert} showAlert={showAlert}/>
              </div> 
            <Routes>
            <Route path="/" element={<Text some='Write Some Text Below !!!'mode={darkmode} alert={showAlert} />} />
            <Route path="/home" element={<Text some='Write Some Text Below !!!'mode={darkmode} alert={showAlert} />} />
            <Route path="/about" element={<Aboutus mode={darkmode} />} />
            </Routes>
       
            </div>
            </BrowserRouter> 
  
    
  )
}

export default App;
