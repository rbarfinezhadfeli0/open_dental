Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Combine Insurance Plans

Use the Insurance Plans Combine tool to clean up duplicate insurance plans in the Insurance Plans list.

In [Insurance Plans](insplan.html), at the bottom, is a **Combine** button.

![](images/insurancePlanListCombine.png)

Only combine plans as a cleanup measure. Multiple entries of an insurance plan in the list do not harm data. However, if you have duplicate plans that were inadvertently created when entering plan changes, combining can be useful.

Warning: Before combining, always make sure the plans are actual duplicates and not different plans from the same carrier. Combining is a permanent, irreversible change that does affect historical data on claims.

Before combining insurance plans:

* Verify that employer, group #, group name, plan details, plan notes, and benefits (e.g., percentages, annual max, etc.) are all the same.
* Confirm if there is a reason for the plans to be different. If there is, we recommend documenting the reasons in the [Insurance Plan](insplan.html), *Plan Note* area.
* Verify which plan has the most recent and accurate information. When combining, only one insurance plan's details are kept. Other benefits marked as a patient override are not lost when combining plans.
* Verify which plans will be combined into the kept plan.

## Steps to Combine Insurance Plans

Once it is determined that insurance plans should be combined (i.e., multiple instances of the same plan have been created by mistake) follow the steps below to to clean up the Insurance Plans list.

1. Review each plan's details and benefits to determine which insurance plan will be kept and which plans will be combined into the plan to be kept.
   * Double-click a row to open the [Insurance Plan](insplan.html) to review benefits and additional details not currently displayed in the list.
2. Highlight the plans to combine.
3. Click **Combine**.
   * Plans can also be double-clicked from this window to be open the Insurance Plan window to view additional plan details.![](images/insPlanCombine.png)
4. Highlight the one insurance plan to keep. Only this plan's details and benefits will be kept.
5. Click **OK** to combine.
6. A warning appears. Click **OK** to proceed with combing the insurance plans. Click **Cancel** to stop the process.
   ![](images/insPlanCombineConfirm.png)
7. Once complete, all subscribers (and non-subscriber patients attached to the plan) are now connected to the plan that was kept. The plan(s) not kept are no longer in the Insurance Plans list

## Troubleshooting

**When combining plans I get the following prompt:
![](images/insPlanCombineBlueBook.png)**

You are combining Category Percentage plan using Blue Book into a Category Percentage plan that is not using Blue Book and has a fee schedule assigned. Clicking **Yes** deletes all Blue Book data for the plan.

**When combining insurance plans, I get the message: Merging is already in progress from workstation [*computer name*]. Please wait for them to complete and try again.**

A merge is already in progress and must complete before another merge can be started. Once the merge is complete, a new merge can be started.

If a merge is not in progress on the computer listed, this indicates that a merge was interrupted before it could be completed (e.g., Open Dental closed unexpectedly). Re-do the merge on the listed computer to reset the merge in progress flag.