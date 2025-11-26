Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Billing/Finance Charges

The Billing and Finance Charges tool is used to apply finance or billing charges to accounts.

In the [Main Menu](mainmenu.html), click Tools, **Billing/Finance Charges**.

![](images/billingFinanceCharge.png)

The charges are applied to all guarantor [Accounts](account.html) that meet the filtering criteria entered in this window.

Note: [Aging](aging.html) runs when opening the tool, again after billing/finance charges post, and after undoing previous charges.

Required Setup:

* In [Show Features](showfeatures.html), the Charge Tools radio button must be set to check the radio button to *Billing/Finance Charges* to see the option in the Tools menu to use this feature. This is enabled by default.
* Set the *Billing charge adj type* and *Finance charge adj type* in [Preferences](preferences.html).

## Date

![](images/billingFinanceChargeDate.png)

**Date Last Run**: Date the Billing/Finances charge tool was last run.

**Date of New Charges**: Enter the date the new charges should be applied. Billing or finance charges are posted to patient accounts with this adjustment date.

## Billing/Finance Charges

![](images/billingFinanceChargeTypes.png)

**Billing Charge**: Select to add a flat charge to the account. Enter the charge amount in the text box. Charges are added to accounts as an [Adjustment](adjustments.html) using the *Billing charge adj type*.

**Finance Charge**: Select to apply finance charges and apply a percentage charge (APR) to account balances. Charges are added to accounts as an adjustment using the *Finance charge adj type*. Set the following options before applying charges:

* **APR**: Enter the percentage charge to apply to account balances. This charge is calculated against the patient portion of the entire family. It is recommended that you run it every month for an accurate APR. An adjustment is added using the following formula:

  (Estimated Balance \*(APR / 12))
* **Charge at least**: Set the minimum finance charge amount. For example, if set to $5.00, any finance charge amount from $0.01 to $4.99 is charged as $5.00 to the patient.
* **Only if over**: Set the minimum amount of a calculated finance charge before APR is assessed. For example, if the *Only if over* amount is $3.00 and the finance charge is less than that amount, the patient is charged $0.00.
* If both preferences are set, the patient is charged the *Charge at least* amount, but only if it is greater than the *Only if over* amount. If the finance charge is greater than the *Charge at least* amount, the finance charge amount is applied.
* **Compound Interest**: Determines whether or not past interest adjustment charges are considered when calculating new interest charges. Check to charge interest on the total past due amount. Uncheck to charge interest on the past due amount minus any past interest charges.

  Note: If the account has an [Installment Plan](installmentplan.html) set up for any family member, the installment plan's APR is used instead of the APR set here.

## Billing Types

![](images/billingFinanceChargeBillingTypes.png)

**Only Apply to these Billing Types**: Select which accounts should have charges applied based on the guarantor's [Billing Type](definitionsbillingtypes.html).

## Balances Aged

![](images/billingFinanceChargeAged.png)

**Calculate on balances aged**: Select the age of the accounts that should have charges applied. When calculating finance charges, only balances over the selected age are considered (e.g., if Over 90 Days is selected, outstanding balances aged less than 90 days do not affect the calculated finance charge amount).

* Over 30 Days: Apply billing or finance charges to balances aged over 30 days.
* Over 60 Days: Apply billing or finance charges to balances aged over 60 days.
* Over 90 Days: Apply billing or finance charges to balances aged over 90 days.

## Billing/Finance Filters

Select options to have to exclude accounts from being billed finance or billing charges.

![](images/billingFinanceChargeFilters.png)

* **Exclude bad addresses (no zip code)**: Check to exclude families with a bad address on the guarantor's account.
* **Exclude inactive families**: Check to exclude families with an Inactive status (i.e., all members marked *Inactive*).
* **Exclude if insurance pending**: Check to exclude families with any insurance claims still pending.
* **Ignore walkout (In person) Statements**: Works in combination with *Exclude accounts not billed since* setting. If checked, statements with a mode of *InPerson* are not considered as being billed.
* **Exclude accounts (guarantor) without Truth in Lending**: Check to exclude families that do not have record of a signed *Truth in Lending* from the guarantor. See [Edit Patient Information: Other Tab](patienteditother.html), *Signed Truth in Lending* checkbox.
* **Exclude if balance less than**: Families with a balance less than the entered amount are excluded from billing/finance charges.
* **Exclude accounts not billed since**: Defaults to the *Date last run*. Billing/Finance charges are not applied to accounts that have not been sent a statement from the guarantor's account between the date entered and today's date. Accounts that have been sent a statement between the date entered and today's date get a billing/finance charge. Remove the date to include all accounts.

## Undo Billing/Finance Charges

![](images/billingFinanceChargeUndo.png)

Use the **Undo** button to undo the most recent charges (finance or billing). All adjustments made on the same date, which have the same adjustment type, are deleted. Finance/Billing charges for a different date must be undone manually. Use the [Finance Charge Report](reportfinancecharge.html) to identify the adjustments made on that date.

Billing and finance charge adjustments attached to a [Payment](payment.html) or [Payment Plan](paymentplandynamic.html) cannot be deleted with this tool. To view a list of patients with these adjustment types attached to payment splits and Payment Plans, click **Yes** when prompted.

![](images/billingFinanceChargePrompt.png)

Go to each patient on the list and manually detach the adjustment from the pay splits or Payment Plan to delete the adjustment, if needed.

## Assign Charges

![](images/billingFinanceChargeAssignProv.png)

**Assign Charges To**: Determine which provider billing or finance charge adjustments are assigned to. This provider's production is affected.

* Patient's Primary Provider: Select to assign adjustment to the guarantor's primary provider.
* Specific Provider: Select to assign all adjustments to a specific provider selected from the dropdown.

## Run Billing or Finance Charges

**Run**: Click to process billing or finance charges to all families meeting the filter criteria.

Follow the steps below to set up and run billing or finance charges:

1. Verify the *Date of new charges*. This defaults to the current day and does not normally need to be changed.
2. Select a charge type:

* If selecting *Billing Charge*, enter charge amount.
* If selecting *Finance Charge*, enter APR % and other charge criteria.

3. Select affected *Billing Types*.
4. Select an option for *Calculate on balances aged*.
5. Set preferred *Billing/Finance Filters*.
6. Select the provider to *Assign charges to*.
7. Click **Run**.

Once the tool is complete, a message indicates how many charges were applied. To see all the finance charges that were applied, run the [Finance Charge Report](reportfinancecharge.html).

## Apply Both Billing and Finance Charges

To apply both billing and finance charges to an account, run the billing/finance charge tool twice on the same day, once per month. Still complete daily billing.

1. Run the tool to apply the APR finance charge (e.g., 18%) to accounts over 30 days.
2. Run the tool to apply billing charge (e.g., $4) to accounts over 60 days.
3. Send statements.