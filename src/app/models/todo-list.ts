export class TodoItem {
    itemDescription: string;
    isChecked: boolean;
    constructor() {
        this.itemDescription = "";
        this.isChecked = false;
    }
}

// export enum ItemState {
//     InProgress = 0,
//     Done = 1
// }