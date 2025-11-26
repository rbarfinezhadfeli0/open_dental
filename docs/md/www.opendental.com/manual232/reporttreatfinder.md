Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Treatment Finder Report

Use the Treatment Finder report to identify active patients who have treatment planned procedures.

In [Standard Reports](reportsstandard.html), in the *Lists* section, click **Treatment Finder**.

![](images/reportTreatFinder.png)

![](images/youtubeLogo.png) See our Webinar: [Treatment Finder Report](https://youtu.be/v78p-eywItc)

The Treatment Finder report can stay open in the background while users work in other windows (e.g., Account Module, Appointment Module) of Open Dental.

Note: To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

When first generated, the list includes patients who:

* Have treatment planned procedures (does not include procedures with a $0 fee).
* Have no scheduled appointment.
* Have insurance with a benefit year that follows the Calendar Year.

## View

Different settings affect the results of the report. Set the report criteria in the View section.

![](images/treatFinderView.png)

* **Ins Month Start**: Filter the list by when a patient's insurance benefit year begins.
  + For cases where the insurance begins mid-year, we recommend running the report monthly. (For example, select November to find patients whose benefits expire on November 1st.)
  + If January is set as an insurance plan's start month, this is not the same as *Calendar Year*. To include those patients in the treatment finder report, users must select *January* as the *Ins Month Start*.
* **Amount remaining over**: Enter an amount to filter the report to only include patients that have insurance benefits remaining over the specified amount. Results include patients whose *Amt Rem* plus *Amt Pend* is over the amount, and patients who have no annual max entered.
* **TP Date From**: Enter a date to filter the report to only include patients with procedures with treatment planned on or after this date.
* **TP Date To**: Enter a date to filter the report to only include patients with procedures with treatment planned on or before this date. Enter today's date to include treatment up to the current date.

  Note: Set both dates to show patients with at least one procedure treatment planned within a date range.
* **Clinics**: Select Clinics to include in the report. Ctrl + click to select multiple Clinics or select **All (includes hidden)** to include all clinics, including those marked hidden.
  + Filters by patient's assigned Clinic.
  + If user is restricted to specific Clinics, only accessible Clinics are listed. When selecting **All (includes hidden)**, results include all Clinics user has access to, including those marked hidden, and anything unassigned to a Clinic; results do not include Clinics user is restricted from.
  + When connected via [Middle Tier](middletier.html), users will not be able to run the report for **All (includes hidden)** Clinics.
* **Providers**: Select the providers to include. Ctrl + click to select multiple providers. Select **All** to include all providers, including those marked *Hidden on Reports*. Filters by patient's primary provider by default. See Use Treating Provider to filter by treating provider instead.
* **Billing Type**: Select patients assigned specific [Billing Types](definitionsbillingtypes.html) to include. Ctrl + click to select multiple billing types. Select **All** to include all listed billing types.
  + **Include Hidden Billing Types**: Check to include billing types marked as *hidden* in the Billing Type dropdown.
* **Use Treating Provider**: Check to filter by provider assigned to procedure (i.e., treating provider).
* **Assume procedures are General**: Assume all procedures for a patient apply towards annual max. Set the default in [Report Setup: Misc Settings](reportmiscsettings.html).
* **Include secondary insurance and no insurance**: Include patients with secondary insurance and no insurance. If checked, the *Ins Month Start* is ignored.
* **Include patients with upcoming appointments**: Check to include patients who have a scheduled appointment in the future. Planned appointments are not included; see [Planned Appointment Tracker](appttracker.html) instead.
* **Code Range**: Enter a procedure code or code range to filter results to only include patients who have specific treatment planned procedures.

## Treatment Finder Grid

After setting report criteria, click **Refresh List** to update the results in the Treatment Finder grid. Click a column header to sort results in ascending or descending order.

The Treatment Finder grid displays results for the selected criteria.

![](images/treatFinderGrid.png)

* **LName / FName**: Last name and first name of the patient.
* **Contact**: Preferred Recall contact method from [Edit Patient Information](patientedit.html). If no Preferred Recall Method is set for a patient the Home Phone Number displays under Contact instead.
* **Annual Max**: View individual (I) or family (F) annual max insurance benefits. Patients with no annual max entered show a *Amt Rem* of $0.
* **Amt Used**: View amount of insurance used for completed procedures attached to received, supplemental, or adjustment insurance claims. Individual and family amounts show.
* **Amt Pend**: View pending insurance claims with attached completed procedures. Individual and family amounts show.
* **Amt Rem**: View remaining insurance benefits. Individual and family amounts show. Amount remaining includes completed procedures.
* **TreatPlan**: Total procedure fees for the individual patient's active treatment planned procedures.
* **Insurance Carrier**: Patient's primary insurance carrier.
* **Clinic**: Patient's assigned Clinic.

Click a patient in the grid to open the Chart Module for the selected patient.

Right-click options:

* **See Family**: Click to open the Family Module for the selected patient.
* **See Account**: Click to open the Account Module for the selected patient.

## Options

At the bottom of the Treatment Finder window are additional options

![](images/treatFinderButtons.png)

* **Letters Preview**: Select patients and click to generate a letter preview. Select the patient letter template to use then click OK. A PDF preview of all letters is generated. Patient letter templates are defined in [Sheets](sheets.html).
* **Export to File**: Export all results as a .txt or .xls file that can be merged or imported into another program. For all patients, PatNum, Last Name, First Name, Contact Method, Address, City, State, Zip, Annual Max, Amount Used, Amount Pending, Amount Remaining and Treatment Plan total is exported.
* **Single Labels**: Select patients and click to send directly to a label printer. Patients' names and addresses are printed on individual sheets.
* **Label Preview**: Select patients and click to generate a PDF preview of labels. Patients' names and addresses are printed multiple per sheet. Click Print from the preview window to send to the printer.
* **Print List**: Click to print all results in the Treatment Finder grid. See Print Preview below.
* **Go to Family**: Click to view Family Module for selected patient.
* **Go to Account**: Click to view Account Module for selected patient.

## Print Preview

Click **Print List** to print the results in the Treatment Finder grid. The information on the printout matches what appears on the Treatment Finder grid. An example is below.

![](images/reportTreatFinderPrint.png)