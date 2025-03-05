import logo from './logo.svg';
import './App.css';
import mystyle from './css/mystyle.module.css';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import { useState } from 'react';
function App() {
  var myVaraible = "This is my variable";
  var myIntVar = 23;
  var myIntVar2 = 45;
  var sum = myIntVar + myIntVar2;
  var countNumber = 0;
  var myArr = [32,233,111,234,444];
  const [myCountNumber,setmyCountNumber] = useState(0);

  const [username,setusername] = useState("");
  const usernameHandleChange = (e)=>{
      setusername(e.target.value);
  }
  const [password,setpassword] = useState("");
  const passwordHandleChange = (e)=>{
      setpassword(e.target.value);
  }
  const [email,setemail] = useState("");
  const emailHandleChange = (e)=>{
      setemail(e.target.value);
  }
  const [phone,setphone] = useState("");
  const phoneHandleChange = (e)=>{
      setphone(e.target.value);
  }
  const [IsSubmit,setIsSubmit] = useState(false);
  const mySubmitFunction = ()=>{
    setIsSubmit(true);
  }

  function myFunction(){
    var temp = myCountNumber;
    var result = temp + 1;
    if(result == 10){
      setmyCountNumber(0);
    }else{
      setmyCountNumber(result);
    }
  }
  return (
    <div id={mystyle.mainContainer}>
      <div className={mystyle.NavigationContainer}>
            <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li style={{float: 'right'}}><a href="/Login">Login</a></li>
            </ul>
      </div>
      <h2 style={{textAlign: "center"}}>
        {myVaraible.toUpperCase()}
        <br/>
        The sum of {myIntVar} and {myIntVar2} is {sum}.
      </h2>
      <div style={{textAlign: "center"}}>
        <button className={mystyle.MyBtn} onClick={myFunction}>Click me</button>
        Count: {myCountNumber}<br/>
        My Array : {JSON.stringify(myArr)}<br/>
        First Index : {myArr[0]}
        {myArr.map((data,index)=>(
          <div>The index {index} of my array is : {data}.</div>
        ))}
      <div className={mystyle.myForm}>
        <input type='text' className={mystyle.myInputs} placeholder='Enter username...' value={username} onChange={usernameHandleChange}></input>
        <input type='password' className={mystyle.myInputs} placeholder='Enter password...' value={password} onChange={passwordHandleChange}></input>
        <input type='text' className={mystyle.myInputs} placeholder='Enter email...' value={email} onChange={emailHandleChange}></input>
        <input type='text' className={mystyle.myInputs} placeholder='Enter phone...' value={phone} onChange={phoneHandleChange}></input>
        <button className={mystyle.MyBtn} onClick={mySubmitFunction}>Submit</button>
      </div>
      {IsSubmit?(
        <div>
            The result : 
            <p>Username : {username}</p>
            <p>Password : {password}</p>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
        </div>
      ):(
        <span></span>
      )}
      </div>
      
      <div className={mystyle.myBox}>
          <div className={mystyle.imageGalleryContainer}>
              <img src={image1} className={mystyle.imageGalleryImgs}></img>
          </div>
          <div className={mystyle.imageGalleryFooter}>
            this is footer
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </div>
      <div className={mystyle.myBox}>
          <div className={mystyle.imageGalleryContainer}>
            <img src={image2} className={mystyle.imageGalleryImgs}></img>          
          </div>
          <div className={mystyle.imageGalleryFooter}>
            this is footer
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </div>
      <div className={mystyle.myBox}>
          <div className={mystyle.imageGalleryContainer}>
            <img src={image3} className={mystyle.imageGalleryImgs}></img>    
          </div>
          <div className={mystyle.imageGalleryFooter}>
            this is footer
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </div>
      <div className={mystyle.myBox}>
          <div className={mystyle.imageGalleryContainer}>
            <img src={image4} className={mystyle.imageGalleryImgs}></img>    
          </div>
          <div className={mystyle.imageGalleryFooter}>
            this is footer
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </div>
    </div>
  );
}

export default App;
