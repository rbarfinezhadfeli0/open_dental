Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Frequency Limitations

Insurance frequency limitations may or may not affect estimates of treatment planned procedures, depending on Preferences and Code Groups.

In the [Edit Benefits](benefitinfo.html) window, at the left, is the Frequencies section.

![](images/insFrequencyEnter.png)

When *Enable Insurance Frequency Checking* is checked in [Preferences](preferences.html):

* In the Treatment Plan Module, primary and secondary insurance estimates consider Frequency Limitations.
* When checking for frequencies, tooth number, surface, and tooth range is taken into consideration (e.g., If insurance covers one composite filling per year, per tooth - Open Dental can't calculate this as we treat composite fillings per surface, not per tooth).
* When scheduling a procedure that has met its limitation, users receive a warning.

## Set up and Enable Frequency Checking and Code Groups

Frequency checking is enabled by default by the *Enable Insurance Frequency Checking* preference.

The procedures affected by Frequency Limitations are determined by [Code Groups](codegroups.html). Default codes are already included, and new codes can be added as needed. It is not recommended to change or remove default codes as it can affect estimates or benefits.

## Benefit Frequencies

Click **More** to open the Benefit Frequencies window and enter additional frequencies not displayed in the Edit Benefits window.

![](images/insBenefitFrequencies.png)

Code Group: Displays the Code Groups that have already been set up.

**#**: Click the column to type a value for the Frequency Limitation.

**Frequency**: Click to choose the frequency type from a dropdown.

## Frequency Limitations in the Treatment Plan

In the [Treatment Plan Module](treatmentplan.html), click the **Estimates as of** dropdown and select a date (this defaults to the current date). Once a date is selected, treatment plan estimates are updated to reflect the chosen date. If a procedure is not covered due to a frequency limitation, as of the selected date, the procedure's description reflects this.

Double-click a procedure to view the [Claim Procedures ( claimprocs )](claimprocedure.html) with more insurance estimate details.

Completed procedures attached to a claim for the same insurance plan affect frequency limitation calculations. Dates entered into [Insurance History](inshistory.html) are also considered. Once claims are received, denied procedures or procedures where insurance paid $0 are still counted toward the frequency.