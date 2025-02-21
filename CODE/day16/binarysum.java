package day16;

public class binarysum {
    public int numSubarraysWithSum(int[] A, int S) {
        int n = A.length;
        int[] sum = new int[n + 1];
        sum[0] = 0;
        for (int i = 0; i < n; i++) {
            sum[i + 1] = sum[i] + A[i];
        }
    
        int count = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i; j <= n; j++) {
                if (sum[j] - sum[i] == S) {
                    count++;
                }
            }
        }
    
        return count;
    }
    public static void main(String[] args) {
        binarysum b = new binarysum();
        int[] A = {1, 0, 1, 0, 1};
        int S = 2;
        int result = b.numSubarraysWithSum(A, S);
        System.out.println(result);
        
    }
}
