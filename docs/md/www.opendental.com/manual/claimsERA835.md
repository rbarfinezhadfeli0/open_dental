Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

ERAs

ERA 835, also known as Electronic Remittance Advice format, is an electronic explanation of benefits (EOB) that can be electronically downloaded.

In the [Manage Module](manage.html), click ERAs.

![](images/claimERA.png)

Automatic or manually downloaded ERAs can be used to auto-populate insurance paid amounts in to claims to finalize insurance payments.

* ![](images/YouTube_PlayButton_15px.png) See our video: [Processing ERAs](https://youtu.be/y2BIYuYiRoY).
* For setup requirements and steps on processing ERAs and detaching claims, see [ERA Workflow](era835workflow.html).
* Open Dental attempts to automatically attach claims to ERAs. For more information and instructions for manually attaching claims to ERAs see, [ERA Match with Claim](claimsERAmatching.html)

## Filters

Use the filter options to change the ERAs listed in the ERAs grid. Click **Refresh** to update results after making changes. Filter options may change based on *Enterprise - Manage* [Preferences](preferences.html).

![](images/eras835Filters.png)

* **From/To**: Change the date range. Click the down arrow to select dates from a calendar then click the up arrow to collapse the calendar. Click the W buttons to jump back or forward one week. Results are refreshed automatically when the date is changed.
* **Amount Range**: Only show ERAs within a certain payment amount range.
  + Min: Minimum payment amount to show.
  + Max: Maximum payment amount to show.
  + Leave blank to show ERAs regardless of payment amount.
* **Control ID**: Filter by Control ID. Only displayed if enabled in [Show Features](showfeatures.html).
* **Carrier**: Filter by [Insurance Carrier](carriers.html). Partial name can be used.
* **Check# or EFT Trace#**: Only show ERAs for a specific check number or EFT trace number.
* **Clinic**: Filter by clinic attached to the ERA. If an ERA is attached to more than one clinic, *multiple* shown in the grid.
* **Status**: Filter by ERA processing status. By default, ERAs received in the last 7 days that have a status of *unprocessed*, *partial*, or *not finalized* are listed.
  + Unprocessed: ERAs that have not been processed at all (no claims are received).
  + Partial: ERAs with some claims that are received, and others that are not.
  + Not Finalized: ERAs with all claims that are received, but payment still need to be finalized.
  + Finalized: ERAs with a finalized payment.
* **Automatable Carriers Only**: Determines if all carriers display, or only carriers that allow ERA automation.
  + Checked: Displays only carriers that allow ERA automation.
  + Unchecked: Displays all carriers.

## ERAs Grid

![](images/eras835ERAGrid.png)

ERAs matching the filter criteria are listed in the ERAs grid. Double-click an ERA to [Process](era.html) and view [EOB Claim Details](claimsERAeobdetails.html).

* **Patient Name**: Lists the patient on the ERA. If more than one patient is associated with an ERA, the number of claims on the ERA shows in the Patient Name column instead of a name.
* **Carrier Name**: Lists the carrier on the ERA.
* **Status**: Current status of the ERA. An asterisk (\*) next to Finalized indicates claims were detached from the ERA.
* **Date**: Date of the ERA.
* **Amount**: Amount of the ERA.
* **Clinic**: Displays which [Clinic](clinics.html) the ERA is assigned to, or unassigned if not assigned to a clinic.
* **Code**: Code types are used to determine payment methods. The following codes are used:
  + ACH: Automatic clearinghouse (Direct Deposit)
  + CHK: Paper check
  + NON: No payment issued
  + FWT: Federal wire transfer
  + BOP: Financial Institution Option
* **ControlID**: Transaction set control number. This number is assigned by the carrier and is used to identify the ERA group and interchange. Only shows if enabled in [Show Features](showfeatures.html).
* **Note**: Displays notes entered on the ERA. Also displays a note if Automatic Processing was attempted, when *ERA Automation* is set to *Semi-automatic* or *Fully-automatic* in [Preferences](preferences.html).

Note: If a claim on the ERA list has special circumstances, add the claim to the [Outstanding Insurance Claims Report](reportoutins.html) and set a tracking status. See [Track ERA](claimsera835trackstatus.html).

ERAs can also be viewed and processed via the Insurance Claims window, History grid (see [Send Claims](claimsend.html)).

## Auto Processed Report

![](images/eras835AutoProcessButton.png)

**Auto Processed Report**: Click to launch the [ERAs Automatically Processed Report](reporterasautomaticallyprocess.html) to view ERAs where automatic processing has been attempted or completed.