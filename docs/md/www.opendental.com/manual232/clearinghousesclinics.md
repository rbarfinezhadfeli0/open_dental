Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Clearinghouse Clinic Setup

When using clinics, you can set different clearinghouse settings for each clinic.

In the [Clearinghouses](clearinghouses.html) window, in the upper right, select a clinic.

![](images/clearinghousesClinic.png)

When sending claims for [Clinics](clinics.html), the clinic-level overrides are used instead of default settings. Default dental or medical clearinghouses remain the same for all clinics.

Double-click the clearinghouse row to open the Edit Clearinghouse or Direct Carrier window.

![](images/clearinghouseEditClinic.png)

Settings that can be set for each clinic are highlighted above. All other options are only enabled when the Unassigned/Default clinic is selected (upper right corner).

First enter settings for the clinic Unassigned/Default. These settings are used by all clinics if no clinic-level overrides are entered.

* Select the clinic Unassigned/Default in the upper right
* Enter the settings. Refer to [Clearinghouses](clearinghouses.html) for a list of clearinghouses and direct carriers and link to their general settings.

Next enter clinic-level overrides. These settings override Unassigned/Default information when sending claims for this clinic.

* Select the clinic.
* Enter the credentials as needed. You can enter *Tax ID number*, *Name*, *Telephone Number*, *Login ID*, *Password*, *Claim Export Path*, *Report Path* and *Launch Client Program* (.exe).
* Enable or disable *Allow sending attachments* and *Save DXC Attachments to Images Module* as needed.
* When finished with one clinic, select another clinic and enter its information.

Click OK to save all settings for all clinics. If you click Cancel, any changes made since the window was opened are lost.

Note:

* For details on how clinic assignment restricts user access in Open Dental, see [User Edit](securityusers.html).
* If the currently logged on user is restricted by clinic, only the clinic they have access to will show in the Clinic dropdown.
* If Unassigned/Default credentials match other clinic settings, and Unassigned/Default credentials are modified, the edits will affect the other clinics as well. To unlink a clinic from Unassigned/Default, simply change the clinic's credentials. Then any changes made to Unassigned/Defaults will no longer affect the clinic.