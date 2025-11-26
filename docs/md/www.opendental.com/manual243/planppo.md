Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

PPO Insurance Plan

PPO Insurance Plans type are a type of In-network / Contracted [Insurance Plan](insplantypes.html).

PPO stands for Preferred Provider Organization.

Set up this Insurance Plan Type when the practice or providers are contractually obligated to reduce their fees as an in-network provider. Because the practice or providers are enrolled with the insurance company, they have access to a published list of fees that they must charge the patient. The insurance portion is calculated as a percentage of the published fee and the patient pays the rest.

There are two setup options: one tracks write-offs, the other doesn't. Write-offs are the difference between the contracted fee and the provider's UCR fees.

Note:

* To set up a plan that has copays and makes supplemental payments (mixed capitation), see [HMOs/DMOs with Supplemental Payments and Copays](planhmosupplemental.html) instead.
* To see how the fee schedule is determined, see [Fee Schedule Logic](feeschedulelogic.html).

## Option 1: Set up a PPO plan and track write-offs

Set up an insurance plan with a PPO Percentage plan type and the carrier fee schedule. This plan tracks write-offs.

On the [Insurance Plan](insplan.html), select these options:

* **Plan Type**: PPO Percentage
* **Fee Schedule**: The carrier's [Fee Schedules](feeschedules.html).
  ![](images/planPPO1.png)

Insurance estimates will be based on the carrier's fee schedule.

Procedure fees will be based on the provider's fee schedule.

Write-offs are usually calculated using the following formula: UCR fees - PPO fee The difference between the two amounts will be an automatic write-off.

Typically, if the PPO fee is higher than a provider's UCR fee, the PPO fees are used as the billed fees. To instead use the UCR fees, see [Preferences](preferences.html), *Use UCR fee for billed fee even if PPO fee is higher*.

As UCR fees are billed to the account by default, the setting, **Claims show UCR fee, not billed fee** only needs to be enabled if billed fees are changed manually. The correct insurance estimate (breakdowns) will show in the account after the claim is created.

Write-offs are reported in [Production and Income Reports](reportprodinc.html), the [Daily Write-off Report](reportdailywriteoffs.html), the [PPO Write-offs Report](reportppowriteoffs.html), and the [Receivables Breakdown Report](reportreceivablesbreakdown.html).

## Option 2: Set up a Category Percentage plan and don't track write-offs (not recommended)

This is a simpler approach for an in-network plan but doesn't track write-offs. It is not recommended for a few reasons:

* If fee schedules are incorrect, patients will be billed incorrectly which could lead to lower collection rates.
* At risk of not getting full reimbursement from insurance. Submitting the full office fee is the only way to get maximum reimbursement.
* It is harder to manage and identify insurance overpayments.

Set up an insurance plan with a Category Percentage plan type and the carrier fee schedule. The carrier fees will be used instead of the provider's fees. One disadvantage is that patients will not see the provider's fees and may not be aware that a discount is being given.

On the Edit Insurance Plan window, select these options:

* **Plan Type**: Category Percentage
* **Fee Schedule**: The carrier's fee schedule.
  ![](images/planPPO2.png)
* (optional) To show the provider's fees on the insurance claim, check **Claims show UCR fee, not billed fee** in the *Other Ins* Info tab.
* (optional): To display the UCR fee and calculate write-off amounts in the Treatment Plan, without tracking on reports, add *Cat% UCR* to the Treatment Plan Module [Display Fields](displayfields.html).

## Patient Copays per Procedures

If the patient is required to copay per procedures, follow these steps.

1. Create a *copay* fee schedule for the carrier.
2. For each procedure code, enter the patient's copay amount. There can be just a few fees with the rest blank. If the practice only has the insurance copay fee schedule, not the patient copay amounts, use this equation to obtain the fee:

   Carrier Fee - Insurance Copay = Patient Copay
3. On the Edit Insurance Plan window set the following:
   * **Fee Schedule**: The carrier's normal fee schedule.
   * **Patient Co-pay Amounts**: The carrier's copay fee schedule.
     ![](images/planPPOcopay.png)

   [Benefits](benefitinfo.html): Usually, percentages will be set to 100% so that everything above the copay is calculated as the insurance portion. If percentages are not set to 100%, percentage calculations will be performed on the remaining amount.

Note: When insurance pays off a lower fee schedule than the normal contracted fee schedule, and patient pays the difference, create a copay fee schedule. The copay fee schedule is the normal contracted fee schedule minus the lower fee schedule.

## PPOs with fee schedules that change after first year

These can be easily handled by using two insurance plans: one for preventive services, and one for basic services. These will need to be updated manually after the first year so that estimates etc. are monitored closely during the transition to the second year, when benefits will have to be updated in Open Dental.