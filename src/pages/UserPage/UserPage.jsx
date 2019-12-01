import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Hello from '../../components/Hello';
import Loader from '../../components/Loader';
import styles from './UserPage.css';

class UserPage extends PureComponent {
    static propTypes = {
        user: PropTypes.arrayOf(PropTypes.shape({})),
        fetchUserById: PropTypes.func.isRequired,
        userId: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        user: null,
    };

    componentDidMount() {
        this.props.fetchUserById(this.props.userId)
    }

    render() {
        const { user, loading } = this.props;
        return (
            <div>
                <h2 className={styles.title}>User Page</h2>
                <Hello name='you are on the user page' />
                <Loader loading={loading} />
                <pre>{JSON.stringify(user, null, 2)}</pre>
            </div>
        );
    }
}

export default UserPage;