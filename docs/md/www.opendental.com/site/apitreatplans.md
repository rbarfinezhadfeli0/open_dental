Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API TreatPlans

See [API Specification](apispecification.html)

[Treatment Plans](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7treatmentplanedit.html) are designed to track treatment the patient has accepted, display treatment charted for the patient that has not been completed, or keep a record of treatment the patient denied.

treatplans with a TPStatus of "Active" or "Inactive" use [treatplanattach](apitreatplanattaches.html) to reference attached procedures. treatplans with a TPStatus of "Saved" use [proctp](apiproctps.html) which are copies of the procedure, and will not change after being saved.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [TreatPlan Database Schema.](SchemaRedirect%EF%B9%96treatplan.html)

## TreatPlans GET

Version Added: 22.4.16

Get a list of treatplans that meet a set of search criteria.

**Parameters:** All optional.

**PatNum:** patient.PatNum.
**SecDateTEdit :** Only include treatplans with a SecDateTEdit altered after the specified date and time. String in "yyyy-MM-dd HH:mm:ss" format.
**TPStatus :** Either "Saved", "Active", or "Inactive". Default all.

**Example Requests:**
 GET /treatplans?PatNum=1897&TPStatus=Saved
 GET /treatplans?SecDateTEdit=2022-07-01%2005%3A30%3A00

