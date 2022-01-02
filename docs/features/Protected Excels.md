---
sidebar_position: 4
---

Consider that your excel file is protected with a password, you can define the password via `PoijiOptionsBuilder`  to read rows:

```java
PoijiOptions options = PoijiOptionsBuilder.settings()
                    .password("1234")
                    .build();
List<Employee> employees = Poiji.fromExcel(new File("employees.xls"), Employee.class, options);
```
