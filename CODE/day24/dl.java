//create a doubly linked list of m size by taking user input and then disect it in 2 halves and then make a circular linked list out of it
import java.util.Scanner;

import java.util.Scanner;

class Node {
    int data;
    Node next;
    Node prev;

    public Node(int data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    Node head;
    Node tail;
    int size;

    public DoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    public void insertAtEnd(int data) {
        Node newNode = new Node(data);

        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            newNode.prev = tail;
            tail = newNode;
        }
        size++;
    }

    public void printLinkedList() {
        Node temp = head;
        System.out.print("Doubly Linked List: ");
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public void disectLinkedList() {
        if (head == null) {
            return;
        }

        Node slow = head;
        Node fast = head;

        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        Node mid = slow.next;
        slow.next = null;

        Node temp = mid;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = mid;

        Node temp2 = head;
        while (temp2.next != null) {
            temp2 = temp2.next;
        }
        temp2.next = head;

        printCircularLinkedList(mid);
        printCircularLinkedList(head);
    }

    public void printCircularLinkedList(Node head) {
        Node temp = head;
        System.out.print("Circular Linked List: ");
        do {
            System.out.print(temp.data + " ");
            temp = temp.next;
        } while (temp != head);
        System.out.println();
    }
}

public class dl {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        DoublyLinkedList doublyLinkedList = new DoublyLinkedList();

        System.out.print("Enter the size of the doubly linked list: ");
        int size = scanner.nextInt();
        System.out.println("Enter " + size + " elements:");
        for (int i = 0; i < size; i++) {
            int data = scanner.nextInt();
            doublyLinkedList.insertAtEnd(data);
        }

        doublyLinkedList.printLinkedList();

        doublyLinkedList.disectLinkedList();
    }
}
