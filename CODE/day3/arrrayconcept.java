
import java.util.Arrays;

public class arrrayconcept {
    public static void main(String[] args) {

        int arr[] = new int[10];
        arr[0]=3;
        arr[1]=4;
        arr[2]=32;
        arr[3]=2;
        arr[4]=4;
        arr[5]=5;
        arr[6]=24;

        String ar[]= new String[5];
        ar[0]="one";
        ar[1]="two";
        ar[2]="three";
        ar[3]="four";
        ar[4]="five";
        System.out.println(Arrays.toString(ar));

        int len = arr.length;
        // for(int i=0;i<len ;i++){
        //     System.out.println(arr[i]);
        // }
        System.out.println(Arrays.toString(arr));
      
    }
}
