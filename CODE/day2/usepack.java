package day2;
import calculator.CreatePack;
import java.util.Scanner;


public class usepack {
 
    public static void main(String[] args) {
        System.out.println("enter a numberrr");
        CreatePack ob=new CreatePack();
        Scanner sc = new Scanner(System.in);
        int first = sc.nextInt();
        int second = sc.nextInt();
        char ops=sc.next().charAt(0);
        if(ops=='+'){
        ob.add(first,second,ops);}
        else if(ops=='*'){
        ob.mul(first, second,ops);
        }
      
}
}




