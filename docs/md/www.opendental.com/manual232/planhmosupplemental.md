Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

HMO / DMO Insurance Plan with Co-pays

Also known as mixed capitation, this [Insurance Plan Type](insplantypes.html) is used for HMOs or DMOs with supplemental payments and copays.

![](images/planHMO.gif)

This insurance plan setup tracks write-offs and is common in Texas (e.g., CHIP, MCNA, DentaQuest, Medicaid).

Create a PPO plan that tracks write-offs, then add a copay fee schedule.

1. Create a *Normal* [Fee Schedule](feeschedules.html) for the insurance plan.

* To calculate the fee for each procedure, add the insurance supplemental amount to the patient copay.

  Insurance Supplemental Amounts + Patient Copay = Procedure Fee

2. Create a *CoPay* fee schedule for the carrier.
   * Enter the patient's copay amount for each procedure into this fee schedule.

     Note: If there is no fee, make sure to enter 0 or the patient will get charged the UCR fees (or set the blank entry default behavior in [Preferences](preferences.html)).
3. On the [Insurance Plan](insplan.html), set the following:
   * **Plan Type**: PPO Percentage
   * **Fee Schedule**: The *Normal* fee schedule created in Step 1
   * **Patient Co-pay Amounts**: The *CoPay* fee schedule created in Step 2.
   * **Benefit Information**: Set benefits to 100% for all categories.

Example: For D1110, DMO Insurance's will pay $90 and the patient has a copay of $10.

* In the Normal (i.e., insurance) fee schedule, Procedure A will have a fee amount of $100 (insurance + copay).
* In the Copay fee schedule, Procedure A will have a fee of $10 (the copay).

To calculate insurance estimates, Open Dental uses the following equation:

D1110 Normal fee ($100) - D1110 Copay fee ($10) = Insurance estimate ($90)

## Troubleshooting

If a user entered this kind of plan as a *Capitation Plan Type* with a copay fee schedule, follow these steps to fix it.

1. In the [Main Menu](mainmenu.html), click Setup, Fee Schedules. Add a normal fee schedule with a similar but not identical name to the existing copay fee schedule.
2. For each procedure in the normal fee schedule, enter the fees using the following equation to determine the amount:

   (Patient Copay + Insurance Supplemental Amounts = Procedure Fee)

   Make sure to enter 0 for all fees where there is no supplemental fee or copay.
3. On the Edit Insurance plan window, change the following:
   * **Plan Type**: PPO Percentage (from Capitation).
   * **Fee Schedule**: The new normal fee schedule.
   * **Benefit Information**: Set benefits to 100% for all benefit categories.

For tips on setting up copay fee schedules, see [Fee Schedule Logic](feeschedulelogic.html).