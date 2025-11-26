Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Colorado Medicaid E-Claims

Colorado Medicaid is an e-claims direct carrier.

In [Clearinghouses](clearinghouses.html), click **Add**.

![](images/clearinghouseColoradoMedicaid.png)

The Colorado Medicaid clearinghouse must be manually added to Open Dental. Website: <https://www.colorado.gov/hcpf/provider-resources>

## Clearinghouse Setup

Set up the clearinghouse as follows:

* **Description**: Enter *CO Medicaid*.
* **Sender ID Qualifier (ISA05)**: Enter *ZZ*.
* Select **The information below identifies the sender**.
* **Tax ID Number**: Enter the Trading Partner ID in the Tax ID Number field. Colorado Medicaid assigns the provider a Trading Partner ID once the provider is enrolled in Colorado Medicaid EDI. This ID can be found in the Colorado Medicaid web portal.
* **Name**: Enter the appropriate name.
* **Telephone Number**: Enter the appropriate phone number.
* **Receiver ID Qualifier**: Enter *ZZ*.
* **Clearinghouse ID**: Enter *100000*.
* **GS03**: Enter *77016*.
* **Test or Production**: Enter *P*.
* **Login ID / Password**: Enter the Colorado Medicaid credentials.
* **Claim Export Path**: Typically **C:\MdcdClaims**.
* **Report Path**: Typically **C:\MdcdClaims**.
* **Format**: Select *x837D\_5010\_dental*.

## Insurance and Claims

For all Colorado Medicaid insurance plans, set the Filing Code to *Medicaid* on the [Insurance Plan](insplan.html).

For all Colorado Medicaid claims that are submitted electronically, the carrier associated with the insurance plan must have a carrier name of *CO Medicaid*.

Once the claim is sent from Open Dental, a new file is generated in the clearinghouse export folder. The claim has not been sent to Colorado Medicaid at this point.

To finish sending, users must manually send the file over dial-up modem. The phone number to send to, as well as the login information for the dial-up session, can be found on the welcome letter sent to the provider from Colorado Medicaid.