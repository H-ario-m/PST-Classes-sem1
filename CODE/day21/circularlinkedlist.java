//create a circulaar linked list having five nodes and print it twice
public class circularlinkedlist {
    public static void main(String[] args) {
        // Node head = new Node(1);
        // Node second = new Node(2);
        // Node third = new Node(3);
        // Node fourth = new Node(4);
        // Node fifth = new Node(5);
        // head.next = second;
        // second.next = third;
        // third.next = fourth;
        // fourth.next = fifth;
        // fifth.next = head;
        //assign using while loop
        Node head = new Node(1);
        Node current = head;
     int val=1;
     int count=4;
     while(count!=0){
        Node newe = new Node(++val);
        current.next=newe;
        current=current.next;
        count--;
        
     }
        printList(head);
    }
    public static void printList(Node head) {
        Node temp = head;
        int count=0;
        while (temp != null) {
            System.out.println(temp.data);
            temp = temp.next;
            count++;
            if(count==10){
                break;
            }
        }
    }
    static class Node {
        int data;
        Node next;
        public Node(int data) {
            this.data=data;
            this.next=null;
        }
    }
    }




