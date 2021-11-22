import React, {useState} from 'react'

const LoginForm = ({ Login, error, lclasss }) => {
    const [details, setDetails] = useState({name: '', password: ''})

    const submitHandler = e => {
        e.preventDefault()

        Login(details)
    }

    return (
        <form onSubmit={submitHandler} className={lclasss}>
            <div className="container">
                <div className="wrapper">
                    <h1>Welcome to The Portal</h1>

                    <input type="text" name="name" id="name" placeholder="Enter Name" autoComplete="false" 
                    onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/> <br />

                    <input type="password" name="password" id="password" placeholder="Enter Password"
                    onChange={e => setDetails({...details, password: e.target.value})} value={details.password} autoComplete="false"/> <br />

                    <input type="submit" value="LOGIN" className="submit"/>
                </div>
            </div>
        </form>
    )
}

export default LoginForm
