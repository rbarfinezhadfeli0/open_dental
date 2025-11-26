Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Rx / Prescription Alert

Users can set interaction alerts when prescribing medication.

In the [Rx / Prescriptions List](rxsetup.html), add a Problem, Medication, or Allergy to the Alerts field.

![](images/rxinteractionAlert.png)

Open Dental drug interaction alerts occur when creating a new [Rx / Prescription](rx.html) using a Rx Template that has interaction alerts set up. Interaction alerts can be based on a medication, allergy, and/or problem. These warning alerts are always enabled.

Rx Alerts can be connected to problems, medications, or allergies. The alert is triggered when creating a prescription for a patient with the associated medical information.

* **Add Problem**: Click to create an Rx alert triggered by a [Problem](problempatient.html). The [Problem List](problemmaster.html) opens. Select a problem to continue.
* **Add Medication**: Click to create an Rx alert triggered by a [Medication](medicationspatient.html). The [Medications List](medicationmaster.html) opens. Select a medication to continue.
* **Add Allergy**: Click to create and Rx alert triggered by an [Allergy](allergiespatient.html). The [Allergy List](allergiesmaster.html) opens. Select an allergy to continue.

Note: To ensure alerts work correctly, make sure the [Problem List](problemmaster.html), [Medications List](medicationmaster.html), and [Allergy List](allergiesmaster.html) do not contain duplicates.

## Set Up Alert Rules

Once the problem, medication, or allergy is selected from the master list, Rx Alert Edit opens. Alternatively, double-click an existing alert to edit.

![](images/rxAlertEdit.png)

Details about the interaction for the alert are read-only and displayed at the top.

* **Alternate custom message**: Enter a custom message to display when this alert is triggered. If none is entered, a default message indicates the patient has the problem, allergy, or medication associated with the alert.
* **Is High Significance**: If EHR is enabled in [Show Features](showfeatures.html) and *Only show high significance Rx alerts* is enabled in [EHR Settings](ehrsettings.html), determines if a warning is shown for this interaction.
  + Checked: Alerts are shown for this interaction.
  + Unchecked: Alerts are not shown for this interaction.
  + If *Only show high significance Rx alerts* is disabled in EHR Settings or EHR is disabled in Show Features, alerts are always shown for this interaction, regardless of the checkbox setting.

## Trigger an Alert

When alerts are set up for a prescription, and the patient has the alert type (e.g., medication, allergy, problem) entered in their [Medical](medical.html) information in the Chart, the alert is displayed when the prescription is created.

![](images/rxAlertEditMsg.png)

## EHR Users

In [EHR Measure Reports](ehrmeasures.html), paper prescriptions for permissible drugs count toward the denominator, but not towards the numerator. Only rely on paper prescriptions and its drug interaction checks if you qualify for the e-prescribing exclusion (write less than 100 prescriptions).