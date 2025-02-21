//create a linked list having three data menbers name roll no and boolean peresent or not by default everyone would be absent make alist of 3 students only 
class student{
    int rollno;
    String name;
    boolean present=false;
    student next;
    student(int rollno,String name,boolean present){
        this.rollno=rollno;
        this.name=name;
        this.present=present;
        next=null;
    
    }
    
}
public class linkedlis {
    public static void main(String[] args) {
        student s1=new student(1,"Nalla",false);
        student s2=new student(2,"Kamchor",false);
        student s3=new student(3,"Sharma ji ka beta",true);
        s1.next=s2;
        s2.next=s3;
        student temp=s1;
        while(temp!=null){
                System.out.println("Roll No : "+temp.rollno+" Name : "+temp.name+" Present : "+temp.present);
            
            temp=temp.next;
        }

    }
}
