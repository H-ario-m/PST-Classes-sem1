
    public class Main {
  
        public static int findSecondLargest(int[] arr) {
    
            int max = Integer.MIN_VALUE;
            int secondMax = Integer.MIN_VALUE;
    
            for (int i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    secondMax = max;
                    max = arr[i];
                } else if (arr[i] > secondMax && arr[i] != max) {
                    secondMax = arr[i];
                }
            }
    
           
    
            return secondMax;
        }


        public static void main(String[] args) {
            int[] arr = {4, 2, 9, 6, 5, 1, 8, 3, 7};
            int secondLargest = findSecondLargest(arr);
            System.out.println("Second largest element is: " + secondLargest);
        }
    
    }
    