Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

PPO Fixed Benefit Insurance Plan

Set up a PPO Fixed Benefit [Insurance Plan Type](insplantypes.html) when the office is contractually obligated to reduce its fees as an in-network provider, and the insurance plan is paying a fixed amount.

![](images/planPPOFixed.png)

This insurance plan type calculates write-offs, includes the insurance portion, and rolls the remaining amount to the patient.

On the [Insurance Plan](insplan.html), set the following:

* **Plan Type**: PPO Fixed Benefit
* **Fee Schedule**: The carrier's fee schedule.
* **Fixed Benefit Amounts**: This is required. Choose the FixedBenefit [Fee Schedule](feeschedules.html) for this insurance plan. The fee schedule should contain the amounts insurance pays for individual procedures.
  + This field is only available when the Plan Type is set to PPO Fixed Benefit.

## Additional Information

Selecting this plan type sets all insurance categories with a coverage benefit to 100%. Insurance estimates come directly from the Fixed Benefit Amounts fee schedule.

[Deductibles](deductibles.html) are only calculated for insurance categories with a coverage benefit. To calculate the deductible on a category that is not displayed in the [Benefits](benefitinfo.html) window, add an [Other Benefit](otherbenefits.html).

The patient portion is calculated using the following formula: UCR fee - Write-Off - Fixed Benefit amount

Write-offs are usually calculated using the following formula: UCR fee - PPO fee. The difference between the two amounts is an automatic write-off.

If *Use UCR fee for billed fee even if PPO fee is higher* is disabled in [Preferences](preferences.html), and the PPO fee is higher than a provider's UCR fee, the PPO fees are used as the billed fees. Enable the preference to use the UCR fees instead.

If the preference, *Fixed benefit fee schedules treat blank entries as zero* is enabled, blank entries in the Fixed Benefit fee schedule are treated as no insurance coverage (i.e., 100% patient responsibility). If the preference is disabled, blank entries are treated as no patient responsibility (i.e., 100% insurance coverage).

Claims automatically show the provider's UCR fee, regardless of the status of the *Claims show UCR fee, not billed fee* setting in the Other Ins Info tab of Insurance Plan window.