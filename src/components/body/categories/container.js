import { connect } from 'react-redux'
import Categories from './categories'

const mapStateToProps = state => {
    return {
        categories: state.categories.entities
    }
}

export default connect(
    mapStateToProps
)(Categories)
