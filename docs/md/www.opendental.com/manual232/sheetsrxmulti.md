Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Rx Multiple Layout

The RxMulti Sheet is a sheet type that allows practices to print out multiple prescriptions for a patient on a single page.

In [Sheets](sheets.html), double-click on a custom sheet with the type of RxMulti.

![](images/sheetRxMulti.png)

Alternatively, in Sheets:

* Click **New** and choose *RxMulti* as the Sheet Type to create a new RxMulti sheet from blank.
* Select an existing Custom *RxMulti* sheet and click **Duplicate** to create a copy of an existing RxMulti sheet.
* Select the existing Internal *RxMulti* sheet and click **Copy** to create a copy of the default RxMulti sheet that can be edited.

Also see: [Sheet Def Properties](sheetproperties.html) and [Sheet Field Types](sheetsaddelements.html).

To customize a RxMulti sheet type, see [Edit Sheet Def](sheetsetup.html).

When printing from multiple prescriptions from [Rx Manage](rxmanage.html), the RxMulti sheet type is used. If no custom sheet has been created, then the internal sheet is used. If multiple custom RxMulti sheets exist, the top-most (i.e., first alphabetically) sheet will be used when printing from Rx Manage.

Users can edit the sheet as needed to handle any regulations imposed by their state. If additional assistance is needed, please contact Open Dental Support and we will add any additional options that might be needed. The following changes can be made to printed Rx sheets:

* Remove various lines, boxes, and wording so you can print to a preprinted Rx form.
* Add a dentist license number (OutputText: prov.dEANum, prov.StateLicense, prov.NationalProvID).
* Add an image.
* Change the orientation or size (Edit Properties).
* Change the wording for generic substitution (Static Text).
* Add a second signature line for generic substitution.
* Add an RxStateID field (OutputText: prov.stateRxID).
* Remove or move the X that is marked by default for Generic Substitution Permitted. The X is two diagonal lines (Line:50,368,W:12,H12 and Line:62,368,W:-12,H:12). To remove the lines, delete them. To move the lines, select them, then press the up arrow on your keyboard (e.g. move to the Dispense as Written checkbox instead).

Each Rx template requires a corresponding Prov.NameFL, PatNameFL, PatBirthdate, and Drug output text field.

Each [Output Text](sheetsoutputtext.html) field has a number to indicate its order on the page. For example, prov.nameFL is for prescription 1, prov.nameFL2, is for prescription 2, etc. Simply make sure the output text fields for each prescription match the order on the page. Prescription 4 should have output text fields that end in 4, prescription 5 should have output text fields that end in 5, etc.

The internal RxMulti sheet prints up to 4 prescriptions per page, but it can be customized to print up to 6. When printing multiple prescriptions, any unused Rx sheets will have *VOID* printed across them.