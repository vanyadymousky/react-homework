import './collapse.scss';

class Collapse extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.expanded
        };
        this.toggle = this.toggle.bind(this);
    }

    componentDidUpdate() {
        this.toggleControls();
    }

    componentDidMount() {
        this.toggleControls();
    }

    toggleControls() {
        this.expand.classList.toggle('hidden', !this.state.expanded);
        this.collapse.classList.toggle('hidden', this.state.expanded);
    }

    toggle() {
        let block = document.querySelector(this.props.block);
        this.setState({
            expanded: !this.state.expanded
        }, () => block.classList.toggle('hidden', this.state.expanded));
    }

    render() {
        return <div className="expandable-controls">
            <i className="material-icons" ref={expand => this.expand = expand}
               onClick={this.toggle}>expand_more</i>
            <i className="material-icons" ref={collapse => this.collapse = collapse}
               onClick={this.toggle}>expand_less</i>
        </div>
    }
}

export default Collapse;
