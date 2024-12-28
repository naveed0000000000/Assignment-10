import React from 'react'

const Form = () => {
  return (
    <div className="Main">

<div className="sub">


      <form >
            <h2>Sign up</h2>
            <br></br>
            <p>Already have account?
            <a href="#"> login here</a> </p>

            <p>Name <input type="text" placeholder= "Enter your name here"></input>  </p>
            <p>Email id <input type="email" placeholder= "Enter your email here"></input>  </p>
            <p>Password <input type="password" placeholder= "Enter your password here"></input>  </p>
<br></br>

            <label className="abc">
            <input  type="checkbox"></input>
            <p>By signing up you agree to receive updates and special Offers </p>
        </label>
            
           
           
            <br></br>
            <br></br>
            <button>Submit</button>
      </form>

<img src="https://static.vecteezy.com/system/resources/thumbnails/002/264/822/small/sign-up-process-vector.jpg"></img>

      </div>

      </div>




  )
}

export default Form
