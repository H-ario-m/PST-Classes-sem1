package day7;

public class 2ndfre {
    public static void main(String[] args) {
        String str1="himer";
        String str2="mehir";
        int res[]=new int[26];
        for(int i=0;i<str1.length();i++){
            res[str1.charAt(i)-'a']++;
            res[str2.charAt(i)-'a']++;
        }
        for(int i=0;i<26;i++){
        if(res[i]==2){
            return true;
        }
        }
    }
}
