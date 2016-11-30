import './inline-edit.scss';
import AddEditInput from 'src/components/custom/add-item/add-item';

class InlineEdit extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    onSubmit(value) {
        this.props.onSubmit(value, this.props.id);
        this.hideInline();
    }

    toggleHidden(force) {
        this.inlineEdit.classList.toggle('hidden', force);
    }

    hideInline() {
        this.toggleHidden(true);
    }

    activate() {
        this.toggleHidden(false);
    }

    render() {
        return <div ref={inlineEdit => this.inlineEdit = inlineEdit} className="inline-edit-control hidden">
            <AddEditInput onSubmit={this.onSubmit.bind(this)}
                          onCancel={this.hideInline.bind(this)}
                          value={this.props.value}
                          label={this.props.label} />
        </div>;
    }
}

export default InlineEdit;
