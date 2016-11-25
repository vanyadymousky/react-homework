import './controls.scss';
import AddItem from 'src/components/custom/add-item/add-item';

class Controls extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="mdl-grid todo-controls">
            <div className="mdl-cell mdl-cell--3-col mdl-cell--12-phone">
                <AddItem label="Add category" onSubmit={this.props.onAddCategory} />
            </div>
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-cell mdl-cell--3-col mdl-cell--12-phone">
                <AddItem label="Another input" onSubmit={this.props.onAddSomething} />
            </div>
        </div>;
    }
}

export default Controls;
