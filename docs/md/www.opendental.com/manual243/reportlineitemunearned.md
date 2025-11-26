Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Line Item Unearned Income Report

The Line Item Unearned Income Report shows details for unearned payment splits in a date range.

In the [Unearned Income Reports](reportunearnedincome.html), click the **Line Item Unearned Income** tab.

![](images/reportLineItemUnearned.png)

Positive [Unearned / Prepayment](unearnedprepayment.html) amounts on this report indicate either a collected unearned income (e.g., prepayment) or a patient payment transferred to unearned income, within the selected date range. Negative amounts indicate unearned has been allocated to a charge, has been refunded, or transferred to another source.

Note: To determine user access to these reports, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

Set the report filters before running the report.

**Calendars**: In the left calendar select the start date. In the right calendar select the end date. The date range defaults to last calendar month.

**Clinics**: Only available when Clinics are enabled in [Show Features](showfeatures.html). Select clinics to include in the report. Check **All (includes hidden)** to include all clinics, including those marked hidden.

* Filters by clinic attached to the [Paysplit](paysplit.html).
* If user is restricted to specific clinics, only accessible clinics are listed. When checking **All (includes hidden)**, results include all clinics user has access to, including those marked hidden, and anything unassigned to a clinic; results do not include clinics user is restricted from.

**Show provider column**: Check to include the provider abbreviation of a the [Provider](providers.html) assigned to unearned income.

## Report Preview

Click **OK** to generate the report. The following is an example of the report and explanation of the report columns. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportLineItemUnearnedResults.png)

* **Date**: [Payment](payment.html) date.
* **Patient**: Patient attached to [Paysplit](paysplit.html).
* **Type**: Unearned Type assigned to paysplit (see [Definitions: PaySplit Unearned Types](definitionspaysplitunearned.html)).
* **Clinic**: Clinic assigned to paysplit.
* **Prov**: Only appears if *Show provider column is checked*Provider assigned to paysplit. This is blank if no provider is assigned to the unearned paysplit.
* **Amount**: Amount of the paysplit. This differs from the payment amount if the payment includes multiple paysplits.