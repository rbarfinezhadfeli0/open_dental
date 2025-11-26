Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Estimate Downgrades

Downgrades can be customized for each insurance plan.

In an [Insurance Plan](insplan.html), on the Other Ins Info Tab, is a button for **Subst Codes**.

![](images/substitutionCodeOptions.gif)

![](images/YouTube_PlayButton_15px.png) See our video: [QuickTip: Customizing Downgrade Codes for an Insurance Plan](https://www.youtube.com/watch?v=zeaA74Mve3c).

Sometimes an Insurance Plan reduces payment for a procedure based on material (e.g., composite to amalgam or porcelain to gold). In Open Dental, downgraded estimates are based on insurance substitution codes and whether or not the insurance plan is set up to apply substitution codes.

Note:

* The substitution code fee is never more expensive than the original procedure code fee.
* Downgrades can include or exclude write-offs depending on the insurance setup.
* To see an example of the math behind downgrades, see [PPO Insurance Calculations](writeoffcalculations.html).

When an insurance plan is set to downgrade estimates:

* The charted code is still billed to insurance.
* The procedure's substitution code is used to estimate the insurance fee. If no fee is entered for the substitution code, the fee for the original procedure is used instead.
* The patient usually pays the difference between the original allowed fee and the downgraded fee.

## Set a Downgrade on the Insurance Plan Level

By default, insurance plans are set to apply downgrades for all procedure codes with substitution codes (*Don't Substitute Codes* is unchecked). Optionally, insurance plans can have specific downgrades set, or universal downgrades can be excluded.

To include or exclude specific downgrades:

1. In the Insurance Plan, click the **Other Ins Info** tab.
2. Ensure **Don't Substitute Codes** is unchecked. This is unchecked by default and determines whether the plan calculates downgrades.
3. Select whether or not to calculate write-offs by checking or unchecking **PPO substitution calculates writeoffs**. The write-off is calculated using the office fee and the fee for the originally charted procedure.
4. Click **Subst Codes**.
   ![](images/insplanSubstCode.gif)
5. Click **+Add** to add a new substitution code.
   * When prompted, select the charted procedure code from the Procedure Code list, then type in the downgraded procedure code in the SubstCode column.
   * Use the **SubstOnlyIf** column dropdown to select the condition. See below for details.
   * When changes are made in this window, an **X** displays in the InsOnly column, indicating the change is at the insurance plan level.

**SubstOnlyIf**: When setting a downgrade for an insurance plan, the same originally charted procedure can have multiple downgrade options. For example, if a procedure code downgrades to one code for Second Molars, but a different code for Molars. The hierarchy for how a downgrade is determined in these cases is as follows:

1. Never: This procedure code is never downgraded. This also ignores any universally set downgrades.
2. SecondMolar: Any substitution code charted on a second molar uses the selected downgraded code.
3. Molar: Any substitution code charted on a molar uses the selected downgraded code. Since this condition could also apply to second molar teeth, we check for the SecondMolar condition first.
4. Posterior: Any substitution code charted on a posterior tooth uses the selected downgraded code.
5. Always: Always substitute procedures to the downgraded code, unless a condition above is met.

## Do not Downgrade Estimates for an Insurance Plan

To turn off downgraded estimates for a plan, check **Don't Substitute Codes**. All estimates for the plan are based on the procedure to be completed and substitution codes are ignored.

![](images/downgradesInsPlanNo.gif)

When an insurance plan is set to not downgrade estimates:

* The charted code is billed to insurance and used to estimate the insurance payment.
* If insurance downgrades the fee, the estimated insurance payment in Open Dental will be inaccurate (i.e., too high).

## Set a Downgrade Universally for all Insurance Plans

For procedures commonly downgraded by most insurances, users can create codes that default to downgrades for all insurance plans.

By default, Open Dental associates four composite procedure codes with corresponding amalgam substitution codes.

* D2391 (composite) = D2140 (substitute amalgam code)
* D2392 (composite) = D2150 (substitute amalgam code)
* D2393 (composite) = D2160 (substitute amalgam code)
* D2394 (composite) = D2161 (substitute amalgam code)

To create additional universally downgraded codes:

1. In [Procedure Codes](procedurecodes.html), ensure the correct fees are entered in the fee schedule for both the original (charted) procedure code and the substitution procedure code.
2. Double-click the charted procedure code.
3. In the *Ins. Subst Code* field enter the insurance substitution code.
   ![](images/downgrades.gif)
4. Optionally set the **Only if** condition.
   * Always: Always downgrade this procedure code.
   * Molar: Only downgrade when procedure is performed on a molar.
   * Second Molar: Only downgrade when procedure is performed on a second molar.
   * Never: Never downgrade this code.
   * Posterior: Only downgrade when this procedure is performed on a posterior tooth.

## Blue Book

If using Blue Book, downgrades need to be entered as a Manual Blue Book fee schedule. See [Insurance Blue Book Setup](bluebooksetup.html) for details.

## Fees and Estimates

When a [Claim Procedure](claimprocedure.html) is downgraded, the procedure code used for insurance estimates may change.

Fees or estimates are determined based on the following procedure codes:

* Fee: Original procedure code
* Allowed Amt: Substitution procedure code
* Patient Copay: Substitution procedure code
* Insurance Estimate: Substitution procedure code
* Write-off Estimate: Original procedure code