Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Web Sched New Patient: What Patient Sees

Below is a description of what the patient sees when they schedule an appointment via [Web Sched New Patient](webschednewpatsetup.html).

* To make changes to some interface options, see [Web Sched New Patient](webschednewpatsetup.html) Setup and [Web Sched Advanced](webschedadvanced.html).
* For an example of Web Sched embedded in a website, see our [Sample Website](http://patientviewer.com/demo/wsnp_embedded).
  + This is only provided as an example of how the Patient Viewer can be embedded in a website to enhance its appearance. Open Dental is not able to embed or manage custom websites for a practice. Contact an IT professional or webmaster to embed Web Sched New Patient into the practice site.

## Scheduling an Appointment

1. The patient clicks a link that navigates them to Web Sched. Questions and prompts that appear are determined by settings selected by the office and how the previous prompt was answered by the patient.
   ![](images/webSchedNewPatPrompts.png)
   * If a patient has had an appointment with your office before, they will be directed to [Web Sched Existing Patient: What Patient Sees](webschedexistingpatientsees.html) instead.
   * If *Allow Children* is enabled in [Web Sched Advanced](webschedadvanced.html), parents and guardians are able to schedule appointments for their children.
   * If [Carrier Rules](webschedcarrierrule.html) are enabled, patients can enter carrier information.
   * Patients will be prompted to select a reason for their appointment. Options are determined by [Definitions: Web Sched New Patient Appt Types](definitionswebschednewpatappttypes.html).
2. After clicking **View Openings**, patients can select the date and time of their appointment.
   ![](images/webschednewpatientCalendar.png)
3. Patients and Guardians are then prompted to enter contact information.
   ![](images/webSchedNewPatInfo.png)
   * All fields are required.
   * Guardian information only shows when the patient is under the age of 18.
   * By entering their phone number, the patient agrees to receiving text messages from the office. This sets *Text OK* and *Appt Texts* to Y (Yes) in the [Edit Patient Information](patientedit.html) window.
4. Depending on selected settings, patients may be prompted to enter additional information, such as insurance.
5. Once all information has been entered, the patient clicks **Schedule Appointment**. A confirmation displays.
   ![](images/webschedNewPatientBooked.png)
   * If *Launch WebForm on New Pat Complete* is enabled in Web Sched Advanced Setup, the selected web forms launches instead.
   * If a redirect URL has been added to the code, the redirect URL shows instead.

## Patient Authentication

If *Email* or *Text* is selected under *Web Sched New Patient Authentication* in Web Sched Advanced Setup, the patient is prompted to verify their identity.

![](images/webSchedVerify.gif)

The patient retrieves the code, then enters it in the Verification Code field. The code is not case-sensitive and is only valid as long as the Enter Verification Code window is open.

![](images/webSchedVerifyEnter.gif)

## Carrier Rules

If [Web Sched Carrier Rules](webschedcarrierrule.html) are enabled, the patient is prompted to select an insurance carrier.

![](images/webSchedNewPatCarrierRule.png)

* If a carrier rule includes a message, the message will display after the carrier is selected.
* If a carrier rule is marked as *Blocked*, the patient cannot continue scheduling their appointment online.
* If a carrier rule is marked as *Allow With Input* (i.e. Other), the patient is prompted to enter the Insurance Carrier name.

After selecting their appointment date and time, the patient is prompted to enter additional insurance infomation.

![](images/webSchedNewPatientInsSubInfo.png)

Carrier details display as an appointment note on the scheduled appointment.

## In Open Dental

After an appointment is scheduled via Web Sched New Patient:

* Scheduled appointments instantly show up in the [Appointments Module](appointments.html).
* [Alerts](alerts.html) are created to notify staff a new patient appointment has been scheduled.

Use the [Web Sched Appointments Report](webschedapptreport.html) to view and track appointments scheduled using Web Sched.

## Patient Requirements

In order to schedule a new patient appointment using Web Sched New Patient, patients must meet the following requirements:

* A patient record cannot already exist; patient must be new.
* Patient must be 18 years of age or older, or a parent/legal guardian must confirm they are scheduling on a minor's behalf.

Existing patients can instead schedule appointments using [Web Sched Existing Patient](webschedexistingpatsetup.html).