class parent{
    public void add(int a, int b){
        System.out.println("sum is "+ a+b);
}
}

class child extends parent{
    public void add(int a,int b){
System.out.println("the sum of these are "+ a+b);
}
}
public class runtime {
    public static void main(String[] args) {
        child c = new child();
        c.add(5,6);
    }
}

