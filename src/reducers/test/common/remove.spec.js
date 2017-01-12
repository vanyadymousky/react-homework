import commonReducer from '../../common'
import state from './stub'

describe('Common reducer removeFromFlat', function () {
    describe('When user tries to removeFromFlat defining ids', function () {
        it('should remove it successfully', function () {
            const afterRemove = commonReducer.removeFromFlat(state, [2, 3])
            expect(afterRemove.results).toEqual([1, 4])
            expect(afterRemove.entities).toEqual({
                1: {
                    id: 1,
                    categoryId: 10
                },
                4: {
                    id: 4,
                    categoryId: 12
                }
            })
        })
    })

    describe('When user tries to removeFromFlat defining ids and custom property', function () {
        it('should remove it successfully', function () {
            const afterRemove = commonReducer.removeFromFlat(state, [10, 12], 'categoryId')
            expect(afterRemove.results).toEqual([3])
            expect(afterRemove.entities).toEqual({
                3: {
                    id: 3,
                    categoryId: 11
                }
            })
        })
    })
})
