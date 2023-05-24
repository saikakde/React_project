// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const[mode,setMode]=useState("light");
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
  // const toggleMode = ()=>{
  //   if (mode==="dark" ){
  //     setMode("light");
  //     document.body.style.backgroundColor="white"
  //     showAlert("Light mode has been enabled","success")
  //     // document.title="Hidden Leaf : Light Mode"
  //     // setInterval(()=>{
  //     //   document.title = "wake up"
  //     // },1500);
  //     // setInterval(()=>{
  //     //   document.title = "to reality"
  //     // },2000);
  //   }
  //   else{
  //     setMode("dark");
  //     document.body.style.backgroundColor="#042743"
  //     showAlert("Dark mode has been enabled","success")
  //     // document.title="Hidden Leaf : Dark Mode"
  //     // setInterval(()=>{
  //     //   document.title = "to reality"
  //     // },2000);
  //     // setInterval(()=>{
  //     //   document.title = "to reality"
  //     // },2000);
  //   }
  // }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')


  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode==="dark" ){
      setMode("light");
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success")
      
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled","success")
      
    }
  }

  return (
    // <>
    // <Navbar title="My app" about="About" mode={mode} toggleMode={toggleMode}/>
    // <Alert alert={alert}/>
    // {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
    // {/* <Navbar title="My app1"/> */}
    // <div className="container my-3">
    // {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> */}
    // <About/>
    // </div>
    // </>
    // <>
    // <Router>
      

    //   <Navbar title="My app" about="About" mode={mode} toggleMode={toggleMode}/>
    //   <Alert alert={alert}/>
    //   <div className="container my-3">
               
    //       <Switch>
    //         <Route exact path="/about" element={<About/>} >

    //         </Route>

    //         <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>

    //         </Route>
    //       </Switch>


    //   </div>


    //   </Router>

    // </>

    <>
    <BrowserRouter>
      <Navbar
        title="My app"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3" mode={mode}>
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
          <Route
            exact path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                mode={mode}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </>

  );
}

export default App;
