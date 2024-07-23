import PropTypes from 'prop-types'

export const ModalValidateDelete = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className='modal-overlay'>
            <dialog open className='modal-container'>
                <h2>Eliminar usuario:</h2>
                <button className='close-button' onClick={onClose}>
                    &times;
                </button>
                <form action="">
                    <section className='modal-content-deleteuser'>
                        {children}
                    </section>
                </form>
            </dialog>
        </div >
    )
}

ModalValidateDelete.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}