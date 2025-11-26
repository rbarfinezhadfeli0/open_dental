Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Sheet Grid

Grids are special fields used in certain sheets.

In [Edit Sheet Def](sheetsetup.html), click **Grid**.

![](images/sheetsGridType.png)

Alternatively, in Sheet Def Edit double-click an existing Grid in the preview area or Fields list to edit.

Grids are a fixed group of information organized into columns and rows. They can be added to [Statements](statement.html), [Treatment Plans](treatmentplan.html), [Referrals](referrals.html), [Chart Layouts](layout.html), and printed [Payment Plans](paymentplanpatient.html).

Also see: [Sheet Field Types](sheetsaddelements.html)

When adding a grid to a sheet, use the Grid Type dropdown to select the grid. Available options depend on the sheet type.

![](images/sheetsGridEdit.png)

When editing a grid, you can determine the following:

* **Grid Type**: Automatically selected. To change the grid type, delete and re-add using the correct type.
* **Growth Behavior**: Cannot be changed for most grid types. This attribute can be set when it is not known ahead of time how large the text input will be. Setting the growth behavior causes a field to grow bigger. In Chart Layout, you can use the dropdown to select a preferred behavior (see below).
* **X** and **Y**: Enter the position of the grid in relation to the X and Y axis. X = horizontal. Y = vertical.

  Note: You can also click and drag the grid on the sheet itself to reposition it.
* **Width** and **Height**: Only editable for Chart Layout grids. Displays the overall size of the grid.

## Statement Grids

There are six Grid Types for [Statement Sheets](statementsheets.html).

**StatementAging**

![](images/sheetGridAging.gif)

Note: PatNum, Account, and Total only display for superfamily statements.

**StatementEnclosed**: *Amount Due* is automatically calculated. *Date Due* is determined by *Days to calculate due date* set in [Preferences](preferences.html). If the preference is blank, *Due on Receipt* is shown.

![](images/sheetGridEnclosed.gif)

**StatementMain**: The columns can be modified in Display Fields, StatementMainGrid (column names, order, and size).

![](images/sheetGridMain.gif)

**StatementPayPlanOld**: Displays information for [Old Payment Plans](paymentplanpatient.html). May also be labeled *statementPayPlan* in the Sheet Fields list of existing custom sheets.

![](images/sheetsPayPlanGrid.png)

**StatementPayPlanGrid**: Displays information for [Payment Plans](paymentplandynamic.html). May also be labeled *statementDynamicPayPlan* in the Sheet Fields list of existing custom sheets.

![](images/sheetsDynamicPayPlanGridExample.png)

**StatementInvoicePayment**: The grid populates with payments attached to procedures on the invoice as well as unattached payments that were made on the same day.

![](images/sheetGridInvoicePayment.gif)

## Treatment Plan Grids

There are three Grid Types for [Treatment Plan Sheets](sheetstreatplan.html).

**TreatPlanMain**: At least one TreatPlanMain must exist in each treatment plan sheet. The columns can be modified (e.g., column names, order, and width) in [Display Fields](displayfields.html), Treatment Plan Module .

![](images/sheetTPGridMain.gif)

**TreatPlanBenefitsFamily**

![](images/sheetTPGridFamily.gif)

**TreatPlanBenefitsIndividual**

![](images/sheetTPGridIndivid.gif)

## Payment Plan Grid

There is one Grid Type for [Payment Plan Sheets](paymentplansheets.html).

**PayPlanMain**

![](images/sheetsPayPlanGridexample.gif)

## Referral Letter Grid

The following Grid Type is available for [Referral Letter Sheets](sheetsreferrals.html). See Procedure Grids below for additional available types.

**ReferralLetterProceduresCompleted**. Shows completed procedures for the day the sheet is generated for the patient.

![](images/sheetGridReferralLetter.png)

## Patient Dashboard Grid

There is one Grid Type for [Patient Dashboard Layouts](dashboardsetup.html).

**ApptsGrid**

![](images/sheetsGridAppts.gif)

## Chart Layout Grids

There are two Grid Types for [Chart Layouts](layout.html).

**ProgressNotes**

![](images/sheetsGridProgressNotes.gif)

**PatientInfo**

![](images/sheetsGridPatientInfo.gif)

ProgressNotes and PatientInfo allow for a custom growth behavior. Options include:

* FillRightDown: Fill this grid all the way down, and all the way to the right of the display.
* FillDown: Maintain the width of the grid, but fill all the way down the display. If a field is below this grid, it stops at that field.
* FillRight: Maintain the height of the grid, but fill all the way to the right of the display. If a field is to the right of this grid, it overlaps.
* FillDownFitColumns: Fill this grid all the way down and start at the highest available Y position. If a field is below this grid, the field is moved out of the way.

## Procedure Grids

These grids are available for Patient Forms, Referral Letters, Patient Letters, and Consent Forms.

* If the sheet is opened via the Forms button, regardless of the selected module, the Sheet Procedure Select window displays prior to opening the [Fill Sheet](sheetsfillout.html) window.
* If the sheet is opened via the Consent button from the Chart Module, the Sheet Procedure Select window displays prior to opening the [Fill Sheet](sheetsfillout.html) window.
* If the sheet is opened via the Consent button from the Treatment Plan Module, the grid is generated based on highlighted procedures in the Treatment Plan. The Sheet Procedure Select window is skipped.

**ProcsWithFee**

![](images/sheetsGridProcsWithFee.png)

**ProcsNoFee**

![](images/sheetsGridProcsNoFee.png)