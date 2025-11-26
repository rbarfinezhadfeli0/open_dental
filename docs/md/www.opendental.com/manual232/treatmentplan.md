Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Treatment Plan Module

In the Treatment Plan [Module](modules.html), you can manage and prioritize treatment plans for a patient.

![](images/treatmentplan.png)

![](images/YouTube_PlayButton_15px.png) See our video playlist: [Treatment Plan Webinars](https://www.youtube.com/playlist?list=PLyjZ9PCVynClmOo-iRmtFC7cOuq7Je5Io).

## Treatment Plan Toolbar

![](images/treatmentToolbar.png)

These buttons appear in the top toolbar:

* **Preauthorization**: Send [Preauthorization](preauth.html) for a procedure.
* **Discount**: Add a [Procedure Discount](treatmentplandiscounts.html) to selected treatment planned procedures.
* **Update Fees**: For this patient only, update all fees and insurance estimates on the selected treatment plan. See also [Fees Update](feesupdate.html).
* **LabCase**: Highlight procedures, and then click Lab Case to create a new Lab Case for selected procedures. Highlighted procedure information can be included on the lab slip. Requires *treatmentPlanProcs* or *treatmentPlanProcsPriority* static text fields, see [Lab Slip Layout](sheetslabslips.html).
* **Consent**: Highlight procedures, and then click Consent dropdown to find and create a new Consent form for selected procedures. Highlighted procedure information can be included on the Consent form. Requires treatmentPlanProcs or treatmentPlanProcsPriority static text fields, see [Consent Form](consentforms.html).
* **Print TP**: Print the selected treatment plan. To customize the printed layout of treatment plans, see [Treatment Plan Layout](sheetstreatplan.html).
* **Email TP**: Email the selected treatment plan.
* **Sign TP**: Electronically sign a saved treatment plan.
* **CareCredit**: Launch the [CareCredit Action](carecreditaction.html) window. To hide this button click the dropdown and select *Disable Advertising*.

## Treatment Plans

![](images/treatmentSaved.png)

The Treatment Plans list in the upper left corner lists all active, inactive, and saved treatment plans for this patient.

**Date**:Displays the date for Saved treatment plans.

**Status**: The status of the treatment plan.

* **Active**: There can be one active treatment per patient. Procedures attached to appointments are always on the active plan. Only procedures with a Treatment Planned (TP) status can be on an active plan. As procedures are completed, they are removed. The active plan determines the following:
  + The default procedures in the Chart module Progress Notes.
  + The default procedures drawn on the graphical tooth chart.
  + The default procedures when creating an appointment for this patient.
  + The default procedures when creating a planned appointment or scheduling an appointment.
* **Inactive**: There can be multiple inactive treatment plans. Procedures on inactive plans can have a status of Treatment Planned (TP) or Treatment Planned Inactive (TPI). See [Edit Treatment Plan](treatmentplanedit.html) for details.
* **Saved**: Save a treatment plan so you have a permanent record of it. See [Edit Treatment Plan](treatmentplanedit.html) for details.

**Heading**: The name given to the treatment plan.

**Signed**: Displays an X if the treatment plan has been signed by the patient.

**eClipboard**: Displays an X if the treatment is currently being reviewed by the patient via eClipboard. To remove the treatment plan from eClipboard, click the X.

## Buttons

![](images/treatmentButton.png)

The following buttons are available to manage the treatment plan:

* **+New TP**: Click to create an inactive treatment plan. See [Edit Treatment Plan](treatmentplanedit.html) for details.
* **Save TP**: Click to save the selected procedures as a saved treatment plan. See [Edit Treatment Plan](treatmentplanedit.html) for details.
* **eClipboard**: Click to present a saved treatment plan using [eClipboard: Treatment Plan](eclipboardtreatmentplan.html).
* **Refresh**: Refresh treatment plan and deselect any highlighted procedures.
* **+Plan Appt**: Create [Planned Appointments](apptplanned.html).

## Show Tab

![](images/treatmentShow.png)

Options selected on the Show tab affect what shows in the Procedures grid and printed/emailed treatment plans.

* **Graphical Completed Tx**: Show completed treatment plan procedures on the printed [Graphical Tooth Chart](graphicaltoothchart.html). Set the default in Preferences.
* **Use Ins Max and Deduct**: Indicate when a patient's insurance maximum or deductible has been applied or reached. Only visible when patient has insurance.
* **Fees**: Show or hide all fee information.
  + **Insurance Estimates**: Indicates PPO or allowed fee, primary and secondary insurance estimates, and patient portion, if the patient has insurance. If the patient has a discount plan, it shows the discount (DPlan) and patient portion. Checked by default when patient has insurance or a discount plan.
  + **Discount**: Show procedure discount amounts. Can only be checked if there is a discount or write-off in one of the treatment planned procedures.
  + **Subtotals**: Show Subtotals for each priority level.
  + **Totals**: Show Totals at the bottom of the grid.

## Sort By Tab

![](images/treatmentSort.png)

Procedures are always sorted first by priority, then by date. It can further be sorted by tooth number or order of entry. Set the default in Preferences, *Sort Procedures By*.

* **Tooth**: Sort by tooth number from smallest to largest. Procedures with no tooth number list first.
* **Order Entered**: Sort by oldest procedure first. Based on Date in [Procedure Info](procedureedit.html).

Sort order does not sort by procedure code. If two codes have the same priority, treatment area, and date then the order is random. It may be in the order charted but it may not. The order could even change.

Note: If using Replication with Random Primary Keys enabled, the Sort By option is hidden.

## Preauthorizations

![](images/treatmentPreauth.png)

The box at the upper right shows all [Preauthorizations](preauth.html) for this patient. Double-click a preauthorization to edit.

## Procedures Grid

![](images/treatmentProcGrid.png)

When you click on a treatment plan, the associated procedures show in the Procedures grid. What displays in the grid will display on a printed Treatment Plan.

Double-click a procedure to open the [Procedure Info](procedureedit.html) window.

The columns that show can be customized in [Display Fields](displayfields.html), TreatmentPlanModule. Options include:

* **Abbr**: The procedure code abbreviation.
* **Appt**: Displays an X if the procedure is attached to an appointment. Displays a P if the procedure is attached to a [Planned Appointment](apptplanned.html). Displays a U if the procedure is attached to an [Unscheduled](unscheduled.html) appointment. This field is not included when the treatment plan is printed, signed, or saved to images.
* **Cat% UCR**: Displays the UCR fee for the procedure, regardless of which insurance type is selected in the insurance plan. When this column and the Fee column display, the Discount column will show. Discount = UCR Fee - Procedure Fee.
* **Clinic**: The clinic associated with the procedure code.
* **Code**: The Procedure Code.
* **DateTP**: Date the procedure was treatment planned.
* **Description**: Procedure description, details related to the insurance estimates (e.g., deductibles, over annual max, etc.), and estimated tax.
* **Discounts**: Any discounts applied (procedure discounts + any PPO insurance plan write-offs). Not an option if the UCR fees match the PPO fee.
* **Done**: An X indicates a procedure is completed (saved treatment plans).
* **DPlan**: Any discount applied as a result of an in-house discount plan (UCR fee - discount plan fee). This column only shows when insurance estimates is checked under the Show tab, the patient has a discount plan, and the DPlan display field is added to treatment plan module.
* **Dx**: The procedure's diagnosis.
* **Fee**: The fee charged for the procedure.
* **Allowed**: The PPO fee for PPO plans or the allowed fee for out of network plans. An X will display in this column for procedures marked *DoNotBillIns*.
  + For [Enterprise](enterprisesetup.html) users the *Allowed* fee determined is affected by the setting *Hygiene procedures use primary provider PPO fee*.
* **Pat**: The estimated patient cost.
* **Pri Ins**: The insurance estimates for the insurance plan listed first in the Family Module.
* **Priority**: The procedure's priority level.
* **Prognosis**: The prognosis assigned to the procedure on the [Enter Treatment](entertreatment.html) and the [Procedure - Misc Tab](proceduremisc.html).
* **Prov**: The provider associated with the procedure.
* **Sec Ins**: The insurance estimates for the insurance plan listed second in the Family module.
* **Sub**: An X indicates the procedure uses a substitution code in Lists, Procedure Codes.
* **Surf**: The tooth surface.
* **Tth**: The tooth number.

The pri and sec ins estimates can be misleading if, in the Family Module, the patient has a dental plan listed first and a medical plan listed second. In this particular situation, the Pri Ins column will show the dental plan estimates, and the Sec Ins column will show the medical plan estimates. We recommend listing the medical plan first in the Family Module.

## Set Priority & Estimates as of

![](images/treatmentPriority.png)

The set priority list is used to assign priorities to the procedures on the treatment plan. Select the procedure(s), then click on a priority level. The sort order of the procedures will change accordingly. Priorities can also be set while entering treatment in the Chart module, and on the Procedure Info window.

Priority options can be customized in [Definitions: Treat' Plan Priorities](definitionstreatplanpriorities.html). You can use numbers, letters, or words up to 7 characters. You can change the sort order of procedures according to priority, change text colors, and hide priorities from view. Examples of other possible priority levels are Sched, Wait, Next, ?, Decline, Last, Low, High, NewYear, Urgent, WaitIns, Altern, Plan A, Plan B, RecPlan, and AltPlan.

**Estimates as of**: Only displays when *Enable Insurance Frequency Checking* is checked in [Preferences](preferences.html). Defaults to the current date. Use the dropdown to select a future date to see Treatment Plan estimates as of the selected date.

* Procedures that are not covered due to insurance limitations (e.g., annual max, waiting period, frequency limitation) as of the selected date are noted in the desription column.

## Insurance

![](images/treatmentIns.png)

When the patient has an insurance plan, the area at the lower right shows remaining family and individual insurance benefits at a glance. For details about how amounts are determined, see [Insurance Remaining Calculations](insremainingcalc.html).

## Discount Plan

![](images/discountPlanRemCalc.png)

When the patient has a [Discount Plan](discountplan.html), the area at the lower right displays discount plan benefits at a glance.

* **Annual Max**: The annual max for the discount plan. This is set at the plan level, see [Discount Plans](discountplans.html).
* **Adj Use**: The total amount of discount plan adjustments completed for the current benefit period.
* **Adj Remaining**: The patient's remaining annual max balance.

  Annual Max - Adj Used = Adj Remaining

Note: The Discount Plan fields are blank if the current date is outside the plans' effective dates.

## Note

![](images/treatmentNote.png)

Uses the *Default Note* set in Preferences, unless the Note has been edited. Any changes made to the note here are saved for the selected treatment plan. Right-click to add [Quick Paste Notes](quickpastenotessetup.html).

## Good Faith Estimates / No Surprises Act

Open Dental does not have a feature to automatically print a Good Faith Estimate (GFE) with all of the required fields. We believe that most patients are going to be fine with a copy of their Treatment Plan.

The missing fields are not very helpful and are, for each procedure, Provider Name, NPI Number, Taxpayer ID, ICD code, service code type, and service code number. The burden of adding the features needed would compete with other features and Open Dental customers have not shown the demand (see Feature Request 15447).

The rare patient that demands these extra fields along with the many required disclaimers can be given the filled out form from the CMS link below, as you have three days to provide it. <https://www.cms.gov/nosurprises/consumers/understanding-costs-in-advance>.

Open Dental and the ADA both indicate (<https://adanews.ada.org/ada-news/2022/march/ada-addresses-no-surprises-act-questions/>) that other parts of the act do not apply to dentists in most cases, only to Good Faith Estimates for cash patients. We do not believe that statements would need to be modified, Treatment Plans would need a new version for GFE requests.