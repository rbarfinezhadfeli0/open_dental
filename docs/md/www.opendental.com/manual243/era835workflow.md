Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

ERA Workflow

See [ERAs](claimsera835.html).

Electronic Remittance Advice (ERA) can be processed manually, automatically, and semi-automatically. Below are the steps for inital set up to start receiving ERAs and how process them.

## Initial Setup Requirements

To start using ERAs, offices must sign up for ERAs with their clearinghouse and participating insurance carriers.

* Automatic download of ERAs is supported through [DentalXChange ClaimConnect E-Claims](eclaimsclaimconnect.html), [Denti-Cal](dentical.html), and [Electronic Dental Services](eclaimseds.html).
* Not all insurance carriers or clearinghouses offer ERAs, or the ability to automatically download. If automatic downloads are not available, manually download ERAs following the steps found on [ERA Troubleshooting](claimsera835troubleshooting.html).

Some setup is needed in Open Dental to enable ERAs. If a clearinghouse is not set up in in Open Dental, see [Clearinghouse Setup](clearinghouses.html).

1. Ensure the [Open Dental Service](opendentalservice.html) is installed and running on the server.
2. In Clearinghouse Setup, check *Receive Reports by Service*
3. In Clearinghouse Setup, double-click on the clearinghouse. Ensure *Download ERAs* is selected and that there is a designated report path. (e.g., C:\ClaimConnect\Report\).
4. Ensure necessary users have [Permissions](permissions.html) for *Insurance Payment Create*.
5. In the [Send Claims](claimsend.html) window, click *Get Reports*, select the clearinghouse, then check for a successful connection to the clearinghouse server.
6. (Optional) Enable *ERA Automation* (automatic processing) in [Preferences](preferences.html).

Once this initial setup has been completed, the office is ready to begin receiving and processing ERAs. Proceed to one of the sections below to process ERAs.

## Manually Processing ERAs

If ERA Automation is set to *Review All* in Preferences, all ERAs must be processed manually:

1. From the Manage Module, click **[ERAs](claimsera835.html)**
2. Verify the date range is correct. Enter any criteria to filter the list.
![](images/eraFlowEOBWindow.png)3. Double-click an ERA to see the [ERA - Electronic EOB](era.html) (e.g., attached claims and payments).
![](images/eraFlowClaims.png)4. Double-click on a claim to process payment.
5. Verify the amounts being entered are correct.
![](images/eraFlowVerifyPayment.png)6. Click **Save** to mark the claim as *Received*
7. If multiple claims are included on the ERA, repeat steps 4-6 as needed for any remaining claims.
8. Once all claims in the ERA have been marked as *Received*, click **Finalize Payment**. See Finalize Payment on [Process ERA](eraprocess.html).
![](images/eraFlowFinalizePayment.png)

Note: If a claim payment is missing the X in the Recd column, continue with the steps below to detach the claim and finalize the payment outside the ERA window.

## Detaching a Claim

If a claim cannot be processed in the ERA window, the claim can be detached and payment information entered manually.

1. Select the problem claim from the Claims Paid grid.
2. Click **Detach Claim**. Once detached *N/A* appears in the Recd column for the selected claim.
![](images/eraFlowDetach.png)3. Right-click on the detached claim; Select **Go to Account**.
4. From the Account Module, enter payment details and receive the claim as normal. See: [Receive Claim](claimreceive.html).
5. Repeat steps 1-4 as needed for any other claims that need to be detached from the ERA.
6. After all claims have been received on the ERA (Recd column marked *X*) or detached from the ERA (Recd column marked *N/A*) and received through the account module, finalize the payment as batch outside of the ERA window. See: [Batch Insurance Payment](claimpaymentbatch.html).

Note: Once all claim payments have been processed or detached, and all claims (including $0 payments) have been attached to the batch check, the status of the ERA is updated to *Finalized\**. The asterisk (\*) indicates an ERA with detached claims.

## Semi-Automatic ERA Processing

If ERA Automation is set to *Semi-automatic* in Preferences, users can process ERAs with a single click in the ERA window:

1. In the ERAs window, double-click on an ERA to see the attached claims and payments.
2. Click **Auto Process.**

