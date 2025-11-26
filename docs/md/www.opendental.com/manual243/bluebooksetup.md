Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Insurance Blue Book Setup

Blue Book allows for more accurate estimates for out-of-network insurance plans.

In the [Main Menu](mainmenu.html), click Setup, Family/Insurance, Insurance Blue Book.

![](images/insBlueBookSetup.png)

![](images/youtubeLogo.png) See our video: [Blue Book Webinar](https://youtu.be/Jghg56V6uRA)

Workflow:

1. Users set up Blue Book in this window to determine the best method for estimating procedure fees.
2. As claims are received, users enter the allowed fee from the EOB into the claim.
3. Open Dental uses the allowed amounts, and the criteria set in this window, to determine the fee for future treatment planned procedures.

**Blue Book Feature**: There are three options when estimating fees for a [Category Percentage Insurance Plan](plancatperc.html). Select the desired method from the list. See below for details.

* **None**: (default) This method requires users to manually create out-of-network fee schedules for accurate insurance estimates.
* **Legacy Blue Book**: This method uses the legacy version of Blue Book. For each carrier associated with an out-of-network plan type, an out-of-network fee schedule (named by carrier) is automatically created. The new fee schedule is attached to the insurance plan.
* **Blue Book**: This method uses the logic selected in this window to determine the estimated fee for a procedure. Fee schedules are not created using this method which makes managing fee schedules easier and determining estimates more automated.

**Blue Book Settings**: These settings pertain to the Blue Book feature (does not affect Legacy).

* **Use Insurance Plan in hierarchy**: When unchecked, the *Allowed fees from received claims* for matching *Insurance Plan* is disabled in Hierarchy rules.
* **Insurance Blue Books Rules Hierarchy**: See below for details.
* **Allowed Fee Method**: Determines which method is used to calculate procedure fees. Options are:
  + Median: Use the middle value of the allowed amounts entered in the selected time frame.
  + Average: Average the values of allowed amounts entered in the selected time frame.
  + Most Recent: Use the most recent value entered in the allowed amount.
* **UCR Fee Percent**: The percentage of the UCR fee to cover. When the *UCR fee* rule is in use, this percentage is applied to the covered amount of the UCR fee.
  + For example: If a $100 procedure is covered at 50% (as set in the insurance benefits) and the *UCR Fee Percent* is set to 80%, the Blue Book fee is calculated at $80 and coverage is estimated at 50% of the Blue Book fee ($40).
* **Allow anonymous fee sharing**: Check to allow sending anonymous fee data to Open Dental HQ. No PHI is sent, only fee information to help improve Blue Book in future enhancements. If left unchecked after first enabling Blue Book, the following prompt displays:
  ![](images/blueBookAllowPrompt.png)
   Clicking Yes checks the box and sends anonymous fee data to Open Dental.
   Clicking No keeps the box unchecked, and no data is sent.

Click **Save** to exit the window and keep changes.

## Insurance Blue Book Rules Hierarchy

The Hierarchy determines the method for estimating fees for each procedure code. The Hierarchy can be edited as needed, however, the default Hierarchy is recommended in most cases.

**Rule Type**: This determines how fee information is determined.

* **\*Allowed fees from received claims**: This data comes from the amount entered in the Allowed column when receiving an insurance claim by procedure.
* **Manual blue book fee schedule**: This data comes from values manually entered into a fee schedule with a type of BlueBook. The fee schedule must be attached to the out-of-network insurance plan.
* **UCR fee**: This data comes from the values entered into the office UCR fee schedule.

**Matching**: This determines how to match the Blue Book fee to the patient.

* Insurance Plan: Match the patient by Insurance Plan
* Group Number: Match the patient by Group Number for the selected carrier.
* Insurance Carrier: Match the patient by Insurance Carrier (uses Carrier ID).
* Insurance Carrier Group: Match the patient by Insurance Carrier Group.
* All: Matches all patients by using the UCR fee.

**Limit Type** and **Limit Value**: Determines the if fees used are limited by time frame. Double-click a rule to edit.
![](images/blueBookRuleEdit.png)

Limit Type can be in Years, Months, Days, or Weeks. Then enter the value (e.g., 1 Year, 6 Months, 30 days, etc). Select *None* to include the entire history.

## Hierarchy Logic

The Hierarchy determines the method used for determining the procedure fee. Each procedure starts with the first rule listed, if there is no fee available for that rule, then the next rule is used. This continues until a valid fee is available.

For example, when using the default rules:

* If there is no Manual Blue Book fee for the insurance plan, the next rule is used, which attempts to match by the Insurance Plan.
* If the Insurance Plan does not have a fee history, the Group Number rule is used.
* Open Dental continues down the list until a fee is available.
* If no fees are available (e.g., brand new insurance carrier and plan), a percentage of the UCR fee is used.

## Allowed Fee Logic

When pulling fees from the Allowed Amounts on a claim, Open Dental determines if the fees should be used to calculate future estimates.

* If the allowed fee is higher than the UCR fee, Open Dental assumes it is an overpayment and excludes it from future calculations.
* If the allowed fee is unusually higher or lower than normal (i.e., any outliers), Open Dental excludes it from future calculations.

**Non-Primary Plans**: The allowed fee is not calculated for non-primary (e.g., secondary) plans. It is only calculated for primary plans.

A history of the fee estimates for a procedure can be found in the [Edit Claim Procedure](claimprocedure.html) window.

**Downgrades**: To properly calculate estimates for downgraded procedures, create a Manual Blue Book Fee Schedule for each out-of-network carrier. Only enter the allowed amounts for commonly downgraded procedure codes. Associate this fee schedule with each out-of-network carrier as needed. See [Estimate Downgrades](downgrades.html) for additional information.

## Blue Book vs Legacy Blue Book

**Blue Book**: This is the recommended method.

When Blue Book is enabled, all out-of-network plans (Category Percentage) use Blue Book for determining the procedure's insurance estimate.

If insurance provides a fee schedule with allowed amounts, enter them as a Manual Blue Book Fee Schedule. Associate this fee schedule to the insurance plan.

If insurance does not provide a fee schedule, allowed amounts can typically be found on EOBs as claims are sent and received. When [Receiving a Claim](claimreceive.html), enter the Allowed amount. This updates the Blue Book so that future patients have more accurate estimates.

Note:

* Category Percentage plans that have a fee schedule associated (in the Fee Schedule box directly under the Plan Type) do not begin using Blue Book until the fee schedule is removed.
* Only payments from primary carriers are considered in Blue Book Log estimates.

**Legacy Blue Book**

When Legacy Blue Book is enabled, out-of-network (Category Percentage) plans have a fee schedule automatically created and attached based on the insurance carrier.

The new out-of-network fee schedule is automatically created and attached to the insurance plan. When claims are received, the allowed amounts are entered into the carrier fee schedule.

Legacy Blue Book can make fee schedules difficult to manage, especially if there are many duplicate carriers. Since fee schedules are named by carrier, it can be hard to determine which fee schedule to review when needed.

Note: If moving from Legacy Blue Book to Blue Book:

* If fees have been entered into an Out-of-Network fee schedule, they must be copied to Manual Blue Book fee schedules. See [Fees Copy](feeschedulecopy.html). Then associate the fee schedule to the insurance plan.
* If allowed amounts have been entered into the *Allowed* column on claims in the past, these amounts are considered for future calculations.