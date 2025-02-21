//insertion in linked list
public class insertion {
    public static void main(String[] args) {
        Linked_operation list = new Linked_operation();
        Node head = null;

        head = list.insert_head(head, 30);
        head = list.insert_head(head, 20);  
        head = list.insert_head(head, 10);
        list.display(head);
    }
    // Class for linked list node
    static class Node
    {
        int data;
        Node next;
        Node(int d)
        {
            data = d;
            next = null;
        }
    }
    // Class for linked list operations
    static class Linked_operation
    {
        // Method to insert a node at the beginning of the linked list
        public Node insert_head(Node head, int value)
        {
            Node new_node = new Node(value);
            if (head == null)
            {
                head = new_node;
            }
            else
            {
                new_node.next = head;
                head = new_node;
            }
            return head;
        }
        // Method to display the linked list
        public void display(Node head)
        {
            Node curr = head;
            while (curr!= null)
            {
                System.out.print(curr.data + " ");
                curr = curr.next;
            }
            System.out.println();
            }
        }
        
}
