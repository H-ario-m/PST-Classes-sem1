package day10;

public class recursion {

    static void printnum(int start,int end){
        if(start>end){
            return ;
        }
        System.out.println(start);
        start=start+1;
        printnum(start,end);
    }
    public static void main(String[] args) {
    printnum(1, 20);
    
    
    }
}
