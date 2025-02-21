import java.util.Scanner;
public class Day2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter a number ");
        int n = sc.nextInt();
        System.out.println(n+n);
        int i;
for(i=0;i<=n;i++){
    if(i%2==0)
    System.out.println(i);
}
        }
    }

