import React , {useState,useEffect} from "react";

function Login () {

    const[email,setEmail] =  useState("");
    const[password,setPassword] = useState("");
    const[loggedin,setLoggedin] = useState(false);
    

    // const VaildEmail = "admin@admin.com";
    // const VaildPass = "admin@123";

    const UserData = [
        {email:"admin@admin.com" , password:"admin123"},
        {email:"ajay@admin.com" , password:"1234"},
        {email:"vishwak@admin.com" , password:"2323"},
        {email:"vignash@admin.com" , password:"amin1234"},
        {email:"vignesh@admin.com" , password:"98756"},
    ]


    useEffect( () => {
        
        const user =localStorage.getItem("user");

        if(user) {
            setLoggedin(true);
        }
       
    },[]);

    const handlelogin = (a) => {
        a.preventDefault();

        const userFound = UserData.find(
            (user) => user.email === email && user.password === password
        );

        if(userFound) {
            localStorage.setItem("user",email);
            setLoggedin(true);
        } else {
            alert("Invaild DEtaisl");
        }
    }

    const handlelogout = () => {
        localStorage.removeItem("user");
        setLoggedin(false);
        setEmail("");
        setPassword("");
    }

    return(
        <div>
            <h1>Login Using Local Storage</h1>

            <h3>{loggedin ? "welcome back !":"Login"}</h3>

            {loggedin ?(
                <div>
                    <p>Your are Currently Loged as {localStorage.getItem("user")}</p>
                    <button onClick={handlelogout}>Logout</button>
                </div>
            ) : (
                <form onSubmit={handlelogin}>
                    <input type="email" placeholder="Enter Your Email" value={email} onChange={(a) => setEmail(a.target.value)} />
                    <input type="password" placeholder="Enter Your Password" value={password} onChange={(a) => setPassword(a.target.value)} />

                    
                    <button type="sumbit">Login</button>

                </form>
            )}
        </div>
    );

}

export default Login