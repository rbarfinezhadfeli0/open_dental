Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

API AsapComms

See [API Specification](../site/apispecification.html)

AsapComms is used by the Web Sched ASAP feature to quickly send text messages to patients on the ASAP List about last minuet appointment openings. See [Web Sched ASAP](webschedasap.html), [Web Sched ASAP History](webschedasaphistory.html), and [Web Sched ASAP: What Patient Sees](webschedasappatientsees.html) for more information.

## AsapComms GET (single)

Version Added: In Development for: 23.3.01

Gets a single asapcomm.

**Parameters:**

**AsapCommNum:**  Required in the URL.

**Example Request:**
 GET /asapcomms/192

**Example Response:**

{
 "AsapCommNum": 192,
 "FKey": 539,
 "FKeyType": "ScheduledAppt",
 "ScheduleNum": 3523,
 "PatNum": 1771,
 "ClinicNum": 1,
 "DateTimeEntry": "2023-08-24 10:04:14",
 "DateTimeExpire": "2023-09-20 09:00:00",
 "DateTimeSmsScheduled": "2023-09-14 10:04:14",
 "SmsSendStatus": "SendSuccessful",
 "DateTimeSmsSent": "2023-09-14 10:04:14",
 "ResponseStatus": "PendingRsvp",
 "DateTimeOrig": "2023-09-26 10:00:00",
 "TemplateText": "[NameF], an appointment opening has become available on 08/28/2023 at 2:00 PM at SouthSide Dental. Visit [AsapURL] to reserve it.",
 "Note": ""
 }

200 OK
 404 NotFound (with explanation)

## AsapComms GET (multiple)

Version Added: In Development for: 23.3.01

Gets a list of asapcomms.

**Parameters:** All Optional.

**ClinicNum:**  FK to clinic.ClinicNum. The clinic that is sending the AsapComms.
**date:** For a single day. String in "yyyy-mm-dd" format.
**dateStart, dateEnd:** For a date range, inclusive of both dates. String in "yyyy-mm-dd" format. Default is the last 7 days.
**dateStart:** Only return asapcomms with a DateTimeEntry after this date. String in "yyyy-mm-dd" format. Default is the last 7 days.
**dateEnd:** Only return asapcomms with a DateTimeEntry before this date. String in "yyyy-mm-dd" format. Default is today at midnight.

**Example Request:**
 GET /asapcomms?ClinicNum=4
 GET /asapcomms?ClinicNum=4&date=2023-09-14
 GET /asapcomms?ClinicNum=4&dateStart=2023-09-01&dateEnd=2023-09-14

**Example Response:**

[
 {
 "AsapCommNum": 1224,
 "FKey": 11543,
 "FKeyType": "ScheduledAppt",
 "ScheduleNum": 13651,
 "PatNum": 11775,
 "ClinicNum": 4,
 "DateTimeEntry": "2023-09-01 10:04:25",
 "DateTimeExpire": "2023-09-08 10:00:00",
 "DateTimeSmsScheduled": "0001-01-01 00:00:00",
 "SmsSendStatus": "DoNotSend",
 "DateTimeSmsSent": "0001-01-01 00:00:00",
 "ResponseStatus": "UnableToSend",
 "DateTimeOrig": "2023-09-24 10:00:00",
 "TemplateText": "[NameF], an appointment opening has become available on 09/04/2023 at 2:00 PM at NorthSide Dental. Visit [AsapURL] to reserve it.",
 "Note": "Not sending text because the patient has opted out of automated messaging."
 },
 {
 "AsapCommNum": 1225,
 "FKey": 11642,
 "FKeyType": "UnscheduledAppt",
 "ScheduleNum": 13619,
 "PatNum": 11774,
 "ClinicNum": 4,
 "DateTimeEntry": "2023-09-01 10:04:25",
 "DateTimeExpire": "2023-09-08 10:00:00",
 "DateTimeSmsScheduled": "2023-09-01 10:04:25",
 "SmsSendStatus": "SendSuccessful",
 "DateTimeSmsSent": "2023-09-01 10:04:25",
 "ResponseStatus": "PendingRsvp",
 "DateTimeOrig": "2023-10-25 09:00:00",
 "TemplateText": "[NameF], an appointment opening has become available on 09/04/2023 at 2:00 PM at NorthSide Dental. Visit [AsapURL] to reserve it.",
 "Note": ""
 },
 {
 "AsapCommNum": 1226,
 "FKey": 11836,
 "FKeyType": "PlannedAppt",
 "ScheduleNum": 3459,
 "PatNum": 11768,
 "ClinicNum": 4,
 "DateTimeEntry": "2023-09-01 10:04:25",
 "DateTimeExpire": "2023-09-08 10:00:00",
 "DateTimeSmsScheduled": "2023-09-01 10:06:25",
 "SmsSendStatus": "DoNotSend",
 "DateTimeSmsSent": "2023-09-01 10:06:25",
 "ResponseStatus": "Failed",
 "DateTimeOrig": "2023-10-21 10:00:00",
 "TemplateText": "[NameF], an appointment opening has become available on 09/04/2023 at 2:00 PM at NorthSide Dental. Visit [AsapURL] to reserve it.",
 "Note": "Not sending because the time slot has been taken by another appointment."
 },
 ect.
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## AsapComms POST (Insert)

Version Added: In Development for: 23.3.01

Rarely used. Dental office must be subscribed to the following eServices: [WebSched ASAP](../site/websched.html) and [Integrated Texting Feature](../site/textintegrated.html).

Creates an AsapComm, and a Web Sched ASAP Blockout. See [Web Sched ASAP](webschedasap.html), and [ASAP Message Setup](asapmsgs.html) for more information. The End Time is calculated from the pattern of the appointment. Will not schedule if the new appointment would overlap with an existing appointment or blockout that does not allow overlap.

Prior to running this method, obtain the **aptNum** of the appointment with Appointments GET ASAP. Then use Appointments GET Slots or Appointments GET (multiple) along with Schedules GET (multiple) to obtain an available time slot for the **dateTimeStart** and **op** for the ASAP Appointment.

**aptNum:** Required. FK to appointment.AptNum. Appointment.Priority must be 1 (ASAP).
**op:** Required. FK to operatory.OperatoryNum.
**dateTimeStart:** Required. The Start Time of the appointment. String in "yyyy-MM-dd HH:mm:ss" format.

**Example Request:**
 POST /asapcomms

{
 "aptNum": 11939,
 "op": 2,
 "dateTimeStart": "2023-10-18 14:00:00"
 }

**Example Response:**
 {
 "AsapCommNum": 2374,
 "FKey": 11939,
 "FKeyType": "Broken",
 "ScheduleNum": 52527,
 "PatNum": 6522,
 "ClinicNum": 4,
 "DateTimeEntry": "2023-10-16 09:01:25",
 "DateTimeExpire": "2023-10-25 14:00:00",
 "DateTimeSmsScheduled": "2023-10-16 09:01:25",
 "SmsSendStatus": "SendNotAttempted",
 "DateTimeSmsSent": "0001-01-01 00:00:00",
 "ResponseStatus": "AwaitingTransmit",
 "DateTimeOrig": "2023-10-31 16:00:00",
 "TemplateText": "[NameF], an appointment opening has become available on 10/18/2023 at 2:00 PM at Southern Office. Visit [AsapURL] to reserve it.",
 "Note": ""
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)