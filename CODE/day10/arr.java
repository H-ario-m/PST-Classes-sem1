// public class arr {
//     static int[] arraysorting(int arr[], int arr2[]) {
//         int array[] = new int[arr.length];
//         int k = 0;

//         for (int num : arr2) {
//             for (int i = 0; i < arr.length; i++) {
//                 if (arr[i] == num) {
//                     array[k++] = arr[i];
//                     arr[i] = Integer.MIN_VALUE; 
//                 }
//             }
//         }

        
//         for (int num : arr) {
//             if (num != Integer.MIN_VALUE) {
//                 array[k++] = num;
//             }
//         }

//         return array;
//     }

//     public static void main(String[] args) {
//         int arr[] = {1, 4, 5, 6,8,454, 7, 9};
//         int arr2[] = {4, 5,454,6};

//         int result[] = arraysorting(arr, arr2);

//         for (int num : result) {
//             System.out.print(num + " ");  
//         }
//     }
// }














public class arr {
    static int[] arraysorting(int arr[], int arr2[]) {
        int array[] = new int[arr.length];
        int k = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (order(arr[i], arr2) > order(arr[j], arr2)) {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        for (int num : arr) {
            array[k++] = num;
        }

        return array;
    }

    static int order(int num, int arr2[]) {
        for (int i = 0; i < arr2.length; i++) {
            if (arr2[i] == num) {
                return i;
            }
        }
        return arr2.length; 
    }

    public static void main(String[] args) {
        int arr[] = {1, 4, 5, 4, 6, 7, 9};
        int arr2[] = {4, 5};

        int result[] = arraysorting(arr, arr2);

        for (int num : result) {
            
        }
    }
}