
import java.util.Arrays;


public class negative {
    public static void main(String[] args) {

        int arr[] = { -1, 2, 3, -5, 6,3,8,0, 9,-5 };
        int i,c=0;
        for (i = 0; i < arr.length; i++) {
         
            if (arr[i] < 0) {
                c++;
            }
        }int j;
            int ar[]= new int[c];
          for(i=0,j=0;i<arr.length;i++)
        {
            if(arr[i]<0){
                ar[j]=arr[i];
                j++;
            }
        } System.out.println(Arrays.toString(ar));
       
    }
}
