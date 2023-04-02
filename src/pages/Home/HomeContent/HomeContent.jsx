import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import OneTask from "../OneTask/OneTask";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./homeContent.scss"
import {doc, getFirestore, updateDoc} from "firebase/firestore";
import {toast} from "react-toastify";
import {setUser} from "../../../redux/reducer/user";

const HomeContent = () => {
    const dispatch = useDispatch()

    const db = getFirestore();

    const {data} = useSelector((state)=>state.user)

    const {task} = useSelector((state)=>state.task)

    const washingtonRef = doc(db, "users", data.id);

    const isCheckedUpdate = (id) =>{
        const a =  data.tasks.map((el)=>{
            if(el.id === id){
                return {
                    ...el,
                    isComplete: !el.isComplete
                }
            }
            return el
        })
        updateDoc(washingtonRef, {
            ...data,
            tasks: a
        });
        dispatch(setUser({
            ...data,
            tasks: a
        }))
    }

    return (
        <section className="homeContent">
            <div className="container">
                {
                    task !== "all" ? <OneTask item={task} data={data} path={washingtonRef} func={isCheckedUpdate}/> : (
                        data.tasks.map((item)=>(
                            <FormControlLabel key={item.id} control={<Checkbox checked={item.isComplete} onChange={()=>isCheckedUpdate(item.id)}/>} label={item.taskTitle}/>
                        ))
                    )
                }
            </div>
        </section>
    );
};

export default HomeContent;