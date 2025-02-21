

import java.util.Scanner;

public class ques {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
    int arr[]= new int[n];
 
    double sums= n*(n+1)/2;
   
    double avg=sums/n;
    System.out.println(avg);
    int i,sum=0;
    double avgs=0;
    sc.nextLine();
    for(i=0;i<n;i++){
        System.out.println("Enter number "+(i+1));
        arr[i]=sc.nextInt();
        sum+=arr[i];

    }
    avgs=sum/n;
    System.out.println("average of given numbers is "+avgs);
  int su=0;
    //for each loop
for( int val:arr){
    su+=val;

  }
  System.out.println("sum of given numbers is "+su);
  System.out.println(su/n);
    
    
    }
}
