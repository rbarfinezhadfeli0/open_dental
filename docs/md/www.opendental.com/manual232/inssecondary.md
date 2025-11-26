Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Secondary Insurance

The [Insurance Plan](insplan.html) listed second in the [Family Module](family.html) (Order = 2) is considered secondary insurance.

![](images/secondaryInsOrder.png)

![](images/youtubeLogo.png) See our webinar: [Secondary Claims](https://youtu.be/gzpUuywWZvU)

## Adding Secondary Insurance

Follow the steps in [Add Insurance](insadd.html) to add primary and secondary plans. From the [Edit Insurance Plan](insplan.html) window, ensure the *Order* for the secondary plan is "2" and "1" for the primary plan. If the primary plan was added first, then the secondary added next, the order will be automatically set correctly.

If the patient has more than two insurance plans, follow the steps to add these plans and ensure the order is set correctly.

## Coordination of Benefits

[Coordination of Benefits ( COB )](cob.html) will affect how Open Dental calculates secondary insurance coverage. There are several different COBs. The rules used can vary by state, region, or insurance carrier. Check with the carrier to determine which COB is to be used with a specific insurance plan.

Set the COB Rule for an insurance plan in the Edit Insurance Plan: Other Ins Info tab. Set the default COB rule in Preferences.

![](images/secondaryInsCOB.png)

## Creating Secondary Claims

In the [Account Module](account.html), click **New Claim** and verify claim information. When the user clicks **OK**, two claims will be automatically created:

* Usually, the primary claim will have a status of *Waiting to Send*.
* The secondary claim will have a status of *Hold until Pri received*. This claim will stay in the patient's account with the *Hold* status until sent.

![](images/secondaryInsNewClaim.png)

To manually create a secondary claim, highlight the procedures, click the **New Claim** dropdown and select **Secondary**.This is necessary if the secondary plan was added after creating the primary claim.

![](images/secondaryNewClaim.png)

*Primary* and *Secondary* claims appear as follows in the patient account:
![](images/claimsecondary.png)

After receiving the primary claim and entering the payment, users will receive one of two popups:

1. If the preference, *Prompt for secondary claims*, is checked, the user will get a prompt with three options.
   ![](images/claimSecondaryOptions.png)
   * **Change the claim status to 'Waiting to send'**: Change the status of the secondary claim to *Waiting to Send*.
   * **Send secondary claim(s) now**: Send the secondary claim now.
   * **Do Nothing**: Do not change the secondary claim. This option will not appear if the preference,  *Remove 'Do Nothing' for secondary claims with 'Hold until Pri received*, is checked.
2. If the preference,*Prompt for secondary claims*, is unchecked, users will get a prompt with a list of secondary claims.
   ![](images/claimSecondaryMsg.png)
    Users can use this information to find and open secondary claims, verify the claim estimates, and send secondary claims.

**Electronic Claims**:

* Primary claim payment information is sent to the clearinghouse when using the 5010 format.
* Primary claim payment information is not sent to the clearinghouse when using the 4010 format.
* If sending in a unique format (other than the 4010 or 5010), check with your clearinghouse to determine if primary claim payment information is sent.

Attachment requirements depend on your clearinghouse.

* Some clearinghouses require that attachments are uploaded to the clearinghouse first.
* Some clearinghouses only require that claim attachments are marked electronic when sent. They will then notify you when the attachment is needed. See [Edit Claim - Attachments Tab](claimtabattach.html).

## Procedures Marked as Do Not Bill to Insurance

Procedures marked as *Do Not Bill to Ins* can be changed per insurance estimate.

From [Edit Procedure](procedureedit.html), double-click on the estimate for the insurance that should not be billed. The [Claim Procedure](claimprocedure.html) will be opened. Check *Do Not Bill to This Insurance*. Estimates will then look like this on the procedure:
![](images/noBillInsSecondary.png)

When creating the claim, highlight the procedures and click **New Claim**. Users will get a prompt explaining the procedure will be excluded from the insurance marked as *NoBill*.
![](images/noBillInsPopup.png)

## Write-Offs

Write-offs should typically be entered after all claims have been received for the procedures to prevent entering write-off amounts that cause procedures to be overpaid. If only one insurance is in-network, write-offs should be entered onto that carrier's claim. If both are in-network, write-offs can be entered on either claim.

Write-off estimates might show zero if the primary plan has a plan type of Category Percentage, and secondary plan is PPO. To change this, enable the preference, *Calculate secondary insurance PPO write-offs*. This should only be enabled if you understand COB rules and use PPO Percentage Plan types for all in-network insurance plans.

## Estimates

If primary insurance is received and not paid as estimated, secondary insurance estimates do not automatically update. Click **Recalculate Estimates** on the secondary claim to update the secondary estimate.

If a patient has both primary and secondary insurance and you want benefit estimates to be more accurate, you must set both up as a PPO Percentage plan type. See [PPO Insurance Plan](planppo.html), Option 1.

If both plan types are PPO and the primary is not estimated to pay anything, the write-off that generates will be based off the secondary allowed amount.

Write-off estimates might show zero if the primary plan has a plan type of Category Percentage, and secondary plan is PPO. To change this, enable the preference, *Calculate secondary insurance PPO write-offs*. This should only be enabled if you understand COB rules and use PPO Percentage Plan types for all in-network insurance plans.