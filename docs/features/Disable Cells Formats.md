---
sidebar_position: 13
---

Consider we have a xls or xlsx excel file like below:


|Amount|
|--|
|25,00|
|(50,00)|
|(65,00)|


Since we use a cell format on line 4 and 5 (i.e. `(50,00)` and `(65,00)`), we don't want to see the formatted value of each cell after processing. In order to do that, we can use `@DisableCellFormatXLS` on a field if the file ends with `xls` or `disableXLSXNumberCellFormat()` for xlsx files using `PoijiOptions`.

.xls files
```java
public class TestInfo {
    @ExcelCell(0)
    @DisableCellFormatXLS <1>
    public BigDecimal amount;
}
```
1. we only disable cell formats on the specified column.

.xlsx files
```java
public class TestInfo {
    @ExcelCell(0)
    private BigDecimal amount;
}

PoijiOptions options = PoijiOptions.PoijiOptionsBuilder.settings()
                .disableXLSXNumberCellFormat() <1>
                .build();
```

1. when disabling *number* cell format, we disable it in the entire cells for xlsx files.

and let Poiji ignores the cell formats:

```java
List<TestInfo> result = Poiji.fromExcel(new File(path), TestInfo.class, options); <1>

result.get(1).amount
// -50
```

1. Add `options`, if your excel is xlsx file.
