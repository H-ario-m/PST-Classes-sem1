package day14;

public class unique {
        public int lengthOfLongestSubstring(String s) {
            int n = s.length();
            int ans = 0;
            for (int i = 0; i < n; i++) {
                for (int j = i; j < n; j++) {
                    if (isUnique(s, i, j)) {
                        ans = Math.max(ans, j - i + 1);
                    }
                }
            }
            return ans;
        }
    
        public boolean isUnique(String s, int start, int end) {
            for (int i = start; i < end; i++) {
                for (int j = i + 1; j <= end; j++) {
                    if (s.charAt(i) == s.charAt(j)) {
                        return false;
                    }
                }
            }
            return true;
        }
        public static void main(String[] args) {
            unique solution = new unique();
            String s = "abcabcbb";
            int length = solution.lengthOfLongestSubstring(s);
            System.out.println(length);
        }
    }