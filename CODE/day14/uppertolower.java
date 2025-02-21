package day14;
import java.util.Scanner;
public class uppertolower {
    public static void main(String[] args) {
  Scanner scanner = new Scanner(System.in);
String st="";
  System.out.print("Enter a string: ");
  String input = scanner.nextLine();
  for (int i = 0; i < input.length(); i++) {
    char ch = input.charAt(i);
    if (ch>=65&&ch<=90) {
    st=st+(char)(ch+32);}
    else if (ch>=97&&ch<=122) {
    st=st+ch;}
    else {
    st=st+ch;}

  }
  System.out.println(st);
}
}
