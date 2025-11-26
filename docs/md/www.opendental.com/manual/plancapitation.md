Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Capitation ( HMO / DMO ) Insurance Plan

Capitation is also known as HMO/DMO. Set up this [Insurance Plan Type](insplantypes.html) when an office receives a flat fee every month, regardless of what work is done for patients.

![](images/planCapitation.png)

Patients pay a flat fee for some procedures and no fee for other procedures. Sometimes, a fee for the lab portion can be billed to insurance.

Note:

* To show Capitation as an option on the Edit Insurance Plan window, check Capitation in [Show Features](showfeatures.html).
* To set up a plan that has co-pays and makes supplemental payments (mixed capitation), see [HMO / DMO Insurance Plan with Co-pays](planhmosupplemental.html) instead.
* Also see our [Decision Making Guide](https://opendental.com/resources/Capitation%20Flow%20Chart.pdf) when setting up a Capitation Plan.
* For tips on setting up the co-pay fee schedules, see [Fee Schedule Logic](feeschedulelogic.html).

## Set up the Plan

1. For any patient portions, set up a co-pay [Fee Schedule](feeschedules.html). For each procedure code enter the fee the patient must pay.
2. On the [Insurance Plan](insplan.html), set the following:
   * **Plan Type**: Capitation. All benefit percentages will clear.
   * **Fee Schedule:** Set the capitation fee schedule. If set to *None*, the provider's UCR fees will be used.
   * **Patient Co-Pay Amounts**: Set the co-pay fee schedule (if applicable).

![](images/planCapitationSetup.png)

## Billing Insurance

If the office needs to bill insurance (rare)

1. In the Account Module, select the procedure and click **New Claim**.
2. On the Edit Claim window, double-click on the procedure. Click **OK** when prompted.
3. Change the *Fee Billed to Ins* amount to the amount the carrier is required to pay.
4. Change the *Insurance Estimate* to the same amount.
5. Click **OK**, then send the claim. If the office does not expect to apply a payment for the claim, then mark the claim as received so it does not show on the Outstanding Insurance Claims report.

Because the claim is for a capitation insurance plan, the amount expected from insurance will not be applied to the patient balance. Once payment is received, follow the steps below for Receiving a Capitation Payments.

## Receiving Capitation Payments

When the office receives the monthly payment from a capitation carrier, do not enter the payment on individual claims. Instead, record the payment in a dummy patient for the carrier:

1. Create a dummy patient with the same name as the carrier.
2. Apply all payments to that patient. Users have a few options:
   * **Option 1**: Apply as patient payments to dummy patient with carrier name. If Paysplits [Allocations Setup](allocationssetup.html) is set to *Auto-Split* or *Manual*, allocate the pay splits to a specific provider by editing the pay split. If Paysplits Allocations Setup is set to *Rigorous*, the pay splits must be attached to an unearned type and will be tracked as [Unearned Income](unearnedprepayment.html).
   * **Option 2** (Paysplits Allocations Setup can be *Rigorous*, impacts production): Another option is to add a capitation payment procedure for the full payment amount; however, this will impact production values.
     1. [Create a New Procedure Code](procedurecodenew.html) for capitation payments.
     2. Chart the procedure and edit the amount to match the payment amount.
     3. Set the procedure complete.
     4. Select the procedure in the account module and click **Payment**.
     5. Enter the capitation payment amount.
     6. Complete the payment.
     7. Once the payment and procedure are complete, the account balance should be $0.![](images/planCapitationOpt2.png)
   * **Option 3** (if the office must have payments show as insurance payments): Apply as insurance payments so they show on reports and deposit slips as insurance payments.
     1. Add the capitation insurance plan to the dummy patient.
     2. Create a dummy procedure with no fee.
     3. Create a dummy claim with at least one procedure and 0 fee.
     4. Enter the first payment *As Total*. When additional payments are received, enter as another As Total payment on the same claim (not to the actual patient's claim).
![](images/planCapitationOpt3.png)

We do not recommend having more than one capitation plan for a single patient. If a patient has more than one capitation plan, users must manually change the secondary capitation plan's write-off amounts for each procedure and Open Dental reports will give incorrect production numbers. To fix production numbers, run Query #911, then delete any duplicate *CapCom* status insurance estimates so that there is only one *CapCom* estimate for each procedure.

Also do not manually add insurance estimates with a *CapCom* status; they are created automatically. If you have duplicates, production numbers will be inaccurate. To fix production numbers, run Query #911, then delete any duplicate *CapCom* status insurance estimates so that there is only one *CapCom* estimate for each procedure.

## Reports

Run the [Capitation Utilization Report](reportcapitation.html) at the end of each month to show all procedures for a date range performed for capitation, along with the provider fees and the patient co-pay.

[Production and Income Reports](reportprodinc.html) include production from capitation as Procedure Fee - Capitation Write-offs (as part of the (gross) Production column). For most procedures this contribution is $0, but if there is a patient portion (copay) then the capitation write-off will be less than the fee and thus the patient portion is part of the production.

[Aging of Accounts Receivable (A/R) Report](reportaging.html): Capitation payments entered under a dummy patient will reflect as credits in the A/R report. This can be avoided by using a billing type that is excluded when running the A/R report.

## Technical Details

Internally, a capitation claim creates a second claim procedure.

* The first claim procedure has a status of *CapComplete* and contains the procedure write-off.
* The second claim procedure has a status of *CapClaim* and is only used to show the procedure detail for the claim. The status will not change when the claim is received.

Payment entry on individual capitation claims would be a [Feature Request](featurerequests.html).