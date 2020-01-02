export const toDoChange = (arrayToDo: Array<String |undefined>, contentToDo?: string, indexToDo?: number): any => {
    let newListToDo: Array<String |undefined> = [];
    const sizeArray: number = arrayToDo.length;
    if (indexToDo !== undefined) arrayToDo[indexToDo] = contentToDo;
    newListToDo = arrayToDo.filter((todo: String  |undefined) => todo !== "")
    if (newListToDo[sizeArray - 1] !== '') {
        newListToDo.push('');
    }
    return newListToDo;
}