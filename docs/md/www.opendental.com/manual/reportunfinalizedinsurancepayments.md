Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Unfinalized Insurance Payment Report

Run the Unfinalized Insurance Payments Report to locate insurance payments that need to be finalized.

In [Standard Reports](reportsstandard.html), in the Daily section, click **Unfinalized Insurance Payments**.

![](images/reportunfinalizedinspayment.png)

Alternatively, in the [Main Menu](mainmenu.html) click Reports, Unfinalized Payments.

The number of unfinalized payments within the last 30 days will also be noted, in parentheses (e.g., *Unfinalized Payments (3)*), in the Reports dropdown from the Main Menu.

Note: The [Open Dental Service](opendentalservice.html) must be running to show in order for the number of unfinalized payments to display in the Report dropdown. The number may not populate for 10+ minutes after Open Dental has been open.

## Filters

**Type:** Select the type of insurance payments to display.

* All: All unfinalized insurance payments.
* Partial Payments: Batch insurance payment not finalized.
* Unfinalized Payment: Single unfinalized insurance payment.

**Clinics**: Select clinics to include in the report. Ctrl + click to select multiple clinics or check **All (includes hidden)** to include all clinics, including those marked hidden.

* Filters by clinic attached to claim or clinic attached to bulk check (partial payments).
* If user is restricted to specific clinics, only accessible clinics will list. When checking **All (includes hidden)**, results will include all clinics user has access to, including those marked hidden, and anything unassigned to a clinic; results do not include clinics user is restricted from.

**Carrier:** Type an insurance carrier name to narrow results by carrier.

## Unfinalized Insurance Payment Grid

Click **Refresh** to update the results in the Unfinalized Insurance Insurance Payment grid. Descriptions of each column in the grid are below.

* **Type**: Type of payment (i.e., unfinalized payment or partial payment).
* **Patient**: Last name and first name of patient on claim. Partial payments attached to multiple payments will be listed in the grid once; one patient name will be shown with *(multiple)* to indicate additional patients are on the payment.
* **Carrier**: Insurance carrier on claim or bulk check (partial payments).
* **Clinic**: Clinic attached to claim or bulk check (partial payments).
* **Date**: Date payment was entered.
* **Date of Service**: Claim date of service.
* **Amount**: Unfinalized payment total for claim.

Right-click a row for additional options. Options are not available for all unfinalized payments.

* **Open EOB**: Click to open the Insurance Payment (EOB) a partial payment is attached to. See [Batch Insurance Payment](claimpaymentbatch.html).
* **Delete EOB**: Click to delete a Batch Insurance Payment. All attached claim payments will now list individually as *Unfinalized Payment* (not Partial Payment).
* **Go to Account**: Click to open the [Account Module](account.html) for the selected patient. For payments attached to multiple patients (Partial Payments), this will open the account for the listed patient.
* **Open Claim**: Click to open the claim associated with the payment.
* **Create Check**: Click to finalize the claim payment for a single claim. See [Finalize Insurance Payment](claimpayfinalize.html).

Click **Print** to immediately print the report. Click **Export** to save the results as a .txt or .xls file.