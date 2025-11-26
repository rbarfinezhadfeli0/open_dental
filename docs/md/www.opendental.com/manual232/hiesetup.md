Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

HIE Setup

HIE (Health Information Exchange) Setup allows practices to determine the setting for generating and exporting Continuity of Care Documents (CCDs).

In the [Main Menu](mainmenu.html), click Setup, Advanced Setup, HIE.

![](images/HIESetup.png)

Also see [EHR Continuity of Care Document ( CCD )](ehrccd.html).

* **Clinic**: Determines the HIE settings for the selected clinic.
* **Is Enabled**: Check to enable the automatic export of CCDs.
* **Is Medicaid Only**: Determines which insurance plans are eligible for CCDs.
  + Checked: Only create CCDs for patients with Medicaid insurance plans. A Medicaid plan is defined as a plan with an [Electronic Payer ID](payerids.html) marked as *Is Medicaid*.
  + Unchecked: Allow CCDs for any insurance plan.
* **Export CCD Path**: Enter the path to export CCDs to. Click **[...]** to browse for a folder.
* **Export CCD Time of Day**: Enter the time of day to export CCDs. The [Open Dental Service](opendentalservice.html) is required for CCDs to be created and exported. The Open Dental Service processes HIE queues every 5 minutes for 1 hour beginning at the time entered.

## HIE and CCD Logic

Before a CCD is generated, the information is placed in the HIE Queue. The actions below trigger a new HIE Queue row.

In the Appointments Module, a hiequeue is created for the patient when:

* Appointment rescheduled: A scheduled appointment is moved from one time slot to another, a Planned or Unscheduled appointment is moved from the Pinboard to the Schedule.
* [Set Appointment Complete](apptcomplete.html): Use the Complete toolbar button or right-click menu to set an appointment complete.
* Appointment deleted: Use the Delete toolbar button or right-click menu to delete an appointment.
* Send to Unscheduled List: Use the Unsched toolbar button or right-click menu send an appointment to the Unscheduled List.
* [Break Appointment](apptbreak.html): Use the Break toolbar button or right-click menu to break an appointment

When clicking OK from the [Edit Appointment](aptedit.html) window a hiequeue is created for the patient if:

* The status of the appointment is set to Broken.
* Clicking the Delete button.
* A new appointment is created.
* An existing appointment is edited.

A hiequeue row is created when a patient is added:

* By entering patient demographic information in the [Edit Patient Information](patientedit.html) window.
* By adding patients from the [Add Family](familyadd.html) window. One hiequeue row is created for each family member.
* By [Web Forms Retrieve](webformsretrieve.html).

CCDs are only created for a patient if they have information queued, and the following is true:

* The feature is enabled.
* A valid export path is entered.
* They meet the insurance criteria.
  + If *Is Medicaid Only* is checked, the patient has a medicaid insurance plan.
* The *Export CCD Time of Day* has passed. CCDs are only generated once a day at the run time.

Note: Any errors that occur during the processing of outstanding HIE queues are logged. The name of the directory is *HieQueue* and is located in the logger directory of the Open Dental Service.