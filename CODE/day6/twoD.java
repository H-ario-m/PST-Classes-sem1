
import java.util.Scanner;

public class twoD {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int[][] a = new int[3][3];
        a[0][0] = 1;
        a[0][1] = 2;
        a[0][2] = 3;
        a[1][0] = 4;
        a[1][1] = 5;
        a[1][2] = 6;
        a[2][0] = 7;
        a[2][1] = 8;
        a[2][2] = 9;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print(a[i][j] + " ");
            }
            System.out.println();
        }

        int arr[][]={{1,2,3},{4,5,6},{7,8,9}};

        for (int i=0;i<arr.length;i++){
                for(int j=0;j<arr[i].length;j++){
                    System.out.print(arr[j][i]+" ");
                }
                System.out.println();
        }
// int fr[][]=new int[3][4];
//         for (int i = 0; i < 3; i++) {

//             for (int j = 0; j < 3; j++) {

//                 fr[i][j]={{sc.nextInt()};{sc.nextInt()}};
//             }
//             System.out.println();
//         }

    }
}
