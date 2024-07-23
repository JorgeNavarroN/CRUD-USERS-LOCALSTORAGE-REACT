import { useState } from 'react'
import { UserForm } from './UserForm';
import { ModalValidateDelete } from '../modal/modalValidateDelete';
import { PropTypes } from 'prop-types'

export function UserItem({ id, userName, name, email }) {
    const [isOpenModalEditar, setIsOpenModalEditar] = useState(false);
    const [isOpenModalDeleteValidate, setIsOpenModalDeleteValidate] = useState(false);

    const [formDataUser, setFormDataUser] = useState({
        id: id,
        userName: userName,
        name: name,
        email: email
    });

    const openModalEditar = () => {
        setIsOpenModalEditar(true);
    }
    const closeModalEditar = () => {
        setIsOpenModalEditar(false);
    }
    const openModalDeleteValidate = () => {
        setIsOpenModalDeleteValidate(true);
    }
    const closeModalDeleteValidate = () => {
        setIsOpenModalDeleteValidate(false);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDataUser({ ...formDataUser, [name]: value });
    };

    const saveUser = () => {
        setFormDataUser({ ...formDataUser });
        const users = JSON.parse(localStorage.getItem('users'));
        const usersUpdated = users.map(user => {
            if (user.id === id) {
                user.userName = formDataUser.userName;
                user.name = formDataUser.name;
                user.email = formDataUser.email;
            }
            return user;
        });
        localStorage.setItem('users', JSON.stringify(usersUpdated));
    }

    const deleteUser = () => {
        const users = JSON.parse(localStorage.getItem('users'));
        const usersUpdated = users.filter(user => user.id !== id);
        localStorage.setItem('users', JSON.stringify(usersUpdated));
    }

    return (
        <>
            <article className="content-users">
                <header className="header-users">
                    <img className="img-fotoprofile-item" src={`https://unavatar.io/youtube/${userName}`} alt={`imagen de ${userName}`} />
                    <div className="content-data-user">
                        <strong>{name}</strong>
                        <span>{email}</span>
                    </div>
                </header>
                <aside className="content-buttons">
                    <button onClick={openModalEditar} className="btn-edit">🖋️ Editar</button>
                    <button onClick={openModalDeleteValidate} className="btn-delete">✖️ Eliminar</button>
                </aside>
            </article>
            <ModalValidateDelete isOpen={isOpenModalDeleteValidate} onClose={closeModalDeleteValidate}>
                <img className="img-fotoprofile-item" src={`https://unavatar.io/youtube/${userName}`} alt={`imagen de ${userName}`} />
                <p>¿Estás seguro de eliminar el usuario <strong>{formDataUser.name}</strong>?</p>
                <span className='content-buttons-fill'>
                    <button onClick={deleteUser} className='btn-deleteItem' type='submit'>Eliminar</button>
                    <button className='btn-cancel' onClick={closeModalDeleteValidate}>Cancelar</button>
                </span>
            </ModalValidateDelete>
            <UserForm
                typeForm={'edit'}
                isOpen={isOpenModalEditar}
                onClose={closeModalEditar}
                handleChange={handleChange}
                handleSubmit={saveUser}
                userData={formDataUser} />
        </>
    )
}

UserItem.propTypes = {
    id: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}