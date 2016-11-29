import './progress.scss';

const PROGRESS_ID = 'p1';

class Progress extends React.Component {

    update() {
        const progress = parseInt(this.props.progress / this.props.total * 100, 10);
        this.$progress.MaterialProgress.setProgress(progress);
    }

    futureUpdate() {
        this.$progress.addEventListener('mdl-componentupgraded', () => this.update());
    }

    componentDidUpdate() {
        this.update();
    }

    componentDidMount() {
        this.futureUpdate();
    }

    render() {
        return <div
            id={PROGRESS_ID}
            ref={progress => { this.$progress = progress; }}
            className="task-progress mdl-progress mdl-js-progress"></div>;
    }
}

export default Progress;
