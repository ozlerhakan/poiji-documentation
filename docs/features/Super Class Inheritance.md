---
sidebar_position: 5
---

# Super Class Inheritance 

Your object model may be derived from a super class:

```java
public abstract class Vehicle {

    @ExcelCell(0)
    protected String name;

    @ExcelCell(1)
    protected int year;
}

public class Car extends Vehicle {

    @ExcelCell(2)
    private int nOfSeats;
}
```

and you want to map the table (`car.xlsx`) below to Car objects:


|NAME |YEAR |SEATS|
|--|--|--|
|Honda Civic|2017|4|
|Chevrolet Corvette|2017|2|

Using Poiji, you can map the annotated field(s) of super class(es) of the target class like so:

```java

List<Car> cars = Poiji.fromExcel(new File("cars.xls"), Car.class);
cars.size();
// 2
Car car = cars.get(0);
// Honda Civic
// 2017
// 4
```

