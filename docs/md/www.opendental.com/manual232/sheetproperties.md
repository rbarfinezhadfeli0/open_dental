Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Sheet Def Properties

General Sheet properties include a name, font defaults, width/height, page orientation, and more.

In [Sheets](sheets.html), double-click a [Sheet Definition](sheetsetup.html), click **Edit Properties**.

![](images/sheetDef.png)

* **Description**: Name of the Sheet.
* **Sheet Type**: Determines where the Sheet is available. Once a type is assigned it cannot be changed. (e.g., Sheets with a PatientForm or MedicalHistory type are availabile by clicking [Forms](patientform.html) in the Main Toolbar).
* **Check 'Autosave' By Default**: Only displays when an [Image Category](definitionsimagecat.html) is marked as *Autosave Forms*. When checked, *Autosave to Images* is checked by default in [Fill Sheet](sheetsfillout.html) when creating a new Sheet of this type.
  + When clicking OK from Fill Sheet, Sheets are saved to the [Imaging Module](images.html) by default. Users can uncheck *Autosave to Images* on individual Sheets as needed to prevent autosaving.
  + Only available for Sheet Types of: Consent, ExamSheet, LabSlip, Medical History, PatientForm, PatientLetter, PaymentPlan, ReferralLetter, ReferralSlip, Rx, and Screening.
* **Autosave Image Category Override**: Select an Image Category from the dropdown to store Autosaves for this Sheet Def in an Image Category other than the default.
  + Only available for Sheet Types of: Consent, ExamSheet, LabSlip, Medical History, PatientForm, PatientLetter, PaymentPlan, ReferralLetter, ReferralSlip, Rx, and Screening.
* **Bypass Global Lock**: Typically only checked for [Exam Sheets](examsheets.html). When checked this Sheet is not be affected by the [Global Lock Date](securitylockdates.html) (if turned on).
* **Default Font name and size**: The default font properties used when a user creates fields. Font support is dependent on the browser used to view the web form. We recommend using common fonts (e.g., Times New Roman, Arial, Courier) and testing Sheets on a browser and device the office plans to support. If a browser doesn't support a font, a different font is substituted. This can affect layout of the Sheet. Static Text Fields in particular may need to be larger to fit text.
* Sheet Font Size Reduction: If experiencing issues with sheet font size (e.g., overlapping fields), use this tool to decrease the size of all text fields on the sheet.
  + **About this tool**: Click to open a window with additional information regarding the tool and its use.
  + **Reduce Font Size:** Click to apply a 0.5 pt font size reduction to all text fields on the Sheet. Click again to reduce text size further. Changes to text are previewed in the Sheet window.
* **Width/Height**: The width and height of each page of the Sheet. These values should not be larger than the size of the paper that the Sheet will be printed on. A standard letter sized Sheet is 850w x 1100h.
* **Landscape**: When checked, sets the page orientation to landscape. When unchecked, sets the orientation to Portrait.
* **Use Mobile Layout**: Check to allow [Mobile Layouts](sheetsetupmobile.html) for this Sheet.
  + Only available for Sheet Types of: Consent, MedicalHistory, Exam Sheet, and PatientForm.

Click **OK** to save changes.