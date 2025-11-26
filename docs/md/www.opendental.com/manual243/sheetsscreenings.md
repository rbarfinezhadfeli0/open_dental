Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Screening Layout

Screening forms used during Public Health Screening can be customized using sheets.

In [Sheets](sheets.html), double-click on a custom sheet with the type of Screening.

![](images/sheetsScreening.gif)

Alternatively, in Sheets:

* Click **New** and choose *Screening* as the Sheet Type to create a new Screening from blank.
* Select an existing Custom *Screening* sheet and click **Duplicate** to create a copy of an existing Screening.
* Select the existing Internal *Screening* sheet and click **Copy** to create a copy of a default Screening that can be edited.

Also see:

* [Public Health Screenings](publichealthscreenings.html)
* [Public Health Custom Screening](publichealthscreeningcustom.html)
* [Sheet Def Properties](sheetproperties.html)
* [Sheet Field Types](sheetsaddelements.html)

To utilize custom screening sheet, enable the [Preference](preferences.html) *Screenings use sheets*. If there are no custom screening sheets, the internal sheet will be used.

## Useful Screening Elements:

[Checkboxes](sheetscheckbox.html): When using checkboxes in a screening, you can add additional procedure codes to chart automatically. At the bottom of the Edit Checkbox window, click **Add**, then select from the list of procedure codes. The following checkboxes are defaulted on the internal screening sheet.

* **Assessment Proc checkbox**: If checked during a screening, a completed procedure for code D0191 (assessment of a patient) will be added to the patient's chart.
* **Fluoride Proc checkbox**: If checked during a screening, a completed procedure for code D1206 (topical application of fluoride varnish) will be added to the patient's chart.

[Combo Boxes](sheetscombobox.html): Pick lists that allow the screener to select one option from a list of choices. Five combo boxes exist on the internal screening sheet: Gender, Place of Service, Urgency, Race/Ethnicity, and Grade Level. Options can be reordered, added, or removed.

[ScreenCharts](sheetsscreenchart.html): Tooth charts of posterior teeth. Two tooth charts are available and each can be set for primary or permanent teeth:

* ChartSealantTreatment: To mark current tooth status including treatment needed.
* ChartSealantComplete: To mark sealants that are complete.

Double-click on a chart to set the teeth to permanent or primary.

When sealant code is entered (S) to a chart with permanent teeth, a matching sealant procedure is added to the patient's chart with the corresponding status. Below is ChartSealantTreatment tooth chart as it looks during a screening. Simply click on a tooth or surface to select a code.

![](images/sheetsScreenChart.gif)