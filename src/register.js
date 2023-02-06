import React from 'react'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function Register(){
    return(
       <body>
        <div class="registrationForm">
            <form>
                <input type="text" name="emailAddress" placeholder='enter your email address'/>
                <input type="text" name="password" placeholder='enter your password'/> 
                <button class="btn" type="submit" name="register">Submit</button> 
            </form>
        </div>
       </body>
    );
}

export default Register;