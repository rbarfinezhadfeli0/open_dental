Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

API ScheduleOps

See [API Specification](../site/apispecification.html)

A scheduleop links one schedule block to one operatory. A schedule block can be linked to one or more operatories. A schedule can also not have any scheduleops.

## ScheduleOps GET

Version Added: 23.2.27

Gets a list of scheduleops optionally filtered by either **ScheduleNum** or **OperatoryNum**.

**Parameters:** All optional.

**ScheduleNum:** FK to schedule.ScheduleNum.
**OperatoryNum:** FK to operatory.OperatoryNum.

**Example Requests:**
 GET /scheduleops
 GET /scheduleops?ScheduleNum=1093
 GET /scheduleops?OperatoryNum=14

**Example Response:**
 [
 {
 "ScheduleOpNum": 156,
 "ScheduleNum": 1092,
 "OperatoryNum": 12
 },
 {
 "ScheduleOpNum": 157,
 "ScheduleNum": 1092,
 "OperatoryNum": 13
 },
 {
 "ScheduleOpNum": 158,
 "ScheduleNum": 1092,
 "OperatoryNum": 14
 },
 {
 "ScheduleOpNum": 159,
 "ScheduleNum": 1093,
 "OperatoryNum": 12
 },
 {
 "ScheduleOpNum": 160,
 "ScheduleNum": 1093,
 "OperatoryNum": 13
 },
 {
 "ScheduleOpNum": 161,
 "ScheduleNum": 1093,
 "OperatoryNum": 14
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)