Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Secondary Insurance

The [Insurance Plan](insplan.html) listed second in the [Family Module](family.html) (Order = 2) is considered secondary insurance.

![](images/secondaryInsOrder.png)

![](images/youtubeLogo.png) See our webinar: [Secondary Claims](https://youtu.be/gzpUuywWZvU)

## Adding Secondary Insurance

Follow the steps in [Add Insurance](insadd.html) to add primary and secondary plans. From the [Edit Insurance Plan](insplan.html) window, ensure the *Order* for the secondary plan is "2" and "1" for the primary plan. If the primary plan was added first, then the secondary added next, the order is automatically set correctly.

If the patient has more than two insurance plans, follow the steps to add these plans and ensure the order is set correctly. If the patient has [Medical Insurance](medicalins.html), the second plan, not marked *Is Medical*, is considered secondary. This may not be the plan listed as *Order* 2.

## Coordination of Benefits

[Coordination of Benefits ( COB )](cob.html) affects how Open Dental calculates secondary insurance coverage. There are several different COBs. The rules used can vary by state, region, or insurance carrier. Check with the carrier to determine which COB is to be used with a specific insurance plan.

Set the COB Rule for an insurance plan in the Edit Insurance Plan: Other Ins Info tab. Set the default COB rule in Preferences.

![](images/secondaryInsCOB.png)

## Creating Secondary Claims

In the [Account Module](account.html), click **New Claim** and verify claim information. After clicking, **Save**, two claims are automatically created:

* The primary claim has a status of *Waiting to Send*.
* The secondary claim has a status of *Hold until Pri received*. This claim will stay in the patient's account with the *Hold* status until the claim is sent or the status is manually changed.

![](images/secondaryInsNewClaim.png)

To manually create a secondary claim, highlight the procedures, click the **New Claim** dropdown and select *Secondary*. This is necessary if the secondary plan was added after creating the primary claim.

![](images/secondaryNewClaim.png)

*Primary* and *Secondary* claims appear as follows in the patient account:
![](images/claimsecondary.png)

After the primary claim is received:

1. If *Prompt for secondary claims*, is enabled in [Preferences](preferences.html), users are prompted to take action on the secondary claim after finalizing payment or upon clicking **Save** on the primary claim once it has been marked as *Received*.
   ![](images/claimSecondaryOptions.png)
There are four options:

* Change the claim status to 'Waiting to send': Change the status of the secondary claim to *Waiting to Send*.
* Send secondary claim(s) now: Electronically sends the secondary claim to the clearinghouse and changes the status to *Sent-Verified*..
* Print secondary claim(s) now: Prints the secondary claim and changes the to *Sent-Verified*.
* Do Nothing: The status of the secondary claim is not changed and it is not sent electronically or printed. This option is unavailable if the preference,  *Remove 'Do Nothing' for secondary claims with 'Hold until Pri received*, is enabled.

2. If the preference, *Prompt for secondary claims*, is disabled, when finalizing payment on the primary claim, a list of outstanding secondary claims associated with the payment is shown.
   ![](images/claimSecondaryMsg.png)
    The list can be used to find open secondary claims, verify claim estimates, and send secondary claims.

**Electronic Claims**:

* 5010 Format: Primary claim payment information is sent to the clearinghouse.
* 4010 Format: Primary claim payment information is not sent to the clearinghouse.
* Unique Formats (other than 4010 or 5010): Check with the clearinghouse to determine if primary claim payment information is sent.

Attachment requirements depend on the clearinghouse.

* Some clearinghouses require that attachments are uploaded to the clearinghouse first.
* Some clearinghouses only require that claim attachments are marked electronic when sent. They will then notify practices when the attachment is needed. See [Edit Claim - Attachments Tab](claimtabattach.html).

## Procedures Marked as Do Not Bill to Insurance

Procedures marked as *Do Not Bill to Ins* can be changed per insurance estimate.

From [Edit Procedure](procedureedit.html), double-click on the estimate for the insurance that should not be billed. The [Claim Procedure](claimprocedure.html) opens. Check *Do Not Bill to This Insurance*. Estimates then show an *X* in the NoBill column of the Insurance Estimates and Payments grid.
![](images/noBillInsSecondary.png)

When creating the claim, highlight the procedures and click **New Claim** . A warning is shown explaining the procedure will be excluded from the insurance marked as *NoBill*.
![](images/noBillInsPopup.png)

If all selected procedures are marked *NoBill* for Secondary, a warning is instead shown that no claim is created.

## Write-Offs

Write-offs should typically be entered after all claims have been received for the procedures to prevent entering write-off amounts that cause procedures to be overpaid. If only one insurance is in-network, write-offs should be entered onto that carrier's claim. If both are in-network, write-offs can be entered on either claim.

Write-off estimates may show zero if the primary plan has a plan type of Category Percentage, and secondary plan is PPO. To change this, enable the preference, *Calculate secondary insurance PPO write-offs*. This should only be enabled when staff understand COB rules and use PPO Percentage Plan Types for all in-network insurance plans.

## Estimates

If the primary insurance pays a different amount than was originally estimated:

* If the preference *Auto update secondary claim estimates when primary is received* is enabled, secondary [Claim Procedures ( claimprocs )](claimprocedure.html) estimates are automatically updated to consider the Ins Pay amount on the primary [Claim](claimedit.html) when it is received. Only payments entered *By Procedure* are considered.
* If the *Auto update secondary claim estimates when primary is received* is disabled, secondary estimates are not automatically updated. To update estimates manually, click **Recalculate Estimates** on the secondary claim

If a patient has both primary and secondary insurance, both must be set up as PPO Percentage plan types for benefit estimates to be more accurate. See [PPO Insurance Plan](planppo.html), Option 1.

If the primary is not estimated to pay anything, the estimated write-off is calculated using the secondary allowed amount.