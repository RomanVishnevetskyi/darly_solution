import React, {useEffect} from 'react';
import './App.css';
import Table from "./components/table/Table";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreator";
import ModalForm from "./components/modal/ModalForm";
import Spiner from "./components/spiner/Spiner";
import FormTest from "./components/form/FormTest";

function App() {
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.user)


    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (isLoading) {
        return <Spiner/>
    }

    if(error){
        return <>
            <h2 className="text-center">{error}</h2>
        </>
    }


    return (
        <div className='App'>
            <Table users={users}/>
            <ModalForm>
                <FormTest/>
            </ModalForm>
        </div>
    );
}

export default App;
