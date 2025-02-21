package day14;

public class checkalphanumeric {

    public static void main(String[] args) {

        String str = "abcdei9s";
        System.out.println(isAlphanumeric(str));
    }
    public static boolean isAlphanumeric(String str) {
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if(ch>='A' && ch<='Z' || ch>='a' && ch<='z' || ch>='0' && ch<='9'){
                continue;
            }
            return false;
        }
        return true;

            }
}
