import {configureStore,combineReducers} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import user from "./reducer/user"
import task from "./reducer/Task"

const rootReducer = combineReducers({
    user:user,
    task:task
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    // blacklist:["user","task"]
    whitelist:["user","task"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return  getDefaultMiddleware(
            {
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
                },
            }
        ).concat()
    }
})
export const persistor = persistStore(store)

export default store