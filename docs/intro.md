---
sidebar_position: 1
---

# Poiji

Welcome to Poiji documentation. In this section, we go through how to integrate Poiji into your project followed by its features.

## Getting Started 

Add the corresponding dependency into your Maven/Gradle project:

### maven
```xml
<dependency>
  <groupId>com.github.ozlerhakan</groupId>
  <artifactId>poiji</artifactId>
  <version>VERSION</version>
</dependency>
```

### gradle


```gradle
dependencies {
    compile 'com.github.ozlerhakan:poiji:VERSION'
}
```

## Transitive Dependencies

The following dependencies come bundled transitively:

```txt
org.apache.poi:poi:5.1.0
org.apache.poi:poi-ooxml:5.1.0
org.apache.poi:poi-ooxml-lite:5.1.0
```

## Notes

:::info Apache Poi Version

Poiji uses Apache Poi 5.1.0.

:::

:::info Version

Please check the latest version on [the GitHub release page](https://github.com/ozlerhakan/poiji/releases). Poiji versioning is based on `MAJOR.MINOR.PATCH`. 

:::

:::tip All Versions

See the latest and earlier development versions including Javadoc and source files on [Sonatypes OSS](https://oss.sonatype.org/content/groups/public/com/github/ozlerhakan/poiji/) repository.

:::


