Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Sheet Signature Box

Add signature fields to sheet layouts to allow electronic signatures.

In [Edit Sheet Def](sheetsetup.html), click **Signature**.

![](images/sheetSignBox.gif)

Alternatively, in Sheet Def Edit double-click an existing Signature field in the preview area or Fields list to edit.

**Name**: Reportable name.

**X/Y Pos**: Determines the position of the upper left corner of the signature box in relation to the x and y axis. X = horizontal. Y = vertical.

**Width/Height**: The size of the signature box.

**Mobile Caption**: Caption to identify field in a [Mobile Layout](sheetsetupmobile.html).

**Required**: Check to require the user to sign the generated form before saving it. This field cannot also be marked as *Restrict to Providers* when this is checked.

**Allow Electronic Signatures**: Check to allow providers to sign the sheet with an electronic signature stamp by clicking the *E* icon.

**Restrict Signatures to Providers**: Check to only allow users attached to a provider to use this signature box. The signature box will be disabled from the [Kiosk](kioskpatient.html) and [Web Forms](../site/webforms.html). This field cannot also be marked as *Required* when this is checked. Does not affect the ability to sign using the mouse, stylus, or an electronic signature pad.

Signature boxes are [Sheet Field Types](sheetsaddelements.html) that can be added for Electronic Signatures.

![](images/sheetSignBoxStamp.gif)

The generated form can then be signed directly on screen or using an external signature pad.

[Electronic Signatures](electronicsignatures.html) are electronically tied to data on the generated sheet (except images). Once a sheet is signed and saved, the date and time of the signature will show in the signature box.

If data is changed, the signature is automatically invalidated or cleared, and the date/time stamp is removed. Multiple signature boxes can go on a single sheet.

Note:

* Date and time do not show on [Signed Payment Plan Sheets](paymentplanprint.html).
* Signature boxes are only useful for sheet types that can be previewed before printing. Labels, prescriptions (Rx), and routing slips are not previewed on screen so cannot be tied to electronic signatures.
* To add space for a written signature, add a line instead.
* When a Web Form contains a signature box, patients can electronically sign using a mouse or stylus, or they can opt to type their name. See [Web Forms: What Patient Sees](webformspatient.html).

## SigPractice Field

In Edit Sheet Def, click **SigPractice**.

Alternatively, in Sheet Def Edit double-click an existing SigPractice field in the preview area or Fields list to edit.

This field type is only available for [Treatment Plan Sheet](sheetstreatplan.html) types. The field is a second signature box used for practice staff signatures (e.g., treatment presenter).

Available options are the same as the Signature field above, with the exception of the Mobile Caption.

If the Treatment Plan [Sheet Def Defaults](sheetdefaults.html) includes the *SigPractice* field, when [Signing a Saved Treatment Plan](treatmentplansign.html) users will be prompted for both a patient and a *Patient/Guardian* and *Office Signature*.

![](images/treatPlanSigPractice.png)