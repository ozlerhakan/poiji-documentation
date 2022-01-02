---
sidebar_position: 16
---

For parsing numbers and dates java.lang.Locale is used. Also Apache Poi uses the Locale for parsing.
As default, Poij uses Locale.US irrespective of Locale used on the running system. If you want to change that
you can use a option to pass the Locale to be used like shown below.

In this example the Jvm default locale is used. Beware that if your code run's on a other Jvm with another Locale set as default parsing could give different results. Better is to use a fixed locale.
Also be aware of differences how Locales behave between Java 8 and 9+. For example AM/PM in Locale.GERMANY is displayed as AM/PM in Java 8 but Vorn./Nam. in Java 9 or higher.
This is due to the changes in Java 9. See https://openjdk.java.net/jeps/252[JEP-252] for more details.

```java
PoijiOptions options = PoijiOptions.PoijiOptionsBuilder.settings()
                .setLocale(Locale.getDefault())
                .build();
```

