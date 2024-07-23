import { useState } from 'react';

import { UserList } from "./components/UserList";
import { UserForm } from "./components/UserForm";

export function App() {

    const [listUsers, setListUsers] = useState(() => {
        const users = localStorage.getItem('users');
        return JSON.parse(users);
    })

    const [isOpenModalRegistro, setIsOpenModalRegistro] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const openModalRegistro = () => {
        setIsOpenModalRegistro(true);
        setIsDisabled(true);
    }
    const closeModalRegistro = () => {
        setIsOpenModalRegistro(false);
        setIsDisabled(false);
    }

    const [formData, setFormData] = useState(
        {
            id: 0,
            userName: '',
            name: '',
            email: '',
        }
    );

    const addUser = () => {
        const newUsers = [...listUsers, { ...formData, id: listUsers.length + 1 }]
        setListUsers(newUsers)
        localStorage.setItem('users', JSON.stringify(newUsers))
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    return (
        <>
            <h1>Usuarios: </h1>
            <br />
            {/* Aqui se mostraran los usuarios. */}
            <UserList users={listUsers} />
            <UserForm
                typeForm={'add'}
                isOpen={isOpenModalRegistro}
                onClose={closeModalRegistro}
                handleChange={handleChange}
                handleSubmit={addUser} />

            <button onClick={openModalRegistro} className="add-button" disabled={isDisabled}>➕</button>
        </>
    );
}
