public class mergesort {
    public static void main(String[] args) {
      int arr[] = {2,3,4,5,1,45,6,34};
      divide(arr, 0, arr.length - 1);
      for (int i = 0; i < arr.length; i++) {
        System.out.print(arr[i] + " ");
      }
    }
    public static void divide(int[] arr, int left, int right) {
      if (left < right) {
        int mid = (left + right) / 2;
        divide(arr, left, mid);
        divide(arr, mid + 1, right);
        merge(arr, left, mid, right);
      }
    }
    public static void merge(int[] arr, int left, int mid, int right) {
      int n1 = mid - left + 1;
      int n2 = right - mid;
      int[] L = new int[n1];
      int[] R = new int[n2];
      for (int i = 0; i < n1; i++) {
        L[i] = arr[left + i];
      }
      for (int i = 0; i < n2; i++) {
        R[i] = arr[mid + 1 + i];
      }
      int i = 0, j = 0;
      int k = left;
      while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
        } else {
          arr[k] = R[j];
          j++;
        }
        k++;
      }
      while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
      }
      while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
      }
    }
}
