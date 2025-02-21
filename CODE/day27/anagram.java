
import java.util.Arrays;

public class anagram {
    public boolean isanagram(String str1,String str2){
        return Arrays.equals(Arrays.sort(str1.toCharArray()),Arrays.sort(str2.toCharArray()));
    }
    public static void main(String[] args) {
        anagram a = new anagram();
        System.out.println(a.isanagram("listen","silent"));
        }
    }

