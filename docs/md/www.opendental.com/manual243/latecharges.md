Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Late Charges

The Late Charges tool is an alternative to the Billing/Finance Charges tool. It is used to apply late charge adjustments to accounts with statements that have an unpaid balance.

In the [Main Menu](mainmenu.html), click Tools, **Late Charges**.

![](images/lateCharges.png)

The charge amount is calculated based on the current remaining patient portion of production items on statements sent between a set number of days. The charges post to the accounts of all guarantors and super family head's that meet the filtering criteria.

Note: [Aging](aging.html) runs when opening the tool, again after late charges post, and after undoing previous late charges.

Setup Requirements:

* In [Show Features](showfeatures.html), check the radio button to enable the Late Charge feature. Once enabled, Late Charges are available in the Tools menu.
* Set the Late Charge adjustment type in [Preferences](preferences.html).

**Date last run**: The date on the previously posted late charge adjustments.

**Date of new charges**: Enter the date the new charges should be applied. Defaults to today's date.

**Exclude accounts (guarantor) without Truth in Lending**: Check to exclude families that do not have a signed Truth in Lending agreement on record ([Edit Patient Information: Other Tab](patienteditother.html)). For super family statements, this only applies to the super family head.

**Exclude existing late charges**: Check to exclude statement balances that already have late charges.

**Exclude if balance is less than**: Do not generate late charges for families that have a balance less than or equal to this set amount (after insurance estimates).

Note: Charges are only made for super families whose sum of positive family balances are greater than or equal to this amount.

**Percentage (% fee on amt due)**: Set the percent of the late charge fee. The percent applies to the current remaining balance of production items on statements that meet the late charge criteria. Set to zero or leave blank to apply a flat fee (see Minimum charge).

Note: Patient payments, adjustments, insurance payments, and insurance estimates attached to the production items on statements are considered when calculating the late charge fee.

**Minimum charge**: Set the minimum late charge amount. For example, if set to $5.00, any late charge amount calculated from $0.01 to $4.99 is charged as $5.00. Alternatively, this can be used to apply a flat fee when the Percentage is set to zero or left blank.

**Maximum charge**: Set the maximum late charge amount. For example, if set to $15.00, any late charge amount calculated as $15.01 and over is charged as $15.00.

**Apply to statements sent between**: Set the number of days to consider late charges. Late charges are calculated based on the unpaid balances of the production items on statements sent on or between this set number of days. If a patient does not have a sent statement within this range, no late charge adjustment is applied to the account.

Note:

* Late charges are not calculated on In-Person (walkout) [Statements](statement.html), [Invoices](invoice.html), [Receipts](receipt.html), statements marked as "(unsent)", and sent statements missing the [Image Module](images.html) PDF. However, they are calculated on Electronic Statements when the [Billing Defaults](billingdefaults.html) option, *Generate PDF* is unchecked.
* If a family has multiple statements sent in the set range and with the same production items, late charges are only applied once for each item.

**Only apply to these Billing Types**: Select the billing types to apply the late charges. The charge is only applied if the guarantor of the family has one of the selected types.

**Save As Default**: Save the selected Late Charge Settings as default.

Assign charges to: Select how the default provider is assigned to the late charge adjustment.

* **Guarantor's Primary Provider**: Check to assign the primary provider of the family's guarantor to the late charge adjustment.
* **Specific Provider**: Select a specific provider to assign to the late charge adjustment.

Click **Run** to apply late charges to all included accounts. The late charge adjustment posts to the guarantors account with a note listing the statement date the charge was calculated for.

![](images/lateChargesAdj.png)

## Undo Late Charges

To remove the most recent late charges, click **Undo**. All adjustments made on the same date, with the same late charge adjustment type, are deleted. To undo late charges for a different date, users must manually go into each account and delete the individual adjustments. Use the [Daily Adjustments Report](reportdailyadj.html) to identify accounts with adjustments made on that date.

Late charge adjustments attached to a [Payment](payment.html) or [Payment Plan](paymentplandynamic.html) cannot be deleted with this tool. To view a list of patients with late charge adjustments that cannot be deleted, click **Yes** when prompted.

![](images/lateChargesPrompt.png)

Go to each patient on the list and manually detach the adjustment from payment split or Payment Plan to delete the adjustment, if needed.