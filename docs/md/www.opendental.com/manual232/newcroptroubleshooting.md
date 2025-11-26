Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

NewCrop eRx Troubleshooting

Below is troubleshooting help for the [NewCrop eRx / Prescription](newcrop.html) interface.

**I can open NewCrop eRx, but I can't click anything once the window opens.**

Open Dental needs to be updated to at least version 21.2. See [Update](update.html).

**Problem: I keep getting a message that information is missing. What information is required for NewCrop eRx?**

![](images/eRxMissingInfo.png)

Solution: See [Required NewCrop eRx Information](newcroprequiredinfo.html)

**Problem: eRx Button turns red.**

This can occur when eRx is clicked in the toolbar, or when switching to the Chart module, causing Open Dental to attempt a sync with NewCrop eRx to automatically copy completed prescriptions into the patient's Medication List and Progress Notes.

Solution: The button turns red when Open Dental has attempted to communicate with NewCrop eRx and failed. It may be that communication failed for a random reason. First try reloading the Chart module to see if the problem fixed itself. If the problem continues, you need to determine what is causing the failure to communicate, then address it. Some common causes are listed below.

1. Intermittent internet connection issues or internet down. To determine if it is an internet issue, in an internet browser go to google.com and refresh the page. If the page will not load, there might be an internet issue.
2. Hardware Firewall issue: If all computers connected to the hardware are experiencing the same issue, it could be a hardware firewall issue. If two workstations use the same networking components and one works while another does not, it is not a hardware issue. Instead see #3 below.
3. Software desktop firewall issue: Open specific ports, or add an exception to the software firewall for the Open Dental application. Adding an exception for Open Dental would also allow other communication from Open Dental in the future (e.g. other web service communications as a result of new features).
4. Anti-virus software: Add an exception to the Open Dental application for the same reason stated in #3.
5. DNS: On the workstation with the error, open a web browser and type in "secure.newcropaccounts.com". If DNS is working, you will get an access forbidden message. Assuming your internet is working, if DNS is not working, you will see a "404 page not found" message.
6. If you do not use electronic prescriptions, consider disabling the electronic Rx program link in Setup, Program Links.

**Problem: Pharmacy claims they did not receive a transmitted prescription.**

Solution: See [Report a Failed or Missing Prescription in NewCrop eRx](newcropmissingrx.html)

The information below includes technical information about NewCrop eRx.

## Technical Details

**How are users with multiple locations or providers tracked?**

* There are three identifiers that NewCrop eRx uses to divide information logically: AccountID, SiteID, and LocationID.
* For each unique AccountID and SiteID pair, a unique database is created at NewCrop eRx. Open Dental always sends a SiteID equal to 1, therefore unique NewCrop eRx databases will only be created for each unique AccountID.
* NewCrop eRx Provider IDs (Open Dental ProvNums) must be unique for each NewCrop eRX AccountID, and to meet this requirement, Open Dental automatically creates a unique AccountID for each logical database the first time an electronic prescription is sent from that database.
* NewCrop eRx Provider IDs (Open Dental ProvNums) must be unique for each NewCrop eRx AccountID, and to meet this requirement, Open Dental automatically creates a unique AccountID for each logical database the first time an electronic prescription is sent from that database.
* The AccountID format is the Open Dental customer account number followed by a dash followed by 5 random alpha-numeric characters. For example, 1234-T2d28. There is no way for the user to edit the AccountID.
* Open Dental always sends a LocationID of "0" if clinics are not being used. Otherwise, the ClinicNum is sent for the LocationID. Within the NewCrop eRx interface, the user can view information for a single location or for all locations.

All providers that share the same NPI number are treated as a single provider for eRx purposes.

GUID values: When electronic prescriptions are copied into the Chart module (when Chart module is refreshed), corresponding prescriptions and medications in Open Dental are identified by a GUID value supplied by NewCrop eRx. The GUID is how Open Dental determines if a record has already been created.