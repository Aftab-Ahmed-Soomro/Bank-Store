import { createStore } from "redux"; 
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { bankReducer } from "./BankReducer";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, bankReducer)

// export const store = createStore(counterReducer);

export let store = createStore(persistedReducer)
export let persistor = persistStore(store)