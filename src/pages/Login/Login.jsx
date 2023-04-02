import React from 'react';
import Form from "../../comonents/Form/Form";
import {useDispatch} from "react-redux";
import {signInWithEmailAndPassword, getAuth} from "firebase/auth";
import {setUser} from "../../redux/reducer/user";
import {getFirestore, doc, getDoc} from "firebase/firestore";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const db = getFirestore();

     async function getDocumentEmpty(user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await  getDoc(docRef);

        dispatch(setUser({
            ...docSnap.data()
        }))
         navigate("/home")
        console.log(docSnap.data())
    }

    const handleLogin = (email, password) =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                getDocumentEmpty(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage,errorCode)
            })
    }
    return (
        <Form title="Вход" handleClick={handleLogin} />
    );
};

export default Login;