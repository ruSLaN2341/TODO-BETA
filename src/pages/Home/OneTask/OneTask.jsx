import React, {useState} from 'react';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./oneTask.scss"
import {doc, getFirestore, updateDoc} from "firebase/firestore";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {setUser} from "../../../redux/reducer/user";

const OneTask = ({item, data, path}) => {
    const db = getFirestore();

    const washingtonRef = doc(db, "users", data.id);

    const dispatch = useDispatch()

    const [text,setText] = useState("")

    const isCheckedUpdate = () => {
        const a =  data.tasks.map((el)=>{
            if(el.id === item.id){
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
        toast("complete isCheckedUpdate")
    };

    const subTitleUpdate = () => {
        const a =  data.tasks.map((el)=>{
            if(el.id === item.id){
                return {
                    ...el,
                    taskSubtitle: text
                }
            }
            return el
        })
        console.log(a)
        updateDoc(path, {
            ...data,
            tasks: a
        });
        dispatch(setUser({
            ...data,
            tasks: a
        }))
        toast("complete subTitleUpdate")
    }

    return (
        <div className="oneTask">
            <FormControlLabel control={<Checkbox checked={data.tasks.filter((el)=>el.id === item.id)[0].isComplete} onChange={()=>isCheckedUpdate()}/>} label={item.taskTitle}/>
            <textarea defaultValue={item.taskSubtitle} onChange={(e)=>{setText(e.target.value)}}  id="w3review" name="w3review" rows="4" cols="50"/>
            <button type={"button"} onClick={()=>subTitleUpdate()}>Save</button>
        </div>
    );
};

export default OneTask;