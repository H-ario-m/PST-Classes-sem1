
import java.util.Scanner;

public class fibonacci {
    public static void main(String[] args) {
Scanner sc=new Scanner(System.in);
int n=sc.nextInt();
for(int i=0;i<=n;i++){
    System.out.print(fibonacci(i)+" ");
}
    }
    
    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
}
