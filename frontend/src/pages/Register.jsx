import { React, useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'


function Register() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    })

    const { name, surname, email, username, password, confirmPassword } = formData;

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
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>

            <section className='form'>
                <form onSubmit={onSubmit}></form>
                <form>
                    <div className='form-group'>
                        <input 
                            type="text" 
                            className="form-control" 
                            id='name' 
                            name='name' 
                            value={name} 
                            placeholder='Enter your name' 
                            onChange={onChange} 
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type="text" 
                            className="form-control" 
                            id='surname' 
                            name='surname' 
                            value={surname} 
                            placeholder='Enter your surname' 
                            onChange={onChange} 
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type="text" 
                            className="form-control" 
                            id='email' 
                            name='email' 
                            value={email} 
                            placeholder='Enter your email' 
                            onChange={onChange} 
                        />
                    </div>
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
                    <div className='form-group'>
                        <input 
                            type="text" 
                            className="form-control" 
                            id='confirmPassword' 
                            name='confirmPassword' 
                            value={confirmPassword} 
                            placeholder='Confirm password' 
                            onChange={onChange} 
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className='btn btn-block'>Create</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register