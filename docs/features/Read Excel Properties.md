---
sidebar_position: 12
---

It is possible to read excel properties from xlsx files. To achieve that, create a class with fields annotated with `@ExcelProperty`.

Example:

```java
public class ExcelProperties {
    @ExcelProperty
    private String title;

    @ExcelProperty
    private String customProperty;
}
```

The field name corresponds to the name of the property inside the Excel file.
To use a different one than the field name, you can specify a `propertyName` (e.g. `@ExcelProperty(propertyName = "customPropertyName")`)

The list of built-in (e.g. non-custom) properties in an Excel file, which can be read by Poiji can be found in the class `DefaultExcelProperties`.

Poiji can only read Text properties from an Excel file, so you have to use a `String` to read them.
This does not apply to "modified", "lastPrinted" and "created", which are deserialized into a `Date`.
