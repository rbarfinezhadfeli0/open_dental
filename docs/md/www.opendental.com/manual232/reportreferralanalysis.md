Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Referral Analysis Report

This report analyzes the incoming referral count and production for a specific date range

In [Standard Reports](reportsstandard.html), in the Lists section, click **Referral Analysis**.

![](images/reportReferralAnalysis.png)

Patients must have a *Referred From* entered in the [Family Module](family.html) to be included in the report. See [Referrals](referrals.html)

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Report Filters

**Providers**: Select the providers to include. Ctrl + click to select multiple providers. Select **All** to include all listed providers.

**Date Range**: Type the date range to run the report for in the From/To boxes or uses the buttons to set the date. Applies to patients with procedures set complete in the date range.

* **Arrows**: Click to move back or forward one month from the currently entered date.
* **This Month**: Click to populate the text boxes with the current month.

**Include address information:** Check to include additional columns with referrer's address information in the report.

**Run as landscape:** Only shows when *Include address information* is checked. Prints the report in landscape.

**Only include new patients:** Check this box to only include new patients in the analysis. Patients will appear on the report if they had their first procedure completed by a selected provider in the date range. This may differ from the [New Patients Report](reportsnewpatient.html).

## Report Preview

After setting report criteria, click **OK** to launch a print preview of the report results. Below is an example of the report and explanation of the report columns.

For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

![](images/reportreferralanalysisPrint.gif)

* **Last Name**: Last name of the referrer. See [Referral List](referralsetup.html).
* **First Name**: First name of the referrer.
* **Count**: Number of patients referred by the referrer using the selected criteria (i.e., with completed procedures by the selected providers).
* **Production**: Total gross production in the date range for selected providers from referred patients.
* The following columns will appear when *Include address information* is checked in the Report Filters window:
  + **Title**: Referrer's title (e.g., DDS). Set in Edit Referral window. See Referral List.
  + **Address**, **Add2**, **City**, **State**, **Zip**: Referrer's address information. Set in Edit Referral window.
  + **Specialty**: Referrer's specialty. Set in Edit Referral window.