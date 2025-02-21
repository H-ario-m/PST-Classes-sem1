import java .util.*;
public class merge{
    public int[] merged(int[] arr1, int[] arr2)
   {
        HashSet<Integer> set = new HashSet<>();
        for(int i=0; i<arr1.length; i++)
        {
            set.add(arr1[i]);
        }
        for(int i=0; i<arr2.length; i++)
        {
            set.add(arr2[i]);
        }
        int[] arr3 = new int[set.size()];
        int i=0;
    for(int num:set){
        arr3[i++] = num;
    }
    return arr3;
    
    }
    public static void main(String[] args)
    {
        merge m = new merge();
        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = {4, 5, 6, 7, 8};
        int[] arr3 = m.merged(arr1, arr2);
      System.out.println(Arrays.toString(arr3));
    }

}
