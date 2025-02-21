
public class mergesorted {
    public int[] mergeSortedArrays(int[] arr1, int[] arr2) {
        int m = arr1.length;
        int n = arr2.length;
        int[] merged = new int[m + n];
        
        int i = 0, j = 0, k = 0;
        while (i < m && j < n) {
            if (arr1[i] <= arr2[j]) {
                merged[k] = arr1[i];
                i++;
            } else {
                merged[k] = arr2[j];
                j++;
            }
            k++;
        }
        
        while (i < m) {
            merged[k] = arr1[i];
            i++;
            k++;
        }
        
        while (j < n) {
            merged[k] = arr2[j];
            j++;
            k++;
        }
        
        return merged;
    }
    public static void main(String[] args) {
        int[] arr1 = { 1, 3, 5, 7 };
        int[] arr2 = { 2, 4, 6, 8 };
        
        int[] merged = new mergesorted().mergeSortedArrays(arr1, arr2);
        for (int num : merged) {
            System.out.print(num + " ");
        }
    }
}
