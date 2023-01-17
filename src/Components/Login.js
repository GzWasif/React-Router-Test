/* eslint-disable no-unused-vars */
import {useState} from 'react';
import { useAuth } from './Auth';
import { useNavigate } from 'react-router-dom';
function Login () {
    const [user,setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
    console.log(auth);

    const handleLogin = () => {
        auth.login(user);
        navigate('/profile',{replace: true});

    }
    return ( 
        <div>
             <label>
                Username:{' '}
                <input type='text' onChange={(e) => setUser(e.target.value)} /> 
             </label>
             <button onClick={handleLogin}>Login</button>
        </div>
     );
}

export default Login ;