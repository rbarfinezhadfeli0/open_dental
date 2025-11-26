Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Income Transfer Manager

In the Account Module, click the [Payment](payment.html) dropdown, Income Transfer.

![](images/incomeTransferDropDown.png)

The income transfer manager is used to edit existing transfers, correct family balances with unallocated payments (including insurance payments), and transfer overpayments and unearned income to outstanding charges.

![](images/incomeTransMgrWindow.png)

Alternatively, complete an income transfer through the payment window. See [Income Transfer](incometransfer.html).

Note:

* The Income Transfer Manager is only available when *Show Income Transfer Manager* is enabled in [Allocations Setup](allocationssetup.html).
* An [Audit Trail](audittrail.html) entry is logged for the transfer.

**Existing Transfers (editable)**: A list of completed income transfers for the entire family. Double-click a transfer row to edit. The [Payment](payment.html) window will open with the Payment Type, None (Income Transfer) checked. Edit the transfer paysplits or delete them from the Payment window.

**Provider/Family Balances**: Total outstanding charges and unallocated income for the entire family, grouped by patient then provider/clinic combination.

* **Prov**: Provider assigned to the income or outstanding charge.
* **Patient**: Family member with the unallocated income or outstanding charges.
* **Clinic**: Clinic assigned to the income or outstanding charge.
* **Charges**: Total outstanding charges (payment plan charges, positive adjustments, negative income, and completed procedures) for the patient/provider/clinic combination.
* **Credits**: Total unallocated positive income or negative adjustments for the patient/provider/clinic combination.
* **Balance**: The sum of the Charges and Credits (amount remaining) for the patient/provider/clinic combination.

Note: If the Provider/Family Balances grid is blank, unallocated income may still be available for transfer. This can happen when unallocated income has the same provider/patient/clinic combination and for the same amount as an outstanding charge. The transfer button will be clickable if items are available for transfer.

**As of Date**: Select a date on the calendar. Displays the total outstanding charges and unallocated income up to the date entered. Any transactions after the selected date are not displayed. Transfers will post to the patient account on the As of Date selected.

Note: Use with caution. This tool is rarely used. When needed, only select an As of Date that has a zero balance.

**Show Breakdown**: Check to see all production and income sources for each provider/clinic combination with a balance.

![](images/incomeTransferBreakdown.png)

**Transfer**: Click to transfer all unallocated income sources to any outstanding charges for the entire family. Any [Unearned / Prepayments](unearnedprepayment.html) within the family will also be transferred. Additionally, if a positive adjustment, payment plan charge, or procedure is overpaid, the patient income will be transferred to other outstanding charges or, to unearned income. See Transfer Logic below.

If a transfer took place, a new row with today's date will be added to the Existing Transfers list. Positive and negative paysplits are created for each transfer of income. The negative split subtracts the amount from the original source. The positive split adds the amount to the new source.

**Transfer FIFO**: (rarely used) Transfers all unearned and unallocated patient income to outstanding charges for the entire family using first in, first out (FIFO) logic. See Transfer FIFO Logic below. This option is unavailable when *Rigorous*, Paysplits is enabled in [Allocations Setup](allocationssetup.html). Select an As of Date, then click Transfer FIFO. All unallocated income up to the date entered is transferred.

Note: Do not use this tool if providers are paid on collections. It is recommended to contact Open Dental Support prior to running this tool.

**Close**: Post the income transfer as a line item to the patient account and exit the income transfer manager. Income allocated to providers/clinics/procedures for multiple family members posts to each patient account.

## Transfer Logic

The **Transfer** button does the following:

1. Moves any unallocated income and negative adjustments to the *Default unearned type for unallocated payments* (e.g., Prepayment), set in [Preferences](preferences.html),
2. Allocates all unearned income on the family to procedures, positives adjustments, and Payment Plan Charges with a remaining balance. Patient income from overpaid procedures is re-allocated to another outstanding charge.
3. All income transferred is applied to the oldest charges with at least one matching provider/patient/clinic combination in the following order:
   1. Provider, Patient, and Clinic
   2. Provider and Patient
   3. Provider and Clinic
   4. Patient and Clinic
   5. Provider
   6. Patient
   7. Clinic

For example, if a prepayment/unearned income amount does not have the exact same provider, patient, and clinic allocation as an existing procedure, payplan charge, or adjustment, the income transfer manager does not allocate the prepayment. It moves on to find the next best matching production source based on the provider and patient, then provider and clinic, and so on until at least the clinic matches. If no provider/patient/clinic combination match is found for any payment, it is transferred to the oldest outstanding charge. If no charge exists (i.e., patient has a credit balance) the payment remains as unearned income.

## Transfer FIFO Logic

