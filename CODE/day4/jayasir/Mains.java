package day4.jayasir;

class vehicle {
    public String name;
    public int year;
    public vehicle(String name, int year) {
        this.name = name;
        this.year = year;
    }
}
class car extends vehicle {
    public int numdoor;
    public car(String name, int year, int numdoor) {
        super(name, year);
        this.numdoor = numdoor;
    }
}

public class Mains {
    public static void main(String[] args) {
        car c = new car("bmw", 2020, 4);
        System.out.println(c.name);
        System.out.println(c.year);
        System.out.println(c.numdoor);  
    }   
}
