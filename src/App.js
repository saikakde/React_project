import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const[mode,setMode]=useState("dark");
  const[alert,setAlert]=useState(null);
 
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    },1700)
  }
  // const[forColor,afterColor]=useState("light")
  const toggleMode = ()=>{
    if (mode==="dark" ){
      setMode("light");
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success")
      document.title="Hidden Leaf : Light Mode"
      // setInterval(()=>{
      //   document.title = "wake up"
      // },1500);
      // setInterval(()=>{
      //   document.title = "to reality"
      // },2000);
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled","success")
      document.title="Hidden Leaf : Dark Mode"
      // setInterval(()=>{
      //   document.title = "to reality"
      // },2000);
      // setInterval(()=>{
      //   document.title = "to reality"
      // },2000);
    }
  }
  return (
    <>
    <Navbar title="My app" about="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
    {/* <Navbar title="My app1"/> */}
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
