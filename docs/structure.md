---
sidebar_position: 2
---


# Poiji Structure

In order to use Poiji, you can directly use `Poiji#fromExcel` and to modify the default settings, apply  `PoijiOptions.PoijiOptionsBuilder`.

### Poiji#fromExcel


```
com.poiji.bind.Poiji#fromExcel(java.io.File, java.lang.Class<T>)
com.poiji.bind.Poiji#fromExcel(java.io.File, java.lang.Class<T>, java.util.function.Consumer<? super T>)
com.poiji.bind.Poiji#fromExcel(java.io.File, java.lang.Class<T>, com.poiji.option.PoijiOptions)
com.poiji.bind.Poiji#fromExcel(java.io.File, java.lang.Class<T>, com.poiji.option.PoijiOptions, java.util.function.Consumer<? super T>)
com.poiji.bind.Poiji#fromExcel(java.io.InputStream, com.poiji.exception.PoijiExcelType, java.lang.Class<T>)
com.poiji.bind.Poiji#fromExcel(java.io.InputStream, com.poiji.exception.PoijiExcelType, java.lang.Class<T>, java.util.function.Consumer<? super T>)
com.poiji.bind.Poiji#fromExcel(java.io.InputStream, com.poiji.exception.PoijiExcelType, java.lang.Class<T>, com.poiji.option.PoijiOptions)
com.poiji.bind.Poiji#fromExcel(java.io.InputStream, com.poiji.exception.PoijiExcelType, java.lang.Class<T>, com.poiji.option.PoijiOptions, java.util.function.Consumer<? super T>)
com.poiji.bind.Poiji#fromExcel(org.apache.poi.ss.usermodel.Sheet, java.lang.Class<T>)
com.poiji.bind.Poiji#fromExcel(org.apache.poi.ss.usermodel.Sheet, java.lang.Class<T>, com.poiji.option.PoijiOptions)
com.poiji.bind.Poiji#fromExcel(org.apache.poi.ss.usermodel.Sheet, java.lang.Class<T>, com.poiji.option.PoijiOptions, java.util.function.Consumer<? super T>)

com.poiji.bind.Poiji#fromExcelProperties(java.io.File, java.lang.Class<T>)
com.poiji.bind.Poiji#fromExcelProperties(java.io.File, java.lang.Class<T>, com.poiji.option.PoijiOptions)
com.poiji.bind.Poiji#fromExcelProperties(java.io.InputStream, com.poiji.exception.PoijiExcelType, java.lang.Class<T>)
com.poiji.bind.Poiji#fromExcelProperties(java.io.InputStream, com.poiji.exception.PoijiExcelType, java.lang.Class<T>, com.poiji.option.PoijiOptions)
```

### `PoijiOptions.PoijiOptionsBuilder` 

```
com.poiji.option.PoijiOptions.PoijiOptionsBuilder
#settings()
#build()
#dateLenient(boolean)
#dateRegex(String)
#datePattern(String)
#dateTimeFormatter(java.time.format.DateTimeFormatter)
#ignoreHiddenSheets(boolean)
#password(String)
#preferNullOverDefault(boolean)
#settings(int)
#sheetIndex(int)
#skip(int)
#limit(int)
#trimCellValue(boolean)
#headerStart(int)
#withCasting(Casting)
#withFormatting(Formatting)
#caseInsensitive(boolean)
#ignoreWhitespaces(boolean)
#poijiNumberFormat(PoijiNumberFormat)
#poijiLogCellFormat(PoijiLogCellFormat)
#disableXLSXNumberCellFormat()
#addListDelimiter(String)
#setLocale(java.util.Locale)
#rawData(boolean)
```