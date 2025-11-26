Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

PPO Fixed Benefit Insurance Plan

Set up a PPO Fixed Benefit [Insurance Plan Type](insplantypes.html) when the office is contractually obligated to reduce its fees as an in-network provider, and the insurance plan is paying a fixed amount.

![](images/planPPOFixed.png)

This insurance plan type calculates write-offs, includes the insurance portion, and rolls the remaining amount to the patient.

On the [Insurance Plan](insplan.html), set the following:

* **Plan Type**: PPO Fixed Benefit
* **Fee Schedule**: The carrier's fee schedule.
* **Fixed Benefit Amounts**: The plan's fixed fee schedule ([Fee Schedules](feeschedules.html), FixedBenefit).

Note: The Fixed Benefit Amount box will only show if the Plan Type is set to PPO Fixed Benefit.

This plan will set all insurance categories with a coverage benefit to 100% coverage. Insurance estimates come directly from the Fixed Benefit fee schedule.

[Deductibles](deductibles.html) are only calculated for insurance categories with a coverage benefit. To calculate the deductible on a category that is not displayed in the [Benefits](benefitinfo.html) window, add an [Other Benefit](otherbenefits.html).

The patient portion is calculated using the following formula: UCR fee - Write-Off - Fixed Benefit amount

Write-offs are usually calculated using the following formula: UCR fee - PPO fee. The difference between the two amounts will be an automatic write-off.

If the PPO fee is higher than a provider's UCR fee, the PPO fees are used as the billed fees. To instead use the UCR fees, enable the *Use UCR fee for billed fee even if PPO fee is higher* preference.

To set how blank fixed benefit fee schedules are handled, see the [Preference](preferences.html), *Fixed benefit fee schedules treat blank entries as zero*.

Claims will automatically show the provider's UCR fee, regardless of the status of the *Claims show UCR fee, not billed fee* setting in the Other Ins Info tab of Insurance Plan window.