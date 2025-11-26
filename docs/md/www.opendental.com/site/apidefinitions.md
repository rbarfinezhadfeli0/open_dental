Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API Definitions

See [API Specification](apispecification.html)

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [Definition Database Schema.](SchemaRedirect%EF%B9%96definition.html)

## Definitions GET

Version Added: 21.1

includeHidden is an optional parameter that defaults to false.

**Example Requests:**
 GET /definitions
 GET /definitions?Offset=200
 GET /definitions?Category=1
 GET /definitions?Category=1&includeHidden=true

**Example Response:**
 [
 {
 "DefNum": 293,
 "ItemName": "Sales Tax",
 "ItemValue": "+",
 "Category": 1,
 "category": "AdjTypes",
 "isHidden": "false"
 },
 {
 "DefNum": 8,
 "ItemName": "Professional Discount",
 "ItemValue": "-",
 "Category": 1,
 "category": "AdjTypes",
 "isHidden": "false"
 },
 {
 "DefNum": 9,
 "ItemName": "Cash Discount",
 "ItemValue": "-",
 "Category": 1,
 "category": "AdjTypes",
 "isHidden": "false"
 },
 etc...
 ]

## Definitions POST (create)

Version Added: 22.1

Creates a new Definition, attempts to set the Category (definition.Category) will be silently ignored.

**ItemName**: Required. Name of the definition.
**category**: Required. See the list of current [Definitions](../OpenDentalDocumentation22-1.xml) for a valid definition.Category name.

**ItemValue**: Optional. Values will be validated differently for each Category.
**isHidden**: Optional. Defaults to "false".

**Example Request:**
 POST /definitions

{
 "ItemName": "Interest Payment",
 "category": "PaymentTypes"
 }

{
 "ItemName": "Cash Discount",
 "ItemValue":"-",
 "category": "AdjTypes",
 "isHidden":"false"
 }

**Example Response:**
 {
 "DefNum": 12,
 "ItemName": "Cash Discount",
 "ItemValue":"-",
 "Category": 1,
 "category":"AdjTypes",
 "isHidden":"false"
 }

201 Created
 400 BadRequest (Missing or Invalid fields)