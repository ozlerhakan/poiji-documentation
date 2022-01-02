---
sidebar_position: 8
---

You can annotate a `Map<String, String>` with `@ExcelUnknownCells` to parse all entries,
which are not mapped in any other way (for example by index or by name).

This is our object model:

```java
public class MusicTrack {

    @ExcelCellName("ID")
    private String employeeId;

    @ExcelCellName("AUTHOR")
    private String author;

    @ExcelCellName("NAME")
    private String name;

    @ExcelUnknownCells
    private Map<String, String> unknownCells;

}
```

This is the excel file we want to parse:


|ID | AUTHOR |NAME |ENCODING |BITRATE|
| -- |-- | --| --| --|
|123923|Joe Doe|The example song|mp3|256|
|56437|Jane Doe|The random song|flac|1500|


The object corresponding to the first row of the excel sheet then has a map with `{ENCODING=mp3, BITRATE=256}`
and the one for the second row has `{ENCODING=flac, BITRATE=1500}`. 

Note that If you use the `PoijiOptionsBuilder#caseInsensitive(true)` option, the ExcelUnknownCells map will be parsed with lowercase.
