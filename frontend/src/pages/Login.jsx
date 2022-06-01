import { React, useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'


function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const { username, password } = formData;

    const onChange = (e) => {
        setFormData( (prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaSignInAlt /> LogIN
                </h1>
                <p>LogIn and start setting goals</p>
            </section>

            <section className='form'>
                <form onSubmit={onSubmit}></form>
                <form>
                    <div className='form-group'>
                        <input 
                            type="text" 
                            className="form-control" 
                            id='username' 
                            name='username' 
                            value={username} 
                            placeholder='Enter your username' 
                            onChange={onChange} 
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type="text" 
                            className="form-control" 
                            id='password' 
                            name='password' 
                            value={password} 
                            placeholder='Password' 
                            onChange={onChange} 
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className='btn btn-block'>LogIN</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login