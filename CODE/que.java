/*Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106 */
public class que {
    static int count_bits(int n){
        
        // Initialising a variable to count the total.
        int total = 0;
        
        while (n>0){
            
            // If the last bit is 1, increment the total
            if((n&1)>0){
                ++total;
            }
    
            // Right shift the value of n
            n >>= 1;
        }
        return total;
    }

    public static void main(String[] args) {

        int n = 5;
        System.out.println(count_bits(n));
        
    } 
}
