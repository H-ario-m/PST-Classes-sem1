
public class binarysearch {
static int bsearch(int []arr,int target,int start,int end){

     start=0;
     end = arr.length-1;
     while(start<=end){
    int mid= (int) Math.floor((start+end)/2);
    if(arr[mid]==target){
        return mid;
    }
    else if(arr[mid]>target){
       end=mid-1;
        // bsearch(arr,target,start,end);
    }
    else if(arr[mid]<target){
        start=mid+1;
        // bsearch(arr,target,start,end);
    }

      
     }
     return -1; 
     
    }

    public static void main(String[] args) {
    int arr[]={1,2,3,4,5,6,7,8,9};
    int target=8;
    int res= bsearch(arr,target,0,arr.length-1);
    System.out.println(res);
    
    
    
    }
}
