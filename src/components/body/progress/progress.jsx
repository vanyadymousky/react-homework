import './progress.scss';

import getUniqueId from 'src/utils/unique-id'

const COMPONENT_UPDATED_EVENT = 'mdl-componentupgraded'

class Progress extends React.Component {

    constructor(props) {
        super(props)
        this.id = `progress-${getUniqueId()}`
    }

    update() {
        this.$progress.MaterialProgress.setProgress(this.props.progressValue);
    }

    componentDidUpdate() {
        this.update();
    }

    componentDidMount() {
        this.$progress.addEventListener(COMPONENT_UPDATED_EVENT, () => this.update());
    }

    componentWillUnmount() {
        this.$progress.removeEventListener(COMPONENT_UPDATED_EVENT);
    }

    render() {
        return <div
            id={this.id}
            ref={progress => this.$progress = progress}
            className="task-progress mdl-progress mdl-js-progress"></div>;
    }
}

Progress.propTypes = {
    progressValue: React.PropTypes.number
}

export default Progress;
