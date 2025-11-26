Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API PatFields

See [API Specification](apispecification.html)

[Patient Fields](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7custompatientfields.html) are custom fields that are found in various areas of Open Dental such as the Patient Information area of the Family Module, Account Module, and Chart Module.

**FieldTypes** can be:- Text - String.
- PickList - patfieldpickitem.Name for the patfielddef
- Date - String in "yyyy-MM-dd" format.
- Checkbox - "1" indicates true.
- Currency - Monetary amount.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [PatField Database Schema](SchemaRedirect%EF%B9%96patfield.html).

## PatFields GET (single)

Version Added: 22.4

Gets a single PatField.

**PatFieldNum:** Required in the URL.

**Example Request:**
 GET /patfields/5

**Example Response:**
 {
 "PatFieldNum": 5,
 "PatNum": 69,
 "FieldName": "Ins Verified",
 "FieldValue": "Yes",
 "SecDateEntry":"2021-12-04",
 "SecDateTEdit": "2022-12-15 11:26:31"
 }

## PatFields GET (multiple)

Version Added: 21.1

Gets a list of PatFields.

**Parameters:** All optional.

**PatNum:** (Optional after version 22.4.5) The patient's PatNum.
**FieldName:** (Optional after version 22.4.5) FK to patFieldDef.FieldName. Case sensitive.
**SecDateTEdit:** (Added in version 22.4.5) Timestamp representing when the PatField was last edited. In "yyyy-MM-dd HH:mm:ss" format.

**Example Requests:**
 GET /patfields
 GET /patfields?PatNum=69&FieldName=Ins%20Verified
 GET /patfields?FieldName=Deposit

**Example Responses:**
 [
 {
 "PatFieldNum": 1,
 "PatNum": 39,
 "FieldName": "Deposit",
 "FieldValue": "450.29",
 "SecDateEntry":"2021-02-04",
 "SecDateTEdit": "2022-12-22 09:31:00"
 },
 {
 "PatFieldNum": 2,
 "PatNum": 68,
 "FieldName": "Over 18",
 "FieldValue": "1",
 "SecDateEntry":"2020-03-14",
 "SecDateTEdit": "2022-10-22 08:35:33"
 },
 {
 "PatFieldNum": 3,
 "PatNum": 86,
 "FieldName": "Ortho Status",
 "FieldValue": "In Progress",
 "SecDateEntry":"2020-06-24",
 "SecDateTEdit": "2022-12-22 14:45:11"
 },
 etc...
 ]

or

{
 "PatFieldNum": 5,
 "PatNum": 69,
 "FieldName": "Ins Verified",
 "FieldValue":"Yes",
 "SecDateEntry":"2021-05-05",
 "SecDateTEdit": "2022-12-15 11:26:31"
 }

or

{
 "PatFieldNum": 1,
 "PatNum": 39,
 "FieldName": "Deposit",
 "FieldValue": "450.29",
 "SecDateEntry":"2009-11-09",
 "SecDateTEdit": "2022-12-22 09:31:00"
 }

## PatFields POST (create)

Version Added: 22.4

Creates a patfield. Cannot create PatFields associated with hidden PatFieldDefs.

**Parameters:**

**PatNum:** Required. The patient's PatNum.
**FieldName:** Required. FK to PatFieldDef.FieldName. Case sensitive.
**FieldValue:** Required. See the top of this page for more information. Relies on PatFieldDef.FieldType.

**Example Request:**
 POST /patfields

{
 "PatNum":10,
 "FieldName": "Ins Verified",
 "FieldValue":"Yes"
 }

**Example Response:**
 {
 "PatFieldNum": 29,
 "PatNum": 10,
 "FieldName": "Ins Verified",
 "FieldValue": "Yes",
 "SecDateEntry":"2021-12-04",
 "SecDateTEdit": "2022-12-28 09:38:01"
 }

201 Created
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## PatFields PUT

Version Added: 21.1

Updates an existing patfield.

**Parameters:**

**PatNum:** Required. The patient's PatNum.
**FieldName:** Required. FK to patFieldDef.FieldName. Case sensitive.
**FieldValue:** Required. See the top of this page for more information. Relies on PatFieldDef.FieldType.

**Example Request:**
 PUT /patfields

{
 "PatNum": 10,
 "FieldName": "Ins Verified",
 "FieldValue":"No"
 }

**Example Response:**
 {
 "PatFieldNum": 29,
 "PatNum": 10,
 "FieldName": "Ins Verified",
 "FieldValue": "No",
 "SecDateEntry": "2025-09-17",
 "SecDateTEdit": "2025-09-17 13:15:56"
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## PatFields DELETE

Version Added: 22.4

Deletes a patfield. Will not delete a PatField with an associated PatFieldDef of type CareCreditStatus.

**PatFieldNum:** Required in the URL.

**Example Request:**
 DELETE /patfields/29

**Example Response:**
 200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)