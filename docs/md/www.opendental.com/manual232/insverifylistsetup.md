Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Insurance Verification Setup

In the [Main Menu](mainmenu.html), click Setup, Appointments, **Insurance Verification**.

![](images/insVerifyListSetup.gif)

The default criteria for the [Insurance Verification List](insverifylist.html) can be set via the Setup menu.

These settings are also used to determine which patients are checked during a batch insurance verification using [Scheduled Processes](scheduledprocesses.html).

**Show In Standard List When**: Set defaults for standard insurance and the Assign Standard Verification tab in the Insurance Verification List. Insurance plans with no assigned *Filing Code* (set in [Edit Insurance Plan](insplan.html), Other Ins Info Tab) or those with no code mathching those selected in Show in Medicaid List When are considered standard.

* **Scheduled appointment in**: Set the default for *Days until scheduled appointment*.
* **Plan benefits haven't been verified in**: Set the default value, in days, for *Plan benefits haven't been verified in*.
* **Patient eligibility has not been verified in**: Set the default value for *Days since patient eligibility*.
* **Past due appointments up to**: Set a value, in days, that determines when verifications are considered past due and show on the *Past Due* tab.

**Insurance Verification List defaults to the current user**:

* Checked: For User selection defaults to the logged-on user.
* Unchecked: For User selection defaults to All Users.

**Exclude patients with insurance plans marked as Do Not Verify**:

* Checked: Exclude insurance benefit verifications (Ins) when a patient's insurance plan is marked Don't Verify on the [Insurance Plan](insplan.html) Edit Window.
* Unchecked: The Don't Verify checkbox is not considered.

**Always reverify service year insurance benefits**:

* Checked: When a plan's benefit renewal date is after the last verified date, benefit verifications will re-list to remind staff to re-verify insurance benefits. When benefits are marked verified, the appointment date is used.
* Unchecked: Benefit renewal dates will not be considered, only verification filters. When benefits are marked verified, the current date (i.e., today) is used.

**Always reverify service year patient eligibility**:

* Checked: When a plan's benefit renewal date is after the last verified date, eligibility verifications will re-list to remind staff to re-verify patient eligibility. When eligibility is marked verified, the appointment date is used.
* Unchecked: Benefit renewal dates will not be considered, only verification filters. When eligibility is marked verified, the current date (i.e., today) is used.

**Exclude Patient Clones**: Only appears if [Patient Clone](patientclone.html) is enabled in [Show Features](showfeatures.html)

* Checked: Exclude patient clones.
* Unchecked: Include patient clones.

**Show in Medicaid List When**: Set defaults for medicaid insurance and the Assign Medicaid Verification tab in the Insurance Verification List.

* **Scheduled appointment in**: Set the default for *Days until scheduled appointment*.
* **Plan benefits haven't been verified in**: Set the default value, in days, for *Plan benefits haven't been verified in*.
* **Patient eligibility has not been verified in**: Set the default value for *Days since patient eligibility*.
* **Past due appointments up to**: Set a value, in days, that determines when verifications are considered past due and show on the *Past Due* tab.
* **Insurance filing code in:** Select insurance filing codes assigned to medicaid plans. Only insurance plans with assigned *Filing Codes* matching those selected are considered medicaid in the Insurance Verification List.

Click **OK** to save changes.