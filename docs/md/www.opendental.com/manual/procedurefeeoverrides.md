Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Fee Override for Provider or Clinic

Fee overrides for clinics or providers can be used to reduce the number of fee schedules that are necessary.

In the [Procedure Codes](procedurecodes.html) list, to the right of the main grid, is the Compare Fee Schedules section.

![](images/feeOverrides.png)

When entering procedure fees in [Fee Schedules](feeschedules.html), users can optionally enter fees that are provider and/or clinic specific. Provider and/or clinic specific fees are useful in the following situations:

* A PPO plan has different fee tiers depending on the provider (e.g., dentists have one fee, specialists have a different fee).
* [Clinics](clinics.html) have different fees depending on geographical location.
* A provider's fee varies depending on the clinic they provide service in.

Fee Logic: Open Dental first determines the fee schedule to use, according to the [Fee Schedule Logic](feeschedulelogic.html). After that, it applies overrides in this order:

1. Clinic and provider override.
2. Provider-only override.
3. Clinic-only override.
4. Global fee.

## Enter Provider and/or Clinic Specific Fees

Select the fee schedule criteria on the right under **Compare Fee Schedules**. These options determine which fee columns and fees show in the Procedures grid.

**Fee 1** options determine the fees that show in the Fee 1 column.

**Fee 2** options determine the fees that show in the Fee 2 column.

**Fee 3** options determine the fees that show in the Fee 3 column.

**Fee Schedule**: Click the dropdown or [...] to select the fee schedule.

**Clinic**: To enter fees specific to a clinic, click the drop down or [...] to select the clinic.

**Provider**: To enter fees specific to a provider, click the drop down or [...] to select the provider.

Note: Clinic and Provider are only enabled if the fee schedule allows provider and/or clinic-specific fees (**Use Global Fees** is disabled).

As the user selects criteria, the fees in the corresponding column will change to reflect the current fee entered for the fee schedule, clinic, and/or provider. The fee color is a quick method of identifying if a fee is global or specific. A color legend shows in the lower right. Customize colors in [Definitions: Fee Colors](definitionsfeecolors.html).

Click in a cell to enter the fee. Press tab to move from cell to cell for quick data entry. If the user deletes a fee override, the fee will revert to the global fee.

Click **Close** to save the fees and close the window.

To view all fees by procedure, double-click the procedure, then click **More** to View provider and clinic-specific fees.

## Example Scenarios

**For PPO Plan1, dentists Dr. Jones and Dr. Smith use the same fees, but Dr. Wilson, an endodontist, has different fees for some procedures.**

1. Create one normal fee schedule (e.g., PPOPlan1) and disable **Use Global Fees**.
![](images/feeOverrideCreateFeeSched.png)2. In the [Procedure Codes](procedurecodes.html) enter the dentist fees as the global fees and provider overrides for the endodontist.
   * For Fee 1 and 2, select the PPOPlan1 fee schedule.
   * For Fee 2, select Dr. Wilson as the provider.
   * In the Procedures grid, Fee 1 column, enter the dentist fees. These will be the global fees.
   * In the Fee 2 column, enter Dr. Wilson's fees when they differ. These fees will override the global fees when Dr. Wilson is the treating provider.

![](images/feeOverrideEx1.png)

**East, South, and West Clinics have the same UCR fees, but North Clinic has different UCR fees.**

1. Create one normal fee schedule (e.g., Office Fees) and disable *Use Global Fees*.
2. In the Procedure Code List, enter the fees for East, South, and West Clinics as the global fees. Enter clinic overrides for the North Clinic.
   * For Fee 1 and 2 select the Office Fees fee schedule.
   * For Fee 2, select North Clinic.
   * In the Procedures grid, Fee 1 column, enter the Office Fees for East, South, and West Clinics.
   * In Fee 2 column, enter the fees for North Clinic when they differ.

![](images/feeOverrideEx2.png)

**Dr. Wye and Dr. George are both specialists at the North Clinic and their fees differ from the UCR fees of other providers. Dr. George also works at the West clinic and his fees there are different as well.**

1. Create one Normal fee schedule for Office Fees.
2. In the Procedure Code List, adjust the fees:
   * For Fee 1, 2, and 3, select the Office Fees fee schedule.
   * For Fee 1, select Dr. Wye as the Provider.
   * For Fee 2, select the North Clinic and Dr. George.
   * For Fee 3, select West Clinic and Dr. George.
   * In the Procedures grid, enter the fees in the corresponding column.
3. Assign the Office Fees schedule as needed. The fees will automatically adjust based on clinic and treating provider.

![](images/feeOverrideEx3.png)

**Dr. Ripley is in network, but Dr. Norman is out of network and will not be taking any write-offs**

1. Create a *Normal* fee schedule and uncheck *Use global fees*.
2. Enter the in-network fees for Dr. Ripley (and other in-network providers) as the global fees.
3. In Fee Tools, copy the UCR/Office fee schedule to the in-network fee schedule with Dr. Norman selected in the Provider dropdown in the Copy To section.

Now, when Dr. Norman is attached to a procedure using this insurance the UCR/office fee will be billed and no write-off estimates will be applied. The treatment planned estimates for Dr. Norman will not be accurate. Users may need to manually enter coverage for the patient portion estimate. The account will reflect accurately once the claim is paid.

![](images/feeOverrideEx4.png)

## Hygiene Procedures and Fees

When there are multiple providers who have different allowed hygiene procedure fees for the same in-network (PPO) insurance plan, it can affect the insurance and patient portion estimates for hygiene procedures (e.g., when one provider is premier and the other is basic PPO). Hygiene procedure fees are calculated based on the rate of the provider on the exam. If providers have different rates, the hygiene procedure's reimbursement fees will differ by exam, as can the estimated patient portion.

The best solution for this scenario is to err on the side of over-collection.

1. Create one fee schedule (e.g., PPO Plan 1). For each provider that might be on a hygiene exam, enter the highest allowed fee among the providers for each hygiene procedure.
2. Assign the fee schedule to the patient's insurance plan.
3. When charting and completing procedures, the higher fee will always be used to calculate both insurance estimates and patient portion. This is good business practice. The fee the patient will expect and be prepared for will be the higher fee. If the insurance payment ends up being lower (because the lower paid provider did the exam) the office can then issue a refund.

Note: In this scenario, we do not recommend paying hygienists based on net production, as their compensation will vary depending on the provider on the exam. There is no current way in Open Dental to have an accurate picture of the hygienist's income. For providers that are paid on collection, base the rate on actual income, not production, because production values will be inflated.

For each hygienist, enter the highest fee for each hygiene procedure. Leave blank for non-hygiene procedures.

Example: For PPO Plan1, prophy procedure: Dr. A has a fee of $200. Dr. B has a fee of $100. Insurance pays 80% ($160 for Dr. A, $80 for Dr. B). Patient portion for Dr. A is $40, for Dr. B is $20.

**Steps**:

1. When entering hygiene procedure fees for each provider that might be on a hygiene exam, use Dr. A's fees (the highest).
2. Assign the fee schedule to the patient's insurance plan.

When the hygienist does a procedure on Dr. A or Dr. B's exam:

* The fee will be $200.
* The estimated patient portion will be $40.
* The estimated insurance payment will be $160.

When the insurance payment comes:

* When Dr. A is the provider on the appointment, insurance will reimburse $160, and the write-off and payment portion will be accurate.
* When Dr. B is the provider on the appointment, insurance will reimburse only $80. The patient will have overpaid their portion ($20), so reimburse as needed.