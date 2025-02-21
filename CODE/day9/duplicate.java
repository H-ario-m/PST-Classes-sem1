package day9;

import java.util.Arrays;

public class duplicate {
    public static void main(String[] args) {
        
            int arr[]={1,2,4,2,3,6,1,8,7};
            Arrays.sort(arr);
          for(int i=0;i<arr.length;i++){
            if(i<arr.length-1 && arr[i]==arr[i+1]){
                System.out.println(arr[i]);
            }
          }
        }
    }

