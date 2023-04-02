import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./form.scss"


const Form = ({title,handleClick}) => {
    const [userData,setUserData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (event) =>{
        event.preventDefault()
        const {name,value} = event.target;
        setUserData((prev)=>{
            return {...prev,[name]: value}
        })
    }
    return (
        <div className="form">
            <form className="form__form">
                <h2 className="form__title">{title}</h2>
                <input
                    className="form__field"
                    required={true}
                    name="email"
                    value={userData.email}
                    onChange={(e)=>handleChange(e)}
                    type="email"
                    placeholder="Введите почту"
                />
                <input
                    className="form__field"
                    required={true}
                    name="password"
                    value={userData.password}
                    onChange={(e)=>handleChange(e)}
                    type="password"
                    placeholder="Введите пароль"
                />
                <button
                    className="form__btn"
                    onClick={(event)=>{
                        handleClick(userData.email, userData.password)
                    }}
                    type="button">
                    {title === "Вход" ? "Войти" : "Зарегистрироваться"}
                </button>
                {
                    title === "Вход" ? <p className="form__text">Если у вас нет аккаунта тогда {<Link to={"/register"}>зарегистрируйтесь</Link>}</p>
                        : <p className="form__text">У вас уже есть аккаунт? {<Link to={"/login"}>Вход</Link>}</p>

                }
            </form>
        </div>
    );
};

export default Form;