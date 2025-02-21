
   
public class linearsearch {
    static int lsearc(int []arr,int target){
        int result =-1;
        for(int i=0;i<arr.length;i++){
  
          if(target==arr[i]){
            return i;
        }
          
        }
        return result;
        }
    public static void main(String[] args) {
        int data[]={7,1,2,4,5,2,0,8};
        int target=2;
        int res= lsearc(data,target);
        System.out.println(res);
    }
}
