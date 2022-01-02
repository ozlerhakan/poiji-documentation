---
sidebar_position: 15
---

Poiji accepts excel records via Poi Sheet object as well:

```java
File file = new File("/tmp/file.xlsx");
FileInputStream fileInputStream = new FileInputStream(file);
Workbook workbook = new XSSFWorkbook(fileInputStream);
Sheet sheet = workbook.getSheetAt(0);

List<Model> result = Poiji.fromExcel(sheet, Model.class);
```