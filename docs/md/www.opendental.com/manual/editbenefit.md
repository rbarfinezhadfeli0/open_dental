Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Edit Benefit

Offices can add custom benefits to insurance plans to account for non-standard benefits.

In the [Edit Benefits](benefitinfo.html) window, click **Add**.

![](images/editBenefitExample.png)

Alternatively, double-click an existing benefit from the Benefits or Other Benefits grid to edit.

If using the Simplified View, enter benefits in the fixed rows, Age Limit grid, or [Frequency Limitation Benefits](insfrequencylimitations.html) grid. Additional benefits can be added manually. If using the Row View (Simplified View is unchecked), all benefits must be added manually.

To see examples of other benefit scenarios that are known to work, see [Other Benefits](otherbenefits.html). Adding benefits scenarios that are not listed on the Other Benefits page may be informational only and not affect insurance calculations.

* **Patient Override**: Check this box if this is an incentive plan benefit where each family member is at a different percentage. These benefit changes only affect this patient and this plan.
* One of the following options can be used to apply the benefit.
  + **Category or**: Applies to all codes in the selected [Insurance Category](inscatssetup.html). Used for Other Benefits.
  + **or Proc Code**: Applies to a specific procedure code. Used for Other Benefits.
  + **or Code Group**: Applies to all codes in a specific [Code Group](codegroups.html).
* **Type:** Some types affect [Insurance Remaining Calculations](insremainingcalc.html); others are informational only.
  + ActiveCoverage: Informational only
  + CoInsurance: Affects calculations. Used for percentages, not amounts.
  + Deductible: Affects calculations.
  + CoPayment: Informational only. To be functional, copays should be added to a [Copay Fee Schedule](feeschedules.html).
  + Exclusions: Affects calculations based on the  *Ins plans with exclusions use UCR fee (zero out write-offs)*  in [Preferences](preferences.html).
  + Limitations: Affects calculations for amounts, but not percentages.
  + Waiting Period: Affects calculations. Insurance plan must have an effective date entered for calculations to work.
* **Percent**: The percentage of coverage for this category or procedure code.
* **Amount**: Dollar amount. Used for limitations and deductibles.
* **Time Period**: Some options affect insurance remaining calculations; others are informational only.
  + Service Year: Affects calculations. For use with service benefit year plans only (plan restarts a month other than January).
  + Calendar Year: Affects calculations. For use with calendar benefit year plans only (plan restarts in January).
  + Lifetime: Affects calculations.
  + Years: Informational only
  + NumberInLast12Months: Affects calculations. For use with Frequency Limitations. Maximum number of services within 12 months.
* **Quantity/Qualifier**: If there is a frequency limitation or waiting period on a category or procedure, enter a number and select the qualifier that matches.

+ None: No quantity or qualifier. Field is irrelevant to the benefit.
+ Number of Services: Affects calculations. Used for limitations.
+ Age Limit: Affects calculations. Used for limitations. Maximum age insurance covers a benefit.
+ Visits: Informational only.
+ Years: Affects calculations. Used for waiting periods and Frequency Limitations.
+ Months: Affects calculations. Used for waiting periods and Frequency Limitations.

* **Coverage Level**:
  + Individual: Apply this benefit change to all individual subscribers on this plan. Most commonly used for maximums or deductibles.
  + Family: Use when a family has a benefit that is in addition to the individual coverage of the subscriber (e.g. individual preventative benefit is $250 per year, but the family has a total cap of $500). This is used when specific categories of coverage have specific limits.
  + None: For use with benefits that do not specify a limit (e.g., a percentage, copay).
* **Treatment Area**: For use with Frequency Limitations.