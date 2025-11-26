Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Graphical Tooth Chart

The Graphical Tooth Chart visually displays the patient's teeth, as well as treatment that has been performed, is planned, or has been referred out.

In the [Chart Module](chart.html), at the upper left, is the graphical tooth chart.

![](images/graphicalToothChart.png)

To select a tooth, click the tooth or tooth number. Click a selected tooth again to deselect. Click and drag to quickly select multiple teeth.

Drag the slider bar under the chart to show historical changes to the patient's tooth chart. Procedures that were originally in the Treatment Planned procedure status appear on the chart as of the [Procedure](procedureedit.html) *Date TP*. Other statuses appear as of the *Date Entry*.

**Tooth Numbering**: Tooth numbering displayed on the Graphical Tooth Chart is determined by the *Tooth Nomenclature* set in [Preferences](preferences.html). Open Dental supports 4 different tooth numbering systems:

* Universal (Common in the United States, 1-32): 1-32 for permanent teeth. A-T for primary teeth. Supernumerary teeth use 51-82 and AS-TS. For permanent supernumerary teeth add 50 to the tooth number (tooth 1 = 51). For primary supernumerary add S to the tooth number (tooth A = AS).
* FDI Notation (International, 11-48): 11-48 for permanent teeth. 51-85 for primary teeth. Not all numbers in these ranges are valid. For foreign users, supernumerary teeth can be entered as 99.
* Haderup (Danish)
* Palmer (Ortho)

Note: If viewing the Graphical Tooth Chart from the [Ortho](ortho.html) tab and *Tooth chart ortho mode* is enabled, tooth numbering is displayed in Palmer, regardless of *Tooth Nomenclature* preference.

**Tooth Graphics**:

* [Supernumerary Teeth](supernumeraryteeth.html) are not displayed on the Graphical Tooth Chart, so procedures charted to supernumerary teeth are not shown. Supernumerary teeth can be manually drawn on the Graphical Tooth Chart using the pen tool from the [Draw Tab](chartdrawing.html).
* Teeth can be selected from the Graphical Tooth Chart to chart procedures from the [Enter Treatment](entertreatment.html) tab or mark teeth missing/not missing from the [Missing/Primary Teeth](missingteeth.html) tab.
* A procedure code's paint type and treatment area determine the graphic used in the tooth chart. Some treatment areas show no graphic (e.g., mouth). See [Edit Procedure Code](procedurecodeedit.html) to determine the paint type and treatment area used for a specific procedure code.
* Colors are dependent on:
  + Procedure status (treatment planned, complete, existing other provider, existing current provider, referred, condition).
  + The colors set in [Definitions: Chart Graphic Colors](definitionschartgraphiccolors.html).
  + The status of *Chart graphic color distinguishes current provider* in [User Settings](usersettings.html) for the currently logged-on user.
  + *Color Override* set for a procedure code, if any.
* If Chart Graphic Colors are changed, we recommend changing [Definitions: Prog Note Colors](definitionsprognotecolors.html) to match. By convention, procedures that use metal are a dark color, while those that use ceramic, porcelain, or plastic are a light color. When a color override is present, color does not indicate status.
* Procedure statuses shown on the Graphical Tooth Chart depend on the settings enabled for the selected [Chart View](showtabchart.html).
* Teeth can be moved on the tooth chart using the [Movements](movements.html) tab.

## Tooth Chart Dropdown

In the Chart Module, in the toolbar, is a Tooth Chart dropdown.

![](images/toothChartDropdown.png)

**Show Big**: Open the [Big Graphical Tooth Chart](chartbig.html).

**Save the Tooth Chart**: Save a copy of the Graphical Tooth Chart in the [Imaging Module](images.html) to the [Image Category](definitionsimagecat.html) marked for *Graphical Tooth Charts*.

## Troubleshooting

If treatment is displaying on the Graphical Tooth Chart that is no longer relevant or no longer in place (e.g., removed crown) check *Hide Graphics* in [Procedure Info](procedureedit.html). Procedures are no longer displayed on the Graphical Tooth Chart.