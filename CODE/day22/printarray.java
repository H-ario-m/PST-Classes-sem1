//print elements of 1d and 2d array using recursion
public class printarray {
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};
        int[][] arr2 = {{1, 2, 3, 4, 5}, {6, 7, 8, 9, 10}, {11, 12, 13, 14, 15}, {16, 17, 18, 19, 20}};
        print1DArray(arr1, 0);
        System.out.println();
        print2DArray(arr2, 0, 0);

    }

    public static void print1DArray(int[] arr, int index) {
        if (index == arr.length) {
            return;
            }
            System.out.print(arr[index] + " ");
            print1DArray(arr, index + 1);

        }
        public static void print2DArray(int [][] arr, int row, int col) {
            if (row == arr.length) {
                return;
            }
            if (col == arr[row].length) {
                System.out.println();
                print2DArray(arr, row + 1, 0);
                return;
            }
            System.out.print(arr[row][col] + " ");
            print2DArray(arr, row, col + 1);
            
        }
            
        }

    

