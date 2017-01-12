import { connect } from 'react-redux'

import Search from './search'
import { updateSearchQuery } from 'src/actions/search-query'

const mapStateToProps = state => ({
    searchQuery: state.searchQuery
})

const mapDispatchToProps = dispatch => ({
    onSearchUpdate: searchQuery => dispatch(updateSearchQuery(searchQuery))
})

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)

export default SearchContainer
