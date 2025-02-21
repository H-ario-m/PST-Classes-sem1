package day9;
public class finding {
    public static void main(String[] args) {
        int arr[]={1,2,4,5,3,6,1,3,6,1};
        int k=4;
        for(int i=0;i<arr.length-1;i++){
            for(int j=i+1;j<arr.length&&j<=k+i;j++){
                if(arr[i]==arr[j]){
                    System.out.println("Found two equal elements with index sum less than or equal to k");
                    return;
                }
            }
        }
        System.out.println("No two equal elements with index sum less than or equal to k");
    }
}
