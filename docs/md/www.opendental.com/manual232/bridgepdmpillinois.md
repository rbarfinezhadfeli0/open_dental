Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

PDMP Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html), **PDMP**.

![](images/pdmp.png)

The PDMP (Prescription Drug Monitoring Program) bridge is for users in California, Illinois, Kentucky, Maryland, Utah, and Washington. Users must be on support with Open Dental to use this feature.

If you have not registered for PDMP:

* Illinois users can register here: <https://www.ilpmp.org/PMPnowRegistration.php>
* California, Kentucky, Maryland, Utah, and Washington can register here: <https://signup.logicoy.com/PDMPSystemEhrSignup/register>

Note: Users in other states can use the [Appriss Bridge](bridgeappriss.html) bridge instead.

The following must be set before using the PDMP bridge:

* [Providers](providerseditwindow.html) must have a First Name, Last Name, DEA Number, and National Provider ID entered.
* [Patients](patientedit.html) must have a First Name, Last Name, Birthdate, Zip Code, and Gender entered.
* The logged-on [User](securityusers.html) must be associated with a provider.
* The [Open Dental Service](opendentalservice.html) must be installed and running.

To enable the bridge, set the following information:

1. Check the **Enabled** box.
2. Double-Click into each of the **Additional Properties** to enter login credentials. These are issued by Logicoy and are required. Enter the credentials for your state only.
   * **PDMP Provider License Field**: Enter the state license or the state Rx ID. If this field is left blank, the state license is used.
   * **PDMP FacilityID**: Practice name.
   * **PDMP Username**: Username used when accessing PDMP
   * **PDMP Password**: Password used when accessing PDMP
3. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Change the **Text on button** if desired.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
4. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
5. Click OK.

Users must log into the PDMP Portal at least once every 90 days to keep the account active.