interface contract{
    abstract public void legacy();
   default public void message(){
        System.out.println("hello");
    }
}
class hotelstaff implements contract{
    public void legacy(){
        System.out.println("kem cho mota bhaiiii");
}
}

public class interfaceex {
    public static void main(String[] args) {
        hotelstaff h = new hotelstaff();
        h.legacy();
        h.message();
    }
}
