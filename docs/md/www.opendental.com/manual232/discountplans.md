Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Discount Plans

The Discount Plan feature is useful for practices that offer in-house Discount Plans for patients that do not have insurance.

In the [Main Menu](mainmenu.html), click Lists, Discount Plans.

![](images/discountPlans.png)

This feature uses discount adjustments to reduce the full procedure fee. The adjustment amount is calculated by subtracting the Discount Plan's procedure fee from the provider's UCR fee.

![](images/youtubeLogo.png) See our Webinar: [Discount Plans](https://youtu.be/u_V7MVn8TXY).

* **Description**: The name of the Discount Plan.
* **Fee Schedule**: The fee schedule assigned to the Discount Plan.
* **Adjustment Type**: The adjustment type selected for the Discount Plan.
* **Pats**: lists the number of patients currently using this Discount Plan.
* **Hidden**: Only displays when *Show Hidden* is checked. An X displays for Discount Plans marked *Hidden*.
* **Show Hidden**: Check to include Hidden plans in the list.
* **Add**: Create a new Discount Plan (see below).
* **Merge**: Combine two Discount Plans. See: [Merge Discount Plans](mergediscountplans.html)

## Preparing to Create a Discount Plan

1. Create the [Definitions: Adj Types](definitionsadjtypes.html) to be used for the Discount Plan's adjustments. Create one adjustment for all Discount Plans or create an adjustment for each individual Discount Plan for tracking purposes.
2. Create the Discount Plan's [Fee Schedules](feeschedules.html) and enter its fees.
   * The fees entered into the fee schedule should be what the patient is expected to pay. Open Dental calculates the discount automatically based on the difference between this fee schedule and the billed fee (e.g., UCR fee schedule).
3. Create the Discount Plan. See below.

## Discount Plan Edit

In the Discount Plans list, click **Add** to create a new Discount Plan or double-click an existing plan to edit.

![](images/discountPlanEdit.png)

* **Hidden**: Check to hide the Discount Plan. Only Discount Plans not associated to patients can be hidden.
* **Discount Plan ID**: Read-only. A system-generated number assigned to the Discount Plan automatically.
* **Description**: The name of the Discount Plan.
* **Fee Schedule**: Click **[...]** to associate a fee schedule with the plan.
* **Adjustment Type**: Use the dropdown to associate an Adjustment Type with the plan.
* **Patients**: The count of patients assigned to the Discount Plan. Click the dropdown to see the list of patients.
* **Plan Note**: (optional) Notes specific to the Discount Plan.
* **Annual Max**: (optional) Enter the total annual discount amount allowed for a subscriber of the plan.
  + Annual max is calculated by the total Discount Plan discount (Office fee schedule - Discount Plan fee schedule).
* **Frequency Limitations**: (optional) Enter frequency limitations for the plan. Leave blank for no limitation. Codes must be entered in [Preferences](preferences.html), *Discount Plan Frequency Limitations* for limitations to calculate.

Note: The Annual Max and Frequency Limitations reset based on the Effective Dates entered for the patient if the dates span more than one year or there is no end date. If no effective start date is entered, they reset on the first of the year.

Click **OK** to save changes.

Run the [Discount Plans Report](reportdiscountplan.html) to view a list of all or a specific Discount Plan, the associated fee schedule, adjustment type, and patients using the plan.