The **Transfer FIFO** button moves all unearned income and unallocated patient payments to the oldest procedure, adjustment, or payment plan charge with a remaining balance within the family.

Unlike the **Transfer** button, payments are allocated to production regardless of the patient, provider, and clinic assignment. This means a payment for a specific provider may be transferred to a different provider depending on the production item the payment is allocated to. Additionally, a payment made to a specific family member may be transferred to a different family member if they have older production, potentially causing a family member with a paid-off balance to owe money after the transfer. Because of this, it is recommended to only use this tool once and only if the practice is not paying providers on collections.

When the preference, *Income transfers treat negative production as income* is disabled, the Transfer FIFO button does not re-allocate patient income on overpaid procedures, adjustments, or pay plan charges to other charges or unearned income. Use the Transfer button instead. When the preference is enabled, any patient overpayments are transferred to other outstanding charges or, unearned income if there are no unallocated charges within the family.

## Claim Transfers

Claim transfers are made immediately upon clicking the **Income Transfer** button from the Payment dropdown. Users do not need to click any other button from the Income Transfer Manager window. Unallocated insurance payments (claims paid using the *As Total* option) are transferred to the associated claim procedures, updating the remaining patient portion due. This is done using negative and positive supplemental claim payments, which are added to each affected claim. To view or delete these transfers, double-click into any received claim that was paid using the *As Total* option.

Note: Deleting one of the supplemental claim transfers or editing a received claim procedure deletes all transfers on the claim. See [Supplemental Insurance Payments](claimpaymentsupplemental.html).

The negative supplemental entry is made for the same provider, payment, and write-off amount as the original payment. This subtracts the payment from the claim to re-distribute to the claim procedures.

![](images/incomeTransferNegSupp.png)

The positive supplemental entries add the payment back, allocating it directly to the procedures on the claim. A positive entry is made for each procedure on the claim.

![](images/incomeTransferPosSupp.png)

The insurance payment is split between each procedure on the claim until the payment is completely allocated. It first loops through each procedure and allocates the payment up to the procedures' insurance and write off estimates. If income is left over, then up to each procedure fee. Anything excess of the procedure fees is added to the first procedure on the claim and may result in an overpaid procedure.

Note: Run the [Insurance Overpaid Report](reportinsoverpaid.html) to catch overpayments created by the claim transfer and process any [Insurance Refunds](insurancerefunds.html) if necessary.

* The supplemental entries are displayed as Txfr in the Status column of the Edit Claim window but show as Supplemental in the [Edit Claim Procedure](claimprocedure.html) window.
* The date of the supplemental entries is either blank (01/01/0001) or Not Final to signify the entry was created by the Income Transfer Manager but appears on reports as the date of the transfer.
* The supplemental entries do not appear on statements but do appear on [Production and Income Reports](reportprodinc.html) and the [Daily Payments Report](reportdailypayments.html) as a zero line item for the insurance carrier and original payment method, if income was transferred between providers.

**Claims with No Procedures**

For any claim in the family that does not have an attached procedure, the Income Transfer Manager, when used, adds a dummy procedure 'ZZZFIX' and attaches it to the claim. The amount of the procedure is $0 and dated the same as the first insurance payment attached to the claim.

If the affected claims have an insurance payment and no prior transfer, a claim payment transfer using negative and positive supplemental payments also takes place. This causes the $0 dummy procedure to have a credit balance. Use the **Transfer** button in the Income Transfer Manager to re-allocate the credit to another procedure or unearned income.

If the claims have an insurance payment that was transferred before the dummy code was added, the Income Transfer Manager does not perform a transfer for these claims.

## Troubleshooting

**Error: The following payment plans have a 'Total Tx Amt' that does not match the 'Total Amount'.**

Income transfers are blocked if the patient has a payment plan where the total term amount does not equal the total amount of the procedures and credits attached to the payment plan. Go to the listed [Payment Plan](paymentplanpatient.html) and correct the Total Amount and/or Total Tx Amt to match, then proceed with the income transfer. Be mindful when changing the totals as it may change the calculated interest.

The total term amount may differ from the attached credits if there are adjustments or payments on the patient's account that are not accounted for in the attached payment plan credits. For example, a patient discount adjustment is applied to the overall balance instead of attached directly to a procedure. Since adjustments cannot be attached to patient payment plans, it cannot be explicitly included in the total tx credits. To account for these adjustments or affecting payments, attach them to the procedures associated to the payment plan then update the tx credit in the payment plan to the remaining patient portion due.

**Error: Transfers cannot be made for this family at this time. The following payment plans have an imbalance between negative debits and negative credits.**

