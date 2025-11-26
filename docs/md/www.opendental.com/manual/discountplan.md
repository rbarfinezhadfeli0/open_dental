Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Discount Plan Subscriber Edit

For patients without insurance, a Discount Plan can be added to offer office-defined discounts.

In the [Family Module](family.html), double-click an existing Discount Plan.

![](images/discountPlanSubEdit.png)

Alternatively:

* For a patient with an existing Discount Plan, in the Family Module, click **Discount Plan**.
* For a patient without a Discount Plan, click **Discount Plan** to add a new plan. See below for details.

Note: To make edits to a plan's Annual Max or Frequency Limitations, see [Discount Plans](discountplans.html).

## Discount Plan Subscriber Edit

* **Discount Plan ID**: A number assigned to the Discount Plan automatically. Cannot be changed.
* **Discount Plan**: The name of the Discount Plan associated with this patient. Click **[...]** to change Discount Plan.
* **Fee Schedule**: The fee schedule assigned to the Discount Plan.
* **Adjustment Type**: The adjustment type selected for the Discount Plan.
* **Plan Note**: Notes regarding the Discount Plan in general.

Subscriber Information: Enter information specific to the subscriber of the Discount Plan in this area.

* **Name**: Subscriber name. Displays last name, first name.
* **Effective Dates**: Enter the effective from and to dates for patient's Discount Plan. If a Discount Plan has ended, the *Date Term* is highlighted in orange in the Family Module.
* **Subscriber Note**: Notes specific to the subscriber of the plan.

**Drop**: Remove the plan from the current patient. Alternatively, use the dropdown menu on the Discount Plan button in the Family Module.

Click **OK** to save any changes.

Click **Cancel** to close without saving changes.

## Add a Discount Plan

In the [Family Module](family.html) toolbar, click **Discount Plan**. The [Discount Plans](discountplans.html) list displays.

![](images/discountPlanAdd.png)

Double-click a plan from the list or highlight a plan and click **OK** to add the plan to the patient or click **Add** to create a new plan.

Once a plan is selected, make any necessary changes to the Plan Note and Subscriber Information on the Discount Plan Subscriber Edit window.

## View Discount Amounts in the Treatment Plan Module

Once a Discount Plan is added to a patient, Discount Plan discounts show by default in the Treatment Plan Module. If Discount Plan amounts are not displaying, follow these steps to ensure they are set to show:

1. Add *DPlan* to *TreatmentPlanModule* in [Display Fields](displayfields.html).
2. In the Treatment Plan, double-click the unsaved Treatment Plan (active or inactive), and set the Plan Type to *Discount*.
   ![](images/discountPlanTP.gif)

Note:

* When a procedure fee on a Discount Plan Fee Schedule changes, the change is immediately reflected in the Treatment Plan.
* When a procedure fee on the UCR/Office Fee Schedule changes, the change is only reflected when Update Fees is clicked or when the Global Update Fees tool is run.
* If updating fees, first save a copy of the Treamtent Plan for Discount Plan patients to retain original estimates.
* The effective date range of the Discount Plan is considered for treatment plan estimates. If running the treatment plan as of a date outside of the effective dates of the Discount Plan, discounts are not reflected.
* Annual Max and Frequency Limitations of the Discount Plan are considered in treatment plan estimates.

## Discount Plan Adjustments

Once procedures are set complete, adjustments are automatically created for any discounted procedures. The adjustment that is created matches the amount that was in the *DPlan* column for the procedure in the Treatment Plan.

![](images/discountPlanAdjust.png)

The adjustment amount is determined by difference between the fee billed (e.g., UCR fee) and the Discount Plan fee. The Discount Plan fee is based on the fee schedule assigned in [Discount Plan Edit](discountplans.html). Open Dental makes the calculation automatically to create the adjustment. The patient responsibility (i.e., patient portion) for the procedure equals the fee in the Discount Plan [Fee Schedule](feeschedules.html).