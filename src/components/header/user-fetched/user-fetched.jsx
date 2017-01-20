import './user-fetched.scss'

export default class UserFetched extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchUser()
    }

    getUserData() {
        return this.props.user.fetching ?
            'User data is fetching, please wait...' :
            <span>Login: {this.props.user.login} ID: {this.props.user.id}</span>
    }

    getUserAvatar() {
        return `url(${this.props.user.avatar})`
    }

    render() {
        return <div className="user-fetched">
            <div className="user-avatar" style={{backgroundImage: this.getUserAvatar()}}></div>
            {this.getUserData()}
        </div>
    }
}
