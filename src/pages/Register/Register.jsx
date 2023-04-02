import React from 'react';
import Form from "../../comonents/Form/Form";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {setUser} from "../../redux/reducer/user";
import {useDispatch} from "react-redux";
import {doc, getFirestore, setDoc} from "firebase/firestore";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const db = getFirestore();

    const addDoc = async (dataDoc) =>{
        await setDoc( doc(db, "users", `${dataDoc.id}`), dataDoc)
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage)
            })
        navigate("/home")
    }


    const handleReg = (email, password) =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    tasks:[]
                }))
                addDoc({
                    id:user.uid,
                    email: user.email,
                    tasks:[]
                })
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            })
    }
    return (
        <Form title={"Зарегистрироваться"} handleClick={handleReg} />
    );
};

export default Register;