Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Add Multiple Adjustments

Use the Add Multiple Adjustments window to add adjustments for multiple procedures at once.

In the [Account Module](account.html) toolbar, click the [Adjustment](adjustments.html) dropdown and click **Add Multiple**.

![](images/adjAddMultiWindow.png)

Alternatively:

* Select multiple procedures, click the Adjustment dropdown, and click **Add Multiple**.
* Select multiple procedures, then right-click, and select Add Adjustment.

## Adjustment Info

In the Adjustment Info section, enter the adjustment details.

![](images/adjMultiInfo.png)

**Date**: Typically the same as the entry date. Modifying this date could potentially change historical data. Date changes must be made prior to clicking **Add** for the entered date to be used for the adjustment(s).

**Only show TSI excluded adjustment types**: Only available when [TSI Collections](tsicollections.html) is enabled and the selected patient has a [Billing Type](definitionsbillingtypes.html) marked as *C* (Collections). Determine which Adjustment Types are listed:

* Checked: Default. Only the *Exclude Negative Adj Type* and *Exclude Positive Adj Type* Adjustment Types defined in [TSI Setup](tsisetup.html) are listed.
* Unchecked: All non-hidden Adjustment Types are listed.

**Adjust Per Procedure**: In the text box, enter the adjustment amount to attach to selected procedures.. The tex box label changes (Percent/Amount) depending on the radio button selection. *Adjustment Create* [Permission](permissions.html) is required to create an adjustment other than $0.

* Fixed Amount: Each adjustment will be fixed dollar amount.
* Percent of Remaining Balance: Each adjustment will be a percentage of each procedure's Rem Before amount, i.e., Fee - (Ins Est or Ins Paid + Write-off + Pat Paid + Other Adj). No adjustment will be added to procedures with a negative patient portion (credit) or a patient portion of zero.
* Percent of Fee: Each adjustment will be a percentage of the attached procedure's billed Fee (does not consider insurance write-off).

**Provider**: Provider assigned to the adjustments. Defaults to inherit the provider on the attached procedure. Click the dropdown or [...] to select a different provider. This affects the production of the provider.

**Clinic**: Clinic assigned to the adjustments. Defaults to inherit the clinic on the attached procedure. Click the dropdown or [...] to select a different clinic. This affects the production of the selected clinic.

Note: The clinic and provider of the adjustment must match the attached procedure. If the provider and clinic do not match, the procedure value is not be updated and the adjustment is considered a separate charge when a payment is applied.

**Additions**: List of adjustment types that increase the procedure fee. Customize options in [Definitions: Adj Types](definitionsadjtypes.html).

**Subtractions**: List of adjustment types that decrease the procedure fee. Customize options in Definitions, Adj Types.

## Account Entries, Note, and More

In the bottom section of the Add Multiple Adjustment window, select procedures to apply adjustments, add note, add adjustments, and more.

![](images/adjMultiAccountEntriesNote.png)

**Account Entries Grid**: Highlight procedure(s) to attach adjustments to. Listed procedures are dependent on the selected Credit Filter (see below).

**Note**: Custom text that appears on each adjustment. To show this note on statements enable *Show notes for adjustments* in [Preferences](preferences.html).

**Credit Filter**: Determine which procedures are available in the Account Entries grid.

* Only allocated credits: Show all procedures that do not have enough attached credits (i.e., paysplits, adjustments) to cover the full cost of the procedure (e.g., procedures that have attached paysplits that only cover part of the cost).
* Include all credits: Show all procedures that are not paid off using first in/first out logic. This logic applies when credits in a payment are not explicitly attached/allocated to procedures. This is the default when *Adjustments* behavior in [Allocations Setup](allocationssetup.html) is set to *Manual*.
* Exclude all credits: Show all procedures on this patient's account, regardless of remaining balance.

**Add**: Click to create adjustments in the Account Entries Grid for selected procedures with the entered Adjustment Info and Note.

* Adjustments are not posted to the account until clicking Save.
* If the *Negative Adjustment* preference is set to *Warn* or *Block* and an adjustment exceeds the *Rem Before* amount (estimated patient portion remaining), there is an *Overpaid Procedure Warning*.

**Update**: Update adjustments based on the settings in Adjustment Info. This allows users to alter adjustments as needed before saving.

**Delete**: Select adjustment(s) and click to delete from the Account Entries grid.

Click **Save** to close the window and post adjustment(s) to the patient's account.