Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

EHR Tobacco

In the [EHR Dashboard](ehrdashboard1.html), click the **Edit smoking status** row.

![](images/ehrSmoking.gif)

Alternatively,

* In the [Medical](medical.html) chart, click the Tobacco Use tab.
* In the [Chart Module](chart.html), double-click the Tobacco Use row.

EHR must be enabled in [Show Features](showfeatures.html) for the Tobacco Use tab to display. [LOINC codes](loinc.html) must be imported prior to using this tab.

Smoking status, tobacco use, and documented interventions affect [EHR Clinical Quality Measures](ehrcqm.html) in [EHR Modified Stage 2](../site/ehrmodified2.html).

Document information for CQM #138 (Preventive Care and Screening: Tobacco Use: Screening and Cessation Intervention). This CQM calculates how many patients 18 years and older are assessed as 'tobacco user' and also receive a cessation counseling intervention. See [EHR Clinical Quality Measure Descriptions](ehrcqmdef.html).

**Current Smoking Status**: Click the dropdown to select the patient's current smoking status. The available options are based on SNOMED CT codes. If *none* is selected, the status will not be counted in the numerator. Only one status selection per day will be added to the Assessment History. This status affects the percentage calculation for EHR Smoking Status.

## Tobacco Use Assessment Tab

Assess the patient's tobacco use.

![](images/ehrSmokingAssesTab.gif)

* **Date Assessed**: Defaults to today's date.
* **Assessment Type**: Select the Assessment Type option that best describes the question asked to the patient. There are three options:
  + History of tobacco use Narrative.
  + Have you used tobacco in the last 30 days SAMH.
  + Have you used smokeless tobacco product in the last 30 days SAMH.
* **Filter Statuses By**: Select a Filter Statuses By option to filter the Tobacco Status list.
  + All = all statuses
  + User = status options for tobacco users
  + Non-User = status options for non-tobacco users
  + Frequent = status options used most often
* **Tobacco Status**: Click the dropdown to select the patient's current tobacco status. The available options are based on SNOMED CT codes. To select a different code, select Choose from all SNOMED CT codes. If you use a code that is not recommended CQMs percentages may be affected.
* **Add Assessment**: Click to add the assessment. Multiple entries can be added for the same day.

To add additional information to an assessment, double-click it from the Assessment History grid.

![](images/ehrSmokingEdit.gif)

+ **Date Time**: Edit the date and time of the assessment.
+ **Patient**: Displays the patient name.
+ **Event**: Displays the Assessment Type.
+ **Result**: Displays the Tobacco Status entered.
+ **More information about the event**: Enter any relevant notes.
+ **Tobacco Use Start Date**: Enter the date when the patient started using tobacco (MM/DD/YY). Open Dental will automatically calculate the duration. Informational only.
+ **Tobacco Use Desire to Quit**: Rate the patient's desire to quit using tobacco on a scale of 1 - 10. Informational only.

Click **Delete** to remove the assessment. Click **OK** to save changes.

## Cessation Intervention

If patient is assessed as a tobacco user, document an [Intervention](ehrinterventions.html).

![](images/ehrSmokingCessationTab.gif)

* **Date Intervened**: Defaults to today's date.
* **Filter Codes by**: Select a Filter Codes by option to filter the Intervention Code list.
  + All = all interventions
  + User = interventions for tobacco users
  + Non-User = interventions for non-tobacco users
  + Frequent = interventions used most often
* **Intervention Code**: Click the dropdown to select the intervention.
* **Patient Declined**: Check to indicate a patient is declining the intervention (optional). This is informational only. Declined interventions still count in CQMs.
* **Add Intervention**: Click to add the intervention. If you select a medication, the Medication for Patient window will open so you can enter instructions and start date. The medication will be added to the [Medications](medicationspatient.html) list.

To add additional information to a smoking intervention, double-click it from the Intervention History.

![](images/ehrSmokingIntervention.gif)

* **Date**: Edit the date of the intervention.
* **Code Set**: Defaults to *TobaccoCessation Counseling*.
* **Patient Declined**: Check to note the patient has declined intervention.
* **Intervention Codes**: Highlights the selected intervention code. Cannot be changed.
* **Notes**: Enter any relevant notes.

Click **Delete** to remove the intervention. Click **OK** to save changes.