public class Slidingwindow {
    public int maxSum(int[] nums, int k) {
        int n = nums.length;
        if (n < k) {
            return -1;
        }

        int maxSum = 0;
        int wSum = 0;

        for (int i = 0; i < k; i++) {
            wSum += nums[i];
        }

        maxSum = wSum;

        for (int i = k; i < n; i++) {
            wSum = wSum - nums[i - k] + nums[i];
            maxSum = Math.max(maxSum, wSum);
        }

        return maxSum;
    }

    public static void main(String[] args) {
        Slidingwindow sum = new Slidingwindow();
        int[] nums = {1, 2, 3, 4, 5};
        int k = 3;
        int maxSum = sum.maxSum(nums, k);
        System.out.println("Maximum sum of subarray of size " + k + " is " + maxSum);
    }
}