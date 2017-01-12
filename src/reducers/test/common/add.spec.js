import commonReducer from '../../common'
import state from './stub'

describe('Common reducer addToFlat', function () {
    describe('When user tries to add new entity via addToFlat', function () {
        it('should succeed', function () {
            const newState = commonReducer.addToFlat(
                state, { categoryId: 14 }, (entity, data) => Object.assign({}, entity,data)
            )
            expect(newState.results).toEqual([1,2,3,4,5])
            expect(newState.entities[5]).toEqual({
                id: 5,
                categoryId: 14
            })
        })
    })
})
