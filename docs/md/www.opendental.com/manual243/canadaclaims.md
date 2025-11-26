Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Canada Claims

For [Canada](canada.html) users, in the [Account Module](account.html), click **New Claim**, or double-click an existing claim to edit.

![](images/canadaClaim.png)

To send electronic claims, setup the [ITRANS 2.0](itrans20.html) or [Claimstream](claimstream.html) (TELUS) clearinghouse first.

## Edit Claim Window

Buttons and fields in this window match what is found in the Edit [Claim](claimedit.html) window for the U.S. version. Differences are noted below.

**Procedures**: Displays procedures attached to the claim. Up to seven procedures can be included on a claim, per CDA limitations. If sending more than seven procedures, create multiple claims.

**Send**: Send the claim. This button is grayed out if the claim was sent and the carrier returned a transaction reference number.

**Resend**: Click to resend the claim. Can be used even when the Send button is grayed out as noted above. When prompted to select a reason for resending the claim, select either option as the choices do not affect claims in Canada.

**History**: Click to view the history of the last action taken on the claim. See [Canada Etrans Edit](canadaetransedit.html) for details on claim responses.

## Canadian Tab

The Canadian tab contains specific Canadian information.

**Referring Provider**

* CDA Number or Identifier: Canadian Dental Association identifier of the referring provider.
* Reason: Required when sending the referring provider. The reason why the referring doctor chose to refer the work related to this claim.

**Accident Date**: Used to indicate that dental treatment was needed as the result of an accident. If a value is entered, the *Is Accident* field on the printed claim is automatically marked.

**Trans Ref Num**: When a claim is sent electronically, this box is automatically filled with a unique transaction reference number composed of letters and numbers.

**Reverse**: Click to reverse or unsend a claim. Claims can only be reversed on the same day, by carriers that support claim reversal, and when a Transaction Reference Number is generated.

* After reversing a claim, manually update the claim status back to *Unsent*. If needed, successfully reversed claims can be deleted and recreated.
* If a claim needs to be reversed on a date later than the date it was originally adjudicated, the carrier does not support claim reversals, or a transaction reference number was not generated, the claim must be reversed manually by contacting the carrier.

**Materials Forwarded (E-mail, Correspondence, Models, X-rays, Images)**: Indicate the types of supporting documents which have been physically mailed to the insurance carrier. These boxes can be checked/unchecked independently.

**Treatment Required for Ortho**: Only used for [Ortho](orthodontic.html) claims. If checked, the ortho flag is sent.

**Ortho Treatment (Predetermination Only)**: Only for predetermination claims, not regular claims. These fields are only sent electronically; they are not displayed on printed claim forms.

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

**Maxillary Prosthesis**: All information entered here is sent on electronic claims when needed. Only the Initial placement upper is sent on printed claims.

* Initial placement upper: For the upper arch only. Indicate whether the prosthetic work associated with this claim is or is not the first prosthetic, or if there is no prosthetic.
* Initial Date: If initial placement upper is set to No, then this date is required and is the date that the prosthetic was first added to the patient's mouth.
* Prosthesis Material: Describe the prosthetic material used for the initial placement. Required when initial placement upper is set to No.

**Mandibular Prosthesis**: All information entered here is sent on electronic claims when needed. Only the Initial placement lower is sent on printed claims.

* Initial placement lower: For the lower arch only. Indicate whether the prosthetic work associated with this claim is or is not the first prosthetic, or if there is no prosthetic.
* Initial Date: If initial placement lower is set to No, then this date is required and is the date that the prosthetic was first added to the patient's mouth.
* Prosthesis Material: Describes the prosthetic material used for the initial placement. Required when initial placement lower is set to No.

**Extracted Teeth**: This box is empty until something other than *Not a...* is selected in the Maxillary or Mandibular Prosthesis dropdowns. When an option is selected, any extracted teeth with a status of Complete, Existing Other, or Existing Current and a valid procedure date list. This information is sent on all electronic claims, regardless of the Maxillary or Mandibular selections.

**Missing Teeth**: List of the patient's missing teeth. For display only. Change the missing status of teeth from the Chart Module, [Missing/Primary Teeth](missingteeth.html) tab.

## Substitutions

If a carrier substitutes a code, the substitution code is added as a new row in the Edit Claim window and displayed at the end of the procedure list on the response printout. Substitute codes always list lab amounts (usually $0.00). This allows the user to view all details regarding the submitted code as well as the substituted code.

## Preauthorizations

Primary electronic preauthorizations are available for carriers that accept them. On the CDA claim form, *Predetermination only.* displays in the Remarks field.

Open Dental does not support the electronic sending of secondary preauthorizations (COB predeterminations).

If a patient has dual insurances from the same carrier (i.e., blue-on-blue), the carrier may coordinate secondary coverage estimates automatically and send two responses to Open Dental. These display one after the other.

## Electronic Attachments

Some carriers accept electronic attachments. See [Canada Attachments](canadaattachments.html) for details.

To add a note to a claim, use the Remarks field in the [Edit Claim - General Tab](claimtabgeneral.html) for printed claims, or add a text file as an attachment for electronic claims.

## Secondary Claims

If a patient has primary and secondary insurance:

* It is best practice to first create the primary claim and send it or print it before worrying about the secondary.
* Secondary claims are sent electronically and automatically if the primary claim was sent electronically and an EOB response was received, and the secondary carrier accepts secondary (COB) claims.
  + If the primary insurance pays in full, a secondary claim is not sent.
  + If the secondary claim is created before the primary claim is sent, the secondary claim must be sent or printed manually.
  + In other cases, secondary claims may need to be manually created and sent by physical mail.
  + To manually create a secondary claim, in the Account Module, select procedures, click the New Claim dropdown, and select Secondary.
* The secondary claim response displays after the primary claim's EOB has been closed.

## Students

If insurance is requiring the student school and status, enter information in the [Edit Patient Information](patientedit.html) window under Name of School and Eligibility Excep. Code.

## Electronic Claims and Sunlife

When sending electronic claims, both the treating dentist and billing dentist are submitted. If sending to Sunlife, the treating dentist receives the payment instead of the billing dentist. This is a decision made by Sunlife.