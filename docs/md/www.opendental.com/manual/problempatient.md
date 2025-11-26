Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Problems

Easily keep a list of a patient's medical problems in the chart.

In the [Chart Module](chart.html), double-click the [Medical area](medical.html). Click the **Problems** tab.

![](images/medicalProblems.png)

**Add Problem:** Add a problem from the [Problem List](problemmaster.html). See Add a Problem below.

**Show Inactive Problems:** Check to list problems with an inactive status.

**Problems:** A list of entered problems. Double-click a problem to change start/stop dates, status, or notes. The [EHR InfoButton](ehrinfobutton.html) may show if EHR is turned on.

Active problems also show in the Chart Module medical area in bold red. Every time a user adds, edits, or removes a patient problem, an entry is made in the [Audit Trail](audittrail.html).

## Add a Problem

1. Click **Add Problem** to open the Problem List. The patient's current active problems highlight.
2. Double-click on the problem to add it to the patient's list of problems.

## Edit a Problem

Users can change a problem's status or enter start/stop dates or notes. To change [SNOMED CT Codes](snomedct.html) or [ICD Codes](icdcodes.html), see Problem List instead.

Double-click the problem to edit.

![](images/problemAttach.png)

**Status:** There are three options: Active, Resolved, Inactive. Resolved usually means an acute problem that will never return (e.g., fractured hip or an infection). Inactive usually means a problem that may return (e.g., diabetes or angina).

**Start/Stop Date:** Enter the dates, or click Today to insert the current date.

**Note:** Enter any patient-specific notes.

EHR only: The settings below determines if this problem shows on a [Summary of Care](ehrsummaryofcaresend.html).

**Problem Type:** Must be set to Problem for this condition to show.

**Functional Status:** If Problem, this shows under Problems. If CognitiveResult, CognitiveProblem, FunctionalResult, or FunctionalProblem, this shows under Functional Status.