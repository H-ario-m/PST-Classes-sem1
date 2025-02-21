package day7;

public class frequencycounter {
    public static void main(String[] args) {
        {
            int arr[]={1,2,2,3,4,5,7};
            int ar[]= new int[arr.length+1];
            for(int i=0;i<arr.length;i++){
                ar[arr[i]]++;
            }
            for(int i=0;i<ar.length;i++){
                if(ar[i]>1){
                    System.out.println(i);
                    // break;
                }
                if(ar[i]==0&&i!=0){
                    System.out.println(i);
                    break;
                }
                System.out.println(i + ":"+ar[i]);
            }
        }
    }
}
