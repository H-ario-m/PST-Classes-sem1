class Node{
    int data;
    Node next;
    Node(int value){
        this.data=value;
        this.next=null;
    }
}

class Linked_operation{
    public Node insert_head(Node head, int value){
        Node new_node= new Node(value);
        if(head==null){
            head=new_node;
        }
        else{
            new_node.next=head;
            head=new_node;
        }        
        return head;
    }
//traversal 
    public void display(Node head){
        Node curr=head;
        while(curr.next!=null){
            System.out.print(curr.data+"-->");
            curr=curr.next;
        }
        System.out.print(curr.data);
    }
}

public class custom_linked {
    public static void main(String[] args) {
        Linked_operation list= new Linked_operation();
        Node head= null;

        head=list.insert_head(head,30);
        head= list.insert_head(head, 20);
        head=list.insert_head(head, 10);
        list.display(head);
        
    }
}