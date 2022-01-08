---
sidebar_position: 6
---

# Support Consumer 

Poiji supports Consumer Interface. As [@fmarazita](https://github.com/ozlerhakan/poiji/pull/39#issuecomment-409521808) explained the usage, there are several benefits of having a Consumer:

1. Huge excel file ( without you have all in memory)
2. Run time processing/filtering data
3. DB batch insertion

For example, we have a Calculation entity class and want to insert each row into a database while retrieving:

```java
class Calculation {

  @ExcelCell(0)
  String name

  @ExcelCell(1)
  int a

  @ExcelCell(2)
  int b

  public int getA(){
    return a;
  }

  public int getB(){
    return b;
  }

  public int getName(){
    return name;
  }

}
```

```java
File fileCalculation = new File(example.xlsx);

PoijiOptions options = PoijiOptionsBuilder.settings().sheetIndex(1).build();

Poiji.fromExcel(fileCalculation, Calculation.class, options, this::dbInsertion);

private void dbInsertion(Calculation siCalculation) {
  int value= siCalculation.getA() + siCalculation.getB();
  String name = siCalculation.getName();
  insertDB(name , value);
}
``` 
