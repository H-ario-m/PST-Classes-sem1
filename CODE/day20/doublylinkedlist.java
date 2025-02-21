public class doublylinkedlist {
    public static void main(String[] args) {
      Node head = new Node(10);
      head.next = new Node(20);
      head.next.prev = head;
      head.next.next = new Node(30);
      head.next.next.prev = head.next;  
      head.next.next.next = new Node(40);
      head.next.next.next.prev = head.next.next;
      
      printList(head);
      }
      public static void printList(Node head) {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
            }
            System.out.println();
            

            }
            }

class Node {
    int data;
    Node next;
    Node prev;

    Node(int data) {
        this.data = data;
        this.next = null;
        this.prev = null;

    }

}




