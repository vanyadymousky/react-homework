import './inline-edit.scss';
import AddEditInput from 'src/components/custom/add-item/add-item';

class InlineEdit extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit(value) {
        this.props.onSubmit(value, this.props.id);
        this.hideInline();
    }

    hideInline() {
        this.inlineEdit.classList.add('invisible');
    }

    activate() {
        this.inlineEdit.classList.remove('invisible');
    }

    render() {
        return <div ref={inlineEdit => this.inlineEdit = inlineEdit} className="inline-edit-control invisible">
            <AddEditInput onSubmit={this.onSubmit.bind(this)}
                          onCancel={this.hideInline.bind(this)}
                          value={this.props.value}
                          label={this.props.label} />
        </div>;
    }
}

export default InlineEdit;
