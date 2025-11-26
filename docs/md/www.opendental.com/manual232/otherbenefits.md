Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Other Benefits

Other Benefits are additional benefits or overrides added to insurance plans.

In the [Edit Benefits](benefitinfo.html) window, at the bottom, is the Other Benefits grid.

![](images/otherBenefits.gif)

For a detailed explanation of options on the Edit Benefit window, see [Edit Benefits - Row View](benefitinforowview.html). Other Benefits are useful when setting up an incentive plan, or when overriding typical insurance percentages or amounts. Only specific scenarios listed below are known to work. Combinations not listed will display in the benefits section for informational purposes only.

Click **Add,** or double-click an existing benefit to edit.

## 1. Override a procedure or category benefit percentage for a specific patient but not everyone on the plan (e.g. incentive plans)

This may be necessary when you have an incentive plan and each family member is at a different percentage.

![](images/otherBenefitOverrideRow.gif)![](images/otherbenefitoverride.png)

## 2. Cover a procedure at a different percentage

For example, insurance covers nitrous oxide at 80%, even though other procedures in that Insurance Category are not covered (0%).

![](images/otherbenefitDiffPercRow.gif)![](images/otherbenefitDiffPerc.png)

## 3. Some work does not apply toward regular annual max

This may be necessary when you need to add a benefit that does not apply to the annual max. For each category you want to exclude from the annual max, create a new benefit.

Examples:

* CHIP
* Some Medicaid plans
* A plan that has a x-ray limit of $150 for the year, with everything else covered at a flat co-pay amount.
* Diagnostic, preventive, and x-rays that do not apply to the annual max.
* A specific procedure code is covered up to a set amount. Enter the procedure code with the amount it will be covered up to by insurance.

![](images/otherbenefitPreventiveRow.gif)![](images/otherbenefitPreventive.png)

## 4. Each family member has a different annual maximum

For each family member, add an Other Benefit using the settings below.

Note: Remove the Annual Maximum values entered in the Edit Benefits window first. Otherwise, these annual maximum Other Benefits will not be applied.

![](images/otherbenefitAnnualMaxRow.gif)![](images/otherbenefitAnnualMax.png)

## 5. No max for a category (e.g., preventive).

![](images/otherBenefitsNoMaxPreventiveRow.gif)![](images/otherBenefitsNoMaxPreventive.png)

You can also set the time period as service year if appropriate. Test in the treatment plan module (e.g., add a $10000 preventive procedure and a $200 filling to make sure it behaves as expected.)

## 6. Set an age limitation

The age limit is through the designated age. For example, entering 16 will cover the patient until their 17th birthday.

Note: Fluoride, Sealants, and Ortho age limitations can be set from the Edit Benefits window.

![](images/otherbenefitAgeLimitrow.png)![](images/otherbenefitAgeLimit.png)

## 7. There is a waiting period on a specific code

Waiting periods can be set by code from the Edit Benefits window. Individual codes can be done using the setup below. An effective date is required to be entered in the Insurance plan for the calculations to work.

![](images/otherbenefitWaitingPeriodRow.png)![](images/otherbenefitWaitingPeriod.png)

## 8. Certain Codes or Categories have Exclusions

Some states or municipalities allow uncovered procedures to be charged at the full UCR fee with no writeoffs. Create an Other Benefit to define which procedures or categories are subject to this Exclusion.

![](images/otherbenefitExclusionRow.png)![](images/otherbenefitExclusion.png)

Define how Exclusions are billed in Preferences, or in the [Insurance Plan](insplan.html), Other Ins Info tab.

## 9. Lifetime Max for Code or Category

For plans that have a lifetime maximum for certain codes or categories, create an Other Benefit to define the applicable code or category, and the amount.

![](images/otherbenefitLifetimeMaxRow.png)
![](images/otherbenefitLifetimeMax.png)

## 10. Deductible max for category or procedure

For categories or procedures that have a deductible that differs from the general annual deductible create an Other Benefit to define this amount.

![](images/otherBenefitRowDeductible.gif)![](images/otherBenefitDeductible.png)

Note: Deductibles for Diagnostic, X-Ray, and Routine Preventive can be set from the Edit Benefits window. See [Deductibles](deductibles.html) for more information. Deductibles entered as an Other Benefit will still apply towards the general deductible.

## 11. Override a frequency limitation for a specific patient, but not everyone on the plan.

This may be necessary for patients enrolled in special insurance programs due to higher oral health risk.

![](images/otherBenefitRowFrequency.png)![](images/otherBenefitFrequency.png)

This other benefit must be set up in the following way to function properly:

* **Patient Override**: This box must be checked.
* **or Proc Code**: Procedure codes must already be added to [Code Groups](codegroups.html). All procedure codes for the Code Group are considered for the frequency limitation (e.g., if D1110, all codes entered in the *Prophy* Code Group are considered).
* **Type**: Limitations
* **Time Period** and **Qualifier**: Must be the same as any plan-level [Frequency Limitation](insfrequencylimitations.html) (e.g., if the plan-level benefit is NumberOfServices per CalendarYear, the override must be as well).
* **Coverage Level**: None

## 12. If you have different categories

Usually this means you are in a country other than the U.S. or Canada, and thus using Row View instead of Simplified View. Enter the insurance categories in [Definitions](definitions.html) and [Insurance Categories](inscatssetup.html). Then assign benefit amounts. For a Canadian Time Unit benefit example, see [Canada Procedure Code Time Units](canadaproctimeunits.html).