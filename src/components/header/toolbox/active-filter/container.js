import { connect } from 'react-redux'

import ActiveFilter from './active-filter'
import { SHOW_ALL, SHOW_ACTIVE } from 'src/actions/visibility-filter'
import { toggleVisibility } from 'src/actions/visibility-filter'

const mapDispatchToProps = dispatch => ({
    onToggleVisibility: isChecked => dispatch(toggleVisibility(isChecked ? SHOW_ACTIVE : SHOW_ALL))
})

const ActiveFilterContainer = connect(
    null,
    mapDispatchToProps
)(ActiveFilter)

export default ActiveFilterContainer
