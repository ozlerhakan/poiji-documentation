---
sidebar_position: 2
---

If you want a date field to return null rather than a default date, use `PoijiOptionsBuilder` with the preferNullOverDefault method as follows:

```java
PoijiOptions options = PoijiOptionsBuilder.settings()
                       .preferNullOverDefault(true) (1)
                       .build();
```
a field that is of type either java.util.Date, Float, Double, Integer, Long or String will have a null value.

