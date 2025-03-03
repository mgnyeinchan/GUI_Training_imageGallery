import logo from './logo.svg';
import './App.css';
import mystyle from './css/mystyle.module.css';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
function App() {
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
