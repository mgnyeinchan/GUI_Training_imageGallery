import mystyle from '../../css/mystyle.module.css';
function Navigation(){
    return (
        <div className={mystyle.NavigationContainer}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li style={{float: 'right'}}><a href="/Login">Login</a></li>
            </ul>
      </div>
    )
}
export default Navigation;