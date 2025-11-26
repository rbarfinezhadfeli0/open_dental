Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Account Module

The Account [Module](modules.html) is where a patient's financial information and claim history is viewed.

![](images/account.png)

By default the selected patient's information is displayed. Set default options in [Preferences](preferences.html) and [Allocations Setup](allocationssetup.html).

![](images/youtubeLogo.png) See our [Account Module Playlist](https://www.youtube.com/playlist?list=PLyjZ9PCVynCnYKR2Y5ngkYf-rLqjw9j5F).

## Account Toolbar

![](images/accountToolbar.png)

**Payment**: Click the button to enter a patient [Payment](payment.html).

* **Allocate Unearned**: Click the dropdown to [Allocate Unearned Income](unearnedallocate.html).
* **Income Transfer**: Click the dropdown to perform an [Income Transfer](incometransfer.html).
* **Send Payment to eClipboard**: For eClipboard users only. Click the dropwdown to send statements and payments to eClipboard. See [eClipboard: Payment](eclipboardpayment.html).

**Adjustment**: Select a single procedure and click the button to enter single negative or positive [Adjustment](adjustments.html). Select multiple procedures and click the button to [Add Multiple Adjustments](adjustmentsmultiwindow.html) at once.

* **Apply Sales Tax**: Click the dropdown to apply [Sales Tax](salestax.html).
* **Add Multiple**: Click the dropdown to create adjustments for multiple procedures at once.

**New Claim**: Click the button to [Create a Claim](claimedit.html) based on the patient's currently active insurance plans. Claims are automatically created for both primary and secondary insurance plans. Click the dropdown for additional options:

* **Primary**: Create a primary dental claim.
* **Secondary**: Create a [Secondary Insurance](inssecondary.html) dental claim.
* **Medical**: Create a medical or institutional claim.
* **Other**: Create a claim for other (e.g., tertiary) insurance plans.

**Payment Plan**: Click to create a payment plan.

* **Dynamic Payment Plan**: See [Dynamic Payment Plan](paymentplandynamic.html).
* **Patient Payment Plan**: See [Patient Payment Plan](paymentplanpatient.html).
* **Insurance Payment Plan**: See [Insurance Payment Plans](paymentplanins.html).

**Installment Plan**: Set up [Installment Plan](installmentplan.html). This is a quick alternative to a payment plan.

**Quick Procs**: See [Quick Procs](quickprocs.html).

**Repeating Charge**: Add [Repeating Charges](repeatingcharges.html) to the patient's balance on a monthly basis.

**Statement**: Click the button to send a statement to the printer. Prints all transactions within the number of days set in [Billing Defaults](billingdefaults.html) or, the date range entered in the Show tab (see below). Click the dropdown to select another option. See [Statement](statement.html).

* **Walkout**: Send a walkout statement directly to the printer. Displays information (procedures, payments, adjustments, etc) from today's date only, for the selected patient.
* **Email**: Email a PDF version of the full statement.

  Note: To securely email statements, see [Billing Defaults](billingdefaults.html). Regular email is not a secure method of sending statements (PHI).
* **Receipt**: Send a [Receipt](receipt.html) directly to the printer.
* **Invoice**: Generate an [Invoice](invoice.html).
* **Limited Statement**: Generate a [Limited Statement](limited.html) that only includes selected account items and associated transactions.
* **Limited (Custom)**: Opens the Limited Statement Select window to select procedures, pay plan debits, patient payments, insurance payments, and adjustments.
* **More Options**: Open the [Statement Window](statementwindow.html) to select specific statement options.

**Questionnaire**: Launch the [Questionnaire](questionnaire.html) feature. Only visible when enabled in [Show Features](showfeatures.html).

Third-Party Integrations: These buttons show by default, but can be hidden by disabling the bridges in [Program Links](programlinks.html).

* **DXC Patient Credit Score**: See [DentalXChange Patient Credit Score Service](dentalxchangecreditservice.html).
* **TrojanCollect**: See [Trojan Express Collect](trojancollect.html).
* **CareCredit**: Launch the [CareCredit Action](carecreditaction.html) window. To hide this button click the dropdown and select *Disable Advertising*.

## Aging and Balance Due

![](images/accountAging.png)

**Family Aging**: Displays the aging for the family balance. These amounts show the full balance, regardless of insurance estimates or expected write-offs. Every time a user open a patient's account, [Aging](aging.html) is updated for accuracy.

**Total**: The total balance for all family members. The total does not take into account insurance estimates or expected write-offs.

**Ins Est**: Displays expected insurance payments for the entire family (estimated insurance payments + estimated write-offs). This number only updates when a claim has been created or received.

**Est Bal** (bold red): The total remaining balance for the family after subtracting pending insurance amounts and write-offs. (Total - InsEst = Est Bal)

**Pat Est Bal**: The selected patient's balance after subtracting pending insurance amounts and write-offs.

**Unearned**: The total [Unearned / Prepayment](unearnedprepayment.html) balance for the family. Hover over the total to view a breakdown. All unallocated prepayments within the family are summed by unearned income type. No breakdown is displayed if the total unearned balance is zero.

**Ins Rem**: Hover over the box to see [Insurance Remaining Calculations](insremainingcalc.html).

**DPlan Rem**: Hover over the box to see remaining discount plan benefits. This replaces  *Ins Rem* when a patient has a [Discount Plan](discountplan.html).

Note:

* If using patient payment plans, the pay plan logic determines whether or not Total, Est Bal, and Pat Est Bal include payment plan amounts due.
* If *Balances don't subtract insurance estimate* in Preferences is enabled, the captions above balance information are different (Balance (bold red), Ins Pending, After Ins, Pat Est Bal). This option is useful if the office does not accept insurance assignment of benefits and the patient pays the full amount regardless of the insurance estimate.
* There is not a closeout process at the end of the month to put procedures into history. Instead, if the practice does not want previous entries to be altered, assign [Permissions](permissions.html) to users based on date. Older entries can still be changed, but only if the user has permission. Procedures themselves are protected from alteration when attached to a sent or received claim regardless of a user's [Security](security.html) settings.

## Payment Plans

![](images/accountPayPlans.png)

When the patient attached to a payment plan, as guarantor or patient, details show in the Payment Plan grid. Double-click a plan to view terms, amortization schedule, or to edit.

For details see: [Payment Plan](paymentplanpatient.html), [Dynamic Payment Plan](paymentplandynamic.html), and [Installment Plan](installmentplan.html).

## Patient Account Tab

![](images/accountPatActTab.png)

The line item details of the patient's account history. All procedures, grouped by date with related claims, insurance payments, patient payments (and pay splits), adjustments, statements, invoices, and receipts are listed. Depending on the selected Pay Plan Logic Preference, payment plan credits, debits, and payments may also show. The sort order is as follows:

* All items are grouped by date, sorted oldest to newest.
* Items of the same type from the same date are grouped together in the following order:
  1. Procedures
  2. Adjustments
  3. Patient Payments and Income Transfers
  4. Insurance Claim
  5. Insurance Payment
  6. Payment Plan Credits and Debits
  7. Statements
* Procedures are further sorted and grouped by Treatment Area in the following order:
  1. No treatment area or Mouth
  2. Quad or Sextant
  3. Arch
  4. Surface
  5. Tooth
  6. Tooth RangeWithin this grouping, procedures are also sorted by Procedure Code (lowest to highest) and Procedure Number, a system-generated number that is not visible to users.

Double-click an item to edit. Click a claim or adjustment to highlight attached procedures.

* Customize text colors for entry types in [Definitions: Account Colors](definitionsaccountcolors.html).
* Customize the columns that show in [Display Fields](displayfields.html), Account Module.
* Running balances never take into account pending insurance estimates.
* Insurance payments use the payment date of the [Claim Procedures ( claimprocs )](claimprocedure.html) attached to the claim. If a claim has procedures with different payment dates, there are multiple line items for *Insurance Payment for Claim*.

Procedures marked as (In Process) are part of a group of procedures. These cannot be sent out on claims until all other procedures in the group have also been completed.

**Right-click options**:

* Add Adjustment: Opens the Edit Adjustment window. If a procedure was selected first, it is automatically attached to the adjustment.
* Delete Charge: Deletes unpaid payment plan charges (PayPln: Debit) for [Dynamic Payment Plans](paymentplandynamic.html) and [Payment Plan](paymentplanpatient.html). Option only available when the Pay Plan charge logic is set to *Age Credits and Debits* in [Preferences](preferences.html).
* Refund: Option only available when an existing payment is selected. Creates a [Refund](refunds.html) payment for the original payment. The Payment window opens with the amount of the original payment (as a negative) and the original payment type selected. The paysplit is automatically allocated to the production item or unearned type of the original payment.

Note: Refunds via the right-click menu cannot be done on:

* CareCredit and patient portal payments.
* Hidden prepayments.
* Payments attached to payment plans.
* Payments with negative Paysplits (e.g. income transfers, existing refunds).
* Payments allocated via an income transfer.

## Auto Ortho Tab

![](images/accountOrthotab.png)

This tab only shows if *Show Auto Ortho in account module* is selected in [Ortho Setup](orthosetup.html). View the patient's [Auto Ortho](orthoauto.html) details.

## Ortho Case Tab

![](images/accountOrthoCaseTab.png)

This tab only shows if procedures are added to Ortho Case Procedures in Ortho Setup. View the patient's [Ortho Case](orthocase.html) details.

## Hidden Splits Tab

![](images/accountHiddenTab.png)

The [Hidden Splits](hiddensplits.html) Tab appears when a prepayment is allocated to a treatment planned procedure.

## Communications Log (Commlog)

![](images/accoutCommlogs.png)

The Communications Log lists all [Commlog](commlog.html) entries for the patient. There is a splitter between the main account grid and the log. Drag the splitter up or down to shrink or expand the log.

## Main Tab

![](images/accountMain.png)

**Fam Urgent Fin Note**: This note applies to the entire family. It shows in red and is meant for very important financial notes. It also shows in red in a variety of other places throughout the program.

**Service Date View**: Click to open [Service Date View](servicedateview.html).

**Credit Card Manage**: Manage stored patient credit cards. See [Credit Card Manage](creditcardsmanage.html).

**Select Patient**: Lists all family members. Click on a patient to switch patient accounts, or click *Entire Family* to view the account history for all family members.

Note: Patients manually set to *Archived* show in this list. Patients set to *Archived* due to a merge do not show unless the merged patient is aready selected

**Family Financial**: These notes are not tracked in the audit trail. This is an older version of the Commlog.

## Show Tab

![](images/accountShow.png)

Select which information displays in the Account Module.

**Start/End Date**: Filter transactions by date on the Patient Account. Enter a start and end date manually then click **Refresh**, or click a button to select today only, Last 45 Days, Last 90 Days, or All Dates (no date range).

**Show Proc Breakdowns**: Display additional financial information in the description column for each procedure (e.g., patient portion, insurance paid, write-off, adjustment). This checkbox is user specific. To show the breakdown on statements, select *Show procedure breakdown* in [Preferences](preferences.html).

**Show Family Comm Entries**: Show Commlog entries for the entire family rather than just for the current patient. Set whether this option is checked or unchecked by default in Preferences, *Show family commlog entries by default*.

**Show Automated Commlogs**: Show Commlog entries that have been automatically generated (e.g., Recalls, FHIR, web sched, etc). This checkbox is user specific, and affects automated Commlogs in the Account Module, Chart Module, and Appointment Edit window.

**Show Completed Pay Plans**: Affects all workstations. Show [Closed Payment Plans](paymentplanclose.html) in the Payment Plans grid. When *Entire Family* is selected, the Payment Plans grid is always displayed.

## Patient Information

![](images/accountPatientInfo.gif)

This grid only shows fields are added to [Display Fields](displayfields.html), Account Patient Information. It can list billing type and custom patient fields. See [Patient Fields](custompatientfields.html) to add or hide definitions in this list.