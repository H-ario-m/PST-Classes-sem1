//create a  arraylist of natural numbers and then create a method to return the arraylist of even numvers
//an arrAU names is given {"a", "b", "} find the most occured string
// return an arraylist of unique numbers
import java.util.*;
public class hassh {
    public static void main(String[] args) {
        
    
    ArrayList<Integer> numbers = new ArrayList<>();
 
        for (int i = 0; i < 20; i++) {
numbers.add(i);
        }
        ArrayList<Integer> evenNumbers = getEvenNumbers(numbers);
 
        System.out.println("Even numbers: " + evenNumbers);
        
        String[] strings = {"a", "b", "a", "c", "b"};
        String mostFrequent = mostFrequentString2(strings);
 
        System.out.println("Most frequent string: " + mostFrequent);

        ArrayList<Integer> numsArrayList = new ArrayList<>();
        for (int i = 0; i < 20; i++) {
            numsArrayList.add(5);
        }

        
        ArrayList<Integer> uniqueNumbers = getUniqueNumbers(numsArrayList);
 
        System.out.println("Unique numbers: " + uniqueNumbers);

    }
    public static ArrayList<Integer> getEvenNumbers(ArrayList<Integer> numbers) {
        ArrayList<Integer> evenNumbers = new ArrayList<>();
 
        for (int i = 0; i < numbers.size(); i++) {
            if (numbers.get(i) % 2 == 0) {
                evenNumbers.add(numbers.get(i));
            }
        }
        return evenNumbers;
    }
    
    //Find the most frequent string in an array of strings

        // int maxCount = 0;
        // String mostFrequent = "";
 
        // for (String s : strings) {
        //     int count = 0;
        //     for (String str : strings) {
        //         if (str.equals(s)) {
        //             count++;
        //         }
        //     }
        //     if (count > maxCount) {
        //         maxCount = count;
        //         mostFrequent = s;
        //     }
        // }
 
        // return mostFrequent;

        //another with hash 

    public static String mostFrequentString2(String[] strings) {
        HashMap<String, Integer> frequencyMap = new HashMap<>();
        for (String s : strings) {
            frequencyMap.put(s, frequencyMap.getOrDefault(s, 0) + 1);
    
        }
        int maxCount = 0;
        String mostFrequent = "";
        for (HashMap.Entry<String, Integer> entry : frequencyMap.entrySet()) {
            if (entry.getValue() > maxCount) {
                maxCount = entry.getValue();
                mostFrequent = entry.getKey();
            }
        }
        return mostFrequent;
    }
    
    
    //Return an arraylist of unique numbers
    public static ArrayList<Integer> getUniqueNumbers(ArrayList<Integer> numbers) {
        ArrayList<Integer> uniqueNumbers = new ArrayList<>();

        for (int i = 0; i < numbers.size(); i++) {
            if (!uniqueNumbers.contains(numbers.get(i))) {
                uniqueNumbers.add(numbers.get(i));
        
                }
        }
        return uniqueNumbers;
    }

    }