import './inline-edit.scss';
import AddEditInput from 'src/components/custom/add-item/add-item';

class InlineEdit extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.hideInline = this.hideInline.bind(this);
    }

    onSubmit(value) {
        this.props.onSubmit(value);
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
            <AddEditInput onSubmit={this.onSubmit}
                          onCancel={this.hideInline}
                          value={this.props.value}
                          label={this.props.label} />
        </div>;
    }
}

export default InlineEdit;
