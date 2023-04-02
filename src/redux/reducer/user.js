import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data:{
        id:""
    }
};

const userSlice = createSlice({
        name:"user",
        initialState,
        reducers : {
            setUser : (state, action)=>{
                state.data = action.payload
            },
            addTask: (state, action)=>{
                state.data.tasks = [...state.data.tasks,action.payload]
            },
            removeTask : (state, action)=>{
                state.data.tasks = state.data.tasks.filter((el)=>el.id !== action.payload.id)
            }
        }
    }
);

export const {setUser,addTask,removeTask} = userSlice.actions;
export default userSlice.reducer