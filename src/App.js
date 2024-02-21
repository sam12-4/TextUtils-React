import './App.css';
import Navbar from  "./components/Navbar";
import About from  "./components/About";
import Alert from './components/Alert';
import Textform from "./components/textform";
import React,{ useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [toggleMode, setToggleMode] = useState("Dark");
  const [mode, setMode] = useState("light");
  const [alertmsg, setAlertMsg] = useState(null);
  const [toggleBtnModeBlue, setToggleBtnModeBlue] = useState("Enable Blue Background");
  const [toggleBtnModeGrey, setToggleBtnModeGrey] = useState("Enable Grey Background");
  const [accordianStyle,setAccordianStyle] = useState({
    color: "black",
    backgroundColor: "white"
})

  const showAlert =(type ,message)=>{
       setAlertMsg({
        type : type,
        msg : message
       })
       setTimeout(()=>{
        setAlertMsg(null);
       },3000)
  }
  
  function body_bg_remove(){
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
  }

  const toggleBtn=(cls)=>{
    if (toggleMode==="Dark"){
      body_bg_remove();
      document.body.classList.add("bg-"+cls);
      showAlert("success", cls +" mode enabled");
      setAccordianStyle({
        color: "white",
        backgroundColor: "black"
    })
  }
    else{
      showAlert("success", cls +" mode enabled");
      setAccordianStyle({
      color: "black",
      backgroundColor: "white"
    })
    }
  }

  const toggleBtnModeBlueBg=()=>{
      if (toggleBtnModeBlue==="Enable Blue Background"){
        setToggleBtnModeBlue("Disable Blue Background");
        
        document.body.style.backgroundColor = "#393979";
        showAlert("success", "Blue Background enabled");
        
        setAccordianStyle({
          color: "white",
          backgroundColor: "blue"
        })
      }
      else{
        setToggleBtnModeBlue("Enable Blue Background");
        
        
        document.body.style.backgroundColor = "white";
        showAlert("success", "Blue Background Diabled");
        setAccordianStyle({
          color: "white",
          backgroundColor: "black"
      })
      setMode("light");
      }
  }

  const toggleBtnModeGreyBg=()=>{
      if (toggleBtnModeGrey==="Enable Grey Background"){
        setToggleBtnModeGrey("Disable Grey Background");
        document.body.style.backgroundColor = "grey";
        showAlert("success", "Grey Background enabled");
        setAccordianStyle({
          color: "white",
          backgroundColor: "grey"
        })
      }
      else{
        setToggleBtnModeGrey("Enable Grey Background");
        document.body.style.backgroundColor = "white";
        showAlert("success", "Grey Background Diabled");
        setAccordianStyle({
          color: "white",
          backgroundColor: "black"
      })
      setMode("light");
      }
  }
  
  return (
    <>
    <Router>
    <Navbar about="About" appMode={mode} toggleModeText={toggleMode} toggleBtnMode={toggleBtn} toggleBtnModeBlue={toggleBtnModeBlue} toggleBtnModeBlueBg={toggleBtnModeBlueBg} toggleBtnModeGrey={toggleBtnModeGrey} toggleBtnModeGreyBg={toggleBtnModeGreyBg}/>
    <Alert message={alertmsg}/>
    
    <div className= "container py-3">
    <Routes>
          <Route path="/" element={<Textform textarea_heading="Text-Utils-Analyze Your Text" appMode={mode} summary="Your text Summary" message={showAlert}/>}
          ></Route>
          <Route path="/about" element={<About toggleBtnMode={toggleBtn} accordianStyle={accordianStyle} ></About>}
          ></Route>
      </Routes>
    </div>
    </Router>
    </>
  
  );
}

export default App;

