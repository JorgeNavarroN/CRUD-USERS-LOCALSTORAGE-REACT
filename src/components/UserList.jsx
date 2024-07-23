import { UserItem } from "./UserItem";
import { PropTypes } from 'prop-types'

export function UserList({ users }) {

    if (users.length === 0) {
        return (
            <section className="content-app">
                <h2>No hay usuarios</h2>
            </section>
        )
    }
    return (
        <section className="content-app">
            {users.map((user) => {
                return (
                    <UserItem
                        key={user.id}
                        id={user.id}
                        userName={user.userName}
                        name={user.name}
                        email={user.email}
                    />
                )
            })}
        </section>
    )
}

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        userName: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    })).isRequired
}