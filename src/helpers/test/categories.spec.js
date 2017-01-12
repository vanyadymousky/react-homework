import { buildCategoryBinaryTreeById, topMostCategory } from '../categories'

const categoriesEntityFlatMap = {
    1: {
        id: 1
    },
    2: {
        id: 2,
        parentId: 1
    },
    3: {
        id: 3,
        parentId: 2
    },
    4: {
        id: 4,
        parentId: 2
    },
    8: {
        id: 8
    },
}

describe('Categories helper', function () {

    describe('When user wants to build category binary tree using category id', function () {

        it('should build it correctly', function () {
            let flatIds = buildCategoryBinaryTreeById(categoriesEntityFlatMap, 1);
            expect(flatIds).toEqual([1, 2, 3, 4])
        })

        it('should return array of single id if category has no children', function () {
            let flatIds8 = buildCategoryBinaryTreeById(categoriesEntityFlatMap, 8);
            expect(flatIds8).toEqual([8])
        })
    })

    describe('When user tries to get topmost categry', function () {
        it('should get it', function () {
            expect(topMostCategory(categoriesEntityFlatMap)).toEqual(1)
        })
    })
})
