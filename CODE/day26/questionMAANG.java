// //given on array find all unique triplests where sum=0;
// import java.util.*;
// public class questionMAANG {
//   public static void main(String[] args) {
//   int arr[]={1,1,0,-1,-2};
//   questionMAANG obj=new questionMAANG();
//   List<List<Integer>> result=obj.threeSum(arr);
//   System.out.println(result);
// }
//             public List<List<Integer>> threeSum(int[] nums) {
//                 Arrays.sort(nums);
//                 List<List<Integer>> result = new ArrayList<>();
        
//                 for (int i = 0; i < nums.length - 2; i++) {
//                     if (i > 0 && nums[i] == nums[i - 1]) {
//                         continue;
//                     }
        
//                     int left = i + 1;
//                     int right = nums.length - 1;
        
//                     while (left < right) {
//                         int sum = nums[i] + nums[left] + nums[right];
        
//                         if (sum == 0) {
//                             result.add(Arrays.asList(nums[i], nums[left], nums[right]));
//                             left++;
//                             right--;
        
//                             while (left < right && nums[left] == nums[left - 1]) {
//                                 left++;
//                             }
        
//                             while (left < right && nums[right] == nums[right + 1]) {
//                                 right--;
//                             }
//                         } else if (sum < 0) {
//                             left++;
//                         } else {
//                             right--;
//                         }
//                     }
//                 }
        
//                 return result;
//             }

// }



import java.util.*;

public class questionMAANG {
  public static void main(String[] args) {
    int arr[] = {1, 1, 0, -1, -2};
    questionMAANG obj = new questionMAANG();
    List<List<Integer>> result = obj.threeSum(arr);
    System.out.println(result);
  }

  public List<List<Integer>> threeSum(int[] nums) {
    Set<List<Integer>> result = new HashSet<>();
    for (int i = 0; i < nums.length - 2; i++) {
      Set<Integer> seen = new HashSet<>();
      for (int j = i + 1; j < nums.length; j++) {
        int req = -nums[i] - nums[j];
        if (seen.contains(req)) {
          g3
          Collections.sort(triplet);
          result.add(triplet);
        }
        seen.add(nums[j]);
      }
    }
    return new ArrayList<>(result);
  }
}


