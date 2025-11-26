Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API Schedules

See [API Specification](apispecification.html)

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [Schedule Database Schema.](SchemaRedirect%EF%B9%96schedule.html)

## Schedules GET (single)

Version Added: 22.1

Gets the schedule corresponding to a passed in ScheduleNum.

**Example Request:**
 GET /schedules/24555

**Example Response:**
 {
 "ScheduleNum": "24555",
 "SchedDate": "2022-04-04",
 "StartTime": "08:00:00",
 "StopTime": "12:00:00",
 "SchedType": "Provider",
 "ProvNum": "2",
 "BlockoutType": "0",
 "blockoutType": "",
 "Note": "",
 "operatories": "5",
 "EmployeeNum": "0",
 "DateTStamp": "2022-04-04 08:16:42"
 }

200 OK
 404 Not Found "Schedule not found"

## Schedules GET (multiple)

Version Added: 22.1

Gets every schedule entry that meets any passed-in criteria. Results are sorted by StartTime. Certain values are always 0 depending on the schedule type. blockoutType will always be 0 unless the SchedType is Blockout, ProvNum will be 0 unless the SchedType is Provider, and EmployeeNum will be 0 unless the SchedType is Employee.

**Parameters:** All optional.

**date:** For a single day. Today's date by default.
**dateStart, dateEnd:** For a date range, inclusive of both dates.
**SchedType:** Either "Practice", "Provider", "Blockout", "Employee", or "WebSchedASAP".
**BlockoutDefNum:** Definition.DefNum where definition.Category=25.
**ProvNum:**FK to provider.ProvNum.
**EmployeeNum:** FK to employee.EmployeeNum.

**Example Requests:**
 GET /schedules?date=2022-03-07
 GET /schedules?dateStart=2022-03-07&dateEnd=2022-03-11
 GET /schedules?SchedType=Blockout

**Example Response:**
 [
 {
 "ScheduleNum": "25888",
 "SchedDate": "2022-03-11",
 "StartTime": "00:00:00",
 "StopTime": "00:00:00",
 "SchedType": "Practice",
 "ProvNum": "0",
 "BlockoutType": "0",
 "blockoutType": "",
 "Note": "3 Day Weekend",
 "operatories": "",
 "EmployeeNum": "0",
 "DateTStamp": "2022-03-11 08:16:42"
 },
 {
 "ScheduleNum": "25884",
 "SchedDate": "2022-03-07",
 "StartTime": "13:30:00",
 "StopTime": "14:00:00",
 "SchedType": "Blockout",
 "ProvNum": "0",
 "BlockoutType": "248",
 "blockoutType": "Staff Meeting",
 "Note": "Weekly Meet",
 "operatories": "5,6",
 "EmployeeNum": "0",
 "DateTStamp": "2022-03-07 08:17:02"
 },
 {
 "ScheduleNum": "24420",
 "SchedDate": "2022-03-07",
 "StartTime": "14:00:00",
 "StopTime": "18:00:00",
 "SchedType": "Provider",
 "ProvNum": "3",
 "BlockoutType": "0",
 "blockoutType": "",
 "Note": "",
 "operatories": "2",
 "EmployeeNum": "0",
 "DateTStamp": "2022-03-07 08:17:32"
 },
 {
 "ScheduleNum": "25887",
 "SchedDate": "2022-03-08",
 "StartTime": "15:30:00",
 "StopTime": "16:00:00",
 "SchedType": "Employee",
 "ProvNum": "0",
 "BlockoutType": "0",
 "blockoutType": "",
 "Note": "Leaving early",
 "operatories": "",
 "EmployeeNum": "2",
 "DateTStamp": "2022-03-08 08:18:15"
 },
 etc...
 ]

200 OK
 400 Bad Request (with explanation)
 404 Not Found (with explanation)