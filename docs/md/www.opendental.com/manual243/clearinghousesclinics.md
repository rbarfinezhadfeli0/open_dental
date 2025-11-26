Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Clearinghouse Clinic Setup

If using clinics, set different clearinghouse settings for each clinic.

In the [Clearinghouses](clearinghouses.html) window, in the upper right, select a clinic.

![](images/clearinghousesClinic.png)

When sending claims for [Clinics](clinics.html), the clinic-level overrides are used instead of default settings and are determined by the claim's assigned clinic. Default dental or medical clearinghouses remain the same for all clinics.

Double-click the clearinghouse row to open the Edit Clearinghouse or Direct Carrier window.

![](images/clearinghouseEditClinic.png)

Settings that can be set for each clinic are highlighted above. All other options are only enabled when the Unassigned/Default clinic is selected.

First enter settings for the clinic Unassigned/Default. These settings are used by all clinics if no clinic-level overrides are entered.

* Select the clinic Unassigned/Default in the upper right.
* Enter the settings. Refer to [Clearinghouses](clearinghouses.html) for a list of clearinghouses and direct carriers and link to their general settings.

Next enter clinic-level overrides. These settings override Unassigned/Default information when sending claims for this clinic.

* Select the clinic.
* Enter the credentials as needed. You can enter *Tax ID number*, *Name*, *Telephone Number*, *Login ID*, *Password*, *Claim Export Path*, *Report Path* and *Launch Client Program* (.exe).
* Enable or disable *Allow sending attachments* and *Save Attachments to Imaging Module* as needed.
* When finished with one clinic, select another clinic and enter its information.

Note:

* For details on how clinic assignment restricts user access in Open Dental, see [User Edit](securityusers.html).
* If the currently logged on user is restricted to certain clinics, only the clinics they have access show in the Clinic dropdown.
* If Unassigned/Default credentials match other clinic settings, and Unassigned/Default credentials are modified, the edits affect the other clinics as well. To unlink a clinic from Unassigned/Default, change the clinic's credentials. Then any changes made to Unassigned/Defaults no longer affect the clinic.