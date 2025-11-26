Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Show Insurance Write-offs

Offices can choose the default write-off option that best fits their practice needs when running reports.

In [Report Setup: Misc Settings](reportmiscsettings.html), near the bottom, is a dropdown for *Default selected date for PPO write-offs.*

![](images/writeoffDefault.png)

Choose the default setting that will affect the date write-offs will appear on reports. Insurance claims must be created before write-offs will appear on reports.

## Reports

![](images/prodincShowInsWriteoffs.png)

The option chosen in Report Setup will affect the default *Show Insurance Write-offs* setting for the following reports:

* [Production and Income Reports](reportprodinc.html)
* [Daily Write-off Report](reportdailywriteoffs.html)
* [PPO Writeoffs Report](reportppowriteoffs.html)
* [Monthly Production Goal Report](reportproductiongoal.html)
* [Custom Aging Report](reportcustomaging.html)

The setting can be changed manually when running the reports.

Note: This setting does not affect the [Receivables Breakdown Report](reportreceivablesbreakdown.html), but the descriptions of how write-off dates are applied are still applicable to that report.

## Options

**Insurance Pay Date**: Use insurance payment date.

Apply write-offs when the insurance payment is received. Recommended when the write-off amount is unknown on the date of service (carrier fee schedule is unknown).

* Advantage: Historical reports will not be affected when the insurance payment (and write-off) is entered.
* Disadvantage: Net production (*Tot Prod*) for the day will not reflect the write-off. Instead, write-offs will be counted against production when the insurance payment is finalized. This may be very far after the actual procedure date.

This method is used in the patient [Account Module](account.html). Use this method if the office uses global lock dates.

**Procedure Date**: Use procedure date.

Apply write-offs on the date the procedure is completed. Recommended when the write-off amount is known on the date of service (carrier's fee schedule has been entered).

* Advantage: Net production for the day will reflect the write-off (production subtracts write-off amount).
* Disadvantage: If the write-off amount is changed when the insurance payment is entered, historical reports need to be re-run.
* Before claim payments are finalized, reports will reflect write-off estimates. After claim payments are finalized, reports will reflect the final write-off. If the final write-off differs from the write-off estimate, this will only show when reports are re-run for the historical procedure date.

**Initial Claim Date/Ins Pay Date**: Use initial claim date for write-off estimates, insurance payment date for write-off adjustments.

On the claim date, the write-off estimate displays what was originally sent to insurance. Updating the write-off after the claim was sent will not reflect on the report under write off estimate but will display on reports as of the payment date under write-off adjustments once the payment has been finalized

* Advantage: Historical reports will not be affected when the insurance payment (and write-off) is entered. Allows paying providers on adjusted production when it's completed, and correct for any discrepancies in the future.
* Disadvantage: If the claim is created after the day of service, write-off estimates will show on a different date than the production; If the claim is deleted, the [Claim Snapshot](claimsnapshot.html) may not be accurate. Correction will occur when the claim is paid though a write-off adjustment.
* Uses the Claim Snapshot to determine write-off and write-off adjustments
* [PPO Writeoffs Report](reportppowriteoffs.html) Only: Both write-off estimates and write-off adjustments will be reported for the claim date. No write-off information will be reported for the insurance payment date.

This option is not available for [Receivables Breakdown Report](reportreceivablesbreakdown.html).