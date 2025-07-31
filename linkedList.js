// Practising Linked List

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    size(){
        let count = 0;
        
        let current = this.head;

        while(current) {
            count++;
            current = current.next
        }


        return count;
    }

    addFirst(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    addLast(value){
        const node = new Node(value);

        if(!this.head == null) {
            // this.addFirst(value);
            this.head = node;
            return;
        }

        let current = this.head;
        while(current.next){
          current = current.next;
        }

        current.next = node;
    }

    addAtIndex(index, value){
        if(index < 0 || index > this.size()) return;
        
        const node = new Node(value);

        if(index === 0) {
            node.next = this.head;
            this.head = node;
            return;       
        }
    }
}