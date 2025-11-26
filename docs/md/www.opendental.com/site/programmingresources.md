Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Programming Resources

See [Advanced Topics](advancedtopics.html)

### Database Documentation

This has been moved up a few levels in the tree. See [Database Schema](databaseschema.html)

### Unit Testing

See [Unit Testing](../resources/UnitTestsDocumentation.xml).

### SQLyog

MySQL does not include a way to view and edit the data in your database. We recommend [SQLyog](https://webyog.com/product/sqlyog). It has a variety of useful tools for working with your raw database. You should never use it to change the data in your database since that will cause corruption.

## Interacting with Open Dental

**Queries**
 Simple read-only operations can be performed with queries. This is useful for reports. Any third party is welcome to query the database as long as no writes are involved. We have [security measures](integrity.html) in place to prevent writing to the database, so don't even think about it. Make sure your queries are optimized. One frequent problem is that an unoptimized query can take 20 seconds to run, and all the workstations in office lock up during that time. If you need to run long queries, maybe try doing that in the middle of the night or on a slave database.

**API**
 This is the only way of interacting with Open Dental for any action that requires a write to the database. Direct writes to the database are never allowed other than by going through the API. See [API Specification](apispecification.html).

**Plug-ins**
[Plug-ins](plugins.html) are a way for certain large organizations to add custom functionality for internal use. We strongly encourage using the API instead, but certain organizations have critical requirements that require a tighter integration, so we sometimes allow it after negotiation.

If you have reviewed the information on this page and the forum, but need additional assistance, email vendor.relations@opendental.com.

## License

See [License](license.html)