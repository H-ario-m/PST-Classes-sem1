
    public class PeakElement {
        public int findPeakElement(int[] nums) {
            int left = 0;
            int right = nums.length - 1;
    
            while (left < right) {
                int mid = left + (right - left) / 2;
    
                if (nums[mid] > nums[mid + 1]) {
                 
                    right = mid;
                } else {
                   
                    left = mid + 1;
                }
            }
    
            // At the end of the loop, left and right will converge to the peak element
            return left;
        }
    
        public static void main(String[] args) {
            PeakElement pe = new PeakElement();
            int[] nums = {1, 2, 3, 1};
            System.out.println(pe.findPeakElement(nums));  // Output: 2 (index of peak element 3)
        }
    }
      

