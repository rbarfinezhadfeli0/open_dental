Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Ortho Case

Ortho Cases help determine an ortho schedule and estimated payment information.

In the [Account Module](account.html), select the Ortho Cases tab.

![](images/orthoCaseTab.png)

The Ortho Cases tab is only available if procedures are added to Ortho Case Procedures in [Preferences](preferences.html).

**Add Ortho Case**: Click to create a new Ortho Case. This button is disabled if the patient already has an active Ortho Case. Patients can have one active Ortho Case at a time.

**Make Active**: Click to activate the currently selected Ortho Case. If a different Ortho Case was previously active, it is deactivated.

**Hide Inactive Ortho Cases**: Check to hide any inactive Ortho Cases.

**Ortho Cases Grid**:

* Is Active: An X shows on the active Ortho Case. Only one case can be active at a time for a patient. Once the debond procedure is set complete, the case is deactivated.
* Is Transfer: An X shows if the Ortho Case is marked as a transfer. This is used to indicate a patient who had their banding done with another provider.
* Start Date: The banding or transfer date of the Ortho Case.
* Completion Date: The debonding date.

When adding a new Ortho Case, the following window appears. Alternatively, double-click a case to view the details.

![](images/orthoCaseWindow.png)

When adding a new Ortho Case, all information must be filled out.

**Banding Procedure**: Click **[...]** to select the banding procedure. The following window opens. Only treatment planned procedures are listed. Banding procedures are determined by codes added to the *Ortho Case Procedures* preference. Only one banding procedure can be associated with an Ortho Case.
![](images/orthoBandingProc.png)

**Is Transfer**: Check this box when the patient has been transferred to the office from another provider, and your office did not provide the banding procedure.

**Payment Plan**: Click to create a [Payment Plan](paymentplandynamic.html) for any completed procedures linked to the active Ortho Case. The completed procedures are automatically attached to the plan's production, if not already attached to a plan. If a Payment Plan already exists for the Ortho Case, the button opens that plan instead of creating a new one.

**Fee Details:**  Enter the fee information for this patient.

* Fee: The total of the orthodontic treatment.
* Primary Insurance: The amount expected to be paid by primary insurance.
* Secondary Insurance: Only visible when patient has a secondary insurance plan. The amount expected to be paid by secondary insurance.
* Patient Portion: The amount expected to be paid by the patient.

**Procedure Breakdown**: The amount towards each procedure. Enter as a percentage or amount. Percentages must equal 100.

* Banding Amount: Percentage or amount of the total fee applied to the banding procedure.
* Debond Amount: Percentage or amount of the total fee applied to the debonding procedure.
* All Visits Amount: Percentage or amount of the total fee applied to the individual visits.

**Visit Details**: Enter one field to automatically calculate the others.

* Percent per Visit: The percentage of the total fee applied to each visit.
* Amount per Visit: The amount of the total fee applied to each visit.
* Visits Planned: The total number of expected visits.
* Visits Completed: Automatically calculates as visit appointments are set complete.

**Dates**: Enter the banding date and expected debonding date.

* Banding Date: Enter the date of the banding procedure. If *Is Transfer* is checked, this shows as the Transfer Date.
* Expected Debond Date: Enter the expected date of the Debond procedure.
* Expected days of treatment: Automatically calculated.

**Ortho Schedule**: Automatically created. Shows each procedure and visit.

* Green line items have been set complete. The Date Completed automatically updates.
* Black line items are procedures not yet completed.

If any items are showing in red, they must be fixed before continuing.

**Delete**: Only available for existing Ortho Cases. Click to delete the entire Ortho Case. Only active Ortho Cases can be deleted.

**Close Case**: Only available for existing Ortho Cases with completed schedule items. Click to close the Ortho Case when treatment is completed, or the patient has transferred to a different provider. Only active Ortho Cases can be closed.

**Detach Selected**: Highlight procedures to detach from the Ortho Schedule as needed. When a procedure is selected, all procedures below are also selected.

When all information is entered, and no items are showing in red, click **Save** to create the Ortho Case or save changes.

Once the Ortho Case is saved, all fields, except *Expected Debond Date*, are read-only.