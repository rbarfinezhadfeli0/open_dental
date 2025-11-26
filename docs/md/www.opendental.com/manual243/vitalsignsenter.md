Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR Vital Signs

Document a patient's vital signs, including height, weight, blood pressure, and pulse.

In the [Medical](medical.html) area, click the Vital Signs tab.

![](images/medicalVitalSigns.gif)

Note: To enter Vital Signs, the following must be set:

* Enable EHR in [Show Features](showfeatures.html).
* Download LOINC codes. See [Importing Code Systems](codesystemimport.html).

**Add Vital Sign**: Add vital sign entries.

**Growth Chart**: For patients who are 0 - 20 years of age, view a plotted chart of vital sign changes. See [EHR Growth Chart](vitalsignsgrowthchart.html).

**Vital Signs Grid**: A list of vital sign entries, sorted by date. The *Documentation for Followup or Ineligible* column will show no text. (This column is leftover from 2011 certification.)

Click Add Vital Sign, or double-click an entry to edit. The patient's age will determine which information shows in the window.

![](images/ehrVitalSignEdit.gif)

Enter the vital sign information.

* **Date**: The date of the entry.
* **Systolic/Diastolic BP**: Blood pressure measurements. Corresponding [LOINC Codes](loinc.html) will show.
* **Height**: Patient's height in inches. Height Code is automatically selected when height is entered; you can select another option if desired. Required for minor patients when sending prescriptions through Ensora eRx (formerly NewCrop eRx) or DoseSpot eRx.
* **Weight**: Patient's weight in pounds (lbs). Weight Code is automatically selected when weight is entered; you can select another option if desired. Required for minor patients when sending prescriptions through Ensora eRx or DoseSpot eRx.
* **BMI**: Automatically calculated using height and weight. If BMI is flagged as underweight or overweight, and the patient is older than 18, an Intervention area will show at the bottom of the window. A corresponding LOINC code will show.
* **BMI Percentile**: Only visible for patients 3 to 16 years of age as of January 1. A corresponding LOINC code will show.
* **Pulse**: The patient's pulse in beats per minute.

If applicable, enter CQM (Clinical Quality Measure) exclusion reasons or interventions.

**Exclusion from BMI Exam**: This information is included in [EHR Clinical Quality Measures](ehrcqm.html) exclusions. If BMI height and weight are not recorded due to a patient's condition, select the checkbox that explains the reason.

* **Pregnancy**: Check this box if patient is/was pregnant during measurement period. If you have set a default pregnancy code in [EHR Settings](ehrsettings.html), it will show as the Pregnancy Code and Description. If you have not set a default, the [Problem List](problemmaster.html) will open so you can select one. To set a default, click Change Default. Once selected, a diagnosis of pregnancy, using this code, will also be added to the patient's list of problems with a start date equal to exam date, if an active diagnosis doesn't already exist. Pregnant patients will not count in the denominator of associated CQMs, though will show as an exclusion.
* **Other Reason**: Check this box if height/weight is not recorded for a reason other than pregnancy, then document the [Reason not Performed](ehrnotperformed.html). If a valid reason is documented, this patient will not be calculated in the denominator of associated CQMs.

**Interventions and/or Medications**: This area only shows in the following circumstances:

* If a patient is 16 years of age or younger as of January 1 of the exam year, and a height and weight is entered.
* If a patient is 18 or older, height and weight are entered, and the calculated BMI is flagged as underweight or overweight.

Click **Add** to document an [Intervention](ehrinterventions.html).

![](images/ehrVitalsInterventions.gif)

* **Date**: Enter the date. The default is today's date.
* Click on an intervention. To filter the list by intervention type, click the **Code Set** dropdown.
  + Patients 16 or younger: Nutritional Counseling and Physical Activity Counseling interventions are listed.
  + Patients 18 or older: Above/Below Normal Weight referral, medication, or follow up interventions are listed.
* If patient declines the intervention, click **Patient Declined**.
* Enter a **Note** (optional).

Click OK.

If you select a medication, the Medication for Patient window will open so you can enter instructions and start date. See [Medications](medicationspatient.html). Click OK to save the vital sign entry.