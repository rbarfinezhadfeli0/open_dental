Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Claim

Create, send, and receive claims for individual patients from the Edit Claim window.

In the [Account Module](account.html) toolbar, click **New Claim**.

![](images/claimPayFinalize.png)

Alternatively:

* Double-click an existing claim to edit.
* Select a [Claim Type](claimtypes.html) from the **New Claim** dropdown menu.

Note:

* Clicking **New Claim**, without selecting any procedures, automatically creates a claim for all procedures not sent to insurance. If there is additional dental coverage, secondary claims are automatically created with a status of *Hold until Pri Received* and tertiary claims are created with a status of *Unsent*. If the patient has more than three dental insurance plans or a medical plan, these claims must be created manually.
* For more control, highlight specific procedures, then click **New Claim**, or click the dropdown to create a Primary, Secondary, Medical, or Other claim type.
* If *Require claims to have no missing data* is enabled in Preferences, a primary claim cannot be created when there is missing data on procedures (e.g., tooth number). There is a warning when attempting to create a claim indicating the missing data.

![](images/youtubeLogo.png) See our Webinar: [Creating Claims](https://youtu.be/Zbdp3n4gne0)

Once created, the claim is displayed in the patient's account under the procedures.
![](images/claimNew.png)

To send, print, edit, or delete a claim, the logged-on user must have the correct [Security Permissions](permissions.html). This window is read-only if the logged-on user doesn't have access to the clinic on the claim or the clinic on the claim is hidden.

Note:

* When a patient has unearned income and the preference,  *Prompt user to allocate unearned income after creating a claim*, is checked, the user is prompted to [Allocate Unearned Income](unearnedallocate.html) when a claim is created.
* Editing a claim with supplemental claim transfers created by the [Income Transfer Manager](incometransfermanager.html) deletes all the transfer entries on the claim. See [Supplemental Insurance Payments](claimpaymentsupplemental.html) for additional information.
* Edits to the claim payment or write-off are logged in the audit trail.

## Claim Status, Claim Type, and Dates

![](images/claimStatusDate.png)

**Claim Status**: Every claim has a status.

* **Unsent**: Claim has been created, but not sent.
* **Hold until Pri received**: For secondary claims that should not be sent until the primary claim is received.
* **Waiting to Send**: Claim is ready to be printed or sent electronically. See [Send Claims](claimsend.html).
* **Probably Sent**: Claim has been printed or sent electronically, but the process has not yet been verified. As soon as it is verified the claim has been sent or printed, change the status.
* **Sent - Verified**: Claim has been sent or printed. Shows on the [Outstanding Insurance Claims Report](reportoutins.html), so it can be tracked to ensure timely payment.
* **Received**: Claim has been received from insurance, either with a payment or a denial. Usually, the claim is marked received automatically when clicking one of the Enter Payment buttons at the upper right.
* **Hold for In Process**: One or more procedures on the claim are set to *Complete (In Process)*. This status cannot be selected manually. Once all procedures in the group are set complete, the claim status is automatically updated to *Waiting to Send*. This claim status cannot be changed manually. See [Procedure over Multiple Appointments](procsmultipleappts.html) for additional information.

When a claim is created using the **New Claim** button for a patient with dual or triple coverage, the primary, secondary, and tertiary claims are automatically created. Primary claims have a status of *Waiting to Send*. Secondary claims have a status of *Hold until Pri received*. Tertiary claims have a status of *Unsent*. Once the primary claim is received, send the secondary claim. Send the tertiary claim after receiving the secondary claim. Claims that have not been marked sent can be tracked using the [Claims Not Sent Report](reportclaimsnotsent.html).

Note:

* For information about secondary claims, see [Secondary Insurance](inssecondary.html).
* Claim text color is dependent on settings in [Definitions: Account Colors](definitionsaccountcolors.html).
* Printing a claim with a status of *Unsent* or *Waiting to Send* automatically changes its status to *Sent - Verified*.

**Claim Type**: Set automatically when creating a claim. It is there for reference, but cannot be changed, because it affects so many other fields. See [Claim Types](claimtypes.html).

**Date of Service**: Defaults to the date of the last procedure listed on the claim.

**Date Orig Sent**: The date the claim was originally sent.

**Date Sent**: Populates with the date the claim was created, and updates when the claim is sent. When a claim is resent, the label changes to Date Resent and the date is updated.

**Date Received**: The date the claim was received and processed.

**Resend**: Resend a claim electronically. There are two options:

* **The claim has not been accepted yet and I need to resend it**: Claim Correction Type ([Edit Claim - Misc Tab](claimtabmisc.html)) is set to *Original* and Date Resent is set to today's date.
* **The claim was accepted and I need to replace it with updated information**: Correction Type is set to *Replacement*.

Click **Send** after selecting an option to finish resending claim.

Note: The Original Reference Num ([Edit Claim - Misc Tab](claimtabmisc.html)) is required before a claim with a Correction Type of *Replacement* can be sent.

## Claim and Provider Information

![](images/claimFormTypeProviders.png)

**Clinic**: Read-only. This matches the clinic attached to procedures when the claim was created.

**Med/Dent**: There are three options; Dental, Medical, and Institutional. The default selection is based on the Claim Type. This setting is used for e-claims and determines whether the e-claim format is Dental, Medical, or Institutional.

**Claim Form**: The [Claim Form](claimforms.html) used when printing the claim. This does not affect what is sent electronically. For information on how a printed 1500 claim form is populated, see [HCFA 1500 Claim Form](claimform1500.html). For information on how printed ADA claim forms are populated, see [ADA Claim Forms](claimformADA2012.html).

**Billing Provider**: Billing provider who is sent or printed on the claim. The default billing provider follows the logic below.

* If the treating provider has a Claim Billing Prov Override, that provider is used ([Provider](providerseditwindow.html)).
* Otherwise, for clinics, if the procedure is assigned to a clinic, the Default Insurance Billing Dentist for that clinic is used ([Clinic List](clinicsetup.html)).
* Otherwise, the Default Insurance Billing Dentist for the practice is used ([Practice Setup](practice.html)).

Different providers can be assigned to each procedure. When providers are restricted to specific clinics ([User Edit](securityusers.html)), only providers available for the claim's clinic are options.

**Treating Provider**: Treating provider who is sent or printed on the claim.

* By default, is the last provider in the list of selected procedures who is not flagged as a secondary provider. If there are only providers flagged as a secondary provider, then the patient's primary provider is used. Some claim formats require a Treating Provider. Different providers can still be assigned to each procedure. When providers are restricted to specific Clinics, only providers available for the claim's Clinic are options.

**Predeterm Benefits**: If a [Preauthorization](preauth.html) has previously been sent, enter reference number for the preauthorization received from insurance.

* This may be *Claim Identifier (CLM01)* value from the [Edit Claim - Misc Tab](claimtabmisc.html) of the Preauthorization. Verify with the carrier what value/identifier to use for the preauthorization.
* This number shows on e-claims and printed claims (PreAuthString).
* On the Claim Misc tab, there is also a *Prior Authorization (rare)* field.

## Insurance Plans

![](images/claimInsurancePlans.png)

**Insurance Plan**: Set when creating the claim and cannot be changed. If the claim is attached to the wrong insurance plan, delete the claim and recreate it.

**Relationship**: The patient's relationship to the plan's subscriber, based on the value set in the patient's Edit Insurance Plan Window.

**Other Coverage**: This automatically populates for primary, secondary, and tertiary dental claims.

* Primary dental claims populate the secondary plan information.
* Secondary claims populate the secondary plan information.
* Tertiary claims populate the secondary plan information.

Click **Change** to select a different plan or display coverage on claims for other plan types (i.e., Medical or Other). Click **None** to remove this information from the claim.

## Enter Payment

![](images/claimEnterPaymentSplitClaim.png)

**Enter Payment**:

* **As Total**: Receive a claim as a total payment amount. (Not available with PPO insurance plans). See [Receive Claim](claimreceive.html) for additional details.
* **By Procedure** (recommended): Receive a claim by itemizing the payment by procedure. (Not available with Capitation insurance plans). See Receive Claim for additional details.
* **Supplemental**: Enter additional payments on procedures already marked received. See [Supplemental Insurance Payments](claimpaymentsupplemental.html).
* **Split Claim**: Split the procedures on the claim into two separate claims. See [Split Claim](claimpaymentsplit.html).

## Pending Payment

![](images/claimPayPending.png)

See [Enter Pending Supplemental Insurance Overpayments/Underpayments](claimpendingsupplemental.html).

## Procedures and Estimates

![](images/claimProcedures.png)

**Procedures**: The procedures attached to this claim, along with billed fees and insurance estimate information. Double-click a procedure to see details. See [Receive Claim](claimreceive.html) for a description of each column.

* **Add adjustment**: Right-click on a procedure to create an adjustment. The preference, *Allow procedure adjustments from claim window*, must be enabled.
* **#**: The number of the procedure as ordered in the claim. Procedures are sorted in the following order:
  1. Priority (highest to lowest based on the order of priority options). Does not appear on the claim. View or edit from the [Edit Procedure](procedureedit.html) window.
  2. Tooth number (no tooth number first, then lowest to highest)
  3. Date (oldest to newest)
  If multiple codes have the same priority, tooth number, and date then the order is random. It may be in the order charted but it may not. The order could even change.
* **Date**: Service date of procedure.
* **Prov**: Provider attached to the [Claim Procedures ( claimprocs )](claimprocedure.html). This is normally the treating provider.
* **Code**: Procedure code.
* **Tth**: Tooth number for associated procedure.
* **Description**: Procedure description.
* **Fee**: Procedure Fee billed to the patient.
* **Billed to Ins**: Fee amount billed to insurance. This may differ from Fee.
* **Deduct**: Deductible amount applied to the procedure.
* **Ins Est**: Estimated insurance payment.
* **Write-off**: Amount of write-off for procedure.
* **Pat Resp**: Only shows when *Show Patient Responsibility column in Edit Claim/Payment windows* is enabled in Preferences. Displays the patient responsibility for a line item once an insurance payment is made (Fee - Ins Pay - Write-off = Pat Resp). This column does not consider numbers in the Ins Est field. Supplemental payments may show a negative patient responsibility as the fee is not duplicated on supplemental claimprocs.
* **Status**: Current claim status of the claim procedure, e.g.,: Recd (Received), Supp (Supplemental), etc.
* **Pmt**: Payment. An "X" indicates a finalized payment has been entered for the procedure.
* **Pay Tracking**: Only shows when *Show Payment Tracking column in the Edit Claim/Payment windows* is enabled in Preferences. Claim Payment Tracking status from [Claim Procedures ( claimprocs )](claimprocedure.html).
* **Remarks**: Remarks from EOB.

**Recalculate Estimates**: Recalculate benefit estimates. For example:

* If procedures are treatment planned with the wrong percentages and a claim is created before fixing the percentages, estimates can be recalculated instead of deleting the claim.
* If a fee schedule was originally incorrect, recalculate write-offs.
* The fee billed updates on claims that have not been sent or received.

Note: An orange exclamation mark appears next to the button when recalculation of claim estimates is suggested.

Medical claims: The Ins Est column can be misleading if the patient has one dental insurance plan listed first and one [Medical Insurance](medicalins.html) plan listed second. In this particular situation, the Ins Est column always indicates 0, because it is showing the dental insurance estimates. To avoid this issue, ensure that the medical plan is listed first in the Family Module.

There are limits to the number of procedures that are sent with a claim.

* Dental and medical e-claims are limited to 50 procedures. Claims with more than 50 procedures are blocked from sending.
* Institutional e-claims are limited to 999 procedures. A separate claim must be created for additional procedures.
* On printed claims, only as many procedures as can be printed on a single page (the claim form) can be sent. The printed ADA claim form is limited to 10 procedures.

## Finalize Insurance Payments and Additional Payment Information

![](images/finalizeInsPay.png)

**View ERA**: Access [ERAs](claimsERA835.html) associated with the claim. ERAs can only be accessed when claim identifiers and service dates match.

**View EOB**: View scanned EOBs for attached insurance payments. If there are more than one a selection list appears.

**Batch**: Attach received claims to a batch insurance payment. See [Finalize Insurance Payment](claimpayfinalize.html).

**This Claim Only**: Finalize payment by attaching only the current received claim to an insurance payment.

**Reasons Underpaid**: Enter details if a claim does not pay as much as expected, enter details about why. This information shows on the patient's statement so they know why they have to pay more for their procedures.

## Tabs

![](images/claimTabs.png)

**General Tab**: Enter information about prosthetics, orthodontic work, and claim referrals. See [Edit Claim - General Tab](claimtabgeneral.html).

**Attachments Tab**: Enter information about attached images and documents. If needed, attachment IDs should be added to the claim before sending claims electronically. See [Edit Claim - Attachments Tab](claimtabattach.html).

**Misc Tab**: Enter information about Denti-Cal and other miscellaneous fields. See [Edit Claim - Misc Tab](claimtabmisc.html).

**Medical Tab**: Enter information printed on medical claim forms, including the UB-04, which is usually for institutional claims. See [Edit Claim - Medical Tab](claimmedical.html).

**Status History Tab**: Record custom claim tracking data. See [Edit Claim - Status History Tab](claimtabstatus.html).

## Print, Send, or Save Claim

![](images/claimSaveSend.png)

**Delete**: Delete a claim.

**Label**: Print a label for the claim.

**Preview**: Preview the claim as it would look on the printed claim form.

**Print**: Print the claim.

Note: Printing a claim automatically changes its status to sent.

**Send**: Send the claim electronically.

**History**: View electronic claim message. Displays as raw data (X12).

**Save**: Exit the window and keep changes or create the claim.