---
sidebar_position: 3
---

Poiji allows specifying the sheet name using annotation

```java
@ExcelSheet("Sheet2")  (1)
public class Student {

    @ExcelCell(0)
    private String name;

    @ExcelCell(1)
    private String id;

    @ExcelCell(2)
    private String phone;


    @Override
    public String toString() {
        return "Student {" +
                " name=" + name +
                ", id=" + id + "'" +
                ", phone='" + phone + "'" +
                '}';
    }
}
```
With the `ExcelSheet` annotation we are configuring the name of the sheet to read data from. The other sheets will be ignored.