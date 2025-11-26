Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Rx / Prescription Alert

Users can set interaction alerts when prescribing medication.

In the [Rx / Prescriptions List](rxsetup.html), add a Problem, Medication, or Allergy to the Alerts field.

![](images/rxinteractionAlert.gif)

Open Dental drug interaction alerts occur when you write new paper [Rx / Prescription](rx.html) using a template that has interaction alerts set up. Interaction alerts can be based on a medication, allergy, and/or problem. They are always enabled and you cannot turn them off. Set the behavior of alerts by adding or removing alert rules in a prescription template.

## Set Up Alert Rules

Alert rules are created in a prescription template. To ensure alerts work correctly, make sure the [Problem List](problemmaster.html), [Medications List](medicationmaster.html), and [Allergy List](allergiesmaster.html) do not contain duplicates.

1. In the Prescription List, double-click a prescription or add a new one.
2. Click an alert type to add:
   * Add Problem
   * Add Medication
   * Add Allergy
3. Double-click a row to add it to the Alert.

Double-click on an alert to customize it.

![](images/rxAlertEdit.gif)

* **Alternate custom message**: Enter a custom message to display when this alert is triggered. If none is entered, the default message will display.
* **Is High Significance**: High significance alerts are always triggered. To also show low significance alerts, uncheck *Only show high significance Rx alerts* in [EHR Settings](ehrsettings.html).

## Trigger an Alert

When alerts are set up for a prescription, and the patient has the alert type (e.g., medication, allergy, problem) entered in their Chart, the alert will display when the prescription is created.

![](images/rxAlertEditMsg.gif)

## EHR Users

In [EHR Measure Reports](ehrmeasures.html), paper prescriptions for permissible drugs count towards the denominator, but not towards the numerator. Thus, only rely on paper prescriptions and its drug interaction checks if you qualify for the e-prescribing exclusion (write less than 100 prescriptions).