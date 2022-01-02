---
sidebar_position: 14
---

You can create your own formatting implementation without relying on the default Poiji formatting configuration using the `Formatting` interface.

```java
public class MyFormatting implements Formatting {
    @Override
    public String transform(PoijiOptions options, String value) {
        return value.toUpperCase().trim(); <1>
    }
}

public class Person {

    @ExcelCellName("ID")
    protected String employeeId;

    @ExcelCellName("NAME")
    protected String name;

    @ExcelCellName("SURNAME")
    protected String surname;

}
```

1. Suppose that all the header names of an excel file have different formatting. Using custom formatting, we are able to look at headers with a custom format. All the headers will be uppercase and don't have white spaces before and after.

Then you can add your custom implementation with the `withFormatting` method:

```java
PoijiOptions options = PoijiOptions.PoijiOptionsBuilder.settings()
                .withFormatting(new MyFormatting())
                .build();
List<Person> people = Poiji.fromExcel(excel, Person.class, options);
```
