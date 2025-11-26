Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API AppointmentTypes

See [API Specification](apispecification.html)

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [AppointmentType Database Schema.](SchemaRedirect%EF%B9%96appointmenttype.html)

## AppointmentTypes GET

Version Added: 22.4.10

Gets a list of AppointmentTypes.

**Example Request:**
 GET /appointmenttypes

**Example Response:**
 [
 {
 "AppointmentTypeNum": 1,
 "AppointmentTypeName": "WebSched New Patient Default",
 "appointmentTypeColor": "93,54,220",
 "IsHidden": "false",
 "Pattern": "//XX//",
 "CodeStr": "",
 "CodeStrRequired": "",
 "RequiredProcCodesNeeded": 0,
 "BlockoutTypes": ""
 },
 {
 "AppointmentTypeNum": 2,
 "AppointmentTypeName": "WebSched",
 "appointmentTypeColor": "74,250,61",
 "IsHidden": "false",
 "Pattern": "//XX//",
 "CodeStr": "D0272,D0274",
 "CodeStrRequired": "D0272,D0274",
 "RequiredProcCodesNeeded": "AtLeastOne",
 "BlockoutTypes": "TeleExam"
 },
 etc...
 ]

200 OK