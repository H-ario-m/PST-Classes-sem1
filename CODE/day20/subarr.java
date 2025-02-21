import java.util.*;
public class subarr{
public int subarraySum(int[] nums, int k) {
    Map<Integer, Integer> sumCountMap = new HashMap<>();
    sumCountMap.put(0, 1);
    
    int currentSum = 0;
    int count = 0;
    
    for (int num : nums) {
        currentSum += num;
        
        if (sumCountMap.containsKey(currentSum - k)) {
            count += sumCountMap.get(currentSum - k);
        }
        
        sumCountMap.put(currentSum, sumCountMap.getOrDefault(currentSum, 0) + 1);
    }
    
    return count;
}

public static void main(String[] args) {
    int[] nums = {1, 2, 3, 4, 5};
    int k = 3;
    subarr sum = new subarr();
    int count = sum.subarraySum(nums, k);
    System.out.println("Number of subarrays with sum " + k + " is " + count);

}
}