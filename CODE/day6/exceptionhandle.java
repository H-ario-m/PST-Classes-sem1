public class exceptionhandle {

    public static void main(String[] args) {
  try {
      int a=5/0;
      int b=6/2;
  } catch (ArithmeticException e) {
  System.out.println("exception in code");}
  finally{
    System.out.println("all resources detached");
  }
System.out.println("server not crashed");  }
}

