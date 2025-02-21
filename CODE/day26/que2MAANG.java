//given a sorted array, find first and last occurence of the element . return 0 if not found 

import java.util.*;

public class que2MAANG{
        public int[] searchRange(int[] nums, int target) {
            int[] result = new int[] {-1, -1};
    
            if (nums == null || nums.length == 0) {
                return result;
            }
    
            int firstOccurrence = findFirstOccurrence(nums, target);
            if (firstOccurrence == -1) {
                return result;
            }
    
            int lastOccurrence = findLastOccurrence(nums, target);
            result[0] = firstOccurrence;
            result[1] = lastOccurrence;
    
            return result;
        }
    
        private int findFirstOccurrence(int[] nums, int target) {
            int left = 0;
            int right = nums.length - 1;
    ln
            while (left <= right) {
                int mid = left + (right - left) / 2;
    
                if (nums[mid] < target) {
                    left = mid + 1;
                } else if (nums[mid] > target) {
                    right = mid - 1;
                } else {
                    if (mid == 0 || nums[mid - 1] != target) {
                        return mid;
                    }
                    right = mid - 1;
                }
            }
    
            return -1;
        }
    
        private int findLastOccurrence(int[] nums, int target) {
            int left = 0;
            int right = nums.length - 1;
    
            while (left <= right) {
                int mid = left + (right - left) / 2;
    
                if (nums[mid] < target) {
                    left = mid + 1;
                } else if (nums[mid] > target) {
                    right = mid - 1;
                } else {
                    if (mid == nums.length - 1 || nums[mid + 1] != target) {
                        return mid;
                    }
                    left = mid + 1;
                }
            }
    
            return -1;
        }
    }
