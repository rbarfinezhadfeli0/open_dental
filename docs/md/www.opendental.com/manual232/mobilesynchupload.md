Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Mobile Synch Setup

In the [Main Menu](mainmenu.html), click Tools, Mobile Synch, or click eServices, Mobile Sync.

Note: Mobile Synch has been replaced by [ODMobile](opendentalmobile.html), an app that is installed right to your mobile device!

![](images/mobileSynch.gif)

Alternatively, in the [eServices Misc](eservicesmisctab.html), click *Show Mobile Synch (old-style)*.

When using the Mobile Synch Feature application, data must be uploaded to Open Dental's server. It will then continue to synch with your database server to ensure content is up-to-date. The synch will start when you launch Open Dental, after the database is selected but before user login.

* **Host Server Address**: No need to change this. This is the Open Dental server where data will be sent during synchronization.
* **Minutes Between Synch**: The interval, in minutes, between automatic synchronization of Open Dental's server and your database. 10 minutes is a good setting to start with. If synching is too frequent, the workstation may lock momentarily while synching. A longer interval minimizes the problem.
* **Exclude Appointments Before**: Enter a date, or leave it blank to include all appointments. A date can reduce the amount of time it takes for the initial synch.
* **Workstation for Synching**: Identify the one workstation in the office that will synch with Open Dental's server.
* **User Name**: Must be at least 10 characters long and complicated (upper and lower case letters, at least one number, and one special character). For technical reasons, certain symbols do not work and will result in a failed login attempt on the mobile device. Specifically, we are aware that the &, +, and sometimes the % symbols cannot be part of the username. You can choose to 'remember' the user name on your mobile device so you don't always have to reenter it.
* **Password**: Can be short and simple. It protects viewing of your data by anyone else on your mobile device.
* **Synch Troubleshooting Mode**: Mobile Synch runs much slower in this mode. When checked, data will synch one patient at a time instead of in a batch. This is designed so when a synch is failing, you may find the patient or record that is causing the failure and correct it.

**Delete All**: Deletes all data from the Open Dental server.

**Full Synch**: Delete all data from the Open Dental server then upload fresh data. This should only need to be done once.

**Synch**: A synch can be forced at any time in addition to the automatic timed synch.