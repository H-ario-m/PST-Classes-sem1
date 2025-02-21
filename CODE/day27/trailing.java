public class trailing {
        public int trailingZeroes(int n) {
            int count = 0;
            while (n >= 5) {
                n /= 5;
                count += n;
            }
            return count;
        }
    
        public static void main(String[] args) {
            trailing solution = new trailing();
            // Test cases
            System.out.println(solution.trailingZeroes(3));  // Output: 0
            System.out.println(solution.trailingZeroes(5));  // Output: 1
            System.out.println(solution.trailingZeroes(0));  // Output: 0
            System.out.println(solution.trailingZeroes(10)); // Output: 2
            System.out.println(solution.trailingZeroes(25)); 
        }
    }
    

