import java.util.*;
//Given an array of integers nums and an integer k, return the total number of subarrays
 //whose sum equals to k.
 //Asubarray is a contiguous non-empty sequence of elements within an array.

 public class subarray {
    //let's use sliding window 

    public int subarraySum(int[] nums, int k) {
        int count =0;
        Map<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        int sum = 0;
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            if(map.containsKey(sum-k)){
                count += map.get(sum-k);
            }
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        return count;


}

    public static void main(String[] args) {
        subarray s = new subarray();
        int[] nums = {1, 4,1,1, 3, 4, 1};
        int k = 5;
        System.out.println(s.subarraySum(nums, k));
    }
 }
