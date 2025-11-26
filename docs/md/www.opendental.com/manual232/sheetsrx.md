Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Rx Layout

For offices using printed prescriptions, the print layout used for single prescriptions can be customized as needed.

In [Sheets](sheets.html), double-click on a custom sheet with the type of Rx.

![](images/sheetsRx.png)

Alternatively, in Sheets:

* Click **New** and choose *Rx* as the Sheet Type to create a new Rx sheet from blank.
* Select an existing Custom *Rx* sheet and click **Duplicate** to create a copy of an existing Rx sheet.
* Select the existing Internal *Rx* sheet and click **Copy** to create a copy of the default Rx sheet that can be edited.

Also see: [Sheet Def Properties](sheetproperties.html) and [Sheet Field Types](sheetsaddelements.html).

To customize a Rx sheet type, see [Edit Sheet Def](sheetsetup.html).

See [Sheet Def Defaults](sheetdefaults.html) to set the sheet to use when printing a single [Rx / Prescription](rx.html).

Users can edit the sheet as needed to handle any regulations imposed by their state. If additional assitance is needed, please contact [Open Dental Support](../contact.html) and we will add any additional options that might be needed. The following changes can be made to printed Rx sheets:

* Remove various Lines, boxes, and wording so you can print to a preprinted Rx form.
* Add a dentist license number (OutputText: prov.dEANum, prov.StateLicense, prov.NationalProvID).
* Add an Image.
* Change the orientation or size (Edit Properties).
* Change the wording for generic substitution (Static Text).
* Add a second signature line for generic substitution.
* Add an RxStateID field (OutputText: prov.stateRxID).
* Remove or move the X that is marked by default for Generic Substitution Permitted. The X is two diagonal lines (Line:50,368,W:12,H12 and Line:62,368,W:-12,H:12). To remove the lines, delete them. To move the lines, select them, then press the up arrow on your keyboard (e.g. move to the Dispense as Written checkbox instead).
* Days of Supply and ProcCode show by default. To populate data, enable *Procedure code required on some prescriptions* preference in Lists, Prescriptions.
* For other options, see [Sheet Field Types](sheetsaddelements.html).

If the state requires two signature lines (e.g., use generic and as written), users can download the following sheet template: [rxtwosigs.xml](http://opendental.com/resources/rxtwosigs.xml). The template can be imported. See [Sheet Tools Import / Export](sheettools.html).

To customize a print layout for multiple prescriptions on one page, see [Rx Multiple Layout](sheetsrxmulti.html).