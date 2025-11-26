Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Open Dental Service

The Open Dental Service is used to run background processes necessary for Open Dental.

In the [Service Manager](servicemanager.html), double-click **OpenDentalService**.

![](images/openDentalService.PNG)

Note: The OpenDentalService will only list in the Service Manager on the server computer. The service should only be installed on the server, since additional installations on workstations may cause conflicts. The OpenDentalService should only be installed and running on one server for offices that are using replication.

This service is required for customers using [Email](email.html), [eServices](eservices.html) or customers utilizing certain third parties.

The OpenDentalService does the following:

* Creates an alert:
  + if the number of current MySQL connections is greater than the max\_connections variable in the [my.ini](myini.html) file.
  + when payments are made from the [Patient Portal](portalhostedbyod.html).
  + when a [Web Sched New Patient](webschednewpatsetup.html) appointment is created.
  + when a [Web Sched Recall](webschedrecallsetup.html) appointment is created.
  + when a secure email message is received.
  + when a web form is ready to be retrieved.
* Downloads email from servers based on the *Inbox Receive Interval* set in [Email Setup](emailsetup.html).
* Runs aging at *Automated aging run time*, scheduled in [Preferences](preferences.html).
* Runs aging at *Aging Service Time Due*, scheduled in [Enterprise Setup](enterprisesetup.html), for Enterprise users.
* Imports clearinghouse reports if *Receive Reports by Service* is checked in the E-Claims window.
* Send patient aging information to [TSI Collections](tsicollections.html).
* Sends information from Podium if *Use service to send invitations* is checked in the [Podium](bridgepodium.html) program link.
* Runs [CC Recurring Charges](recurringcharges.html).
* Adds charges for [Dynamic Payment Plans](paymentplandynamic.html).
* Adds Automated [Repeating Charges](repeatingcharges.html).
* Runs various [CareCredit](../site/carecredit.html) processes.

## Installing the OpenDentalService

The OpenDentalService is typically installed on the server computer upon initial installation of Open Dental.

Sometimes the OpenDentalService must be installed manually due to permission restrictions on the server.

To manually install the OpenDentalService:

1. In the Main Menu, click Tools, Misc Tools, **Service Manager**.
2. Click **Add**.
3. Click **Browse** and select the *OpenDentalService.exe*. This is typically located in **\Program Files (x86)\OpenDental\OpenDentalService\**.
4. Click **Install**.
   1. Enter the configuration settings.
   2. Click **OK** to close the Configuration window.
   3. If the installation is successful, the status will change from *Not Installed* to *Installed, Running*.

Note: Offices utilizing the Open Dental Service for *CC Recurring Charges* and *Repeating Charges* or *Dynamic Payment Plans*, may want to schedule *Recurring charges run time* after *Repeating charges run time* and *Dynamic Pay Plan run time* when setting up [Preferences](preferences.html) to ensure charges are posted before attempting payment. Not doing so may cause payments not to be processed if there is no charge (or balance) on the patient's account.