import { ModalRegistro } from '../modal/modalRegistro';
import { ModalEditar } from '../modal/modalEditar';
import { PropTypes } from 'prop-types'

export function UserForm( {typeForm, isOpen, onClose, handleChange, handleSubmit, userData} ) {
    
    const textButtonSubmit = typeForm === 'edit' ? 'Guardar' : 'Agregar';

    if (typeForm === 'edit') {
        return (
            <ModalEditar isOpen={isOpen} onClose={onClose}>
                <form className="form-user">
                    <label className="label-user">
                        User Name:
                        <input onChange={handleChange} className="input-username" value={userData.userName} type="text" name="userName" required />
                    </label>
                    <label className="label-user">
                        Name:
                        <input onChange={handleChange} className="input-name" value={userData.name} type="text" name="name" required />
                    </label>
                    <label className="label-user">
                        Email:
                        <input onChange={handleChange} className="input-email" value={userData.email} type="email" name="email" required />
                    </label>
                    <button onClick={handleSubmit} className="btn-agregar">{textButtonSubmit}</button>
                </form>
            </ModalEditar>
        ) 
    }

    return (
        <ModalRegistro isOpen={isOpen} onClose={onClose}>
            <form className="form-user">
                <label className="label-user">
                    User Name:
                    <input onChange={handleChange} className="input-username" type="text" name="userName" required />
                </label>
                <label className="label-user">
                    Name:
                    <input onChange={handleChange} className="input-name" type="text" name="name" required />
                </label>
                <label className="label-user">
                    Email:
                    <input onChange={handleChange} className="input-email" type="email" name="email" required />
                </label>
                <button onClick={handleSubmit} className="btn-agregar">{textButtonSubmit}</button>
            </form>
        </ModalRegistro>
    )
}

UserForm.propTypes = {
    typeForm: PropTypes.oneOf(['edit', 'add']).isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    userData: PropTypes.shape({
        id: PropTypes.number,
        userName: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
    }),
}