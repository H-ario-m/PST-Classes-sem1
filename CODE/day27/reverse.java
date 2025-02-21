public class reverse {
    public static void main(String[] args) {
        int a=9283;
        StringBuilder sb = new StringBuilder(Integer.toString(a));
        String str = sb.reverse().toString();
        System.out.println(str);
        System.out.println(Integer.parseInt(str));
}
}
