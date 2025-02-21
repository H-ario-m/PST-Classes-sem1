package day14;

public class palindrome {
    public static void main(String[] args) {
        String str = "m9d !9m";
        String st="";
        String st1="";
     for (int i = 0; i < str.length(); i++) {
        char ch = str.charAt(i);
        if(ch>='A' && ch<='Z' || ch>='a' && ch<='z' || ch>='0' && ch<='9'){
st=st+ch;
st1=ch+st1;
     }

}
if(st.equals(st1)){
    System.out.println("palindrome");
}
else{
    System.out.println("not palindrome");
}
    }
}
