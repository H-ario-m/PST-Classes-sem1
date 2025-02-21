public class palindrome {
    public boolean isPalindrome(String str) {
        
  return str.equals(new StringBuilder(str).reverse().toString());
    }
    public static void main(String[] args) {
        palindrome p = new palindrome();
        String str = "malayalam  malayalam ";
        System.out.println(p.isPalindrome(str));
    }
}

