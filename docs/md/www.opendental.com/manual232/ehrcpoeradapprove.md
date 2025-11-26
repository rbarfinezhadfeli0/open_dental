Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR Radiology Order List

For EHR providers, radiology orders must be entered using CPOE, meaning they must be entered or approved by a provider. Starting in version 15.4, all procedures marked as *Is Radiology* are automatically flagged as radiology orders. By default, all x-ray procedures (D0210 - D0340 and D0364 - D0386) are marked *Is Radiology* in the [Procedure Codes](procedurecodes.html). To count as CPOE, the EHR provider must add it themselves or approve the radiology procedure before it is marked complete.

Note:

* For measure calculation details, see [EHR Objective 3: Computerized Provider Order Entry (CPOE)](../site/ehrcpoe.html).
* In version 15.3 and earlier, radiology orders had to be manually entered by a provider using the lab order interface and a RAD code. You can still use this process to enter orders. See [EHR Lab Order RAD codes](ehrcpoerad.html).

## CPOE vs non-CPOE orders

Radiology orders are automatically marked as CPOE when the EHR provider is logged on and does the following:

* Adds the procedure with a treatment planned status via chart, appointment, or treatment plan.
* Opens the treatment planned procedure for any reason (double click the procedure in the Chart module).
* Approves radiology procedures using the Radiology List (see below).
* Sets the procedure (or appointment) complete.

A radiology order is not marked CPOE when another user is logged on (non-EHR provider) and does the following:

* Adds the procedure with a treatment planned status via chart, appointment or treatment plan.
* Sets a non-approved procedure complete.

## Approving orders using the Radiology List

If the logged-on provider has radiology orders with a treatment planned (TP) status that are not already marked CPOE, an alert shows in the Open Dental menu bar. These alerts only show for providers with [EHR Annual Provider Keys](ehrproviderkeys.html) who are subscribed to Radiology Order alerts. See [Alerts](alerts.html) to subscribe the provider to the alert.

Enable or disable the alert by setting the *OpenDentalService alerts for scheduled non-CPOE radiology procedures* preference.

![](images/alertRadiology.gif)

These orders can be quickly approved by the provider using the Radiology List.

1. Make sure the EHR provider is logged on to Open Dental.
2. Open the Radiology List. There are three ways to open it:
   * Click Radiology Orders alert, Open Radiology Orders.
   * Click the [Appointment Lists](appointmentlists.html) icon, then Radiology.
   * On the [EHR Dashboard](ehrdashboard1.html), click Approve radiology orders.
   ![](images/ehrCpoeRadApprove.gif)

   All of the provider's upcoming radiology procedures that are attached to scheduled appointments, have a status of treatment planned (TP) and are not yet marked CPOE will list. The goal is for this list to be empty, meaning all of the logged-on provider's radiology procedures are already approved. If a non-EHR provider is logged-on, the list will always be empty.

   * To sort orders by date, name, code, abbr, or description, click a column header.
   * To quickly go to a patient's Chart or Family module, right click on the patient, then click See Chart or See Family.
   * This window is non-modal; you can keep it open while opening other windows. (Exception: it is not non-modal when accessed via the EHR dashboard).
3. To approve all orders, click All.

   To approve selected orders only, highlight the orders, then click Selected.
4. Once approved, the orders will no longer show in the list. Click Close to close the window.

## Logic

Notes: To show in the radiology list, procedures must meet this criteria:

* Flagged as *Is Radiology* (Procedure Code List).
* Have a status of TP.
* Is not yet approved.
* Associated to the logged in provider.
* Attached to an appointment with a status of scheduled and is in the future.

If a procedure is marked as *is hygiene* and the appointment is scheduled in the hygiene operatory, the procedure will show in the Hygienist's radiology list.