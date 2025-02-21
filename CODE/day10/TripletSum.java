
import java.util.Arrays;

// package day10;

// public class triplet {
//     public static void main(String[] args) {



//     }
// }

// public class TripletSum {
//     public static void findTriplets(int[] arr) {
//         int n = arr.length;
//         for (int i = 0; i < n - 2; i++) {
//             for (int j = i + 1; j < n - 1; j++) {
//                 for (int k = j + 1; k < n; k++) {
//                     if (arr[i] + arr[j] + arr[k] == 0) {
//                         System.out.println("[" + arr[i] + ", " + arr[j] + ", " + arr[k] + "]");
//                     }
//                 }
//             }
//         }
//     }

//     public static void main(String[] args) {
//         int[] arr = { 1, 3, 4, 2, 0, 2, -1 };
//         findTriplets(arr);
//     }

// }












public class TripletSum {
    public static void findTriplets(int[] arr) {
        int n = arr.length;
        Arrays.sort(arr);
        for (int i = 0; i < n - 2; i++) {
            int left = i + 1;
            int right = n - 1;
            while (left < right) {
                int sum = arr[i] + arr[left] + arr[right];
                if (sum == 0) {
                    System.out.println("[" + arr[i] + ", " + arr[left] + ", " + arr[right] + "]");
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = { 1, 3, 0,4, 0,2, 0, 2, 9};
        findTriplets(arr);
    }
}


