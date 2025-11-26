Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Canada Carriers

Canadian carriers can easily be added and maintained, without manually creating each one.

For [Canada](canada.html) users, click Lists, [Insurance Carriers](carriers.html).

![](images/canadaCarriersList.PNG)

Insurance carriers marked as *CDAnet* are capable of sending electronic claims to ITRANS or Claimstream (TELUS).

Search criteria:

* **Carrier**: Search the list by carrier name.
* **ElectID**: Search the list by electronic ID.
* **Phone**: Search the list by carrier phone number.
* **Show Hidden**: Check to include carriers marked as hidden.
* **CDAnet Only**: Check to only show carriers marked as CDAnet.

Click **Refresh** to update the list.

To update the Carriers list, select the criteria and click **Update Carriers**. This button is for [ITRANS 2.0](itrans20.html) and [Claimstream](claimstream.html) users only. Carriers are updated based on the Electronic ID.

* **Address**: Update carrier addresses if no address is present.
* **Phone**: Update carrier phone number if no phone number is present.
* **Add Missing**: Add any missing CDAnet carriers (e.g., new carriers) based on carrier name and carrier ID. Carriers that share a carrier ID or don't support electronic claims need to be added manually.

Note: Regardless of whether any boxes are checked, the CDAnet information in the bottom half of each carrier is still updated when the Update Carrier tool is run.

Click **Add** to add a new carrier. Click **Combine** to [Combine Carriers](carrierscombine.html).

Double-click on a carrier to view carrier information and CDAnet information.

![](images/canadianCarrier.png)

The Carrier information in the top half is editable by the office.

The information under *CDAnet* is maintained by the CDA.

* This information is updated when running the Update Carriers tool.
* If a server is entered in the Update Server field in [Preferences](preferences.html), the Supported Transaction Types are updated hourly.

The following carriers are supported by ITRANS: <http://www.goitrans.com/itrans-support-carrier-listing/>
 Detailed carrier information can be found on the CDA website: <http://cda-adc.ca/en/services/cdanet/networks_insurance_new/#/>