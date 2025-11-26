Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Frequency Limitations

Insurance frequency limitations may or may not affect estimates of treatment planned procedures, depending on Preferences and Code Groups.

In the [Edit Benefits](benefitinfo.html) window, at the right, is the Frequency Limitation Benefits section.

![](images/insFrequencyEnter.png)

When *Enable Insurance Frequency Checking* is checked in [Preferences](preferences.html):

* In the Treatment Plan Module, primary and secondary insurance estimates consider Frequency Limitations.
* $0 [Claim Procedures ( claimprocs )](claimprocedure.html) are not considered for Frequency Limitations.
* When scheduling a procedure that has met its limitation, users receive a warning.

## Set up and Enable Frequency Checking and Code Groups

Frequency checking is enabled by default by the *Enable Insurance Frequency Checking* preference.

Customize [Code Groups](codegroups.html) to determine which Code Groups are displayed in the grid and which procedures are affected by Frequency Limitations.

Only Code Groups marked *Show In Frequencies* are displayed in the grid. The procedures affected by Frequency Limitations are determined by the procedures assigned to the Code Group. Default codes are already included, and new codes can be added as needed. It is not recommended to change or remove default codes as it can affect estimates or benefits.

## Benefit Frequencies

Enter Frequency Limitations for a Code Group by clicking a row in the Frequency Limitations Benefits grid. For each procedure code or Code Group with a frequency limitation, a row displays in the Family Module, Insurance Plan area for reference.

* Pat: *X* indicates this Frequency Limitation is a patient override. Patient overrides only affect the selected patient.
* Code Group: Code Group associated to the Frequency Limitation.
* #: Click the column to type a quantity for the Frequency Limitation. Corresponds with the Frequency.
  + If duplicate rows exist for the same Code Group, set the # to blank or 0. When changes are saved, the duplicate row is removed.
* Frequency: Click to choose the frequency type from a dropdown.
* Treat Area: Click to choose the applicable treatment area from a dropdown. *Default* indicates the treatment area assigned to [Procedure Codes](procedurecodeedit.html) is used to enforce Frequency Limitations. Use *Mouth* to enforce a frequency limitation regardless of treatment area.

**Show Procedure Codes**: Check to display the procedure codes included in the listed Code Groups.

**Add**: Create an additional Benefit Frequency for a Code Group in the list. Opens Edit Benefit Frequency.

## Edit Benefit Frequency

Click **Add** to create an additional Benefit Frequency for an existing Code Group.

This is uncommon but may be needed in some circumstances, like when there are frequency limitations both by treatment area and by time period (e.g., 2 procedures per benefit year and once every 5 years on the same tooth). See Examples below.

![](images/benefitFrequencyEdit.png)

* **Code Group**: Highlight the Code Group to add a frequency limitation for.
* **Quantity**: Enter a value to correspond with the Time Period.
* **Frequency**: Highlight the frequency type.
* **Treatment Area**: Highlight an area to restrict the benefit to only the specified Treatment Area.

**Patient Override**: Check to indicate this Frequency Limitation applies to the selected patient only.

## Frequency Limitations in the Treatment Plan

In the [Treatment Plan Module](treatmentplan.html), click the **Estimates as of** dropdown and select a date (this defaults to the current date). Once a date is selected, treatment plan estimates are updated to reflect the chosen date. If a procedure is not covered due to a frequency limitation, as of the selected date, the procedure's description reflects this.

Double-click a procedure to view the [Claim Procedures ( claimprocs )](claimprocedure.html) with more insurance estimate details.

Completed procedures attached to a claim for the same insurance plan affect frequency limitation calculations. Dates entered into [Insurance History](inshistory.html) are also considered. Once claims are received, denied procedures or procedures where insurance paid $0 are not counted toward the frequency.

## Examples

If 2 is entered in the *#* or *Quantity* box, Frequency options work as follows:

* Every # Years
  + One procedure covered every two years. Uses rolling year (e.g., if covered 12/13/2023, will not be covered again until 12/14/2025).
* # Per Benefit Year

+ Two procedures covered within the benefit year. Uses the selected benefit year, i.e., Calendar or Month.

* Every # of Months

+ One procedure covered every two months.

* # in Last 12 Months
  + Two procedures covered in the last 12-month period. Uses the last 12 months from today (e.g., Rolling Year, Rolling Benefits).

Multiple Frequency Limitations can be entered for the same Code Group. For example, two Crowns are covered in a Benefit Year and a replacement Crown on the same tooth is only covered once every five years. Enter two Frequency Limitation Benefits:

#1 - Crown covered on the same tooth once every five years:

* Code Group: Crown
* Quantity/#: 5
* Frequency: Every # Years
* Treatment Area: Tooth

#2 - Two Crowns covered in a benefit year:

* Code Group: Crown
* Quantity/#: 2
* Frequency: # Per Benefit Year
* Treatment Area: Mouth