Income transfers are blocked if the patient has a payment plan where a PayPlan Credit does not have a corresponding PayPlan Debit. This may happen if a negative unattached tx credit is added after the amortization schedule has been created and the amount of one or more scheduled charges was manually edited to reflect the credit. To correct, remove the negative tx credit and change the edited payplan charges back to the original amounts. If you need to reduce the payment plan charges, create a payment plan adjustment. This automatically creates a negative Tx Credit with the correct corresponding PayPlan Credit and PayPlan Debit, then attempt another income transfer. If the error message persist, please contact us for assistance.

**Error: The following pre-existing payment splits cannot be processed by the income transfer tool.**

If income or production is incorrectly allocated this warning message may show during an income transfer. If the error message indicates there is an issue with a $0.00, unallocated paysplit with date 01/01/0001, run [Database Maintenance](databasemaintenance.html) for *PaySplitWithInvalidPayPlanChargeNum*. This is typically caused by a paysplit that has been detached from a payment plan but is still associated to the payplan charge behind the scenes.

If the message includes a payment split with a valid date and amount, apply any payments to the account then attempt to do another income transfer. If there is still an error, go to the mentioned payments and detach any procedures or adjustments from the [Paysplit](paysplit.html). When all of the paysplits have been detached, attempt another transfer. The Income Transfer Manager, in most cases, can fix incorrect allocations. In rare situations the Income Transfer Manager may not be able to fix the allocations, please contact Open Dental Support for assistance. You may be asked to provide a copy of the database in order for us to further troubleshoot and fix.

**Error: ProcNum # for PatNum # was ignored due to insurance overpayment.**

Insurance overpayments are not included in income transfers. Unlike patient over payments, if insurance overpays a procedure, an income transfer via the Payment window or Income Transfer Manager cannot be done to re-allocate the insurance payment to another procedure or to unearned income. Instead, either refund the overpayment back to insurance or do a manual claim transfer with positive and negative supplemental insurance payments to re-allocate the income to another procedure on the claim. See [Insurance Refunds](insurancerefunds.html).

**Error: Negative production needs to be manually allocated before making an income transfer.**

When a family has unallocated, negative production, income transfers are blocked. This is to prevent the income transfer system from transferring the negative production to patient income. The production needs to be allocated before completing an income transfer. Negative production could be negative adjustments, procedures with a negative fee or negative remaining balance. Go to each production item listed in the error and allocate them to another production source (i.e., discount adjustment to a procedure) or payment, then attempt another income transfer.

This warning is also common for families with automatic claim transfers on claims with no procedures where the claim has a $0 dummy procedure called 'ZZZFIX'. In this scenario find each 'ZZZFIX' procedure listed in the warning message. Change the procedure amount in the [Procedure Info](procedureedit.html) window from $0 to the total claim billed amount (if known) or to the insurance payment amount found at the bottom on the Insurance Estimates and Payments grid. Repeat for each ClaimPayAsTotalFix procedure in the family then attempt to re-run the Income Transfer Manager.

To allow negative production to be transferred to patient income, enable the preference, *Income transfers treat negative production as income*.

**Error: Transfer cannot be made while 'Pay Plan charge logic' is set to 'No Charges to Account (rarely used)'.**

Income transfers are blocked when the preference, *Pay Plan charge logic*, is set to *No Charges to Account (rarely used)*. Typically, payplan debits post to the patient account for each procedure attached to the payment plan, and when a payment is applied, it is attached to the payplan debits. This is how the income transfer system can tell when a payment is already allocated to a pay plan and not available for transfer. The pay plan logic, No Charge to Account, does not post payplan debits; therefore, the income transfer feature cannot determine what income is available for transfer and is blocked. Manually transfer the income to outstanding charges instead. See [Income Transfer](incometransfer.html).

**Error: Transfers cannot be made for this family due to a dynamic payment plan with overcharged production.**

Income transfers are blocked when the sum of the payment plan debits (before interest) exceeds the sum of the production attached to a [Dynamic Payment Plan](paymentplandynamic.html). Run the [Dynamic Payment Plans Overcharged Report](reportdynamicpayplanovercharged.html) to fix the overcharged production, then run the Income Transfer Manager.

If the production from the patient's payment plan is not on the report, it's likely there is an override for the procedure, meaning the Amount Attached was edited to lock the fee from dynamically updating when adjustments or insurance payments are applied to the production. To fix, go to the patient's account and find all the production attached to the payment plan where the posted payment plan charges exceed the procedure fee. Right-click the payment plan charge (PayPln: Debit) and select Delete. Payments must be detached from the charge before deleting. Then, open the payment plan and update the Amount Attached on the Production tab to reflect the correct procedure fee (usually to match the Amount field). Any charges that need to be recalculated and posted are done automatically the next time the Open Dental Service is scheduled to run for Dynamic Payment Plans. If *Full Lock* is enabled, the payment plan must be deleted and a new one created with the correct fees instead.