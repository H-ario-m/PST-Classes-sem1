// Custom exception class
class AgeException extends Exception {
    public AgeException(String message) {
        super(message);
    }
}
public class ExceptionDemo {
    // Method that throws the custom exception
    static void checkAge(int age) throws AgeException {
        if (age < 18) {
            throw new AgeException("Age is less than 18. Access denied.");
        } else {
            System.out.println("Access granted.");
        }
    }

    // main method that calls the checkAge method
    public static void main(String[] args) throws AgeException {
        // Here, we call the method that throws an exception
        checkAge(15); // This will throw the AgeException
        System.out.println("End of the program");
    }
}
