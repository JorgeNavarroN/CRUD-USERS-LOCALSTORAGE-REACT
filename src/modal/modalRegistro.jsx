import PropTypes from 'prop-types'

export const ModalRegistro = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className='modal-overlay'>
            <dialog open className='modal-container'>
                <h2>Agregar usuario:</h2>
                <button className='close-button' onClick={onClose}>
                    &times;
                </button>
                <section className='modal-content'>
                    {children}
                </section>
            </dialog>
        </div>
    )
}

ModalRegistro.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}