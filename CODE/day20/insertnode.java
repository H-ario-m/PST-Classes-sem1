//write a code to insert a node at position 3 
class Node {
    int data;
    Node next;
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}
// class LinkedList {
//     Node head;
//     public void insertAtPosition(int data, int position) {
//         Node newNode = new Node(data);
//         if (position == 0) {
//             newNode.next = head;
//             head = newNode;
//             return;
//         }
//         Node temp = head;
//         for (int i = 0; i < position - 1; i++) {
//             if (temp.next == null) {
//                 System.out.println("Position out of bounds");
//                 return;
//                 }
//                 temp = temp.next;
//                 }
//                 newNode.next = temp.next;
//                 temp.next = newNode;
//                 }
//                 }
public class insertnode {
    public static void main(String[] args) {
        Node head = new Node(10);
        head.next = new Node(20);
        head.next.next = new Node(30);
        head.next.next.next = new Node(40);
        head.next.next.next.next = new Node(50);
        insertAtPosition(head, 3, 25);
        printList(head);
        }
    public static void insertAtPosition(Node head, int pos, int data) {
        Node temp = head;
        Node newNode = new Node(data);
        for (int i = 1; i < pos - 1; i++) {
            temp = temp.next;
        }
        newNode.next = temp.next;
        temp.next = newNode;
    }
    public static void printList(Node head) {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
    }
    }

//write a code to input nodes and make a linbked list

// import java.util.*;

// class Node {
//     int data;
//     Node next;

//     Node(int data) {
//         this.data = data;b
//         this.next = null;
//     }
// }

// class LinkedList {
//     Node head;

//     public void insert(int data) {
//         Node newNode = new Node(data);
//         if (head == null) {
//             head = newNode;
//         } else {    
//             Node temp = head;
//             while (temp.next != null) { 
//                 temp = temp.next;
//             }   //  end of  loop    
//             temp.next = newNode;        
//         }
// }

