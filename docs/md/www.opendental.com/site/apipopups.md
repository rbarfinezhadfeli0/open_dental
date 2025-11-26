Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API Popups

See [API Specification](apispecification.html)

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [Popup Database Schema.](SchemaRedirect%EF%B9%96popup.html)

## Popups GET

Version Added: 21.4

Gets active and disabled popups for a patient and associated Family and SuperFamily. For versions 22.2 and later, the IsDisabled field is deprecated and may give unreliable information. DateTimeDisabled, also introduced in 22.2, should be referenced instead.

**Example Request:**
 GET /popups?PatNum=10

**Example Response:**
 [
 {
 "PopupNum": 10,
 "PatNum": 21,
 "Description": "Ask about medications.",
 "IsDisabled": "false",
 "PopupLevel": "SuperFamily",
 "DateTimeEntry": "2025-03-21 13:11:18",
 "IsArchived": "false",
 "PopupNumArchive": 0,
 "DateTimeDisabled": "0001-01-01 00:00:00"
 },
 {
 "PopupNum": 9,
 "PatNum": 12,
 "Description": "Verify cell phone number is accurate.",
 "IsDisabled": "false",
 "PopupLevel": "Family",
 "DateTimeEntry": "2025-03-21 13:10:43",
 "IsArchived": "false",
 "PopupNumArchive": 0,
 "DateTimeDisabled": "0001-01-01 00:00:00"
 },
 {
 "PopupNum": 8,
 "PatNum": 11,
 "Description": "Needs to fill out paperwork.",
 "IsDisabled": "false",
 "PopupLevel": "Patient",
 "DateTimeEntry": "2025-03-21 13:10:27",
 "IsArchived": "false",
 "PopupNumArchive": 0,
 "DateTimeDisabled": "0001-01-01 00:00:00"
 }
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## Popups POST (create)

Version Added: 21.1

Be careful. Popups tend to be annoying to users and are usually reserved for more important notes.

**PatNum:** Required.
**Description:** Required.
**PopupLevel:** Optional, either "Patient", which is triggered when patient is selected in Open Dental, "Family", which is triggered when any member of the patient's family is selected in Open Dental, or "SuperFamily", which is triggered when any member of the patient's super family is selected in Open Dental. The patient must be part of a SuperFamily for "SuperFamily" to be valid. Default is "Patient".
**DateTimeDisabled:** (Added in version 25.1.12) Optional. String in "yyyy-MM-dd HH:mm:ss" format. Popup will be disabled after this date and time. Set to "0001-01-01 00:00:00" to never disable. Default "0001-01-01 00:00:00".

**Example Request:**
 POST /popups

{
 "PatNum": 11,
 "Description": "Needs to fill out paperwork",
 "PopupLevel": "Patient"
 }

**Example Response:**
 {
 "PopupNum": 8,
 "PatNum": 11,
 "Description": "Needs to fill out paperwork",
 "IsDisabled": "false",
 "PopupLevel": "Patient",
 "DateTimeEntry": "2025-03-21 13:10:27",
 "IsArchived": "false",
 "PopupNumArchive": 0,
 "DateTimeDisabled": "0001-01-01 00:00:00"
 }

201 Created
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## Popups PUT (update)

Version Added: 25.1.12

Updates a popup. Popups are self-archiving, meaning that if an existing popup's Description is changed, then a new copy of the popup is created with IsArchived set to true, and a PopupNumArchive equal to the primary key of the Popup being modified.

**PopupNum:** Required in the URL.

**Description:** The text of the popup. Overwrites existing Description.
**PopupLevel:** Either "Patient", "Family", or "SuperFamily".
**DateTimeDisabled:** String in "yyyy-MM-dd HH:mm:ss" format. Popup will be disabled after this date and time. Set to "0001-01-01 00:00:00" to never disable.

**Example Requests:**
 PUT /popups/17

{
 "DateTimeDisabled": "0001-01-01 00:00:00"
 }

or

{
 "Description": "Verify address",
 "PopupLevel": "Family",
 "DateTimeDisabled": "2025-10-15 10:00:00"
 }

**Example Response:**
 {
 "PopupNum": 17,
 "PatNum": 13,
 "Description": "Verify address",
 "IsDisabled": "false",
 "PopupLevel": "Family",
 "DateTimeEntry": "2025-03-04 09:43:21",
 "IsArchived": "false",
 "PopupNumArchive": 0,
 "DateTimeDisabled": "2025-10-15 10:00:00"
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)