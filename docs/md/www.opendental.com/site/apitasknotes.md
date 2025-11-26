Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API TaskNotes

See [API Specification](apispecification.html)

TaskNotes are written by users in the [Task Window](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7taskswindow.html).

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [TaskNote Database Schema.](SchemaRedirect%EF%B9%96tasknote.html)

## TaskNotes GET (single)

Version Added: 24.4.22.0

Gets a single tasknote.

**TaskNoteNum:** Required in URL.

**Example Request:**
 GET /tasknotes/563

**Example Response:**
 {
 "TaskNoteNum": 563,
 "TaskNum": 64,
 "UserNum": 8,
 "DateTimeNote": "2025-01-15 12:46:34",
 "Note": "Sending to Dr. Smith's list."
 }

200 OK
 404 NotFound (with explanation)

## TaskNotes GET (multiple)

Version Added: 24.4.22.0

Get a list of tasknotes.

**Parameters:**

**TaskNum:** Optional. FK to task.TaskNum.
**UserNum:** Optional. FK to userod.UserNum.

**Example Request:**
 GET /tasknotes?TaskNum=64

**Example Response:**
 [
 {
 "TaskNoteNum": 563,
 "TaskNum": 64,
 "UserNum": 8,
 "DateTimeNote": "2025-01-15 12:46:34",
 "Note": "Sending to Dr. Smith's list."
 },
 {
 "TaskNoteNum": 567,
 "TaskNum": 64,
 "UserNum": 4,
 "DateTimeNote": "2025-01-15 13:27:12",
 "Note": "Got it, thanks."
 }
 ]

200 OK
 404 NotFound (with explanation)

## TaskNotes POST (create)

Version Added: 24.4.22.0

Creates a new tasknote.

**TaskNum:** Required. FK to task.TaskNum.
**UserNum:** Required. FK to userod.UserNum.
**Note:** Required. Cannot be blank.

**Example Request:**
 POST /tasknotes

{
 "TaskNum": 64,
 "UserNum": 4,
 "Note": "Sending back to mark done."
 }

**Example Response:**

{
 "TaskNoteNum": 582,
 "TaskNum": 64,
 "UserNum": 4,
 "DateTimeNote": "2025-01-16 08:29:51",
 "Note": "Sending back to mark done."
 }

201 Created
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## TaskNotes PUT (update)

Version Added: 24.4.22.0

Updates an existing tasknote.

**TaskNoteNum:** Required in the URL.

**DateTimeNote:** String in "yyyy-MM-dd HH:mm:ss" format.
**Note:** Overwrites existing note. Cannot be blank.

**Example Request:**
 PUT /tasknotes/582

{
 "DateTimeNote": "2025-01-16 09:12:00",
 "Note": "Sending back to mark done. Edit: Actually, I still need this open."
 }

**Example Response:**

{
 "TaskNoteNum": 582,
 "TaskNum": 64,
 "UserNum": 8,
 "DateTimeNote": "2025-01-16 09:12:00",
 "Note": "Sending back to mark done. Edit: Actually, I still need this open."
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)