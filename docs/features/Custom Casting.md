---
sidebar_position: 7
---

# Custom Casting

You can create your own casting implementation without relying on the default Poiji casting configuration using the `Casting` interface.

```java
public class MyCasting implements Casting {
    @Override
    public Object castValue(Class<?> fieldType, String value, PoijiOptions options) {
       return value.trim();
    }
}

public class Person {

    @ExcelCell(0)
    protected String employeeId;

    @ExcelCell(1)
    protected String name;

    @ExcelCell(2)
    protected String surname;

}
```

Then you can add your custom implementation with the `withCasting` method:

```java
 PoijiOptions options = PoijiOptions.PoijiOptionsBuilder.settings()
                .withCasting(new MyCasting())
                .build();

List<Person> people = Poiji.fromExcel(excel, Person.class, options);
```
