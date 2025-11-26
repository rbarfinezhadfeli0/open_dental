Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Washington Medicaid E-Claims

Washington Medicaid is an E-Claims Direct Carrier.

In [Clearinghouses](clearinghouses.html), click Add.

![](images/eclaimsWashMedicaid.png)

* Washington Medicaid web portal: [ProviderOne](https://www.waproviderone.org/ecams/jsp/common/pgLogin.jsp)
* Washington Medicaid website: <https://www.hca.wa.gov/billers-providers-partners>.

Other Resources:

* Dental Provider Guide: <https://www.hca.wa.gov/billers-providers-partners/programs-and-services/dental-services>
* HIPAA/EDI web page: <https://www.hca.wa.gov/billers-providers-partners/prior-authorization-claims-and-billing/hipaa-electronic-data-interchange-edi>

## Setup

The Colorado Medicaid clearinghouse must be manually added to Open Dental. Set up the clearinghouse as follows:

* **Description**: Enter *WA State HCA*.
* **Authorization Information**: Enter *00*.
* **Sender ID Qualifier**: Enter *ZZ*.
* **Tax ID Number**: 9 digits. Find the Tax ID Number in the ProviderOne portal (a 7 digit number), then add two trailing zeros at the end.
* **Name**: Enter the practice name.
* **Telephone Number**: Enter the practice phone number.
* **Receiver ID Qualifier**: Enter *ZZ*.
* **Clearinghouse ID**: Enter *77045*.
* **GS03**: Enter *77045*.
* **Test or Production**: Enter *P*.
* **Claim Export Path**: Typically **C:\Washington Medicaid\**.
* **Format**: Select *x837D\_5010\_dental*.
* **Payors**: Enter *77045*.

In the [Carriers](carriers.html) list, create a carrier for WA State HCA.

![](images/eclaimsWashMedicaidCarrier.png)

Ensure all Washington Medicaid insurance plans use the WA State HCA carrier, and the insurance filing code *Medicaid* ([Insurance Plan](insplan.html)).

## Claims

To send claims:

1. In the [Send Claims](claimsend.html) window, select the claims for Washington Medicaid. Click the *Send E-Claims* dropdown and select *Washington Medicaid* from the list.
2. In the Windows file explorer, go to **C:\Washington Medicaid\**. Change the extensions on the newest files from TXT to DAT.
3. Log into the ProviderOne portal.
   * Find the Batch Claims Submission (837) link.
   * Upload each new DAT file created.
4. After 15 minutes, the files should register in ProviderOne.
   * Go to the Retrieve HIPAA Batch Responses link. Select 837D from the Transaction Type dropdown menu.
   * Change the first filter to Upload/Sent Date and type today's date in the box to the right.
   * Click Go. One line displays for each file uploaded.
   * For each file, click the Custom Report Response File link to view any errors in the claim format.
5. The next day, use the Claim Inquiry link to look up each claim and verify that it will be paid.