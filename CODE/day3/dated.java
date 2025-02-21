
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

// public class basic {
//     public static void main(String[] args) {
//         double a=1.50321567809;
// float b =(float)a;
// System.out.println(b);
//     }
// }



public class dated{
    public static void main(String[] args) {
    LocalDate current = LocalDate.now();
    LocalDate myDate= LocalDate.of(2024, 2, 23);

System.out.println(current);
System.out.println(myDate);

System.out.println(current.getDayOfMonth());
LocalDate futuDate= current.plusDays(10);
System.out.println(futuDate);
System.out.println(current.isAfter(futuDate));

LocalTime now = LocalTime.now();
LocalTime custom= LocalTime.of(8, 2, 34);

System.out.println(now);
System.out.println(custom);

DateTimeFormatter obj = DateTimeFormatter.ofPattern("")
    }
}