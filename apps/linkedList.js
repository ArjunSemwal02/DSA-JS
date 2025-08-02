// Practising Linked List

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     size() {
//         let count = 0;

//         let current = this.head;

//         while (current) {
//             count++;
//             current = current.next
//         }

//         return count;
//     }

//     addFirst(value) {
//         const node = new Node(value);
//         node.next = this.head;
//         this.head = node;
//     }

//     addLast(value) {
//         const node = new Node(value);

//         if (this.head == null) {
//             this.head = node;
//             return;
//         }

//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }

//         current.next = node;
//     }

//     addAtIndex(index, value) {
//         if (index < 0 || index > this.size()) return;

//         const node = new Node(value);

//         if (index === 0) {
//             node.next = this.head;
//             this.head = node;
//             return;
//         }

//         current = this.head;
//         let count = 0;
//         while (current.next) {
//             count++;
//             if (count === index) {
//                 this.head = current;
//                 node.next = this.next;
//                 this.next = node;
//                 break;
//             }
//         }
//     }
// }





class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        let newnode = new Node(value);
        if (!this.head) {
            this.head = newnode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newnode;
    }
    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + "->";
            current = current.next;
        }
        console.log(result + "null");
    }
    delete(value) {
        if (!this.head) {
            console.log("list is empty no element to delete");
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let prev = null;
        let current = this.head;
        while (current && current.value !== value) {
            prev = current;
            current = current.next;
        }
        if (!current) {
            console.log("value is not found in list");
            return;
        }
        prev.next = current.next;
    }
}
let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.delete(20);
list.printList();



// let linkedList = new LinkedList();

// linkedList.addFirst(9);
// linkedList.addFirst(10);
// linkedList.addFirst(3);
// linkedList.addFirst(5);
// linkedList.addFirst(6);
// linkedList.addFirst(1);
// linkedList.addFirst(0);


// console.log(linkedList);