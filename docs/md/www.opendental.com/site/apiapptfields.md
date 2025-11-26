Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API ApptFields

See [API Specification](apispecification.html)

An ApptField is a highly customizable field that shows on appointments. For example, the office might have an ApptField called "Ins Verified", and you might use the API to set it to "Yes" for a specific appointment. There is some prep work that you must do with the office ahead of time. From within the Open Dental UI at the office, you must first add the field under Setup, Appointments, Appointment Field Defs. There would be additional work to make it also show in the Appt Views and/or Appt Bubble.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [ApptField Database Schema.](SchemaRedirect%EF%B9%96apptfield.html)

## ApptFields GET

Version Added: 21.1

If an ApptField exists for the appointment, it gets the value. If an ApptField does not exist, it returns an empty string.

**AptNum:** Required.
**FieldName:** Required.

**Example Request**
 GET /apptfields?AptNum=101&FieldName=Ins%20Verified

**Example Response:**
 {
 "FieldName": "Ins Verified",
 "AptNum":101,
 "FieldValue":"Yes"
 }

## ApptFields PUT

Version Added: 21.1

If an ApptField already exists for the appointment, it gets set to the new value, overwriting the old value. If an ApptField does not yet exist for the appointment, then an ApptField gets inserted into the database.

**AptNum:** Required.
**FieldName:** Required.
**FieldValue:** Required.

**Example Request:**
 PUT /apptfields

{
 "FieldName": "Ins Verified",
 "AptNum":101,
 "FieldValue":"Yes"
 }

**Example Response:** 200 OK
 400 Bad Request (with explanation)