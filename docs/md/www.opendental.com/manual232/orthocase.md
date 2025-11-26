Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Ortho Case

Ortho cases help determine an ortho schedule and estimated payment information.

In the [Account Module](account.html), select the Ortho Cases tab.

![](images/orthoCaseTab.png)

The Ortho Cases tab is only available if procedures are added to Ortho Case Procedures in [Ortho Setup](orthosetup.html).

**Add Ortho Case**: Click to create a new ortho case. This button will be disabled if the patient already has an active ortho case. Patients can have one active ortho case at a time.

**Make Active**: Click to activate the currently selected ortho case. If a different ortho case was previously active, it will be deactivated.

**Hide Inactive Ortho Cases**: Check to hide any inactive ortho cases.

**Ortho Cases Grid**:

* Is Active: An X will show on the active ortho case. Only one case can be active at a time for a patient. Once the debond procedure is set complete, the case will be deactivated.
* Is Transfer: An X will show if the ortho case is marked as a transfer. This is used to indicate a patient who had their banding done with another provider.
* Start Date: The banding or transfer date of the ortho case.
* Completion Date: The debonding date.

When adding a new ortho case, the following window will appear. Alternatively, double-click a case to view the details.

![](images/orthoCaseWindow.png)

When adding a new ortho case, all information must be filled out.

**Banding Procedure**: Click **[...]** to select the banding procedure. The following window will open. Only treatment planned procedures will list. Banding procedures are determined by codes added to Ortho Setup. Only one banding procedure can be associated with an ortho case.
![](images/orthoBandingProc.png)

**Is Transfer**: Check this box when the patient has been transferred to the office from another provider, and your office did not provide the banding procedure.

**Dynamic Payment Plan**: Click to create a [Dynamic Payment Plan](paymentplandynamic.html) for any completed procedures linked to the active ortho case. The completed procedures are automatically attached to the plan's production, if not already attached to a plan. If a dynamic payment plan already exists for the ortho case, the button opens that plan instead of creating a new one.

**Fee Details:**  Enter the fee information for this patient.

* Fee: The total of the orthodontic treatment.
* Primary Insurance: The amount expected to be paid by primary insurance.
* Secondary Insurance: Only visible when patient has primary insurance entered. The amount expected to be paid by secondary insurance.
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

* Banding Date: Enter the date of the banding procedure. If *Is Transfer* is checked, this will show as the Transfer Date.
* Expected Debond Date: Enter the expected date of the Debond procedure.
* Expected days of treatment: Automatically calculated.

**Ortho Schedule**: Automatically created. Shows each procedure and visit.

* Green line items have been set complete. The Date Completed will automatically update.
* Black line items are procedures not yet completed.

When all information is entered, and no items are showing in red, click **OK** to save the Ortho Case.

If any items are showing in red, they must be fixed before the user can continue.

**Delete**: Click to delete the entire ortho case. Only active ortho cases can be deleted.

**Close Case**: Click to close the ortho case when treatment is completed, or the patient has transferred to a different provider. Only active ortho cases can be closed.

**Detach Selected**: Highlight procedures to detach from the Ortho Schedule as needed. When a procedure is selected, all procedures below will also be selected.