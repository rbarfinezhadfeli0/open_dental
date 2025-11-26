Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Edit Mobile Sheet Def

Sheets can be optimized for use with mobile devices and eClipboard.

In [Edit Sheet Def](sheetsetup.html), at the upper right, click **Show Mobile**.

![](images/mobileWebFormSheetEdit.png)

If instead a button for **Hide Mobile** is shown, the mobile layout is already enabled.

Alternatively, in [Sheet Def Properties](sheetproperties.html), enable *Use Mobile Layout*.

This will toggle a pane on the left that shows a view that is optimized for mobile. Mobile layout is available for patient forms, consent forms, exam sheets, and medical histories.

![](images/youtubeLogo.png) See our video on Mobile Web Forms: [Web Forms Tutorial](https://youtu.be/vxTM-m3JHBU).
 Sheets enabled with mobile layout can be used in [eClipboard](../site/eclipboard.html).

Double-click a [Sheet Input Field](sheetsinputfield.html) to edit. Drag and drop to change the order of the fields.

Note: Mobile sheets do not support images. If you are using a scanned image as a background in the desktop version of your sheet, it will not show for mobile layout users.

**Use Mobile Layout**: Check to enable mobile version of sheet for use with [Web Forms](../site/webforms.html).

**Add Header**: Click to add a header to the mobile layout of the sheet.
![](images/mobileWebFormSheetEditHeader.png)

**Order Fields from Desktop**: Click to automatically sort the mobile layout fields using the tab order determined in the desktop layout of the sheet.

* Some fields cannot be ordered automatically. If these fields exist you will get a prompt reminding you to re-order them manually. Static Text Fields, Signatures, and fields without a tab order will list in orange at the top. Click and drag each field to their appropriate location.
* Once moved, orange fields return to white.

## Filling out Mobile Sheets

Filling out Mobile Sheets may differ from the [Fill Sheet](sheetsfillout.html) window or [Web Forms: What Patient Sees](webformspatient.html) when filling out on a computer web browser.

[eClipboard](eclipboardsees.html): When filling out sheets via eClipboard, some information may be filled in on sheets if it exists in the database or the patient has filled out the form previously. Patients can update or change information as needed.

[MedicalHistory](sheetsmedicalhistory.html) Sheets: For any blank *InputMed* fields, there is a single **Add** button available for the patient to input medications. The number of available inputs various depending on how many have been added to the sheet. If medication information already exists for the patient, they may see a list of medications. A **Remove** button is listed next to each existing medication associated to a *CheckMed* field.

## Troubleshooting

![](images/sheetEditMobileError.png)

If a mobile field has errors it will be highlighted red in the Edit Mobile Layout window. Errors may include:

* Missing Mobile Caption or Mobile Item Caption.
* Misc CheckBox is missing Group Name, Mobile Group Caption, and Mobile Item Caption.
* Mobile Header is blank.

Double-click a mobile field to resolve the error.