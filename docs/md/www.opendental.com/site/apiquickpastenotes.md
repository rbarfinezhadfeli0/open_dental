Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API QuickPasteNotes

See [API Specification](apispecification.html)

QuickPasteNotes are used to easily replace abbreviated text with longer notes. See [Quick Paste Notes Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7quickpastenotessetup.html).

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [QuickPasteNote Database Schema.](SchemaRedirect%EF%B9%96quickpastenote.html)

## QuickPasteNotes GET (single)

Version Added: 22.3.24

Gets the QuickPasteNote corresponding to a passed in QuickPasteNoteNum.

**Example Request:**
 GET /quickpastenotes/25

**Example Response:**
 {
 "QuickPasteNoteNum": 25,
 "QuickPasteCatNum": 3,
 "ItemOrder": 0,
 "Note": "Patient called to cancel upcoming appointment on DATE.",
 "Abbreviation": "cancel"
 }

200 OK
 404 NotFound "QuickPasteNote not found."

## QuickPasteNotes GET (multiple)

Version Added: 22.3.24

Gets a list of QuickPasteNotes.

**Parameters:**

**QuickPasteCatNum:** Optional. FK to quickpastecat.QuickPasteCatNum.

**Example Requests:**
 GET /quickpastenotes
 GET /quickpastenotes?QuickPasteCatNum=3

**Example Response:**
 [
 {
 "QuickPasteNoteNum": 25,
 "QuickPasteCatNum": 3,
 "ItemOrder": 0,
 "Note": "Patient called to cancel upcoming appointment on DATE.",
 "Abbreviation": "cancel"
 },
 {
 "QuickPasteNoteNum": 26,
 "QuickPasteCatNum": 3,
 "ItemOrder": 1,
 "Note": "Called patient to discuss:",
 "Abbreviation": "call"
 },
 {
 "QuickPasteNoteNum": 27,
 "QuickPasteCatNum": 3,
 "ItemOrder": 2,
 "Note": "Scanned insurance card into Imaging Module. Insurance entered into Family Module.",
 "Abbreviation": "ins"
 },
 etc...
 ]

200 OK