package day9;

import java.util.Scanner;

public class armstrong {

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("enter a number : ");
        int n = sc.nextInt();
        int temp = n;
        int a=String.valueOf(n).length();
        // int count=0;
        // while(a>0){
        //     count++;
        //     a = a/10;
        // }
        int rem, sum = 0;
        while (n > 0) {
            rem = n % 10;
            sum = sum + (int)Math.pow(rem,a);
            n = n / 10;
        }
        if (temp == sum) {
            System.out.println(temp + " is an Armstrong number");
        } else {
            System.out.println(temp + " is not an Armstrong number");
}
}
}

