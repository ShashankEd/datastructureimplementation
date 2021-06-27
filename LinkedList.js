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

    addNode(element) {
        //create a node
        var node = new Node(element);
        var current;
        //if null list add it
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
        this.size++; //increment the size of the nodes 
    }
    
    deleteNode(element) {
        if(!this.head) {
            return -1;
        } else {
            //find the node containing the element, and remove it, and 
            var current, prev=null;
            current = this.head;
            while(current != null) {
                if(current.element === element) {
                    if(prev === null) {
                        this.head = current.next;
                    } else {
                        prev.next = current.next;
                    }
                    this.size--;
                    return current.element;
                }
                prev = current;
                current = current.next;
            }
            return -1;
        }
    }
}

var link = new LinkedList();
const values = [12,13,14,15,16,17];
const deleteElement = 15;
values.map(value => link.addNode(value));
console.log("linked list : Nodes added", JSON.stringify(link.head));
console.log(`Deleting node ${deleteElement}`);
link.deleteNode(deleteElement)
console.log(`linked list after dleting ${deleteElement}`, JSON.stringify(link.head));
