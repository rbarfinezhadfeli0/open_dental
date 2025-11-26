Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

EHR Measure Reports

EHR measure reports detail a provider's current percentages for meaningful use objectives, for a specific reporting period. Use the numerator, denominator, and percent values in the report when attesting for meaningful use (MU). See [EHR Attestation](../site/ehrattest.html).

The objectives that show are based on the provider's stage of MU (Modified Stage 2, Stage 1, or Stage 2). See [EHR Set Meaningful Use Stage](ehrmustagesetting.html).

Hints:

* Check measure reports often to gauge progress and verify that percentages exceed each measure's requirement. Sometimes small steps determine the difference between meeting or not meeting a measure. Identifying and addressing data entry errors or missing information in the beginning days will make your job easier.
* When you have questions, this window is a useful tool to quickly review measure details. Drill down for each measure and see exactly which patients and actions are included in denominators and numerators.

## Running a report

1. On the [EHR Dashboard](ehrdashboard1.html), click Measure Calc.
   ![](images/ehrMeasures1.gif)
2. Enter the reporting period's start and end date.
3. Click the Provider dropdown and select the provider to report on.

   Note: All providers who have the same last and first name will be grouped together in the same report. If using dummy providers, use the provider abbreviation to differentiate between providers since first and last name must be identical for EHR purposes.
4. Click Refresh to generate the report.
5. Click Print the print the report to the default printer.

Each row represents a measure. Rows turn green when the percentage meets the required benchmark for the selected stage of MU. Some non-percentage based measures may show (yes/no measures). These rows can be ignored.

## Calculation details

Double click a measure calculation row to see a detailed explanation of the numerator and denominator and exactly which patients and actions are included in each.

![](images/ehrMeasureDetails1.gif)

* **Objective**: The objective as described in specification sheets provided by CMS.
* **Measure**: The measure as described in the specification sheets.
* **Audit**: A list of all patients or actions included in the denominator for the measure. A brief explanation of what was, or was not entered, may also show.
  + Green entries indicate instances that count in the numerator. An X also shows in the Met column.
  + White entries indicate instances when data could have been entered, but wasn't.
* **Numerator**: The number of audit items that were counted in the numerator.
* **Denominator**: The number of eligible instances.
* **Percent**: The numerator divided by the denominator, or the percentage.
* **Exclusion**: If the measure offers an exclusion, an explanation will show. If the exclusion is based on a specific data value, Open Dental will track the data. For example, for CPOE medication orders, an exclusion is possible if you write less than 100 prescriptions. For this measure, Open Dental tracks and shows how many total prescriptions have been entered during the reporting period.