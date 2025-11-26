Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Treatment Plan Layout

The Treatment Plan sheet can be customized to meet the needs of the practice.

In [Sheets](sheets.html), double-click a on a custom sheet with the type of TreatmentPlan.

![](images/sheetsTreatmentPlan.png)

Alternatively in Sheets:

* Click **New** and choose *TreatmentPlan* as the Sheet Type to create a new treatment plan layout from blank.
* Select an existing Custom TreatmentPlan sheet and click **Duplicate** to create a copy of an existing treatment plan sheet.
* Select the existing Internal TreatmentPlan sheet and click **Copy** to create a copy of the default treatment plan that can be edited.

Also see: [Sheet Def Properties](sheetproperties.html) and [Sheet Field Types](sheetsaddelements.html).

Set the default [Treatment Plan](treatmentplan.html) sheet in [Sheet Def Defaults](sheetdefaults.html).

To customize a TreatmentPlan sheet type, see: [Edit Sheet Def](sheetsetup.html).

**Requirements**: A TreatmentPlan sheet must have the following.

* Exactly one Signature box.
* At least one TreatPlanMain [Grid](sheetsgrid.html)

The following options are only available to sheets with a TreatmentPlan type:

* Tooth chart and tooth chart legend: These are [Special Fields](sheetsspecial.html).
* TreatPlanMain grid: The [Grid](sheetsgrid.html) between the tooth chart legend and Family Insurance Benefits. At least one of this grid type must exist on a treatment plan sheet. The columns, header, width and order are determined in [Display Fields](displayfields.html), TreatmentPlanModule.
* TreatPlanBenefitsFamily grid: Family Insurance Benefits grid.
* TreatPlanBenefitsIndividual grid: Individual Insurance Benefits grid.
* SignatureText: OutputText where patient may type their name.
* SignaturePracticeText: OutputText where presenter may type their name.
* DateTSigned: Records date of electronic signature.
* DateTPracticeSigned: Records date of second electronic signature.
* SigPractice: Secondary Signature box, where presenter may sign if desired.

  Note: In order for the second signature box to prompt when clicking **Sign TP**, the custom Treatment Plan sheet needs to include both the *SigPractice* box, and the *SignaturePracticeText* box as an [Output Text Field](sheetsoutputtext.html).