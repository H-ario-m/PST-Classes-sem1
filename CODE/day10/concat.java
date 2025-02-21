// package day10;

// public class concat {
//     static boolean check(String arr[],String ara[]){
//         String str1="";
//         String str2="";

//         for(int i=0;i<arr.length;i++){
//         str1=str1+arr[i];
        
//         }
//         for(int i=0;i<ara.length;i++){
//             str2=str2+ara[i];
//         }

//         if(str1.equals(str2)){return true;}

//         return false;
//     }
//  public static void main(String[] args) {
//     String arr[]={"Hello"," ","World"};
//     String ara[]={"Hello"," ","World"};
//     System.out.println(check(arr,ara));
// }    
// }

public class Concat {
    public static boolean check(String[] arr, String[] ara) {
        return String.join("", arr).equals(String.join("", ara));
    }

    public static void main(String[] args) {
        String[] arr = {"Hello", " ", "World"};
        String[] ara = {"Hello", " ", "World"};
        System.out.println(check(arr, ara));
    }
}













