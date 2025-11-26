Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Medications

In the [Chart Module](chart.html), double-click the pink [Medical](medical.html) area. Click the Medications tab.

![](images/medicalMedications.gif)

**Add Medication:** Add a medication from the [Medications List](medicationmaster.html).

**Show Discontinued Medications:** List medications that have a Stop Date prior to today's date.

**Print Medications:** Print a list of the patient's medications.

Columns:

* **Medication:** A list of this patient's entered medications. Double-click a medication to change start/stop dates, provider, count, instructions, and refills. The [EHR InfoButton](ehrinfobutton.html) may show if EHR is turned on.
* **Notes**: Medication specific notes.
* **Notes for Patient**: Medication notes specific to the patient.
* **Status**: Displays whether the status of a medication is active or inactive based on the Stop Date.
* **Source**: Displays DoseSpot or NewCrop if the medication was synced from an [eRx integration](https://opendental.com/site/electronicrx.html). A blank source indicates the medication was created in Open Dental.

Active medications also list in the Chart Module, Medical area. Every time you add, edit or remove a patient medication, an entry is made in the Audit Trail.

## Add a Medication

Click Add Medication to open the Medications List, All Medications tab.

Double-click a medication to select it. If you do not see the medication, you can add it to the master list.

![](images/medicationPatient.gif)

The Medication area lists the drug information as entered in the Medications List.

Then Medication Order area is specific to the selected patient.

* **Provider:** Click the drop down to change the provider. This is only used in EHR.
* **Notes for this Patient:** Enter patient-specific notes.
  + If EHR is turned on, this area will be labeled Count, Instructions, Refills.
  + If using DoseSpot, Medication Patient Notes are limited by e-Prescribing Standard from containing carriage returns. When the note is sent to DoseSpot, the note length may be automatically reduced.
* **Date Start:** Enter the date the medication was started, if known. Click Today to insert today's date.
* **Date Stop**: Enter the date the medication was stopped, if known. Click **Today** to insert the current date.
  + If the Date Stop is blank, today's date, or a future date, the medication is still considered active. If the the Date Stop is prior to the current date, the medication is considered inactive/discontinued.
  + If using eRx, when a medication is marked discontinued in eRx, a Stop Date is automatically entered for the medication in Open Dental when the Chart Module is refreshed.
  + Automatically add a default Stop Date for new prescriptions by setting *Medication Order default days until stop date* in [Preferences](preferences.html).

**Remove:** Remove this medication from the patient's medication list.

Click OK to save changes.