import './Navigation.css'
const Navigation =() =>{
   
     return(

     <nav>
       <div className='logo'>
         <img src="./images/logo.jpg" alt="logo" height={70} width={70}></img>
       </div>
         <ul>
           <li href="#">MENU</li>
           <li href="#">LOCTION</li>
           <li href="#">ABOUT</li>
           <li href="#">CONTACT</li>
         </ul>
         <button className='logo-btn'>Login</button>
       
     </nav>

     );

};

  export default Navigation;