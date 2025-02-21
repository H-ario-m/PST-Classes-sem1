import java.util.*;
public class uniquechar {
    public static void main(String[] args) {
        String str = "abcde i s";
        System.out.println(isUnique(str));
    }

    public static boolean isUnique(String str) {
        HashSet<Character> set = new HashSet<>();
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (!set.add(c)) {
                return false;
            }
        }
        return true;
    }
}
