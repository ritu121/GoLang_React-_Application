import React ,{useState}from 'react'
import { useNavigate,Link } from 'react-router-dom'
import './regsiter.css'



function SignInComp() {
  const navigate = useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
 
  const SignClick=async(event)=>{
    
    event.preventDefault();
    const response=await fetch('http://localhost:5000/users/login',{
      method:'POST',
      headers:{  
        "Content-Type":'application/json',
      },
      body:JSON.stringify({email,password}),   
    })
    
     
    if (response.status===200){
      alert('Login Successful')
      navigate('./orders')
    }else{
      alert('wrong User Credentials')
    }
  }
 

  return (
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-3 col-lg-4 col-xl-5 colsign card">
      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>

      <form className="mx-1 mx-md-4">
            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input type="email" id="form3Example3c" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)} />
                <label className="form-label" for="form3Example3c">Your Email</label>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input type="password" id="form3Example4c" className="form-control" value={password} 
              onChange={(e)=> setPassword(e.target.value)}/>
                <label className="form-label" for="form3Example4c">Password</label>
              </div>
            </div>



            <div className="form-check d-flex justify-content-center mb-5">

              <p classNameName="forgot-password text-right">
                <Link to="#">Forgot password?</Link>
              </p>
            </div>

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <button type="button" className="btn btn-primary btn-lg" onClick={SignClick}>SignIn</button>

            </div>

          </form> 
      </div>
    </div>
  )
}

export default SignInComp