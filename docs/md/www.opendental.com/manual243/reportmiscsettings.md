Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Report Setup: Misc Settings

Miscellaneous report settings control the default options for standard reports.

In the [Reports Setup](reportssetup.html) window, click the Misc Settings tab.

![](images/reportMiscSettings.png)

Check a box to select a setting; uncheck a box to deselect.

**Wrap columns when printing:** Set whether or not column text is wrapped to the next line when viewing/printing [Complex Report](reportcomplex.html) and [User Queries](queryoverview.html).

* Checked: Column text is automatically wrapped when necessary.
* Unchecked: Text is not wrapped by default. If text exceeds the column width it is cut off. Text can be manually wrapped.

**Show PatNum:** Aging, OutstandingIns, ProcsNotBilled: Set whether or not the patient number shows with patient name in the Aging of A/R, Outstanding Insurance Claims, and Procedures Not Billed to Insurance reports.

* Checked: Patient number is included with patient names (e.g., 40-Marsh, Raphael).
* Unchecked: Patient number is not included (e.g., Marsh, Raphael).

**Monthly P&I scheduled production subtracts PPO write-offs:**

* Checked: Automatically subtract the write-off amount from anticipated production in Monthly [Production and Income Reports](reportprodinc.html) (Scheduled column). This only applies to future dates where the work has not been completed and only affects insurance plans with a PPO Percentage plan type.
* Unchecked: Do not automatically subtract the write-off amount from anticipated production in Monthly Production and Income reports.

**Default to showing clinic info on Daily P&I report**: Only available when Clinics are enabled in [Show Features](showfeatures.html). Set the default setting for *Show Clinic Info* on Daily Production and Income report.

* Checked: By default, the report prints in landscape orientation, shows a clinic column, and can optionally be grouped by clinic (*Show Clinic Info* checked).
* Unchecked: By default, the report prints in portrait orientation and clinic information won't show (*Show Clinic Info* unchecked).

**Default to showing clinic breakdown on P&I reports**: Only available when Clinics are enabled in Show Features. Set the default setting for *Show Clinic Breakdown* in Production and Income reports.

* Checked: By default the report is grouped by clinic (*Show Clinic Breakdown* checked).
* Unchecked: By default, the report is grouped by date and intermingles clinics (*Show Clinic Breakdown* unchecked).

**Show a verbose history when previewing reports:** Set the default setting for verbose history when running reports via the [Complex Report System](reportcomplex.html).

* Checked: By default, a report query is populated when a complex report is run. The query shows the elapsed time of each generated item in the report. This is useful for large offices whose reports take a long time to generate. Click *Copy to Clipboard* to save the history and paste into a document.
* Unchecked: A report query is not populated when a complex report is run.

**Allow using today's date in Provider Payroll report:** Determines whether or not the [Provider Payroll Production and Income Report](reportprovpayroll.html) (detailed) can include today's date.

* Checked: Allow the date range to include today's date.
* Unchecked: Block the date range from including today or future dates.

**Calculate write-offs by claim snapshot for today's date in Net Production Detail report:** Determines which amount to use as the write-off in the [Net Production Detail Daily Report](reportnetproddaily.html).

* Checked: Use the write-off amount in the [Claim Snapshot](claimsnapshot.html) for today's date.
* Unchecked: Use the write-off amount for the current [Claim Procedures ( claimprocs )](claimprocedure.html).

**Include procedures without a note in the Incomplete Procedures Report:** Set the default state for the *Include procedures for patients with no notes on any procedure for the same day* checkbox on the [Incomplete Procedure Notes Report](reportincompleteprocnote.html).

* Checked: Box is checked by default to include patients with no notes on any procedures.
* Unchecked: Box is unchecked by default to exclude patients with no notes on any procedures.

**Include procedures with a note that is unsigned in the Incomplete Procedures Report:** Set the default state for the *Include procedures with a note that is unsigned* checkbox on the Incomplete Procedure Notes Report.

* Checked: Box is checked by default to include unsigned procedures.
* Unchecked: Box is unchecked by default to exclude unsigned procedures.

**Assume all procedures are in the General benefit category by default in the Treatment Finder report:**

* Checked: Procedures for a patient apply towards annual max by assuming the procedures are in the General [Insurance Category](inscatssetup.html).
* Unchecked: Does not apply all procedures to the General category.

**Default to 'Date Range' tab in Outstanding Insurance Report:** Determine which date filter type is the default for the [Outstanding Insurance Claims Report](reportoutins.html).

* Checked: Report defaults to *Date Range* tab filter.
* Unchecked: Report defaults to *Days Old* tab filter.

**Default to including hidden treatment planned prepayments on the Payments report**: Determines the default state for the *Include hidden treatment planned prepayments* checkbox [Daily Payments Report](reportdailypayments.html).

* Checked: The box is checked by default to include hidden splits (e.g., treatment planned prepayments) on the Payments report by default.
* Unchecked: The box is unchecked by default to exclude hidden splits.

**Default to 'Raw' format in User Query window**: Determines the default format when running a [User Query](queryoverview.html).

* Checked: Format defaults to *Raw*.
* Unchecked: Format defaults to *Human-readable*.

**Default selected date for PPO write-offs:** Set the default setting for *Show insurance write-offs* in Production and Income, PPO Write-off, Daily Write-off, Monthly Production Goals, Custom Aging, and Receivables Breakdown reports. See [Show Insurance Write-offs](writeoffstoproduction.html) for more details.

* Insurance Pay Date: Default to use the date of insurance payment.
* Procedure Date: Default to use the date the procedure was completed.
* Initial Claim Date/Ins Pay Date: Default to using a combination of initial claim date for write-off estimates, and then insurance pay date for write-off adjustments.

**Excluded Codes for Incomplete Procedure Notes Report**: Determine which codes to exclude from the Incomplete Procedure Notes report. D9986 ( Missed) and D9987 (Cancelled) are entered by default. Click **[...]** to select additional codes.