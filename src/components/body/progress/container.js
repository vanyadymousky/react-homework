import { connect } from 'react-redux'
import _ from 'underscore'

import Progress from './progress'

const mapStateToProps = state => ({
    progressValue: parseInt(
        _.size(_.filter(state.tasks.entities, task => task.isDone)) / state.tasks.results.length * 100, 10)
})

const ProgressContainer = connect(
    mapStateToProps,
    null
)(Progress)

export default ProgressContainer
