Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API RefAttaches

See [API Specification](apispecification.html)

See [Referrals](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7referrals.html) and [EHR Summaries of Care](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrsummaryofcaresend.html) for more information.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [RefAttach Database Schema.](SchemaRedirect%EF%B9%96refattach.html)

## RefAttaches GET

Version Added: 22.4.27

Gets a list of refattaches.

**Parameters:**

**ReferralNum:** (Added in version 25.2.10) Optional. Filter responses by ReferralNum.
**PatNum:** Optional. Filter responses by PatNum.
**DateTStamp:** (Added in version 25.2.10) Optional, string in "yyyy-MM-dd HH:mm:ss" format. Only include refattaches with a DateTStamp altered after the specified date and time.

**Example Requests:**
 GET /refattaches
 GET /refattaches?PatNum=25

**Example Response:**
 [
 {
 "RefAttachNum": 1,
 "ReferralNum": 3,
 "referralName": "Steve N Stevens, DDS",
 "PatNum": 25,
 "ItemOrder": 0,
 "RefDate": "2022-01-05",
 "ReferralType": "RefFrom",
 "RefToStatus": "None",
 "Note": "",
 "IsTransitionOfCare": "false",
 "ProcNum": 0,
 "DateProcComplete": "0001-01-01",
 "ProvNum": 0,
 "DateTStamp": "2022-01-05 10:13:12"
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## RefAttaches POST (create)

Version Added: 21.2

Attaches a patient to a referral source. The referral source must be specified by either **ReferralNum** or **referralName**. Before calling this method, use Referrals GET to find the ReferralNum of an existing referral source. Alternatively, specify a referralName to search the LName of existing referrals for an exact match. If a match is not found, a new referral with that name is created and used.

**PatNum:** Required. FK to patient.PatNum.
**ReferralNum:** This or **referralName** is required. FK to referral.ReferralNum.
**referralName:** This or **ReferralNum** is required.
**RefDate:** Optional. String in "yyyy-MM-dd" format. The date the referral source is attached to the patient. Default to today's date.
**ReferralType:** Optional. Either "RefTo", "RefFrom", or "RefCustom". Default "RefFrom".
**RefToStatus:** Optional. Typically only used with outgoing referrals. Either "None", "Declined", "Scheduled", "Consulted", "InTreatment", or "Complete". Default "None".
**Note:** Optional. Referral note specific to this patient.
**IsTransitionOfCare:** (Added in version 23.3.26) Optional. Either "true" or "false". Used to track EHR events. Default "false".
**ProcNum:** (Added in version 23.3.26) Optional. FK to procedurelog.ProcNum. Default 0.
**DateProcComplete:** (Added in version 23.3.26) Optional. String in "yyyy-MM-dd" format. Default "0001-01-01".
**ProvNum:** (Added in version 23.3.26) Optional. FK to provider.ProvNum. Can only be specified when **ReferralType** is "RefTo". Default 0.

**Example Requests:**
 POST /refattaches

{
 "PatNum": 972,
 "ReferralNum": 17,
 "ReferralType": "RefTo",
 "RefToStatus": "Scheduled",
 "Note": "12052 - Called Dr. Bokish to confirm this has been scheduled.",
 "RefDate": "2023-12-05",
 "ProvNum": 8
 }

**Example Response:**
{
 "RefAttachNum": 568,
 "ReferralNum": 17,
 "referralName": "Bokish",
 "PatNum": 972,
 "ItemOrder": 7,
 "RefDate": "2023-12-05",
 "ReferralType": "RefTo",
 "RefToStatus": "Scheduled",
 "Note": "",
 "IsTransitionOfCare": "false",
 "ProcNum": 1192,
 "DateProcComplete": "0001-01-01",
 "ProvNum": 8,
 "DateTStamp": "2023-12-07 11:43:15"
 }

 201 Created
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## RefAttaches PUT (update)

Version Added: 23.3.26

Updates an existing refattach.

**RefAttachNum:** Required in the URL.

**ReferralNum:** FK to referral.ReferralNum.
**RefDate:** The date the referral source was attached to the patient.
**ReferralType:** Either "RefTo", "RefFrom", or "RefCustom".
**RefToStatus:** Either "None", "Declined", "Scheduled", "Consulted", "InTreatment", or "Complete".
**Note:** Referral notes specific to this patient. Overwrites existing note.
**IsTransitionOfCare:** Either "true" or "false".
**ProcNum:** FK to procedurelog.ProcNum.
**DateProcComplete:** String in "yyyy-MM-dd" format.
**ProvNum:** FK to provider.ProvNum. Can only be specified when **ReferralType** is "RefTo".

**Example Request:**
 PUT /refattaches/568

{
 "ReferralNum": 17,
 "ReferralType": "RefTo",
 "RefToStatus": "Complete",
 "Note": "12/14 - Dr. Bokish called back to confirm this has been completed.",
 "DateProcComplete": "2023-12-14"
 }

**Example Response:**
{
 "RefAttachNum": 568,
 "ReferralNum": 17,
 "referralName": "Bokish",
 "PatNum": 972,
 "ItemOrder": 1,
 "RefDate": "2023-12-05",
 "ReferralType": "RefTo",
 "RefToStatus": "Complete",
 "Note": "12/14 - Dr. Bokish called back to confirm this has been completed.",
 "IsTransitionOfCare": "false",
 "ProcNum": 1192,
 "DateProcComplete": "2023-12-14",
 "ProvNum": 8,
 "DateTStamp": "2023-12-14 15:17:28"
 }

 200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## RefAttaches DELETE

Version Added: 23.3.26

Deletes a refattach.

**RefAttachNum:** Required in the URL.

**Example Requests:**
 DELETE /refattaches/867

**Example Response:**
 200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)