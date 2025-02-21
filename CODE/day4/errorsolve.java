
import java.util.Scanner;
public class errorsolve {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number ");
        int num = sc.nextInt();// \n is created 
        System.out.println("Enter a name: ");
        String name = sc.next() + sc.nextLine();
        System.out.println(name);
        System.out.println(num); 
        int a = sc.nextInt();
        sc.nextLine();
        String na=sc.nextLine();
        System.out.println(na);

    }
}
