Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Hidden Payment Splits Report

Use the Hidden Payment Splits Report to track accounts with prepayment types marked as *Do Not Show on Account*.

In [Standard Reports](reportsstandard.html), in the Lists section, click **Hidden Payment Splits.**

![](images/reportHiddenPaysplit.gif)

## Filters

**From / To Dates**: Click the dropdown to select a date or type a date to enter the date range for the report. Use the **W** arrows to quickly move forward or backward one week from the currently displayed date.

**Providers**: Select the providers to include on the report. Check **All** to include all listed providers and Unallocated hidden splits.

* Filters by provider assigned to the payment split.
* Selecting **No Provider** includes prepayments with no provider allocation (i.e., *Unallocated*).

**Unearned Types**: Select the [Unearned Types](definitionspaysplitunearned.html) marked *Do Not Show on Account* to include on the report. Check **All** to include all Unearned Types marked *Do Not Show on Account*, including those marked *Hidden*.

**Clinics**: Select the clinics to include on the report. Check **All (includes hidden)** to include all clinics.

* Filters by clinic assigned to payment split.
* If user is restricted to specific clinics, only accessible clinics will list. When checking All (includes hidden), results will include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or payment splits not assigned to a clinic.

## Report Preview

Click **OK** to display a print preview of the report results. All patients with treatment planned procedure prepayments are displayed. The negative values represent the prepayment transferred to completed procedures or refunded.

For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportHiddenPaysplitPrint.gif)

* **Date**: Payment date. See [Payment](payment.html).
* **Patient**: Last name and first name of the patient attached to the payment split.
* **Provider**: Provider abbreviation of the provider attached to the payment split.
* **Clinic**: Clinic attached to the payment split. Clinics marked hidden are denoted with *(hidden)*.
* **Code**: Procedure code attached to the payment split.
* **Description**: Procedure description of the procedure code attached to the payment split.
* **Amount**: Amount of the listed payment split. If a single payment contains multple payment splits, this will differ from the payment amount.