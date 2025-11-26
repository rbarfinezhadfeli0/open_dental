Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Hidden Payment Splits Report

Use the Hidden Payment Splits Report to track accounts with prepayment types that are shown in the Hidden Splits tab of the Account.

In [Standard Reports](reportsstandard.html), in the Lists section, click **Hidden Payment Splits**.

![](images/reportHiddenPaysplit.png)

This report tracks [Payment Splits](paysplit.html) (paysplits) with an [Unearned Type](definitionspaysplitunearned.html) marked as *Do Not Show on Account*. These paysplits are not displayed in the main Patient Account tab in the [Account Module](account.html) and instead are displayed in the Hidden Splits tab.

## Filters

Set the report criteria and filters before running the report.

**From / To Dates**: Choose the date range for the report. Click the dropdown to select a date or type a date. Use the **W** arrows to quickly move forward or backward one week from the currently selected dates. Date range applies to the Payment Date associated with the paysplit.

**Providers**: Select the providers to include in the report. Check **All** to include all listed providers and Unallocated hidden splits.

* Filters by provider assigned to the paysplit.
* Selecting **No Provider** includes prepayments with no provider allocation (i.e., *Unallocated*).

**Unearned Types**: Select the Unearned Types marked *Do Not Show on Account* to include on the report. Check **All** to include all Unearned Types marked *Do Not Show on Account*, including those marked *Hidden*.

**Clinics**: Only available when Clinics are enabled in [Show Features](showfeatures.html). Select the clinics to include in the report. Check **All (includes hidden)** to include all clinics and paysplits not attached to a clinic.

* Filters by clinic assigned to paysplit.
* If user is restricted to specific clinics, only accessible clinics are listed. When checking *All (includes hidden)*, results include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or payment splits not assigned to a clinic.

## Report Preview

Click **OK** to display a print preview of the report results. Paysplits matching the filter criteria are listed. Negative values represent the prepayment transferred to completed procedures or refunded.

The following is an example of the report and explanation of the report columns. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportHiddenPaysplitPrint.png)

* **Date**: Payment date. See [Payment](payment.html).
* **Patient**: Last name and first name of the patient attached to the paysplit.
* **Provider**: Provider abbreviation of the provider attached to the paysplit.
* **Clinic**: Clinic attached to the payment split. Hidden clinics are denoted.
* **Code**: Procedure code attached to the payment split.
* **Description**: Procedure description of the procedure code attached to the paysplit.
* **Amount**: Amount of the listed payment split. If a single payment contains multiple paysplits, this differs from the total payment amount.