import { GithubAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";



const Login = () => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [users, setUsers] = useState(null);
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUsers(user);
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const handleGithubSignIn = ()=> {
        // aikhane sudho 2nd perameter ta change hoisa.
        signInWithPopup(auth, githubProvider )
        .then(result => {
            const logedUser = result.user;
            console.log(logedUser);
            setUsers(logedUser)
        })
        .catch(error => {
            console.log("Eroo hoissa", error)
        })
    }

    // kono user signIn korle pore auotomatic login kore nei. So akivabe signOut korar jonno:
    const handleSignOut = () => {
        signOut(auth)
            .then(result => setUsers(result) )  // auth er value delete kore diba signOut method.
            .catch(err => console.log(err))

    }

    return (

        <div>
            {users &&
                <div>
                    <h2>User Name: {users?.displayName}</h2>
                    <h3>Email: {users.email}</h3>
                    <img src={users.photoURL} alt="" />
                </div>
            }
            {/* {users ? logout : login} */}
            {
                users ? <button onClick={handleSignOut}>Logout button</button> :
                // ternary operatior a aksathe 2 ta element likha jaina.
                    <div>
                        <button onClick={handleGoogleSignIn}>Google Login</button>
                        <button onClick={handleGithubSignIn}>Github Login</button>
                    </div>
            }


        </div>
    );
};

export default Login;