Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Web Sched Recall: What Patient Sees

Below is a description of what happens when a practice sends Web Sched Recall reminders to patients (automated or manual) and the patients go online to schedule. See [Web Sched Feature](../site/websched.html) for a description of the Web Sched Recall service.

One reminder for each recall appointment is sent to the patient's [Authorized Representatives](authrep.html). Each reminder contains a clickable link that is patient-specific based on patient number.

To schedule an appointment, the patient will follow these steps:

1. Open the reminder and click on the link in the message text to open Web Sched Recall in a browser.
   ![](images/webschedRecallUI.gif)

   * Practice or clinic name, address, and phone number: Based on the information entered in [Practice Setup](practice.html) or [Clinic List](clinicsetup.html) (patient's default clinic).
   * Patient info: Only the patient's first name and age shows. If the patient is over 89, 89+ shows. No PHI is displayed.
2. **Select a Provider**: If you have opted to allow patients to select a provider, and more than one provider has available openings, patient can select a provider. To view a provider photo and description, click +. Click - to collapse provider information. +/- only shows when provider details have been added to the provider's profile on the [Provider](providerseditwindow.html), Web Sched tab. There is no particular order of providers.
   ![](images/webSchedRecallProvider.gif)
3. **Calendar**: By default, the first dates with available time slots show, based on criteria selected in [Web Sched Recall](webschedrecallsetup.html). Select a date and available appointment times will show. Then select the desired appointment time.
4. (optional) Check **Notify me if an earlier appointment time becomes available** to have the office notify patient about earlier appointments. This marks the appointment as ASAP and it will show on the ASAP List.
5. Click **Finalize Appt**.
6. A confirmation message will show. To confirm, click **Yes**. To return to the list of available dates, click No.
   ![](images/webschedConfirm.gif)
7. If Yes, a confirmation of the now scheduled appointment will show.
   ![](images/webschedBooked.gif)
8. Close the browser to end the session.

## In Open Dental

* Scheduled appointments instantly show up in the [Appointments Module](appointments.html).
* [Alerts](alerts.html) are created to notify staff a Web Sched Recall appointment has been scheduled.
* Use the [Web Sched Appointments Report](webschedapptreport.html) to view and track appointments scheduled using Web Sched.

Note: Once an appointment is scheduled it cannot be changed in Web Sched Recall. If a patient reopens the email link, they will be notified an appointment has already been booked.