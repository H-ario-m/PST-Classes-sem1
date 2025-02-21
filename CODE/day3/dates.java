
import java.time.LocalDate;
import java.time.LocalTime;


public class dates {
   public static void main(String[] args) {
       java.util.Date date = new java.util.Date();
       LocalDate today= LocalDate.now();
       System.out.println(today);
       LocalTime now= LocalTime.now();
       System.out.println(now);
   } 
}
