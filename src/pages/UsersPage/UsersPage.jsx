import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Hello from '../../components/Hello';
import styles from './UsersPage.css';
import Users from '../../components/Users';
import Loader from '../../components/Loader';

class UsersPage extends PureComponent {
    static propTypes = {
        users: PropTypes.arrayOf(PropTypes.shape({})),
        fetchUsers: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
    };
    static defaultProps = {
        users: [],
    };

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { users, loading } = this.props;
        return (
            <div>
                <h2 className={styles.title}>Users Page</h2>
                <Hello name='you are on the Users page'/>
                <Loader loading={loading}/>
                <Users users={users}/>
            </div>
        );
    }
}

export default UsersPage;