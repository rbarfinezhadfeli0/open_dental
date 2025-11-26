Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Fees Increase

Use the Fees Increase tool to incrementally increase or decrease fees in a fee schedule by a percentage.

In [Fee Tools](feescheduletools.html), at the right, is the Increase by % area.

![](images/feesIncrease.png)

## Increasing (or Decreasing) Fees

1. Create a backup copy of the existing fee schedule as a preventative measure. See [Fees Copy](feeschedulecopy.html) for these steps.
2. In the **Select Fees** area of the Fee Tools window, select the fee schedule to increase or decrease by clicking the dropdown arrows or **[...]**.
   * If the fee change is only being applied to a specific Clinic or Provider, choose these from the dropdowns as well. Clinic and Provider options are only enabled if the selected fee schedule allows clinic and provider-specific fees (*Use Global Fees* is unchecked).
   * Only fees that exactly match the criteria will be changed:
     + If only a fee schedule is selected, only the global fees will change.
     + If a fee schedule and a clinic are selected, only the clinic-specific fees will change.
     + If a fee schedule and a provider are selected, only the provider-specific fees will change.
     + If a a fee schedule, a clinic, and a provider are selected, only fees that are clinic and provider specific will change.
3. In the the **Increase by %** field, enter the percentage of the increase (e.g. 5). To decrease fees instead, enter a negative value (e.g., -5).
4. Select the rounding method. We recommend rounding to the nearest $1.
5. Click **Increase**.
6. A warning that all fees meeting the *Select Fees* criteria will be overwritten is shown. Click **OK** to apply the fee change. Click **Cancel** to return to the Fee Tools window without applying the change.

![](images/feeScheduleIncreasePerc.png)

## Additional Steps

If the fees updated as intended take the following additional steps as needed

**Hide any backup fee schedule (with old fees):**

1. From [Fee Schedules](feeschedules.html), double-click the old fee schedule.
2. Check **Hidden**.
3. Click **Save**.

**Apply updated fees to treatment planned procedures**: see [Fees Update](feesupdate.html).

**Update Discount Plan Fee Schedules**: For offices using [Discount Plans](discountplans.html), if a fee increase (or decrease) was made to a UCR or Office fee schedule, this does not affect any other fee schedules. Fee schedules attached to discount plans must be updated separately to ensure discounts are still accurate.

Note: If new fee schedules are added, instead of making a backup and increasing fees in the original, fee schedule selections throughout the program (e.g., insurance plans, providers, etc.) may need to be updated.