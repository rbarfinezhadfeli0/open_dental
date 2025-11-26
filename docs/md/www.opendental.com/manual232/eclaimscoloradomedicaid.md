Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Colorado Medicaid E-Claims

In [Clearinghouses](clearinghouses.html), click **Add**.

![](images/clearinghouseColoradoMedicaid.png)

Colorado Medicaid is an e-claims direct carrier. It must be manually added to Open Dental. Website: <https://www.colorado.gov/hcpf/provider-resources>

## Setup

Set up the clearinghouse using the above screenshot as a reference.

**Tax ID Number:** Enter the Trading Partner ID in the Tax ID Number field. Colorado Medicaid assigns the provider a Trading Partner ID once the provider is enrolled in Colorado Medicaid EDI. This ID can be found in the Colorado Medicaid web portal.

## Insurance and Claims

For all Colorado Medicaid insurance plans, set the Filing Code to *Medicaid* on the [Insurance Plan](insplan.html).

For all Colorado Medicaid claims that are submitted electronically, the carrier associated with the insurance plan must have a carrier name of *CO Medicaid*.

Once the claim is sent from Open Dental, a new file is generated in the clearinghouse export folder. The claim has not been sent to Colorado Medicaid at this point.

To finish sending, users must manually send the file over dial-up modem. The phone number to send to, as well as the login information for the dial-up session, can be found on the welcome letter sent to the provider from Colorado Medicaid.