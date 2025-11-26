Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Web Sched Existing Patient: What Patient Sees

When using [Web Sched Existing Patient](webschedexistingpatsetup.html), what a patient sees depends on the selected settings.

![](images/webSchedExistingPatientMain.png)

* To make changes to some interface options, see [Web Sched Existing Patient](webschedexistingpatsetup.html) and [Web Sched Advanced](webschedadvanced.html).
* To see an example of Web Sched embedded in a website, see our [Sample Website](http://patientviewer.com/demo/wsnp_embedded).
  + This is only provided as an example of how the Patient Viewer can be embedded in a website to enhance its appearance. Open Dental is not able to embed or manage custom websites for your practice. Your IT and/or webmaster are your best resource if you wish to have Web Sched New Patient embedded in your site.

## Patient Prompts

When a patient has been seen at the office before, they will be prompted to enter their first name, last name, and birthdate.

![](images/webSchedExistingPatSees1.png)

* If a patient has never had an appointment with your office before, they will be directed to [Web Sched New Patient: What Patient Sees](webschednewpatsees.html) instead.
* If the patient has *Appointment scheduling is restricted* enabled in [Edit Patient Information](patientedit.html) window, they will not be able to schedule.
* If *Allow Children* is enabled in Web Sched Advanced setup, parents or legal guardians can enter the child's information to schedule. If *Allow Children* is not enabled, they will be prompted to contact the office.
* If multiple patients with the same first name, last name, and birthdate are found, additional verification is needed.
* After verifying their identity, patients will be prompted to select a reason for their appointment. Options are determined by [Definitions: Web Sched Existing Appt Types](definitionswebschedexistingpatappttypes.html).
* If [Web Sched Recall](webschedrecallsetup.html) is enabled, *TeethCleaning* will display as an appointment reason. If *TeethCleaning* is selected by the patient, the appointment will be scheduled as a Web Sched Recall appointment instead.

## View Openings

After clicking View Openings, patients can select the date and time of their appointment.

![](images/webSchedExistingPatSees4.png)

## Schedule Appointment

After clicking **Finalize Appt**, the patient will be prompted to confirm the date and time.

![](images/webSchedExistingConfirm.png)

Then the patient must verify their identity.

![](images/webSchedExistingVerify.png)

* Patients can verify by text or email, depending the on the setting selected under *Web Sched Existing Patient Authentication* in Web Sched Advanced Setup.
* The patient will retrieve the code, then enter it in the Verification Code field. The code is not case-sensitive and is only valid as long as the Enter Verification Code window is open.

![](images/webSchedVerifyEnter.gif)

Once verified, a confirmation will display.

![](images/webSchedExistingPatSees5.png)

## Carrier Rules

If [Web Sched Carrier Rules](webschedcarrierrule.html) are enabled, the patient will be prompted to select an insurance carrier.

![](images/webSchedNewPatCarrierRule.png)

* If a carrier rule includes a message, the message will display after the carrier is selected.
* If a carrier rule is marked as *Blocked*, the patient cannot continue scheduling their appointment online.
* If a carrier rule is marked as *Allow With Input* (i.e. Other), the patient is prompted to enter the Insurance Carrier name.

After selecting their appointment date and time, the patient will be prompted to enter additional insurance details.

![](images/webSchedNewPatientInsSubInfo.png)

Carrier details will display as an appointment note on the scheduled appointment.

## In Open Dental

After an appointment is scheduled via Web Sched Existing Patient:

* Scheduled appointments instantly show up in the [Appointments Module](appointments.html).
* [Alerts](alerts.html) are created to notify staff a new patient appointment has been scheduled.

Use the [Web Sched Appointments Report](webschedapptreport.html) to view and track appointments scheduled using Web Sched.