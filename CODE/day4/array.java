
import java.util.Arrays;
import java.util.Scanner;

public class array {
    public static void main(String[] args) {
    Scanner sc= new Scanner(System.in);
    System.out.print("enter the number of students req ");
    int n=sc.nextInt();int i;
    String name[]= new String[n];
    for(i=0;i<n;i++){

System.out.println("ENTER THE NAME OF STUDENT "+ (i+1));
name[i]= sc.next() + sc.nextLine();
    }
    System.out.println(Arrays.toString(name));
    }
}
