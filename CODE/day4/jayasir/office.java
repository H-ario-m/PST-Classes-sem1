class employee{
    public String name;
    public int salary;
public employee(String name,int salary){
    this.name=name;
    this.salary=salary;
}
}
class manager extends employee{
    public String department;
    public manager(String name,int salary,String department){
        super(name,salary);
        this.department=department;
    }
}
public class office {
    public static void main(String[] args) {
        manager m = new manager("DON ",50000,"IT");
        System.out.println(m.name);
        System.out.println(m.salary);
        System.out.println(m.department);
    }
}
