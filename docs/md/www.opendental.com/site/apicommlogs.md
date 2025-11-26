Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API Commlogs

See [API Specification](apispecification.html)

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [Commlog Database Schema.](SchemaRedirect%EF%B9%96commlog.html)

## Commlogs GET (single)

Version Added: 25.1.13

Gets a single commlog.

**CommlogNum:** Required in URL.

**Example Request:**
 GET /commlogs/2

**Example Response:**
 {
 "CommlogNum": 2,
 "PatNum": 15,
 "CommDateTime": "2021-02-07 03:25:29",
 "CommType": "239",
 "commType": "Misc",
 "Note": "Left msg on answering machine",
 "Mode\_": "Phone",
 "SentOrReceived": "Sent",
 "UserNum": 1,
 "DateTStamp": "2021-02-07 03:26:16",
 "CommSource": "User",
 "ProgramNum": 0,
 "DateTEntry": "2021-02-07 03:26:16",
 "ReferralNum": 0
 }

200 OK
 404 NotFound (with explanation)

## Commlogs GET (multiple)

Version Added: 21.1

Gets a list of commlogs.

**PatNum:** (Optional after version 25.1.13) FK to patient.PatNum.
**DateTStamp:** (Added in version 25.1.13) Optional. Gets commlogs modified after a specified date. String in "yyyy-MM-dd HH:mm:ss" format.

**Example Request:**
 GET /commlogs?PatNum=15&DateTStamp=2021-02-07 03:00:00

**Example Response:**
 [
 {
 "CommlogNum": 2,
 "PatNum": 15,
 "CommDateTime": "2021-02-07 03:25:29",
 "CommType": "239",
 "commType": "Misc",
 "Note": "Left msg on answering machine",
 "Mode\_": "Phone",
 "SentOrReceived": "Sent",
 "UserNum": 1,
 "DateTStamp": "2021-02-07 03:26:16",
 "CommSource": "User",
 "ProgramNum": 0,
 "DateTEntry": "2021-02-07 03:26:16",
 "ReferralNum": 0
 },
 {
 "CommlogNum": 11,
 "PatNum": 15,
 "CommDateTime": "2021-02-07 03:09:00",
 "CommType": "236",
 "commType": "Insurance",
 "Note": "Note for John Smith",
 "Mode\_": "Mail",
 "SentOrReceived": "Received",
 "UserNum": 1,
 "DateTStamp": "2021-02-07 03:10:25",
 "CommSource": "User",
 "ProgramNum": 0,
 "DateTEntry": "2021-02-07 03:10:25",
 "ReferralNum": 0
 }
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## Commlogs POST (create)

Version Added: 21.1

Creates a commlog for the patient.

**PatNum:** Required.
**Note:** Required.

**CommDateTime:** Optional. String in "yyyy-mm-dd HH:mm:ss" format. Default now.
**CommType:** Optional. definition.DefNum where definition.Category=27. Default Miscellaneous.
**commType:** Optional. definition.ItemName where definition.Category=27. Will be used over **CommType** if both are specified.
**Mode\_:** Either "None", "Email", "Mail", "Phone", "In Person", "Text", "Email and Text", or "Phone and Text". Default "Phone".
**SentOrReceived:** Either "Neither", "Sent", or "Received". Default "Sent".

Prior to version 23.3.7, the response would not include the commlog object.

**Example Requests:**
 POST /commlogs

{
 "PatNum": 15,
 "Note": "Left msg on answering machine"
 }

or

{
 "PatNum": 30,
 "commType": "ApptRelated",
 "CommDateTime": "2025-01-21 11:15:00",
 "Mode\_": "Text",
 "SentOrReceived": "Received",
 "Note": "Appointment confirmed for 9:15am."
 }

**Example Response:**
 {
 "CommlogNum": 14,
 "PatNum": 30,
 "CommDateTime": "2025-01-21 11:15:00",
 "CommType": "235",
 "commType": "ApptRelated",
 "Note": "Appointment confirmed for 9:15am.",
 "Mode\_": "Text",
 "SentOrReceived": "Received",
 "UserNum": 0,
 "DateTStamp": "2025-01-21 11:23:27",
 "CommSource": "User",
 "ProgramNum": 0,
 "DateTEntry": "2025-01-21 11:20:34",
 "ReferralNum": 0
 }

201 Created
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## Commlogs PUT (update)

Version Added: 25.2.21

Updates a commlog.

**CommlogNum:** Required in the URL.

**Note:**  Overwrites existing note. This will clear the signature, if present.

**Example Request:**
 PUT /commlogs/14

{
 "Note": "The patient called to notify us that they are running a few minutes late."
 }

**Example Response:**
 {
 "CommlogNum": 14,
 "PatNum": 30,
 "CommDateTime": "2025-01-21 11:15:00",
 "CommType": "235",
 "commType": "ApptRelated",
 "Note": "The patient called to notify us that they are running a few minutes late.",
 "Mode\_": "Phone",
 "SentOrReceived": "Received",
 "UserNum": 0,
 "DateTStamp": "2025-01-21 11:23:27",
 "CommSource": "User",
 "ProgramNum": 0,
 "DateTEntry": "2025-01-21 11:20:34",
 "ReferralNum": 0
 }

 200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)