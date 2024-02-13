import './App.css';
import Navbar from  "./components/Navbar";
import Alert from './components/Alert';
import Textform from "./components/textform";
import React,{ useState} from 'react';

function App() {
  const [toggleMode, setToggleMode] = useState("Dark");
  const [mode, setMode] = useState("light");
  const [alertmsg, setAlertMsg] = useState(null);

  const showAlert =(type ,message)=>{
       setAlertMsg({
        type : type,
        msg : message
       })
       setTimeout(()=>{
        setAlertMsg(null);
       },3000)
  }
  
  const toggleBtn=()=>{
    if (toggleMode==="Dark"){
      setToggleMode("Light");
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("success", "Dark mode enabled");
      setInterval(()=>{
        document.title ="TextUtils- Dark Mode";
        
      },2000)

      setInterval(()=>{
        document.title ="TextUtils- Download TextUtils now";  
      },1500)
      }
    else{
      setToggleMode("Dark");
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode enabled");
    }
  }
  
  return (
    <>
    <Navbar about="about text" appMode={mode} toggleModeText={toggleMode} toggleBtnMode={toggleBtn}/>
    <Alert message={alertmsg}/>
    <div className= "container py-3">
    <Textform heading="This is Heading" appMode={mode} summary="Your text Summary" message={showAlert}/>

    </div>
    </>
  );
}

export default App;
