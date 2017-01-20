import './user-fetched.scss'

export default class UserFetched extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser()
    }

    getIsFetchingText() {
        if (this.props.user.fetching) {
            return 'User data is fetching, please wait...'
        }
    }

    getUserData() {
        if (!this.props.user.fetching) {
            return <span>Login: {this.props.user.login} ID: {this.props.user.id}</span>
        }
    }

    getUserAvatar() {
        return `url(${this.props.user.avatar})`
    }

    render() {
        return <div className="user-fetched">
            <div className="user-avatar" style={{backgroundImage: this.getUserAvatar()}}></div>
            {this.getIsFetchingText()}
            {this.getUserData()}
        </div>
    }
}
