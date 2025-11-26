Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Web Sched Advanced

Web Sched Advanced allows the office to generate a URL for scheduling, as well as determine what options to include.

In [eServices Setup](eservicessetup.html), click **Advanced**.

![](images/webSchedAdvanced.png)

Also see:

* [Web Sched New Patient](webschednewpatsetup.html)
* [Web Sched Existing Patient](webschedexistingpatsetup.html)
* [Web Form Setup](webformsupload.html)

## Clinics

If Clinics is enabled, each clinic will list in the grid on the left. If Clinics is not enabled, only *Headquarters* will list.

![](images/webSchedAdvancedClinics.png)

Highlight a clinic from the list to determine settings and the copy the URL.

## Options

Options determine what the patient sees when scheduling.

![](images/webSchedAdvancedOption.png)

**Allow Children**: Determine if the parent or legal guardian is able to schedule an appointment on behalf of a minor patient (17 years of age or younger).

* If enabled: After the submitter indicates the patient is under 18 years of age, triggers an extra screening question asking if the submitter is the parent or legal guardian of the minor patient.
  + If the submitter answers yes, they can proceed to scheduling calendar.
  + If the submitter answers no, they cannot schedule online.
  + If the submitter is the minor patient, the patient will be instructed to submit guardian and minor information.
* If disabled: After the submitter indicates the patient is under 18 years of age, the submitter cannot proceed with scheduling an appointment.

**Web Sched New Patient Authentication**: Determine how new patients can verify their identity when scheduling an appointment. When used, the authentication code must be entered correctly before the patient can proceed scheduling the appointment. Select one, both, or none.

* **Email**: Send an authentication to the patient's email.
* **Text**: Send an authentication to the patient's wireless phone.

**Web Sched Existing Patient Authentication**: Determine how existing patients can verify their identity when scheduling an appointment. When used, the authentication code must be entered correctly before the patient can proceed scheduling the appointment. It is required to select one or both.

* **Email**: Send an authentication to the patient's email.
* **Text**: Send an authentication to the patient's wireless phone.

Note: If a guarantor is scheduling the appointment, the code will be sent to the guarantor's email/wireless number as provided in the interface. If both Verify Email and Verify Text are both on, the same code is sent to both email and text.

## URLs

Generate URLs for scheduling and web forms.

![](images/webschedAdvancedURLs.png)

**Web Form to Launch after scheduling New Pat**: Click Edit to select one or more web forms to launch once a patient finishes scheduling their New Patient appointment online. The full URL of the web form(s) will display in the box. Right click to browse to the URL or copy it. Also see [Web Form Setup](webformsupload.html). Click red X button to clear field.

**Web Form to Launch after scheduling Existing Pat**: Click Edit to select one or more web forms to launch once a patient finishes scheduling their Existing Patient appointment online. The full URL of the web form(s) will display in the box. Right click to browse to the URL or copy it. Also see [Web Form Setup](webformsupload.html). Click red X button to clear field.

**Scheduling URL:** The full URL of the location's Web Sched interface. Send patients here to schedule. Right-click to browse to the URL or copy it.

There are two possible methods of providing access to the Hosted URL.

1. Add a link to the URL on the practice website. Then patients simply visit the website and click the link to schedule a new appointment.

   <a href ="https://www.patientviewer.com/?RSID=34343338&CID=30&C=1251">Schedule Appt</a>
2. Embed the URL in an iframe on the practice website. This will give the appearance of having Web Sched New Patient on the webpage instead of going to a different link. To see a demo: <http://patientviewer.com/demo/wsnp_embedded/>

   <iframe class="frame" src="https://www.patientviewer.com/?RSID=34343338&CID=30&C=1251"></iframe>

## Other URL Options

* Change the interface color.

  By default, the Web Sched New Patient and Web Sched Existing Patient interface is blue. To change the color simply add this code to the end of the hosted URL: &TCP=color. Replace *color* with the color name or hex value. If using a hex value, replace the hash (#) with a period (.)

  Available colors are listed here: <https://htmlcolorcodes.com/color-names/>. If using a dark color, text will automatically display in white. If using a light color, text will automatically display in black.

  <a href ="https://www.patientviewer.com/?RSID=34343338&CID=30&C=1251&TCP=green">Schedule Appt</a>

  <iframe class="frame" src="https://www.patientviewer.com/?RSID=34343338&CID=30&C=1251&TCP=.507C77"></iframe>
* Redirect the patient to a specific URL after scheduling.

  By default, a standard *Appointment Booked* message shows once an appointment is scheduled. To redirect the patient to a specific web page instead, simply add this code to the end of the hosted URL: &ReturnURL=http://www.site.com. Replace www.site.com with the specific web page URL.

  <a href="https://www.patientviewer.com/?RSID=34343338&CID=30&C=1251&ReturnURL=http://www.opendental.com">Schedule Appt</a>

* Tracking Created Appointments
   If you are embedding Web Sched New/Existing Patient into your website you can track whether or not an appointment was made. To do this you need to add an Event Listener on your website and listen for an event of type "message". When an appointment has been scheduled, the event's data will be a boolean true. Always take proper precautions when listening for events (such as verifying the origin of the event and the event's data is what you expect) to make sure that you're not exposing yourself to potential cross-site scripting attacks.

* UTM Tracking
   The following parameters can be added. Enter a campaign, source, and medium as needed for each unique link.
  + utm\_campaign=
  + utm\_source=
  + utm\_medium=

<a href ="https://www.patientviewer.com/?RSID=3235323630&CID=31&C=1347&utm\_source=test1&utm\_medium=test2&utm\_campaign=test3">

As each unique parameter (link) is used, a new row is added to the database for tracking. Use Query #1724 on [Query Examples](https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx) to track visits by parameter.