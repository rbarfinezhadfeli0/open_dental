Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API PatientNotes

See [API Specification](apispecification.html)

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [PatientNote Database Schema.](SchemaRedirect%EF%B9%96patientnote.html)

## PatientNotes GET (single)

Version Added: 21.2

PatientNotes have a 1:1 relationship to Patients and contain additional information about the patient. The PatNum must be included in the URL.

**Example Request:**
 GET /patientnotes/15

**Example Response:**
 {
 "PatNum": 15,
 "FamFinancial": "",
 "Medical": "Diabetes.",
 "Service": "No flo",
 "MedicalComp": "",
 "Treatment": "Patient enjoys the outdoors.",
 "ICEName": "Carolyn Wright",
 "ICEPhone": "(820) 202-1134",
 "SecDateTEntry": "2025-06-18 11:48:40",
 "SecDateTEdit": "2025-06-18 11:48:40"
 }

200 OK
 404 NotFound (with explanation)

## PatientNotes GET (multiple)

Version Added: 25.2.14

Gets a list of patientNotes.

**Example Request:**
 GET /patientnotes

**Example Response:**
 [
 {
 "PatNum": 15,
 "FamFinancial": "",
 "Medical": "Diabetes.",
 "Service": "No flo",
 "MedicalComp": "",
 "Treatment": "Patient enjoys the outdoors.",
 "ICEName": "Carolyn Wright",
 "ICEPhone": "(820) 202-1134",
 "SecDateTEntry": "2025-06-18 11:48:40",
 "SecDateTEdit": "2025-06-18 11:48:40"
 },
 {
 "PatNum": 16,
 "FamFinancial": "",
 "Medical": "Headaches",
 "Service": "No flo",
 "MedicalComp": "",
 "Treatment": "Patient enjoys the sports.",
 "ICEName": "John White",
 "ICEPhone": "(271) 828-1828",
 "SecDateTEntry": "2025-09-22 12:08:40",
 "SecDateTEdit": "2025-09-22 12:08:40"
 },
 etc...
 ]

200 OK

## PatientNotes PUT

Version Added: 21.2

Updates a patientNote. If you want to append a note instead of replace, then use PatientNotes GET, and do your own concatenation before calling PUT.

**PatNum:** Required in the URL.

**FamFinancial:** (added in version 25.2.14). Only one note per family stored with guarantor.
**Medical:** (added in version 25.2.14). Replace existing medical history note.
**Service:** (added in version 21.4). Replaces existing service note.
**MedicalComp:** (added in version 25.2.14). Complete current Medical History.
**Treatment:** (added in version 25.2.14). Notes that are not pertinent to the patient's treatment. Also known as Odontogram Notes.
**ICEName:** Replaces existing ICEName.
**ICEPhone:** String. Replaces existing ICEPhone.

**Example Requests:**
 PUT /patientnotes/15

{
 "Medical": "Unknown family history."
 }

or

{
 "ICEName": "Herbert Grayson",
 "ICEPhone": "(134) 721-1321"
 }

**Example Response:**
 {
 "PatNum": 15,
 "FamFinancial": "",
 "Medical": "Unknown family history.",
 "Service": "No flo",
 "MedicalComp": "",
 "Treatment": "Patient enjoys the outdoors.",
 "ICEName": "Herbert Grayson",
 "ICEPhone": "(134) 721-1321",
 "SecDateTEntry": "2025-07-28 11:48:40",
 "SecDateTEdit": "2025-07-28 11:48:40"
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)