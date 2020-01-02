const testDataToDo = [
    {
        title: 'list empty',
        unitTest: [],
        result: [undefined],
    },
    {
        title: 'new item',
        unitTest: ['todo'],
        result: ['todo', undefined],
    },
    {
        title: 'remove item',
        unitTest: ['todo', ''],
        result: ['todo', undefined],
    },
];

