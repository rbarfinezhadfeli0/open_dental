Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Canada Claims

For [Canada](canada.html) users, in the [Account Module](account.html), click **New Claim**, or double-click an existing claim to edit.

![](images/canadaClaim.png)

To send electronic claims, setup the [ITRANS 2.0](itrans20.html) or [Claimstream](claimstream.html) (TELUS) clearinghouse first.

## Canadian Tab

The Canadian tab contains specific Canadian information.

**Referring Provider**

* CDA Number or Identifier: Canadian Dental Association identifier of the referring provider.
* Reason: The reason why the referring doctor chose to refer the work related to this claim.

**Accident Date**: Used to indicate that dental treatment was needed as the result of an accident. If a value is entered, the *Is Accident* field on the printed claim will automatically be marked.

**Trans Ref Num**: When a claim is sent electronically, this box is automatically filled with a unique transaction reference number composed of letters and numbers. To reverse or unsend a claim, click Reverse. This button is only enabled when the claim has already been sent earlier that same day (determined by the existence of the Trans Ref Num).

Note: After reversing a claim, manually update the claim status back to *Unsent*. If needed, successfully reversed claims can be deleted and recreated.

**Materials Forwarded (email, correspondence, models, X-rays, images)**: Indicate the types of supporting documents which have been physically mailed to the insurance carrier. These boxes can be checked/unchecked independently.

**Treatment Required for Ortho**: Only used for [Ortho](orthodontic.html) claims. If checked, the ortho flag is sent.

**Ortho Treatment (Predetermination Only)**: Only for predetermination claims, not regular claims.

* Estimated Treatment Start Date: The treatment plan date for the first appointment regarding this orthodontic treatment.
* Initial Payment: The amount the patient will pay out of pocket at the first appointment.
* Expected Payment Cycle (Months): Frequency of payments related to the orthodontic treatment. Accepted numbers are 1-4.
  + 1 - Once a month.
  + 2 - Every two months.
  + 3 - Every three months.
  + 4 - Every four months.
* Treatment Duration (Months): The number of months it will take to entirely finish the orthodontic treatment.
* Number of Payments Anticipated: Number of total expected patient payments for the orthodontic treatment.
* Anticipated Pay Amount: The expected periodic payment amount.

**Maxillary Prosthesis**

* Initial placement upper: For the upper arch only. Indicate whether the prosthetic work associated with this claim is or is not the first prosthetic, or if there is no prosthetic.
* Initial Date: If initial placement upper is set to No, then this date is required and is the date that the prosthetic was first added to the patient's mouth.
* Prosthesis Material: Describe the prosthetic material used for the initial placement. Required when initial placement upper is set to No.

**Mandibular Prosthesis**

* Initial placement lower: For the lower arch only. Indicate whether the prosthetic work associated with this claim is or is not the first prosthetic, or if there is no prosthetic.
* Initial Date: If initial placement lower is set to No, then this date is required and is the date that the prosthetic was first added to the patient's mouth.
* Prosthesis Material: Describes the prosthetic material used for the initial placement. Required when initial placement lower is set to No.

**Extracted Teeth**: List of the patient's extracted teeth. For display only. Change the extraction status of teeth in the [Chart Module](chart.html).

**Missing Teeth**: List of the patient's missing teeth. For display only. Change the missing status of teeth from the Chart Module, [Missing/Primary Teeth](missingteeth.html) tab.

## Procedures

Up to seven procedures can be included on a claim, per CDA limitations. If sending more than seven procedures, create multiple claims.

## Claim Responses and Payments

When a claim is sent electronically, a response is generally received immediately. In some cases, responses may take a few moments to be returned. There are are three possible claim responses:

* **Explanation of Benefits (EOB)**:
  + Claim EOB: Insurance paid amounts will automatically be entered on the Edit Claim window, though users will still need to finalize the payment. See [Finalize Insurance Payment](claimpayfinalize.html).
  + [Preauthorization](preauth.html) EOB: Amounts will automatically be entered as estimates. Automatic insurance paid amounts can be turned on/off in clearinghouse setup.
  + Patient balances will update according to the EOB when the clearinghouse option is set to either *Download EOBs, Do Not Auto Receive* or *Download EOBs and Auto Receive*.
* **Claim Acknowledgment (Ack)**: This is not the same as an EOB. This indicates that the claim has been sent successfully, but the carrier was unable to provide a coverage breakdown in real-time.
  + Software vendors have no control over whether an office receives a claim acknowledgment or EOB.
  + The carrier may send their follow-up response by mail or electronically as a mailbox item (Outstanding Transaction), as indicated by the verbiage listed on the Claim Acknowledgment ("...may be sent ...electronically..." or "..response will NOT be sent back to the dentist... electronically."). See, [Send Canadian Claims and Retrieve Reports](canadaclaimsend.html).
