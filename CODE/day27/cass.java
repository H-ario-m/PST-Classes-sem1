class Student {
    String name;
    int age;
Student(String name, int age){
        this.name=name;
        this.age=age;
    }
 }
    

public class cass {
    public static void main(String[] args) {
        Student s=new Student("John", 20);
        System.out.println(s.name);
        
}
}
