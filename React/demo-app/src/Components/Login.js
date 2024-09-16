import React,{useState} from 'react';
// import axios form "axios";
function Login() {
  const [user,setUser]=useState({email:"",password:""});
  let name,value;
  const handlechange = (e) => {
    name=e.target.name;
    value=e.target.value;
setUser({...user,[name]:value})
  }
const onsubmit=(e)=>{
  e.preventDefault();
  console.log(user);
  //call your API here with user credentials

}

  return (
    <div>
        <form onSubmit={onsubmit}>
            <label>Username:</label><br/>
            <input type="email" name="email" onChange={handlechange}/><br/>
            <label>Password:</label><br/>
            <input type="password" name="password" onChange={handlechange}/><br/>
            <button type="submit" >Login</button>
        </form>
    </div>
  )
}

export default Login