



public class book {
    String name;
    int price;
    // public book(String title,int mrp){
    //     this.name = title;
    //     this.price = mrp;
    // }
    void books(String title,int mrp){
        this.name = title;
        this.price = mrp;
    }
    public static void main(String[] args) {
        // book book1 = new book("Java",100);
        // book book2 = new book("fsaa",3144);
book obj= new book();
obj.books("Java",100);
    //     System.out.println(book1.name+":"+book1.price);
    //     System.out.println(book2.name+":"+book2.price);
    // }
System.out.println(obj.name);    
}


}
