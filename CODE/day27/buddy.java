public class buddy {
    public boolean buddystring(String str, String goal){
StringBuilder sb = new StringBuilder(str);

        if(str.equals(goal)){
return true;
    }
    else if(str.equals(sb.reverse().toString())){
        return true;
    }
    else{
        return false;
    }
}
    public static void main(String[] args) {
        buddy b = new buddy();
        System.out.println(b.buddystring("ab", "ba"));
        System.out.println(b.buddystring("ab", "ab"));

        System.out.println(b.buddystring("aa", "aa"));
        System.out.println(b.buddystring("aaaaaaabc", "aaaaaaacb"));
    }
}
