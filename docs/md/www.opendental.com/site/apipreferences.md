Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API Preferences

See [API Specification](apispecification.html)

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [Preference Database Schema.](SchemaRedirect%EF%B9%96preference.html)

## Preferences GET

Version Added: 21.1

PrefName is optional. Otherwise you end up with all ~1000 preferences, paginated.

**Example Requests:**
 GET /preferences?PrefName=RecallDaysPast
 GET /preferences?Offset=200

**Example Response:**
 [
 {
 "PrefNum": 14,
 "PrefName": "PracticeDefaultBillType",
 "ValueString": "40"
 },
 {
 "PrefNum": 15,
 "PrefName": "RecallDaysPast",
 "ValueString": "365"
 },
 {
 "PrefNum": 16,
 "PrefName": "RecallDaysFuture",
 "ValueString": "7"
 },
 etc...
 ]