---
sidebar_position: 11
---

We can change the default format of a cell using `PoijiNumberFormat`. Recall `Debug Cells Formats`, we are unable to see the correct cell format, what's more the excel file uses another format which we do not want to.


|Date|
|--|
|12/31/2020 12.00 AM|


Using `PoijiNumberFormat` option, we are able to change the behavior of the format of a specific index:

```java
PoijiNumberFormat numberFormat = new PoijiNumberFormat();
numberFormat.putNumberFormat((short) 47, "mm/dd/yyyy hh.mm aa");

PoijiOptions options = PoijiOptions.PoijiOptionsBuilder.settings()
        .poijiNumberFormat(numberFormat)
        .build();

List<Model> rows = Poiji.fromExcel(stream, poijiExcelType, Model.class, options);

Model model = rows.get(0)
model.getDate();
// 12/31/2020 12.00 AM  <1>
```

1. Voila!

We know that the index 47 uses the format `mm:ss.0` by default in the given excel file, thus we're able to override its format with `mm/dd/yyyy hh.mm aa` using the `putNumberFormat` method.
