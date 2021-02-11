class Node{
    constructor(data){
        this.prev = null;
        this.value = data;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    push(node){
        if(this.head == null){
            
            this.head = node;
            
        }else if(this.tail == null){
            
            this.head.next = node;
            this.tail = node;

            node.prev = this.head;
            

        }else{
            
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            

        }
    }

    // Iterate over element
    traverse(){
        let currentNode = this.head;
        while(currentNode != null){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    

}

let list = new linkedList();

list.push(new Node(1));
list.push(new Node(2));
list.push(new Node(3));
list.push(new Node(4));
list.push(new Node(5));


list.traverse();
 
