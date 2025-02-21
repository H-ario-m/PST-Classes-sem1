public class linklistcircle {
    public static void main(String[] args) {

    }
    public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) {
            return false;
        }
        ListNode second = head;
        ListNode first = head.next;
        while (second != first) {
            if (first == null || first.next == null) {
                return false;
            }
            second = second.next;
            first = first.next.next;
        }
        return true;
    }
    
}
