Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API FeeScheds

See [API Specification](apispecification.html)

See [Fee Schedules](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7feeschedules.html) for more information.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [FeeSched Database Schema.](SchemaRedirect%EF%B9%96feesched.html)

## FeeScheds GET

Version Added: 22.4.31

Gets a list of fee schedules.

**Example Request:**
 GET /feescheds

**Example Response:**
 [
 {
 "FeeSchedNum": 53,
 "Description": "Standard",
 "FeeSchedType": "Normal",
 "ItemOrder": 0,
 "IsHidden": "false",
 "IsGlobal": "true",
 "SecUserNumEntry": 0,
 "SecDateEntry": "0001-01-01",
 "SecDateTEdit": "2018-07-18 08:59:30"
 },
 {
 "FeeSchedNum": 54,
 "Description": "BCBS Co-pay",
 "FeeSchedType": "CoPay",
 "ItemOrder": 1,
 "IsHidden": "false",
 "IsGlobal": "true",
 "SecUserNumEntry": 1,
 "SecDateEntry": "2021-08-05",
 "SecDateTEdit": "2021-08-05 12:54:44"
 },
 {
 "FeeSchedNum": 55,
 "Description": "USR Archive",
 "FeeSchedType": "Normal",
 "ItemOrder": 2,
 "IsHidden": "true",
 "IsGlobal": "true",
 "SecUserNumEntry": 1,
 "SecDateEntry": "2022-02-05",
 "SecDateTEdit": "2022-02-05 13:25:55"
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)

## FeeScheds POST (create)

Version Added: 23.3.7

Creates a new feesched. Global fee schedules only allow a single (global) fee per procedure. When using a non-global fee schedule, fees can be overridden for clinics or providers. See [Fee Override for Provider or Clinic](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7procedurefeeoverrides.html) for more information.

**Description:** Required. The name of the fee schedule.
**FeeSchedType:** Required. Either "Normal", "CoPay", "OutNetwork", "FixedBenefit", or "ManualBlueBook". **FeeSchedType** cannot be changed once it is inserted.
**IsHidden:** Optional. Either "true" or "false". Default false.
**IsGlobal:** Optional. Either "true" or "false". Default true.

**Example Requests:**
 POST /feescheds

{
 "Description": "BCBS\_2023",
 "FeeSchedType": "Normal"
 }

or

{
 "Description": "BCBS\_2023",
 "FeeSchedType": "Normal",
 "IsHidden": "false",
 "IsGlobal": "false"
 }

**Example Response:**
 {
 "FeeSchedNum": 274,
 "Description": "BCBS\_2023",
 "FeeSchedType": "Normal",
 "ItemOrder": 16,
 "IsHidden": "false",
 "IsGlobal": "false",
 "SecUserNumEntry": 0,
 "SecDateEntry": "2023-11-03",
 "SecDateTEdit": "2023-11-03 13:57:46"
 }

200 OK
 400 BadRequest (with explanation)

## FeeScheds PUT (update)

Version Added: 23.3.7

Updates a feesched.

**FeeSchedNum:** Required in the URL.

**Description:** The name of the fee schedule.
**IsHidden:** Either "true" or "false".
**IsGlobal:** Either "true" or "false".

**Example Request:**
 PUT /feescheds/293

{
 "Description": "BCBS\_outdated",
 "IsHidden": "true",
 }

**Example Response:**
 {
 "FeeSchedNum": 293,
 "Description": "BCBS\_outdated",
 "FeeSchedType": "Normal",
 "ItemOrder": 16,
 "IsHidden": "true",
 "IsGlobal": "false",
 "SecUserNumEntry": 0,
 "SecDateEntry": "2022-01-01",
 "SecDateTEdit": "2023-11-03 14:57:46"
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)