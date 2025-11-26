Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API CovSpans

See [API Specification](apispecification.html)

Coverage Spans are specific procedure code ranges used by [Insurance Categories](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7inscatssetup.html). Also see [API CovCats](apicovcats.html) for more information.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [CovSpan Database Schema.](SchemaRedirect%EF%B9%96covspan.html)

## CovSpans GET (single)

Version Added: 24.1.19

Gets a single CovSpan.

**CovSpanNum:** Required.

**Example Requests:**
 GET /covspans/40

**Example Response:**
 {
 "CovSpanNum": 40,
 "CovCatNum": 15,
 "FromCode": "D4000",
 "ToCode": "D4999"
 }

200 OK
 404 NotFound (with explanation)

## CovSpans GET (multiple)

Version Added: 24.1.19

Gets a list of CovSpans.

**CovCatNum:** Optional. FK to covcat.CovCatNum.

**Example Requests:**
 GET /covspans
 GET /covspans?CovCatNum=10

**Example Response:**
 [
 {
 "CovSpanNum": 32,
 "CovCatNum": 10,
 "FromCode": "D0000",
 "ToCode": "D7999"
 },
 {
 "CovSpanNum": 33,
 "CovCatNum": 10,
 "FromCode": "D9000",
 "ToCode": "D9999"
 }
 ]

200 OK
 404 NotFound (with explanation)

## CovSpans POST (create)

Version Added: 24.1.22

Creates a CovSpan.

**CovCatNum:** Required. FK to covcat.CovCatNum.
**FromCode:** Required. Lower range of the span. Must be alphabetically less than ToCode. Does not need to be a valid code.
**ToCode:** Required. Upper range of the span. Must be alphabetically greater than FromCode. Does not need to be a valid code.

**Example Request:**
 POST /covspans

{
 "CovCatNum": 37,
 "FromCode": "D1400",
 "ToCode": "D1499"
 }

**Example Response:**
 {
 "CovSpanNum": 45,
 "CovCatNum": 37,
 "FromCode": "D1400",
 "ToCode": "D1499"
 }

201 Created
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## CovSpans PUT (update)

Version Added: 24.1.22

Updates a CovSpan.

**CovSpanNum:** Required in the URL.

**FromCode:** Lower range of the span. Must be alphabetically less than ToCode. Does not need to be a valid code.
**ToCode:** Upper range of the span. Must be alphabetically greater than FromCode. Does not need to be a valid code.

**Example Request:**
 PUT /covspans/34

{
 "FromCode": "D1400",
 "ToCode": "D1499"
 }

**Example Response:**
 {
 "CovSpanNum": 34,
 "CovCatNum": 37,
 "FromCode": "D1400",
 "ToCode": "D1499"
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## CovSpans DELETE

Version Added: 24.1.22

Deletes a CovSpan.

**CovSpanNum:** Required in the URL.

**Example Requests:**
 DELETE /covspans/13

**Example Responses:**
 200 OK
 404 NotFound (with explanation)