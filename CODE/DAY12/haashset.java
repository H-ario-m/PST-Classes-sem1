import java.util.*;
public class haashset {
    HashSet<Integer> hs = new HashSet<>();
    public void add(int num) {
        hs.add(num);
    }
    public boolean contains(int num) {
        return hs.contains(num);
    }

    public static void main(String[] args) {
        haashset hs = new haashset();
        hs.add(10);
        hs.add(20);
        hs.add(30);
        hs.add(40);
        hs.add(40);
        hs.add(20);
        System.out.println(hs.contains(20));
        System.out.println(hs); 
}
}