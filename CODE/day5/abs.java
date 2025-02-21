abstract  class parent{
    abstract void language();  // abstract method
    public void message(){ //concrete method
        System.out.println("hello i am concrete method");
    }
}

class child extends parent{
    public void language(){
        System.out.println("hindi");
    }
}


public class abs {
    public static void main(String[]args){
        child c = new child();
        c.message();
        c.language();
    }
}
