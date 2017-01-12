
class Button extends React.PureComponent {
    render() {
        return <button type="button"
                       className="mdl-button mdl-js-button mdl-button--icon"
                       onClick={this.props.onClick}>
            <i className="material-icons">{this.props.icon}</i>
        </button>
    }
}

Button.propTypes = {
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func
}

export default Button