* All claims associated with the ERA are automatically received or a message is shown detailing any problem claims..
![](images/eraFlowProcessError.png)* If there are any errors, correct them as needed. Click **Auto Process** again. If necessary, follow steps above for Detaching a Claim.

3. If all claims on the ERA Auto Process successfully, payment is automatically finalized.

## Fully-Automatic ERA Processing

If ERA Automation is set to *Fully-automatic* in Preferences, Open Dental automatically completes the [ERA Match with Claim](claimseramatching.html) process without any work needed from the office:

* To see ERAs that have been automatically processed and finalized, open the [ERAs](claimsera835.html) window. Select the *Finalized* status filter. ERAs that have been finalized by automatic process display a note. A note also indicate any failed auto processing attempts.
  + See a list of partially or fully processed claims by clicking **Auto Processed Report** in the ERA window. See: [ERAs Automatically Processed Report](reporterasautomaticallyprocess.html)
* For ERAs that failed to Auto Process (i.e., do not meet claim matching logic), double-click them from the ERAs list and follow the steps for Semi-automatic or Manual ERA processing above.

![](images/eraFlowListAutoProcess.png)

## Additional Information About Semi and Fully-Automatic ERA Processing

Automatic ERA processing:

* Matches claims from the database to claims on the ERA. This also reassociates claims that were manually detached from an ERA using the **Detach Claim** button on the ERA window.
* Applies the payment for the claim to an [Insurance Payment Plans](paymentplanins.html) if only one valid payment plan for the claim is found.

+ If multiple valid payment plans are found, the claim must be processed manually so an Insurance Payment Plan can be chosen by the user.

* Creates [Claim Snapshots](claimsnapshot.html).
* Attempts to process as many claims as possible. If an error is encountered while processing only one claim on an ERA, the system receives the other claim payments and leaves the ERA in a partially processed state without attempting to finalize a batch insurance payment.
  + An ERA may also be left in a *NotFinalized* state if all claims are processed, but an error was encountered when attempting to make the batch insurance payment. If errors are fixed and auto processing is attempted again, the system skips any claims that have already been processed.
* Enters initial payments, supplemental payments, reversals, and preauthorizations. Claims and [Claim Procedures ( claimprocs )](claimprocedure.html) have their status changed appropriately and date received is updated.
* Creates a batch insurance payment for the ERA. The Carrier Name, Check#, Amount, and Clinic are filled. The Payment Date is set to the date the ERA is auto processed.
  + The Payment Type is determined by the ERA Payment Method and the following [Preferences](preferences.html):
    - *CHK payment type*: [Insurance Payment Type](inspaytypes.html) automatically assigned to Auto-Processed ERA payments when the Payment Method code is CHK.
    - *ACH payment type*: Insurance Payment Type automatically assigned to Auto-Processed ERA payments when the Payment Method code is ACH.
    - *FWT payment type*: Insurance Payment Type automatically assigned to Auto-Processed ERA payments when the Payment Method code is FWT.
    - *Default payment type*: Insurance Payment Type automatically assigned to Auto-Processed ERA payments when the Payment Method code is unrecognized.
    - If these preferences are not set, the Payment Type is may be left as *undefined*.
* Creates an auto deposit if *Insurance payments show auto deposit* is enabled in Preferences.
* Claims with mismatched names (i.e., the patient name on the claim in Open Dental does not match the patient name on the ERA) may still be processed if other information exists to match the claims (e.g., claim identifier). A note is added to the auto processed ERA if any name mismatches exist.
* Posts write-offs to non-primary (e.g., secondary or tertiary) claims when *Auto-processing posts write-offs on non-primary claims* is set to *Always* in Preferences.
  + If the preference is set to *Primary from ERA*, a claim is considered primary when the ERA status is *Processed as Primary*, regardless of the insurance plan ordinal in Open Dental.
  + If the preference is set to *Primary from plan*, a claim is considered primary when the insurance plan is marked as primary (i.e., ordinal 1) in [Edit Insurance Plan](insplan.html), regardless of the ERA status.

Automatic ERA Processing does not:

* Set the allowed override for claimprocs or update allowed fee schedules.
* Prompt to handle secondary claims when *Prompt for secondary claims* is enabled in Preferences.
* Receive claims that include a CARC defined in the *Don't auto-process claims w/ these CARCs* preference.