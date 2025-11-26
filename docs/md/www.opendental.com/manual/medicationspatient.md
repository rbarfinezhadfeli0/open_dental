Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Medications

In the [Chart Module](chart.html), double-click the pink [Medical](medical.html) area. Click the Medications tab.

![](images/medicalMedications.png)

**Add Medication**: Add a medication from the [Medications List](medicationmaster.html). Double-click a medication from the Medications List to open the Medication for Patient window (see below) and enter medication details for the patient.

**Show Discontinued Medications**: Check to display medications with a Stop Date prior to today's date.

**Print Medications**: Print a list of the patient's medications.

Columns:

* **Medication**: A list of the patient's entered medications. Double-click a medication to open edit details. Opens Medication for Patient window shown below. The [EHR InfoButton](ehrinfobutton.html) may show if EHR is turned on.
* **Notes**: Medication specific notes.
* **Notes for Patient**: Medication notes specific to the patient.
* **Status**: Displays whether the status of a medication is active or inactive based on the Stop Date.
* **Source**: Displays DoseSpot or NewCrop if the medication was synced from an [eRx integration](https://opendental.com/site/electronicrx.html). A blank source indicates the medication was created in Open Dental.

Active medications are also listed in the Chart Module, Medical area. Every time a patient medication is added, edited or removed an entry is made in the [Audit Trail](audittrail.html).

## Medication for Patient

Double-click an existing medication from the Medications grid or click **Add Medication** and double-click a medication from the Medications List. The Medication for Patient window opens where details about the medication for the specific patient can be entered.

![](images/medicationPatient.png)

The Medication area lists the drug information as entered in the Medications List. Click **Edit** to make changes to the medication details in the [Medications List](medicationmaster.html).

The Medication Order area is specific to the selected patient.

* **Provider**: Click the drop down to change the provider. Only used in EHR.
* **Notes for this Patient**: Enter patient-specific notes. [Right-Click](rightclicktextboxes.html) the text box for additional options.
  + If EHR is turned on, this area is labeled Count, Instructions, Refills.
  + If using DoseSpot, Medication Patient Notes are limited by e-Prescribing Standard from containing carriage returns. When the note is sent to DoseSpot, the note length may be automatically reduced.
* **Date Start**: Enter the date the medication was started, if known. Click **Today** to insert the current date.
* **Date Stop**: Enter the date the medication was stopped, if known. Click **Today** to insert the current date.
  + If the Date Stop is blank, today's date, or a future date, the medication is still considered active. If the the Date Stop is prior to the current date, the medication is considered inactive/discontinued.
  + If using eRx, when a medication is marked discontinued in eRx, a Stop Date is automatically entered for the medication in Open Dental when the Chart Module is refreshed.
  + Automatically add a default Stop Date for new prescriptions by setting *Medication Order default days until stop date* in [Preferences](preferences.html), .

**Remove**: Delete this medication from the patient's medication list.

Click **OK** to save changes.