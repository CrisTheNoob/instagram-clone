import React, {useState} from 'react';
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className='login'>
      <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="" />
      <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' value={email} />
      <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' value={password} />
      <button>Log In</button>
    </div>
  )
}

export default Login
