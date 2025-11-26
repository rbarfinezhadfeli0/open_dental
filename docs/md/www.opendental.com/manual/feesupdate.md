Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Fees Update

In [Fee Tools](feescheduletools.html), at the lower right, is the Global Updates area.

![](images/feesupdateglobal.png)

When fees are changed in a fee schedule, new procedures reflect these new fees. However, procedures in active or inactive Treatment Plans are not automatically updated. There are two options for updating fees: update fees for all treatment planned procedures at once or update fees one patient at a time. Instructions for both options are explained below.

Note:

* These tools can only be run using a direct connection to the database (not [Middle Tier](middletier.html)). These options are grayed out and unavailable when not using a direct connection.
* Estimates are automatically updated when creating a claim.
* Fees in saved Treatment Plans are not affected when updating fees.
* Any blank entries in a fee schedule are treated as $0. Existing fees for these procedures, including manually-entered fees are updated to $0.

## Update Fees or Estimates for all Treatment Planned Procedures

This method updates all procedures at once. Updated fees in all fee schedules are applied.

**Clinics**: From the dropdown, highlight which the clinics to update fees or estimates for. To select multiple clinics, click and drag or Ctrl + click.

**Update Proc Fees Only**: Updates procedure fees, but not insurance estimates. Insurance estimates are updated as soon as a patient's account is opened.

A prompt indicating that all treatment planned procedures will be updated for all patients is shown. Click **OK** to continue.
![](images/feesupdateglobalMsg.png)

**Update Estimates Only**: Updates insurance estimates on treatment planned procedures. Helpful for offices updating fee schedules and running reports prior to selecting patients. If this button is not selected, reports continue to reflect estimates based on old fees until a patient's account is opened.

A prompt indicating write-off estimates will be recalculated for all treatment planned procedures is shown. Click **Yes** to continue.

![](images/feesUpdateGlobalEstMsg.png)

When complete, a message indicates the number of procedure fees or estimates that were changed. Click Close to exit the message.

![](images/feesUpdateGlobalProgress.png)

## Update Fees per Individual Patient

This method is useful when offices plan to honor old fees for a certain grace period. It updates all treatment planned fees and insurance estimates for the selected patient only.

1. Select the patient to update fees for.
2. Navigate to the [Treatment Plan Module](treatmentplan.html).
3. Click **Update Fees** in the toolbar.
![](images/feesupdateTP.png)4. Click **OK** on the confirmation message to proceed. Fees are updated for procedures in the *Active* and all *Inactive* Treatment Plans for this patient only.
![](images/feesupdateTPMsg.png)