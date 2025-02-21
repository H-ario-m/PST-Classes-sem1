class parent{
    String property="10 crore";
}

class child extends parent{
String childproperty= property;
}
public class inheritancepractice {
  public static void main(String[] args) {
     child cc = new child();
     System.out.println(cc.childproperty);
     System.out.println(cc.property); 
  }  
}
