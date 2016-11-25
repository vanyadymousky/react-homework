import './progress.scss';

const PROGRESS_ID = 'p1';

class Progress extends React.Component {

    update(progress) {
        progress = parseInt(progress, 10);
        this.$progress.MaterialProgress.setProgress(progress);
    }

    futureUpdate(progress) {
        this.$progress.addEventListener('mdl-componentupgraded', () => this.update(progress));
    }

    componentDidMount() {
        this.futureUpdate(this.props.progress / this.props.total * 100);
    }

    render() {
        return <div
            id={PROGRESS_ID}
            ref={progress => { this.$progress = progress; }}
            className="task-progress mdl-progress mdl-js-progress"></div>;
    }
}

export default Progress;
