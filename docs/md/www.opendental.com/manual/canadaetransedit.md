Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Canada Etrans Edit

For Canada users, claim history and claim responses can be viewed and saved as needed.

In [Canada Claims](canadaclaims.html), click **History**.

![](images/canadaEtransEdit.png)

The Etrans Edit window displays the history of the last action taken on a claim. A history of Etrans for previous actions taken can be found in [Canada Claim History and ROT](canadaclaimsend.html), History section.

**Message Text Sent**: Displays the message sent electronically to the carrier.

**Message Text Received**: Displays the message received from the carrier.

**Preview**: Click to generate a new printable document containing the response from the carrier.

Note: Previews generated manually may not contain historically accurate data.

## Carrier Response

After a claim is received, a carrier sends back an EOB, Rejection, or Claim Acknowledgment.

![](images/canadaResponse.png)

**Write Amounts to Claim**: Enter the insurance benefit amounts from the claim response to the procedure estimates on the claim. Only usable for claims that receive an Explanation of Benefits.

* If the Clearinghouse Setup is set to *Download EOBs and Auto Receive*, the amounts are also written and the insurance insurance payments and claim is marked as received.

**Print Patient Copy / Print Dentist Copy**: Prints the currently displayed claim response and appends the title with Patient Copy or Dentist Copy, respectively.

## Claim Responses and Payments

When a claim is sent electronically, a response is generally received immediately. In some cases, responses may take a few moments to be returned. There are are three possible claim responses:

* **Explanation of Benefits (EOB)**:
  + Claim EOB: Insurance paid amounts are automatically entered on the Edit Claim window, though users still need to finalize the payment. See [Finalize Insurance Payment](claimpayfinalize.html).
  + [Preauthorization](preauth.html) EOB: Amounts are automatically entered as estimates. Automatic insurance paid amounts can be turned on/off in clearinghouse setup.
  + Patient balances update according to the EOB when the clearinghouse option is set to either *Download EOBs, Do Not Auto Receive* or *Download EOBs and Auto Receive*.
* **Claim Acknowledgment (Ack)**: This is not the same as an EOB. This indicates that the claim has been sent successfully, but the carrier was unable to provide a coverage breakdown in real-time.
  + Software vendors have no control over whether an office receives a claim acknowledgment or EOB.
  + The carrier may send their follow-up response by mail or electronically as a mailbox item (Outstanding Transaction), as indicated by the verbiage listed on the Claim Acknowledgment ("...may be sent ...electronically..." or "..response will NOT be sent back to the dentist... electronically."). See, [Canada Claim History and ROT](canadaclaimsend.html).
* **Rejection**:
  + Verify the patient, subscriber, and plan information, then try again. If the claim is rejected again, contact the carrier for further guidance.

A response may come back in French for a subscriber.

1. If the carrier has the subscriber's preferred language set to *French* on their end, then we honor the carrier's information and display the response in French.
2. If the subscribers's preferred language is set to *fr* in the Edit Patient Information window, then we display the response in French, even if the preferred language is English for the carrier.

   Note: In order to display responses in French, a custom language of *fr* must be added in [Language Definitions](patientlanguages.html). Using *French* does not work.
3. The disposition and notes on a response come directly from the carrier. Sometimes this information displays in English, sometimes French, and sometimes both. There are no settings in Open Dental to change this.

Claims sent as non-assignment can be automatically closed with No Payment to reduce the number of steps for the office. Enable the preference, *Auto receive claims with no assignment of benefits*. Rejected claims are not automatically closed and need to be handled by the user.

Also see [Canada Insurance Plans](canadainsplan.html).

## Automatic Printing

ITRANS and Claimstream require automatically printing patient copies of certain forms in particular circumstances. Dentist copies are never automatically printed. A single patient copy of a response from ITRANS or Claimstream automatically prints immediately in the following situations:

* After a claim is sent, if the response is not a rejection notice.
* After a claim reversal request.
* After a request for outstanding transactions (each item prints separately).
* After a payment reconciliation request.

A claim form prints automatically in these scenarios:

* When the carrier sends a response that manual printing is need (etrans AckCode M).
* When the secondary carrier does not support COB claim transactions.

Responses should be printed or saved immediately after being received. If actions are taken on the claim after receiving the response (such as deleting the claim, changing patient information, updating carrier information, etc), the preview may contain inaccurate information.

Some offices find the extra printing less useful than others. There are a few options if users do not want to automatically print copies:

1. On each computer where claims are typically processed, set the default claim printer to a PDF printer.
2. In File, Print, Claims, select the Prompt option. Then the user is prompted before printing begins and have the option to cancel the print job. See [Printer Setup](printersetup.html).

## Automatic Saving of Claim Responses

To automatically save a copy of the claim response to the Imaging Module, set an Image Category with the Usage type of *Claim Responses* in [Definitions: Image Categories](definitionsimagecat.html).