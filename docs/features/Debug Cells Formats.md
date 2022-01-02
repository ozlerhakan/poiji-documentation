---
sidebar_position: 10
---

We can observe each cell format of a given excel file. Assume that we have an excel file like below:


|Date|
| -- |
|12/31/2020 12.00 AM|

We can get all the list of cell formats using `PoijiLogCellFormat` with `PoijiOptions`:

```java
PoijiLogCellFormat log = new PoijiLogCellFormat();
PoijiOptions options = PoijiOptions.PoijiOptionsBuilder.settings()
        .poijiCellFormat(log)
        .build();
List<Model> dates = Poiji.fromExcel(stream, poijiExcelType, Model.class, options);

Model model = rows.get(0)
model.getDate();
// 12.00
```

Hmm, It looks like we did not achieve the correct date format since we get the date value as (`12.00`). Let's see how internally the excel file is being parsed via `PoijiLogCellFormat`:

```java
List<InternalCellFormat> formats = log.formats();
InternalCellFormat cell10 = formats.get(1);

cell10.getFormatString()
// mm:ss.0
cell10.getFormatIndex()
// 47
```

Now that we know the reason of why we don't see the expected date value, it's because the default format of the date cell is the `mm:ss.0` format with a given index 47, we need to change the default format of index (i.e. `47`). This format was automatically assigned to the cell having a number, but almost certainly with a special style or format. Note that this option should be used for debugging purpose only.
