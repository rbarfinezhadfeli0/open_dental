Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR Payor Type / SOP Codes

Payor types refer to the system of payment (SOP code) that identifies a patient's payor status.

In the [Family Module](family.html), Patient Information area, double-click on the Payor Types row.

![](images/payortype.gif)

A historical log of the patient's payor types will show. Payor types are used in some [EHR Clinical Quality Measures](ehrcqm.html) calculations. A patient's payor type selection may determine if a patient counts in a CQM denominator.

Note: If you do not see the Payor Types row, it may need to be added to Fields Showing in [Display Fields](displayfields.html), Patient Information.

Click Add to select a payor type, or double-click a row to edit.

![](images/payortypeEdit.gif)

- **Start Date**: Defaults to today's date.
  * The **Date End** for the previous payor type entry (if it exists) will be the start date of the new entry. Otherwise, the Date End will be *Current*.
- **Payor Type**: A list of all SOP codes. If the list is blank, SOP codes must be downloaded. See [Importing Code Systems](codesystemimport.html).
- **Note**: Enter any notes about this payor type for the patient.