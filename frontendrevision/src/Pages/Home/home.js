
import mystyle from '../../css/mystyle.module.css';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system'; 
import Navigation from '../Navigation/navigation';
import axios from 'axios'; 

function Home() {
  var myVaraible = "This is my variable";
  var myIntVar = 23;
  var myIntVar2 = 45;
  var sum = myIntVar + myIntVar2;
  var countNumber = 0;
  var myArr = [32,233,111,234,444];
  var myObjectArr = [{"name":"Kyaw Kyaw","bio":"kyaw@gmail.com","phone":"+95234234"},{"name":"Mg Mg","bio":"Mg@gmail.com","phone":"+9522234234"},{"name":"Aung Aung","bio":"Aung@gmail.com","phone":"+9522234234"}];


  const [person,setPerson] = useState(myObjectArr);
  const [myCountNumber,setmyCountNumber] = useState(0);

  const [username,setusername] = useState("");
  const usernameHandleChange = (e)=>{
      setusername(e.target.value);
  }
  const [address,setaddress] = useState("");
  const addressHandleChange = (e)=>{
      setaddress(e.target.value);
  }
  const [phone,setphone] = useState("");
  const phoneHandleChange = (e)=>{
      setphone(e.target.value);
  }
  
  const [bio,setbio] = useState("");
  const bioHandleChange = (e)=>{
      setbio(e.target.value);
  }
  
  const [image,setimage] = useState("");
  const imageHandleChange = (e)=>{
      setimage(e.target.value);
  }
  const [IsSubmit,setIsSubmit] = useState(false);
  const [Shops,setShops]= useState([]);
  const mySubmitFunction = ()=>{
    axios.post("http://localhost:8000/insert", {
        name : username,
        address : address,
        phone : phone,
        bio : bio,
        image : image,
    }).then((response) => {
        alert("New Shop is inserted")
        console.log("Post successful!")
        axios.get("http://localhost:8000/getAllShops").then(response => {
            setShops(response.data)
        });
    }).catch(() => {
        alert("not")
        console.log("Oops, request failed!")
    });
  }
  const [UpdatedId,setUpdatedId] = useState("");
  
  const EditFunction = (event,data)=>{
    setUpdatedId(data.id);
    setusername(data.name);
    setaddress(data.address);
    setphone(data.phone);
    setbio(data.bio);
    setimage(data.image);
    
  }
  const DeleteFunction = (event,data)=>{
    try{
        axios.delete('http://localhost:8000/delete/', {
        data: {
            id: data.id
            }
        });
        alert("Successfully deleted!")
        axios.get("http://localhost:8000/getAllShops").then(response => {
            setShops(response.data)
        });
    }catch(e){
        alert(JSON.stringify(e));
    }
  }
  const updateData = () => {
      // update
      axios.post("http://localhost:8000/update/"+UpdatedId, {
        name : username,
        address : address,
        phone : phone,
        bio : bio,
        image : image,
    }).then((response) => {
        alert(response.data);
        axios.get("http://localhost:8000/getAllShops").then(response => {
            setShops(response.data)
        });
    }).catch(() => {
        alert("Update Fails!")
        console.log("Oops, request failed!")
    })
  }

  function myFunction(){
    var temp = myCountNumber;
    var result = temp + 1;
    if(result == 10){
      setmyCountNumber(0);
    }else{
      setmyCountNumber(result);
    }

    axios.get("http://localhost:8000/getAllShops").then(response => { 
      setShops(response.data)
    }); 
  }
  return (
    <div id={mystyle.mainContainer}>
      <Navigation/>
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
        Ay Object Array : {JSON.stringify(myObjectArr)}<br/>
        First Index : {JSON.stringify(myObjectArr[0])} <br/>
        First Index person's name : {myObjectArr[0].name} <br/>
        Second Index person's phone : {myObjectArr[1].phone} <br/>
        Person Object : {JSON.stringify(person)}
        <Container> 
          <Row> 
            <Col sm={3} style={{border: "1px solid black"}}> 
              <p>One of columns </p>
            </Col> 
            <Col sm={3} style={{border: "1px solid black"}}> 
              <Row> 
                <Col sm={6} style={{border: "1px solid black"}}> 
                  <p>One of columns </p>
                </Col> 
                <Col sm={6} style={{border: "1px solid black"}}> 
                  <p>One of columns </p>
                </Col> 
              </Row>
            </Col> 
            <Col sm={3} style={{border: "1px solid black"}}> 
              <p>One of columns </p>
            </Col> 
            <Col sm={3} style={{border: "1px solid black"}}> 
              <p>One of columns </p>
            </Col> 
          </Row> 
          <Row> 
            <Col sm={3} style={{border: "1px solid black"}}> 
              <p>One of columns </p>
            </Col> 
            <Col sm={3} style={{border: "1px solid black"}}> 
              <p>One of columns</p>
            </Col> 
            <Col sm={3} style={{border: "1px solid black"}}> 
              <p>One of columns </p>
            </Col> 
            <Col sm={3} style={{border: "1px solid black"}}> 
              <p>One of columns </p>
            </Col> 
          </Row>  
          <Row> 
            <Col sm={4} style={{border: "1px solid black"}}> 
              <p>One of columns </p>
            </Col> 
            <Col sm={4} style={{border: "1px solid black"}}> 
              <p>One of columns</p>
            </Col> 
            <Col sm={4} style={{border: "1px solid black"}}> 
              <p>One of columns </p>
            </Col> 
          </Row> 
      </Container> 
      <div className={mystyle.myForm}>
        <input type='text' className={mystyle.myInputs} placeholder='Enter username...' value={username} onChange={usernameHandleChange}></input>
        <input type='text' className={mystyle.myInputs} placeholder='Enter address...' value={address} onChange={addressHandleChange}></input>
        <input type='text' className={mystyle.myInputs} placeholder='Enter phone...' value={phone} onChange={phoneHandleChange}></input>
        <input type='text' className={mystyle.myInputs} placeholder='Enter bio...' value={bio} onChange={bioHandleChange}></input>
        <input type='text' className={mystyle.myInputs} placeholder='Enter image...' value={image} onChange={imageHandleChange}></input>
        {UpdatedId != ""?(
          <button className={mystyle.MyBtn} onClick={updateData}>Update</button>
        ):(
          <button className={mystyle.MyBtn} onClick={mySubmitFunction}>Submit</button>
        )}
      </div>
      {IsSubmit?(
        <div>
            The result : 
            <p>Username : {username}</p>
            <p>address : {address}</p>
            <p>bio : {bio}</p>
            <p>Phone : {phone}</p>
            <p>Image : {image}</p>
        </div>
      ):(
        <span></span>
      )}
      <br/>
      
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
      {Shops.map((data,index)=>(
          <div className={mystyle.myBox}>
              <span onClick={(e)=>EditFunction(e,data)} className={mystyle.ImgEdit}>Edit</span>
              <span onClick={(e)=>DeleteFunction(e,data)} className={mystyle.ImgDelete}>Del</span>
              <div className={mystyle.imageGalleryContainer}>
                <img src={`./images/`+data.image} className={mystyle.imageGalleryImgs}></img>    
              </div>
              <div className={mystyle.imageGalleryFooter}>
                {data.name}
                <p>{data.address}Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
          </div>
      ))}
    </div>
  );
}

export default Home;
