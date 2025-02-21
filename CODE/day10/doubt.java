import java.util.Scanner;

public class doubt {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // int a=sc.nextInt();
        // int b=sc.nextInt();
        // int sum = ((a-b)+(a+b))/(a-b);

        // System.out.println(sum);
         int x=sc.nextInt();
         int y=sc.nextInt();
         double avg=(x/2)+(y/2);
         int av2=x+(y-x)/2;
         int av3=(x+y)/2;
         System.out.println(avg);
         System.out.println(av2);
         System.out.println(av3);
    }
}
