class capsule{
    static int medprice= 100;
    private String name = "capsule";
    protected int profit=60;
private int price=medprice+profit+1;

    public void meprice(){
        System.out.println(medprice);
System.out.println(name);
System.out.println(price);

    }
}
//     class child extends capsule{
//         string childname = name;
//     }



public class experiment {
    public static void main(String[] args) {

        capsule c = new capsule();
// child n = new child();
// System.out.println(n.childname);
// System.out.println(c.name);
        System.out.println(c.medprice);
        c.meprice();

        System.out.println(c.profit);
    }
}

