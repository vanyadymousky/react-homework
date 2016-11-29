import getUniqueId from 'src/components/utils/unique-id';

let mockCategoryId = getUniqueId();
let mockCategoryId2 = getUniqueId();
let mockCategoryId5 = getUniqueId();
let mockCategoryId6 = getUniqueId();
let mockCategoryId7 = getUniqueId();
let TaskData = [
    {
        id: mockCategoryId,
        name: 'category1'
    },
    {
        id: mockCategoryId2,
        name: 'category2_ch_1',
        parentId: mockCategoryId
    },
    {
        id: getUniqueId(),
        name: 'category3_ch_2',
        parentId: mockCategoryId2
    },
    {
        id: getUniqueId(),
        name: 'category4_ch_2',
        parentId: mockCategoryId2
    },
    {
        id: mockCategoryId5,
        name: 'category5'
    },
    {
        id: mockCategoryId6,
        name: 'category6_ch_5',
        parentId: mockCategoryId5
    },
    {
        id: mockCategoryId7,
        name: 'category7_ch_6',
        parentId: mockCategoryId6
    },
    {
        id: getUniqueId(),
        name: 'category8_ch_7',
        parentId: mockCategoryId7
    }
];
let SubtaskData = [
    {
        id: getUniqueId(),
        taskId: mockCategoryId,
        summary: 'This is test task',
        description: 'This is test taskThis is test taskThis is test taskThis is test task',
        isDone: false
    },
    {
        id: getUniqueId(),
        taskId: mockCategoryId,
        summary: 'This is test task 2',
        description: 'This is test taskThis is test taskThis is test taskThis is test task',
        isDone: false
    },
    {
        id: getUniqueId(),
        taskId: mockCategoryId,
        summary: 'This is test task 3',
        description: 'This is test taskThis is test taskThis is test taskThis is test task',
        isDone: true
    },
    {
        id: getUniqueId(),
        taskId: mockCategoryId2,
        summary: 'This is test task',
        description: 'This is test taskThis is test taskThis is test taskThis is test task',
        isDone: false
    },
    {
        id: getUniqueId(),
        taskId: mockCategoryId2,
        summary: 'This is test task 2',
        description: 'This is test taskThis is test taskThis is test taskThis is test task',
        isDone: false
    },
    {
        id: getUniqueId(),
        taskId: mockCategoryId5,
        summary: 'This is test task 3',
        description: 'This is test taskThis is test taskThis is test taskThis is test task',
        isDone: false
    }
];
export { TaskData, SubtaskData };

