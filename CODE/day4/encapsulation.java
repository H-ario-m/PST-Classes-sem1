class capsule{
    private int medprice= 100;
    private String name = "capsule";
    private int profit=60;
private int price=medprice+profit+1;

    public void getmedprice(){
        System.out.println(medprice);
System.out.println(name);
System.out.println(price);

    }

}

public class encapsulation {
    public static void main(String[] args) {

        capsule c = new capsule();

        c.getmedprice();
    }
}
