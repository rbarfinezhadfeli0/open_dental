Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Sheet Screen Chart

Add Screen Charts to Screening sheets to mark tooth status or treatment needed when completing screenings.

In [Edit Sheet Def](sheetsetup.html), double-click a Screen Chart from the Fields list.

![](images/sheetsScreenType.gif)

**Chart Type**: Select the tooth numbers of the selected Screen Chart.

* Primary Teeth: Mark all teeth in the selected Screen Chart as primary.
* Permanent Teeth: Mark all the teeth in the selected screen chart as permanent .

**Delete**: Delete the selected Screen Chart from the sheet.

**OK**: Close window and save changes.

**Cancel**: Close window without saving changes.

## Adding a New Screen Chart

To a new Screen Chart, in Edit Sheet Def, click **ScreenChart**  to automatically insert a new Screen Chart.

Screen Charts are [Sheet Field Types](sheetsaddelements.html) that can be added when using the [Screening Layout](sheetsscreenings.html). There are two tooth charts available. Each chart shows posterior teeth and can be set to show permanent or primary teeth.

* If no screen charts are currently on the sheet, ChartSealantComplete will insert first.
  + *ChartSealantComplete*: To mark sealants that are complete.
* If ChartSealantComplete is already on the sheet, ChartSealantTreatment chart will insert, and vice versa.
  + *ChartSealantTreatment*: To mark current tooth status including treatment needed.
* Only two charts are allowed per sheet.

## Using Screen Charts

Only sealants marked on permanent teeth will automatically add a matching procedure code to the patient's chart.

When using a custom screening form that has a tooth chart, users can click on a tooth or tooth surface to select a code that represents tooth status or needed treatment. There are six code options and they are described in the Code legend on the internal screening sheet:

* S = Seal
* PS = Previously Sealed/Intact
* C = Caries
* F = Filled
* NFE = Not Fully Erupted
* NN = Not Needed
* None = remove a previously marked code.

Teeth 2, 3, 14, 15, 31, 30, 19, and 18 allow a code per surface. Users can mark a single surface or all.

When sealant procedures are marked on permanent teeth, a matching sealant procedure (D1351) is added to the patient's chart. Status of the procedure (treatment planned or complete) depends on which tooth chart the code is marked on. Surface information will be associated with the procedure, but not sent with claims.

Below is what the tooth charts look like on generated custom screening form. 'S' indicates teeth or tooth surfaces where a sealant code has been marked.

![](images/sheetsScreenChart.gif)