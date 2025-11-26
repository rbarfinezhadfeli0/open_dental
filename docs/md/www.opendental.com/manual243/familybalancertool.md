Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Family Balancer Tool

See [Database Maintenance Tools](databasemaintenancetools.html).

The Family Balancer Tool is used to recreate income transfers and allocations in your database using First In First Out (FIFO) logic. This means that income is allocated towards the oldest production items on the Family account first which may result in differing individual balances, with the family balance itself remaining unchanged. See [Income Transfer Manager](incometransfermanager.html) for more information on the logic that the Family Balancer Tool uses.

## Does Your Office Need the Family Balancer Tool?

The Family Balancer Tool affects accounts across your entire database, and may not be necessary in all scenarios. Before resorting to the Family Balancer Tool, your staff may be able to clean up accounts manually using [Income Transfer Manager](incometransfermanager.html), [Allocate Unearned Income](unearnedallocate.html), and/or manual [Income Transfer](incometransfer.html).

The Family Balancer Tool may be the right tool for offices

* With a conversion date between October 1st, 2019 - June 30th, 2020 (Version 19)
* With a high amount of unearned income
* With income allocating to old procedures or providers.
* Currently using manual allocation that want to switch to auto-split allocation

## Preparing for your Appointment

* [Update](update.html) to the latest stable version of Open Dental
* Audit Reports
* Select *As Of* Dates

## Auditing Reports

We highly recommend auditing the following reports to ensure the Family Balancer Tool runs as intended. If the reports are not cleaned up prior to the appointment, they can be addressed after the tool has been run.

* [Procedures Not Billed to Insurance Report](reportprocsnotbilledins.html)
  + Any procedures with unsent insurance estimates are only allocated up to the estimated patient portion by the Family Balancer Tool.
* [Procedures Overpaid Report](reportproceduresoverpaid.html)
  + If running the Procedures Overpaid Report, check *Exclude if no Insurance Payment/Write-off*.
* [Payment Plans Report](reportpaymentplan.html)
  + Any family with a payment plan that has mismatched Treatment Credits (Tx Credits) and principal is skipped by the Family Balancer Tool
  + Use the following filters when running the report:
    - Payment Plan Types: *Both*
    - Hide Completed Payment Plans: *Unchecked*
    - Limit to Plans Created in Date Range: *Unchecked*
    - Providers: Check *All*
    - Clinics (if applicable): Check *All*
  + For [Old Payment Plans](paymentplanpatient.html), from the patient [Account Module](account.html):
  - Verify Tx Credits match the principal amount
  - Verify Tx Credits are attached to production

## Selecting Dates

The Family Balancer Tool recreates income transfers for accounts through a specified date. We generally suggest running the Family Balancer Tool with one of the following *as of* dates:

* Practice Purchase or Conversion Date
* End of the most recent fiscal year
* Date of the Family Balancer Tool appointment
  + *Optional*: Backdate the final income transfer 3+ months to preserve the status of [Aging of Accounts Receivable (A/R)](reportaging.html).

## Scheduling and Completing the Family Balancer Appointment

* Call [Open Dental Support](../contact.html) to schedule a test Family Balancer appointment. Test appointment is required. Office will still have access to Open Dental during this time.
* Review test Family Balancer data and complete paperwork. This is required before scheduling a final Family Balancer appointment.
* Schedule a final Family Balancer appointment. Office will not have access to Open Dental during the final appointment. This includes all Clinics sharing a database.

## After the Final Family Balancer Appointment

Your office may still need to manually clean up or allocate some accounts, especially those with outstanding claims or procedures not billed to insurance, procedures overpaid by insurance, or accounts with payment plans.