* **Rejection**:
  + Verify the patient, subscriber, and plan information, then try again. If the claim is rejected again, contact the carrier for further guidance.

A response may come back in French for a subscriber.

1. If the carrier has the subscriber's preferred language set to *French* on their end, then we honor the carrier's information and will display the response in French.
2. If the subscribers's preferred language is set to *fr* in the Edit Patient Information window, then we display the response in French, even if the preferred language is English for the carrier.

   Note: In order to display responses in French, a custom language of *fr* must be added in [Language Definitions](patientlanguages.html). Using *French* will not work.
3. The disposition and notes on a response come directly from the carrier. Sometimes this information displays in English, sometimes French, and sometimes both. There are no settings in Open Dental to change this.

If a claim needs to be reversed on a date later than the date it was originally adjudicated, the carrier does not support claim reversals, or a transaction reference number was not generated, the claim must be reversed manually by contacting the carrier.

Claims sent as non-assignment can be automatically closed with No Payment to reduce the number of steps for the office. Enable the preference, *Auto receive claims with no assignment of benefits*. Rejected claims will not be automatically closed and will need to be handled by the user.

Also see [Canada Insurance Plans](canadainsplan.html).

## Substitutions

If a carrier substitutes a code, the substitution code is added as a new row in the Edit Claim window and displayed at the end of the procedure list on the response printout. Substitute codes always list lab amounts (usually $0.00). This allows the user to view all details regarding the submitted code as well as the substituted code.

## Electronic Claims and Sunlife

When sending electronic claims, both the treating dentist and billing dentist are submitted. If using the Canadian insurance carrier Sunlife, the treating dentist will receive the payment instead of the billing dentist. This is a decision made by Sunlife.

## Reversals

Claims can sometimes be reversed on the day they are sent. Claims can only be reversed on the same day, by carriers that support claim reversal, and when a Transaction Reference Number is generated (see Canadian Tab above).

## Automatic Printing

ITRANS and Claimstream require automatically printing patient copies of certain forms in particular circumstances. Dentist copies are never automatically printed. A single patient copy of a response from ITRANS or Claimstream automatically prints immediately in the following situations:

* After a claim is sent, if the response is not a rejection notice.
* After a claim reversal request.
* After a request for outstanding transactions (each item will print separately).
* After a payment reconciliation request.

A claim form prints automatically in these scenarios:

* When the carrier sends a response that manual printing is need (etrans AckCode M).
* When the secondary carrier does not support COB claim transactions.

Responses should be printed or saved immediately after being received. If actions are taken on the claim after receiving the response (such as deleting the claim, changing patient information, updating carrier information, etc), the preview may contain inaccurate information.

Some offices find the extra printing less useful than others. There are a few options if users do not want to automatically print copies:

1. On each computer where claims are typically processed, set the default claim printer to a PDF printer.
2. In File, Print, Claims, select the Prompt option. Then the user will be prompted before printing begins and have the option to cancel the print job. See [Printer Setup](printersetup.html).

## Automatic Saving of Claim Responses

To automatically save a copy of the claim response to the Imaging Module, set an Image Category with the Usage type of *Claim Responses* in [Definitions: Image Categories](definitionsimagecat.html).

## Secondary Claims

If a patient has primary and secondary insurance:

* It is best practice to first create the primary claim and send it or print it before worrying about the secondary.
* Secondary claims are sent electronically and automatically if the primary claim was sent electronically and an EOB response was received, and the secondary carrier accepts secondary (COB) claims.
  + In other cases, secondary claims may need to be manually created and sent by physical mail. Select the procedures, click the dropdown next to New Claim, and click Secondary.
* The secondary claim response displays after the primary claim's EOB has been closed.

## Preauthorizations

Primary electronic preauthorizations are available for carriers that accept them. On the CDA claim form, *Predetermination only.* will display in the Remarks field.

Open Dental does not support the electronic sending of secondary preauthorizations (COB predeterminations).

If a patient has dual insurances from the same carrier (i.e., blue-on-blue), the carrier may coordinate secondary coverage estimates automatically and send two responses to Open Dental. These will display one after the other.

## Electronic Attachments

Some carriers accept electronic attachments. See [Canada Attachments](canadaattachments.html) for details.

## Troubleshooting

If insurance requires student school and status, enter it on the [Edit Patient Information](patientedit.html) under Name of School and Eligibility Excep. Code.