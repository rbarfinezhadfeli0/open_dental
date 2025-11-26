Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Raw Screening Data Report

For offices utilizing Public Health features, the Raw Screening Data report produces Public Health Screening data as a single table for a selected date range.

In [Standard Reports](reportsstandard.html), in the Public Health area, click **Raw Screening Data**.

![](images/reportRawScreeningData.gif)

This report is for [Public Health](publichealth.html). Because this report is a single table with each patient on one row, offices can do extensive statistical analysis. All fields that are required by the standard basic screening survey are present (<https://www.astdd.org/basic-screening-survey-tool/>), so this data is compliant if offices are required to use that format.

Data from [Public Health Classic Screening](publichealthscreeningclassic.html) and [Public Health Custom Screening](publichealthscreeningcustom.html) is used in the report.

## Filter

**Calendar**: Select the date range to include in the report. Select the start date in the left calendar; select the end date in the right calendar.

## Report Query

After setting the report date range, click **OK** to see generate the results in the [User Query](queryoverview.html) window.

Below is an example of the report and explanation of the report columns.

![](images/reportRawScreeningQuery.gif)

* **SGDate**: Screening Group Date. Date of the associated screening.
* **ProvName**: The name of the provider on the most recent procedure or broken appointment adjustment.
* **County**: Patient's county. Set in [Edit Patient Information: Public Health Tab](patienteditpublichealth.html).
* **CountyCode**: County code. Determined by patient's county. Set in [Counties](counties.html).
* **PlaceService**:
* **GradeLevel**: Patient's Grade Level set in screening.
* **Birthdate**: Patient's age set in Public Health Screening.
* **RaceOld**: Patient's race/ethnicity set in Public Health Screening. Race is coded as follows:
  + Unknown: 0
  + Multiracial: 1
  + HispanicLatino: 2
  + AfricanAmerican: 3
  + White: 4
  + HawaiiOrPacIsland: 5
  + AmericanIndian: 6
  + Asian: 7
  + Other: 8
  + Aboriginal: 9
  + BlackHispanic: 10
* **Gender**: Patient's gender as set in Public Health Screening.
* **Urgency**: Treatment Urgency as set in Public Health Screening.
* **HasCaries**: When using Public Health Screening Classic, response to *Has Caries*. When using Public Health Screening Custom, if teeth are marked *Carious* in the Screening Chart.
* **EarlyChildCaries**: When using Public Health Screening Classic, response to *Early Child. Caries*. Not used for Public Health Custom Screening.
* **CariesExperience**: When using Public Health Screening Classic, response to *Caries Experience*. Not used for Public Health Custom Screening.
* **ExistingSealants**: When using Public Health Screening Classic, response to  *Needs Sealants*. Not used for Public Health Custom Screening.
* **NeedsSealants**: When using Public Health Screening Classic, response to  *Missing All Teeth*. When using Public Health Custom Screening, if teeth are marked *Sealant Needed (S)* in the Screening Chart.
* **Comments**: Comments set in Public Health Screening.

The data is intended to be exported to a text file and sent to a centralized office where it gets loaded into one larger table containing data from many locations. For instance, all data for an entire state could be sent to a central office once per month. The data format makes it easy to automate grouping and reporting.