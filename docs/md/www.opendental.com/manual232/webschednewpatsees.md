Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Web Sched New Patient: What Patient Sees

When using [Web Sched New Patient](webschednewpatsetup.html), what a patient sees depends on the selected settings.

![](images/webSchedNewPatientMain.png)

* To make changes to some interface options, see [Web Sched New Patient](webschednewpatsetup.html) and [Web Sched Advanced](webschedadvanced.html).
* For an example of Web Sched embedded in a website, see our [Sample Website](http://patientviewer.com/demo/wsnp_embedded).
  + This is only provided as an example of how the Patient Viewer can be embedded in a website to enhance its appearance. Open Dental is not able to embed or manage custom websites for your practice. Your IT and/or webmaster are your best resource if you wish to have Web Sched New Patient embedded in your site.

## Patient Prompts

Questions and prompts that appear are determined by settings selected by the office and how the previous prompt was answered by the patient.

![](images/webSchedNewPatPrompts.gif)

* If a patient has had an appointment with your office before, they will be directed to [Web Sched Existing Patient: What Patient Sees](webschedexistingpatientsees.html) instead.
* If *Allow Children* is enabled in [Web Sched Advanced](webschedadvanced.html), parents and guardians are able to schedule appointments for their children.
* If [Carrier Rules](webschedcarrierrule.html) are enabled, patients can enter carrier information.
* Patients will be prompted to select a reason for their appointment. Options are determined by [Definitions: Web Sched New Patient Appt Types](definitionswebschednewpatappttypes.html).

## View Openings

After clicking **View Openings**, patients can select the date and time of their appointment.

![](images/webschednewpatientCalendar.gif)

## Patient Information

Patients and Guardians will be prompted to enter contact information.

![](images/webSchedNewPatInfo.png)

* All fields are required.
* Guardian information only shows when the patient is under the age of 18.
* By entering their phone number, the patient agrees to receiving text messages from the office. This will set *Text OK* and *Appt Texts* to Yes in the [Edit Patient Information](patientedit.html) window.

## Schedule Appointment

Depending on selected settings, patients may be prompted to enter additional information. See below for details.

Once all information has been entered, the patient will click **Schedule Appointment**. A confirmation will display.

![](images/webschedNewPatientBooked.gif)

* If *Launch WebForm on New Pat Complete* is enabled in Web Sched Advanced Setup, the selected web forms will launch instead.
* If you have added a redirect URL to the code, the redirect URL will show instead.

## Select Provider

If *Allow patients to select provider* is enabled in [Web Sched New Patient](webschednewpatsetup.html) setup, a provider selection will display above the calendar.

![](images/webSchedNewPatProvider.gif)

* Available providers will list in the dropdown.
* Provider details and pictures can be added in the [Provider](providerseditwindow.html) Edit window, Web Sched tab. When details have been added, a + will display to show information.

## Patient Authentication

If *Email* or *Text* is selected under *Web Sched New Patient Authentication* in Web Sched Advanced Setup, the patient will be prompted to verify their identity.

![](images/webSchedVerify.gif)

The patient will retrieve the code, then enter it in the Verification Code field. The code is not case-sensitive and is only valid as long as the Enter Verification Code window is open.

![](images/webSchedVerifyEnter.gif)

## Carrier Rules

If [Web Sched Carrier Rules](webschedcarrierrule.html) are enabled, the patient will be prompted to select an insurance carrier.

![](images/webSchedNewPatCarrierRule.png)

* If a carrier rule includes a message, the message will display after the carrier is selected.
* If a carrier rule is marked as *Blocked*, the patient cannot continue scheduling their appointment online.
* If a carrier rule is marked as *Allow With Input* (i.e. Other), the patient is prompted to enter the Insurance Carrier name.

After selecting their appointment date and time, the patient will be prompted to enter additional insurance infomation.

![](images/webSchedNewPatientInsSubInfo.png)

Carrier details will display as an appointment note on the scheduled appointment.

## In Open Dental

After an appointment is scheduled via Web Sched New Patient:

* Scheduled appointments instantly show up in the [Appointments Module](appointments.html).
* [Alerts](alerts.html) are created to notify staff a new patient appointment has been scheduled.

Use the [Web Sched Appointments Report](webschedapptreport.html) to view and track appointments scheduled using Web Sched.