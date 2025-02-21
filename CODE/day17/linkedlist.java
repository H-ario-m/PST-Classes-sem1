package day17;

public class linkedlist {
    int data;
    linkedlist Next;
    linkedlist(int data){
        this.data=data;
        this.Next=null;
    }
    public static void main(String[] args) {
        linkedlist head=new linkedlist(10);
        linkedlist second=new linkedlist(20);
        linkedlist third=new linkedlist(30);
        head.Next=second;
        second.Next=third;
        third.Next=null;
   while (head!=null){
       System.out.println(head.data);
       head=head.Next;
   }
    }
}