**Example Response:**
 [
 {
 "TreatPlanNum": 1786,
 "PatNum": 1897,
 "DateTP": "0001-01-01",
 "Heading": "Active Treatment Plan",
 "Note": "Please read this carefully:\nIf you have insurance, THIS IS AN ESTIMATE ONLY. Insurance might not pay what we expect.\nEven if you pay your estimate ahead of time, you will still be responsible for any portion that insurance does not pay.",
 "SigIsTopaz": "false",
 "ResponsParty": 0,
 "DocNum": 0,
 "TPStatus": "Active",
 "SecUserNumEntry": 12,
 "SecDateEntry": "2022-07-02",
 "SecDateTEdit": "2022-07-02 09:39:54",
 "UserNumPresenter": 0,
 "TPType": "Insurance",
 "DateTSigned": "0001-01-01 00:00:00",
 "DateTPracticeSigned": "0001-01-01 00:00:00",
 "SignatureText": "",
 "SignaturePracticeText": "",
 "isSigned": "false",
 "isSignedPractice": "false"
 },
 {
 "TreatPlanNum": 1787,
 "PatNum": 1901,
 "DateTP": "0001-01-01",
 "Heading": "Active Treatment Plan",
 "Note": "Please read this carefully:\nIf you have insurance, THIS IS AN ESTIMATE ONLY. Insurance might not pay what we expect.\nEven if you pay your estimate ahead of time, you will still be responsible for any portion that insurance does not pay.",
 "SigIsTopaz": "false",
 "ResponsParty": 0,
 "DocNum": 0,
 "TPStatus": "Active",
 "SecUserNumEntry": 12,
 "SecDateEntry": "2022-07-02",
 "SecDateTEdit": "2022-07-02 10:32:51",
 "UserNumPresenter": 0,
 "TPType": "Insurance",
 "DateTSigned": "0001-01-01 00:00:00",
 "DateTPracticeSigned": "0001-01-01 00:00:00",
 "SignatureText": "",
 "SignaturePracticeText": "",
 "isSigned": "false",
 "isSignedPractice": "false"
 },
 {
 "TreatPlanNum": 1788,
 "PatNum": 1906,
 "DateTP": "0001-01-01",
 "Heading": "Saved Treatment Plan",
 "Note": "Please read this carefully:\nIf you have insurance, THIS IS AN ESTIMATE ONLY. Insurance might not pay what we expect.\nEven if you pay your estimate ahead of time, you will still be responsible for any portion that insurance does not pay.",
 "SigIsTopaz": "false",
 "ResponsParty": 0,
 "DocNum": 0,
 "TPStatus": "Saved",
 "SecUserNumEntry": 13,
 "SecDateEntry": "2022-07-02",
 "SecDateTEdit": "2022-07-02 11:39:54",
 "UserNumPresenter": 0,
 "TPType": "Insurance",
 "DateTSigned": "2022-07-02 11:39:54",
 "DateTPracticeSigned": "2022-07-02 11:39:54",
 "SignatureText": "Brandon Booter",
 "SignaturePracticeText": "Dr. Carl Moore",
 "isSigned": "true",
 "isSignedPractice": "true"
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## TreatPlans POST (create)

Version Added: 23.2.13

Creates an inactive treatplan for a patient.

**Parameters:**

**PatNum:** Required.
**Heading:** Optional. Default "Inactive Treatment Plan".
**Note:** Optional. Defaults to the TreatmentPlanNote preference.
**TPType:** Optional. Either "Insurance" or "Discount". If the patient is subscribed to a Discount Plan, this will default to "Discount". Otherwise, defaults to "Insurance".

**Example Request:**
 POST /treatplans

{
 "PatNum": 31,
 "Heading": "Fillings",
 "Note": "ONLY AN ESTIMATE.",
 "TPType": "Insurance"
 }

**Example Response:**
 {
 "TreatPlanNum": 18,
 "PatNum": 31,
 "DateTP": "0001-01-01",
 "Heading": "Fillings",
 "Note": "ONLY AN ESTIMATE.",
 "SigIsTopaz": "false",
 "ResponsParty": 0,
 "DocNum": 0,
 "TPStatus": "Inactive",
 "SecUserNumEntry": 0,
 "SecDateEntry": "2023-08-10",
 "SecDateTEdit": "2023-08-10 12:18:12",
 "UserNumPresenter": 0,
 "TPType": "Insurance",
 "DateTSigned": "0001-01-01 00:00:00",
 "DateTPracticeSigned": "0001-01-01 00:00:00",
 "SignatureText": "",
 "SignaturePracticeText": "",
 "isSigned": "false",
 "isSignedPractice": "false"
 }

201 Created
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## TreatPlans POST Saved

Version Added: 23.2.22

Creates an unsigned Saved treatplan from an existing Active or Inactive treatplan.

**Parameters:**

**TreatPlanNum:** Required.
**Heading:** Optional. Defaults to the heading of the supplied Treatment Plan.
**UserNumPresenter:** Optional. FK to userod.UserNum. Default 0.

**Example Request:**
 POST /treatplans/Saved

{
 "TreatPlanNum": 138,
 "Heading": "Saved Plan",
 "UserNumPresenter": 5
 }

**Example Response:**
 {
 "TreatPlanNum": 138,
 "PatNum": 15,
 "DateTP": "2023-09-22",
 "Heading": "Saved Plan",
 "Note": "If you have dental insurance, please be aware that THIS IS AN ESTIMATE ONLY. Coverage may be different if your deductible has not been met, annual maximum has been met, or if your coverage table is lower than average.",
 "SigIsTopaz": "false",
 "ResponsParty": 0,
 "DocNum": 0,
 "TPStatus": "Saved",
 "SecUserNumEntry": 0,
 "SecDateEntry": "2023-09-22",
 "SecDateTEdit": "2023-09-22 14:45:35",
 "UserNumPresenter": 5,
 "TPType": "Insurance",
 "DateTSigned": "0001-01-01 00:00:00",
 "DateTPracticeSigned": "0001-01-01 00:00:00",
 "SignatureText": "",
 "SignaturePracticeText": "",
 "isSigned": "false",
 "isSignedPractice": "false"
 }

201 Created
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## TreatPlans PUT (update)

Version Added: 24.1.10

Updates a treatplan.

To sign a saved Treatment Plan for a patient, set **isSigned** to "true". Most developers will only use **isSigned**.

Every Treatment Plan Sheet is required to have at least one Signature Box, meaning **isSigned** will always be allowed. The signature that appears on the Treatment Plan Sheet displays as the following: "Digitally Signed by [API DeveloperName] Date Signed: ["MM/dd/yyyy HH:mm:ss tt"]". The Treatment Plan Sheet used is the office or clinic's default Treatment Plan Sheet. The availablities of **isSignedPractice**, **SignatureText**, and **SignaturePracticeText** are dependent upon the default TP Sheet's layout. The office's default TP Sheet used can be found by calling Preferences GET with "SheetsDefaultTreatmentPlan".

See [API Implementation](apiimplementation.html), [Treatment Plan Layout](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7sheetstreatplan.html), [Sign Treatment Plan](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7treatmentplansign.html), and [Sheet Def Defaults](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7sheetdefaults.html) for more information on signing Treatment Plans. When signing a Treatment Plan, if the "TreatPlanSaveSignedToPdf" preference is enabled, then a PDF will be generated and saved in the practice's set [Path](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paths.html).

**TreatPlanNum:** Required in the URL.

**DateTP:** The date of the treatment plan. Can only be set if TPStatus is "Saved". String in "yyyy-MM-dd" format.
**Heading:** The heading that shows at the top of the treatment plan.
**Note:** A note specific to this treatment plan that shows at the bottom. Overwrites existing note.
**ResponsParty:** FK to patient.PatNum. The patient responsible for approving the treatment.
**TPType:** Either "Insurance" or "Discount".
**SignatureText:** The typed name of the person who signed the patient signature. Only allowed if the Treatment Plan Sheet has a SheetFieldDef with a FieldName of "SignatureText".
**SignaturePracticeText:** The typed name of the person who signed the practice signature. Only allowed if the Treatment Plan Sheet has a SheetFieldDef with a FieldName of "SignaturePracticeText".
**isSigned:** Either "true" or "false". "true" updates treatplan Signature, digitally signs for the patient, and overwrites existing signature. "false" clears the exisiting signature.
**isSignedPractice:** Either "true" or "false". "true" updates the treatplan SignaturePractice, digitally signs for the practice, and overwrites existing signature. "false" clears the exisiting practice signature. Only allowed if the Treatment Plan Sheet Def has a Sheet Field Def of FieldType=16 (SigBoxPractice).

**Example Requests:**
 PUT /treatplans/9087

{
 "DateTP": "2024-01-27",
 "Heading": "Inactive Treatment Plan - Patient Declined"
 }

or

{
 "DateTP": "2024-01-27",
 "Heading": "Saved Treatment Plan for Extractions + Implant",
 "Note": "Please read this carefully: If you have insurance, THIS IS AN ESTIMATE ONLY. Insurance might not pay what we expect. Even if you pay your estimate ahead of time, you will still be responsible for any portion that insurance does not pay. This Treatment Plan was selected using Amazing Smiles Dental Application.",
 "ResponsParty": 712,
 "SignatureText": "Pamela Hoovey",
 "SignaturePracticeText": "Dr. Ben Jeong",
 "isSigned": "true",
 "isSignedPractice": "true"
 }

**Example Response:**
 {
 "TreatPlanNum": 9087
 "PatNum": 8643,
 "DateTP": "2024-01-27",
 "Heading": "Saved Treatment Plan for Extractions + Implant",
 "Note": "Please read this carefully: If you have insurance, THIS IS AN ESTIMATE ONLY. Insurance might not pay what we expect. Even if you pay your estimate ahead of time, you will still be responsible for any portion that insurance does not pay. This Treatment Plan was selected using Amazing Smiles Dental Application..",
 "SigIsTopaz": "false",
 "ResponsParty": 712,
 "DocNum": 476,
 "TPStatus": "Saved",
 "SecUserNumEntry": 0,
 "SecDateEntry": "2024-01-22",
 "SecDateTEdit": "2024-01-27 14:13:05",
 "UserNumPresenter": 0,
 "TPType": "Insurance",
 "DateTSigned": "2024-01-27 14:13:05",
 "DateTPracticeSigned": "2024-01-27 14:13:05",
 "SignatureText": "Pamela Hoovey",
 "SignaturePracticeText": "Dr. Ben Jeong",
 "isSigned": "true",
 "isSignedPractice": "true"
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## TreatPlans DELETE

Version Added: 24.4.26

Deletes a treatplan. For treatplans with a TPStatus of "Saved", all associated proctps are also deleted.

**TreatPlanNum:** Required in the URL.

**Example Request:**
 DELETE /treatplans/115

**Example Responses:**
 200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)