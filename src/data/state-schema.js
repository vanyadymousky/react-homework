export default {
    visibilityFilter: 'SHOW_ALL',
    searchQuery: '',
    categories: {
        results: [1,2,3,4,5,6,7,8],
        selected: 1,
        entities: {
            1: {
                id: 1,
                name: 'category1'
            },
            2: {
                id: 2,
                name: 'category2_ch_1',
                parentId: 1
            },
            3: {
                id: 3,
                name: 'category3_ch_2',
                parentId: 2
            },
            4: {
                id: 4,
                name: 'category4_ch_2',
                parentId: 2
            },
            5: {
                id: 5,
                name: 'category5'
            },
            6: {
                id: 6,
                name: 'category6_ch_5',
                parentId: 5
            },
            7: {
                id: 7,
                name: 'category7_ch_6',
                parentId: 6
            },
            8: {
                id: 8,
                name: 'category8_ch_7',
                parentId: 7
            },
        }
    },
    tasks: {
        results: [1,2,3,4,5,6],
        entities: {
            1: {
                id: 1,
                categoryId: 1,
                summary: 'This is test taskzz',
                description: 'This is test taskThis is test taskThis is test taskThis is test task',
                isDone: false
            },
            2: {
                id: 2,
                categoryId: 1,
                summary: 'This is test task 2',
                description: 'This is test taskThis is test taskThis is test taskThis is test task',
                isDone: false
            },
            3: {
                id: 3,
                categoryId: 1,
                summary: 'This is test taskzz 3',
                description: 'This is test taskThis is test taskThis is test taskThis is test task',
                isDone: true
            },
            4: {
                id: 4,
                categoryId: 2,
                summary: 'This is test task 4',
                description: 'This is test taskThis is test taskThis is test taskThis is test task',
                isDone: false
            },
            5: {
                id: 5,
                categoryId: 2,
                summary: 'This is test task 5',
                description: 'This is test taskThis is test taskThis is test taskThis is test task',
                isDone: true
            },
            6: {
                id: 6,
                categoryId: 2,
                summary: 'This is test task 6',
                description: 'This is test taskThis is test taskThis is test taskThis is test task',
                isDone: false
            }
        }
    }
}
