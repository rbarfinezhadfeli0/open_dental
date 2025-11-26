Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

New Patients Report

Find patients who had their first procedure completed in a date range by running the New Patients report.

In [Standard Reports](reportsstandard.html), in the Lists section, click **New Patients**.

![](images/reportNewPatientwindow.gif)

This report lists all new patients whose first completed procedure falls within a specific date range and their total gross production for all time. This is not related to the patient's date of first visit. The report can optionally be filtered by primary provider. To report by treating provider instead, see Query by Treating Provider below.

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Report Filters

Set the report filters before running the report.

**Providers**: Select the providers to include. Ctrl + click to select multiple providers. Select **All** to include all providers, including those marked *Hidden on Reports*. Filters by patient's primary provider.

* To exclude hidden providers from the report, manually select visible providers from the list.

**Today's Date**: Read only. Automatically populated with today's date for reference.

**Date Range**: Set the date range to filter the report. Type in a date range in the **From**/**To** boxes or use the buttons to set the date range. Filters by date of patients' first completed procedure.

* **Left Arrow**: Click to set the date range one month prior to the currently entered date range.
* **The Month**: Click the set the date range the the current calendar month.
* **Right Arrow:**Click to set the date range one month forward from the currently entered date range.

**Include address information**: Check to include additional fields in the report and generate in landscape orientation. See below for information on additional fields.

**Exclude patients with no production**: Check to exclude patients who had no completed procedures or had treatment that resulted in no cost.

## Report Preview

After setting the report criteria, click **OK** to generate a print preview the report. Below is an example of the report and description of the report columns.

For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportNewPatient.gif)

* **#**: Row number. Each result in the report is assigned a number in ascending order.
* **Date**: Date of first completed procedure.
* **Last Name**: Patient last name.
* **First Name**: Patient first name.
* **Referral**: *[Referral](referrals.html) From* in Family Module. If the patient has multiple *Referrals From*, only the first ordered in the Referrals for Patient will be displayed on the report.
* **Production Fee**: Patient's total gross production for all time. This is not production for the first visit or the reporting period. This is totaled for all patients in bold on the final page of the report at the end of the grid.
* The following columns only appear on the report when *Include address information* is checked:

+ **Pref'd**: Patient preferred name.
+ **Address**: Address line from [Edit Patient Information](patientedit.html).
+ **Add2**: Address2 line from Edit Patient Information.
+ **City**, **ST**, **Zip**: Patient's city, state, zip code address information.

## Query by Treating Provider

To report by treating provider, see Query 1215 in [Query Examples](https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx). This query will list, by treating provider, all new patients whose first completed procedure date falls within the date range. Since a patient can see more than one provider on their first visit, the sum of the new patient counts may be equal to, or greater than, the standard New Patient Report result. For example, a patient seen by two providers on their initial visit will be counted twice (once for each provider).