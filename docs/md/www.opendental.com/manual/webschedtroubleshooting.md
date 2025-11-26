Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Web Sched Troubleshooting

See [eServices Setup](eservicessetup.html).

Below are some troubleshooting steps if you experience issues with Web Sched Recall, Web Sched New Patient, or Web Sched ASAP.

**Problem: There are no available time slots for patients to choose from.**

Check all setup options to make sure information is complete and accurate.

* Does the provider's schedule extend far enough into the future? [Schedule Setup](schedule.html)
* Are operatories correctly marked for Web Sched? [Operatories](operatories.html)
* In the Provider Setup, for each provider make sure *Not a Person* is unchecked. [Provider](providerseditwindow.html)

**Problem: Why do I see 'Error Retrieving URLs' in the Hosted URL title bar?**

This message shows when you haven't yet enabled Web Sched New Patient, or when there are connection issues with the [eConnector](econnector.html).

**Problem: When attempting to schedule an appointment via Web Sched, the patient recieves the error 'We are missing an email address or wireless number for your account.'**

Two-factor authentication is enabled and an email address is not on file for the patient. Alternatively, email may not be set up in Open Dental for the practice (or clinic if using clinics).