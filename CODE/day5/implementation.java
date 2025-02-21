interface legacy{
    abstract public void culture();}
    class hotelstaff implements legacy{
        public void culture(){
        System.out.println("kem cho mota bhaiiii");
        }
    }
public class implementation {
    public static void main(String[] args) {
        hotelstaff h = new hotelstaff();
        h.culture();
    }
}
