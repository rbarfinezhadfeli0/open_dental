Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

NewCrop eRx Troubleshooting

Below is troubleshooting help for the [Ensora eRx (formerly NewCrop eRx) / Prescription](newcrop.html) interface.

**I can open Ensora eRx, but I can't click anything once the window opens.**

[Update](update.html) Open Dental. You must be on Version 21.2 or higher.

**Problem: I keep getting a message that information is missing. What information is required for Ensora eRx?**

![](images/eRxMissingInfo.png)

Solution: See [Required Ensora eRx Information](newcroprequiredinfo.html)

**Problem: eRx Button turns red.**

This can occur when eRx is clicked in the toolbar, or when switching to the Chart Module, causing Open Dental to attempt a sync with Ensora eRx to automatically copy completed prescriptions into the patient's Medication List and Progress Notes.

Solution: The button turns red when Open Dental has attempted to communicate with Ensora eRx and failed. It may be that communication failed for a random reason. First try reloading the Chart Module to see if the problem fixed itself. If the problem continues, you need to determine what is causing the failure to communicate, then address it. Some common causes include:

1. Intermittent internet connection issues or internet outage. To determine if it is an internet issue, try to open a web page in your internet browser. If the page will not load, there may be internet issues. Contact your internet service provider or IT.
2. Hardware Firewall issue: If all computers connected to the hardware are experiencing the same issue, it could be a hardware firewall issue. If two workstations use the same networking components and one works while another does not, it is not a hardware issue. Instead see #3 below.
3. Software desktop firewall issue: Open specific ports, or add an exception to the software firewall for the Open Dental application. Adding an exception for Open Dental would also allow other communication from Open Dental in the future (e.g., other web service communications as a result of new features).
4. Anti-virus software: Add an exception to the Open Dental application for the same reason stated in #3.
5. DNS: On the workstation with the error, open a web browser and type in "secure.newcropaccounts.com". If DNS is working, you will get an access forbidden message. Assuming your internet is working, if DNS is not working, you will see a "404 page not found" message.
6. If you do not use electronic prescriptions, consider disabling the electronic Rx program link in [Program Links](programlinks.html).

**Problem: Pharmacy claims they did not receive a transmitted prescription.**

Solution: See [Report a Failed or Missing Prescription in Ensora eRx](newcropmissingrx.html)