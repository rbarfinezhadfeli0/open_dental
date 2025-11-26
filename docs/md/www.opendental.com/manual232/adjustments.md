Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Adjustment

Adjustments are used to create additional charges or reduce charges on a patient account.

In the [Account Module](account.html), in the toolbar, click **Adjustment**.

![](images/adjustment.png)

Alternatively:

* In the Account Module, double-click a [Procedure](procedureedit.html), and click **Add New Adj**.
* In the Account Module, right-click a procedure, and click **Add Adjustment**.
* In a [Claim](claimedit.html), right-click a procedure, and click **Add Adjustment**. *Allow procedure adjustments from Edit Claim window* must be enabled in [Preferences](preferences.html).
* In a [Patient Payment Plan](paymentplanpatient.html), click **Add Adjustment**, and check *Also make line item in Account Module*.

Adjustments affect production (see [Production and Income](productionincome.html)). They are also used by the [Billing/Finance Charges](financecharges.html), [Late Charges](latecharges.html), [Broken Appointments Automation](apptbreak.html), [Discount Plans](discountplans.html), and [Sales Tax](salestax.html) tools. Adjustments can be attached to a procedure but are always attached to a single patient and assigned to a provider and can be assigned to a clinic.

To view a list of adjustments added in a date range, run the [Daily Adjustments Report](reportdailyadj.html).

## Adjustment Details

Enter the adjustment amount, type, etc. at the top of the window.

![](images/adjCreateDetails.png)

**Entry Date**: Read only. The date the adjustment was created.

**Adjustment Date**: Typically the same as the entry date. This is the date that appears on the account and most reports. Modifying this date could potentially change historical data.

**(procedure date)**: The date of the procedure attached to this adjustment.

**Amount**: The amount of the adjustment.

**Provider**: Defaults to the patient's primary provider. Click the dropdown or [...] to select a different provider (only providers restricted to the users clinic will show) or attach a procedure to inherit the procedure's provider.

**Clinic**: Defaults to the patient's assigned clinic. Click the dropdown to select a different clinic (only clinics restricted to the user will show) or attach a procedure to inherit the procedure's clinic.

* Creating new adjustments through the [Procedure Edit](procedureedit.html) window will automatically update the clinic and provider on the adjustment to match that of the procedure.
* Linking existing adjustments to a procedure through the Procedure Edit window will not automatically update the clinic and provider assignment. Either choose an adjustment with a matching clinic and provider or edit the adjustment to match the procedure.

**Additions**: List of adjustment types that add the adjustment amount to the patient's account balance.

**Subtractions**: List of adjustment types that subtract the adjustment amount from the patient's account balance (issues a credit of production).

Note:

* To customize the list of adjustment types, see [Definitions: Adj Types](definitionsadjtypes.html).
* Additions and Subtractions only display types the user has access to. To edit available adjustment types for a user, edit the *Adjustment Type Deny*  security permission. See Security section below.

## Procedure

Attach or detach this adjustment from a procedure. To set whether users are required to allocate an adjustment to a procedure, see Adjustments in [Allocations Setup](allocationssetup.html).

The clinic and provider of the adjustment must match the attached procedure. If the provider and clinic do not match, the procedure value will not be updated and the adjustment will be considered a separate charge when a payment is applied.

![](images/adjProcAttach.png)

**Attach**: Select a completed procedure from the [Select Procedure](selectprocedure.html) window. *Subtraction* adjustments will reduce the procedure fee and *Addition* adjustments will increase the fee.

Note: Procedures cannot be attached to adjustments that are attached to a patient payment or [Dynamic Payment Plan](paymentplandynamic.html).

**Detach**: Remove the attached procedure from the adjustment.

**Edit Anyway**: Button is only visible if the adjustment is attached to a procedure and the Adjustment setting in Allocations Setup is set to *Rigorous*. Click to change the provider or clinic. Users must have the *Setup* security permission.

## Note and Buttons

Add notes regarding the adjustment, save changes, or delete the adjustment at the bottom of the window.

![](images/adjNoteButtons.png)

**Delete**: Remove the adjustment from the patient's account. Adjustments attached to a payment or payment plan cannot be deleted.

**Note**: Enter any notes about the adjustment. These notes can be included on statements when the *Show notes for adjustments* preference is enabled.

**OK**: Save changes made to this window. If a warning appears, see Negative Adjustments section below for additional information.

**Cancel**: Close the window without saving any changes.

## Add Multiple Adjustments

To create multiple adjustments attached to multiple procedures at once, see [Add Multiple Adjustments](adjustmentsmultiwindow.html).

## Negative Adjustments

The *Negative Adjustments* Preference determines if users are able to create subtraction adjustments that exceed the estimated patient portion remaining. When the preference is set to *Block*, users will receive a message informing them an adjustment cannot be created.

![](images/adjNegBlock.png)

Click **OK** on this message to return to the Edit Adjustment window and edit the adjustment as to not exceed the estimated patient portion remaining.

If the *Negative Adjustment* Preference is set to *Warn* and the adjustment exceeds the estimated patient portion remaining, users receive an *Overpaid Procedure Warning* instead. Users can choose to **Cancel** the adjustment or click **OK** to proceed with creating the adjustment.

## Security

The following [Permissions](permissions.html) affect access to adjustments:

* *Adjustment Create*: Users must have this permission to create new adjustments. Users without this permission can create $0 adjustments.
* *Adjustment Edit*: Users must have this permission to edit existing adjustments.
* *Adjustment Edit Zero Amount*: Allow users without *Adjustment Edit* to edit $0 adjustments with today's date.
* *Adjustment Type Deny*: Permission denies access to certain Adjustment Types. See below.

**Adjustment Type Deny**

In the User Groups tab of the Security window, select a user group to deny access to specific Adjustment Types (e.g., finance charge, professional discount, etc.)

![](images/adjTypeDeny.gif)

1. Check the *Adjustment Type Deny* permission
2. The definition picker will pop up. Highlight the adjustment types to deny for the user group. To select multiple types, select Ctrl + click.
3. Click **OK**.

![](images/adjTypeDenyPicker.png)

Users in the selected user group do not have access to the selected Adjustment Types. When creating a new adjustment (or editing an existing adjustment), denied Adjustment Types are hidden in the Adjustment Type lists.

If a user is assigned to multiple User Groups, they are only denied access to specific Adjustment Types when all assigned User Groups are denied access.