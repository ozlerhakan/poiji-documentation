---
sidebar_position: 9
---

# Mandatory Columns

By default `@ExcelCellName` and `@ExcelCell` expect their related excel columns exist in a given excel file, otherwise a `HeaderMissingException` will be thrown.

You can change this behavior by using the `mandatory` parameter on each annotation:

```java
@ExcelCellName(value = "COLUMN NAME", mandatory = false)
String missingColumn;

@ExcelCell(value = COLUMN_INDEX, mandatory = false)
String missingColumn;
```