import _ from 'underscore'
import getNextEntityId from 'src/utils/next-entity-id'

export default {

    addToFlat(state, data, updaterFunc) {
        const id = getNextEntityId(state)
        return {
            ...state,
            results: state.results.concat(id),
            entities: {
                ...state.entities,
                [id]: updaterFunc({ id }, data)
            }
        }
    },

    removeFromFlat(state, idsToRemove, customProperty) {
        if (customProperty) {
            const foundEntities = _.filter(state.entities, entity => idsToRemove.indexOf(entity[customProperty]) !== -1)
            idsToRemove = _.pluck(foundEntities, 'id')
        }

        return {
            ...state,
            results: _.without(state.results, ...idsToRemove),
            entities: _.omit(state.entities, idsToRemove)
        }
    }
}
