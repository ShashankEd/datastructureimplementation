//node as a class 
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;// to store next element's address 
    }
}

class LinkedList {
    constructor() {
        this.head = null; //first node
        this.size = 0; //number of nodes
    }

    add(element) {
        //create a node
        var node = new Node(element);
        var current;
        //if node is null, add it
        if(!this.head) {
            this.head = node;
        }
        else {
            //get to the last node, and add this node 
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++; //increment the siz of the nodes 
    }
}

var link = new LinkedList();
link.add(12);
link.add(13);
link.add(14);
console.log("linked list ", link.head, link.size, typeof(link));
