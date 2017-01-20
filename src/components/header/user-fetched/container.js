import UserFetched from './user-fetched'
import { connect } from 'react-redux'
import { fetchUser } from 'src/actions/users'

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUser('vanyadymousky'))
})

const UserFetchedContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserFetched)

export default UserFetchedContainer
