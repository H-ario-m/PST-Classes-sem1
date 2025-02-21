import java.util.*;

public class friendsname {
    public static void main(String[] args) {
        ArrayList<String> friends = new ArrayList<String>();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the name of friends : ");
        // int n = sc.nextInt();
        // sc.nextLine();
        // System.out.println("Enter the names of friends : ");
        // for (int i = 0; i < n; i++) {
        while (true) {
            String name = sc.nextLine();
            if (name.equals("exit")) {
                break;
            }
            else
                friends.add(name);
        }
        System.out.println("The names of friends are : ");
        for (int i = 0; i < friends.size(); i++) {  
            System.out.println(friends.get(i));
        }

            
        }
}
