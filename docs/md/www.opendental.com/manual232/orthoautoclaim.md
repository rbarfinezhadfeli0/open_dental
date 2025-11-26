Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Ortho Auto Claims

Use the Ortho Auto Claims Tool to generate periodic orthodontic claims.

In the [Main Menu](mainmenu.html), click Tools, **Ortho Auto Claims**.

![](images/orthoAutoClaims.gif)

Ortho Auto Claims are useful when a carrier wants a claim submitted for the initial procedure, plus periodic claims based on a set frequency (i.e., *Auto Proc Period*) instead of per visit.

Note: The Auto Ortho tool cannot be used in conjunction with [Ortho Case](orthocase.html).

Before setting complete the initial orthodontic treatment, make sure to review [Ortho Setup](orthosetup.html) and the carrier's Ortho settings ([Insurance Plan](insplan.html), Ortho tab).

Setup Requirements:

* *Ortho Claim Type*: Initial Plus Periodic
* A default *Auto Ortho Proc* must be set in Ortho Setup. This can be overridden on the Insurance Plan, Ortho tab.

How it works:

1. Once the initial orthodontic treatment procedure is set complete and a claim is sent, periodic claims are subsequently flagged for auto-generation based on the carrier's Auto Proc Frequency, Ortho Auto Proc, and Ortho Auto Fee.
2. The initial claim is scheduled for the first day of next calendar month (e.g., 03/01/2023).
   * If the setting *Wait 30 days before creating first automatic claim* is enabled in Insurance, Ortho tab, the first claim date will be postponed until the first day of the month at least 30 days out.
3. Once the current date is at or after NextClaim date, the claim is listed in the Claims to be Created grid.
4. Generate the claim using the Ortho Auto Claims Tool.
5. Subsequent claim dates are determined by the Auto Proc Frequency after an Auto Ortho Claim is created (e.g., if a claim is created on 03/01/2023 and Auto Proc Frequency is quarterly, the next claim date is calculated as 06/01/2023). The NextClaim date will always be calculated to the first day of the month the claim is due to be sent.
6. Claims will continue to be flagged for auto-generation until the total treatment time (i.e., *Total Tx Time*) is reached or the NextClaim date is manually removed.

## Ortho Auto Claims Window

**Clinic**: Select a clinic from the dropdown to filter by patients assigned to that clinic.

**Claims to be Created Grid**: Patients due to send an Auto Ortho claim for the current month or past due will appear in the grid. Click a column name to change sorting. Numerical sorting will use the same logic as alphabetical sorting. Rather than 1, 5, 10, users will see 1, 10, 5.

![](images/autoOrthoClaimsGrid.png)

* **Patient**: Patient name.
* **Carrier**: Insurance carrier.
* **Tx Months**: The total months in treatment. Set up in [Auto Ortho](orthoauto.html).
* **Banding**: Banding or ortho start date (i.e., date of the initial orthodontic procedure). Same as *Date Start* in Auto Ortho.
* **MonthsRem**: Treatment time remaining. Displayed in months and days. Based off Banding and Tx Months.
* **#Sent**: Total number of ortho claims sent for the carrier/patient.
* **LastSent**: Date of the last Ortho Auto Claim sent for the carrier/patient.
* **Next Claim**: Date of the next Ortho Auto Claim. This will be used as the Date of Service when creating the Auto Ortho claim.
* **Clinic**: Only shows when Clinics are enabled. Clinic assigned to patient.

**Generate Claims**: Select patients and click to generate Auto Ortho claims. See Generate Periodic Ortho Claims using the Ortho Auto Claims Tool below.

**Select All**: Select all rows (i.e., patients) in the grid.

**Close**: Exit the Ortho Auto Claims window.

## Set Ortho Preferences

The following items must be set up to use the Ortho Auto Claims Tool.

In [Ortho Setup](orthosetup.html):

* Check **Show Auto Ortho in account module** so the Auto Ortho tab shows in the Account module and an Ortho tab shows on the Edit Insurance Plan window.
* Set the default procedure code that will be used on orthodontic claims that are created automatically (Default Ortho Auto Proc).
* Check **Mark claims as Ortho if they have ortho procedures** so that *Is Ortho* is always marked on automatically generated ortho claims.
* Check **Use the first ortho procedure date as Date of Placement** so that the *Date of Placement* is always filled on automatically generated ortho claims.
* Set which procedures will be considered initial orthodontic procedures (Ortho Placement Procedures).
* Set how users can enter claim payments for claims generated using the Ortho Auto Claims Tool (only enter on initial procedure's claim, or allow to enter on auto-generated claims).
* Set other defaults as needed.

## Set Insurance Plan preferences

In the Edit Insurance window, Ortho tab, specify the carrier's claim preferences. Any changes made will affect all patients using the plan.
 See [Insurance Plan](insplan.html) for details.

## Schedule the Patient's Initial Treatment Procedure

As usual, schedule the patient's initial treatment appointment with the corresponding orthodontic placement procedure.

1. At the time of treatment, set the appointment/procedure complete. Doing so will populate the *next claim date* for the patient based on insurance plan ortho frequency setting. This will be the date for the first Ortho Auto claim.
2. Check the **Auto Ortho tab** to verify that dates and fees are accurate.
3. Manually create and send a claim for the ortho placement procedure.

## Generate Periodic Ortho Claims using the Ortho Auto Claims Tool

Each month, check the Ortho Auto Claims Tool to see which periodic claims are due to be sent. The *next claim date* will always be the first of the month.

Claims that meet the ortho auto claim criteria will list alphabetically by last name:

* Patient insurance plan is set to *Initial Plus Periodic* (create automatic ortho claims).
* The initial ortho treatment procedure has been completed.
* The next claim date is today or prior.

To create Ortho Auto Claims:

1. Select the claims to automatically generate.
   * Highlight specific claims to generate.
   * Optionally filter claims by clinic using the **Clinic** dropdown.
   * Click **Select All** to select all claims.
2. Click **Generate Claims**. A confirmation message will show. Click **Yes** to continue.
3. Another message will indicate when the process is complete and the number of claims generated. Click **OK**.

Close the Auto Ortho Claims window, then view the Account Module. The claim will show with a *waiting to send* status. The Auto Proc Code in the claim (e.g. D8670.auto) will also show in the patient's account. To send, see [Send Claims](claimsend.html).

## Determining the Next Ortho Claim

There are two places to view when a patient's next ortho claim is flagged for generation with the Ortho Auto Claims Tool.

* Account Module: Auto Ortho tab, Next Claim. Double-click to open the Ortho Patient Setup window.
* Family Module: Double-click the insurance plan, then click the **Ortho** button in the Patient Information area

![](images/insplanOrthoButton.gif)

The **Next Claim Date** is automatically updated each time the Ortho Auto Tool creates a claim. Manually change or clear the date from the Ortho Patient Setup window. This can be useful if a periodic claim needs to be skipped or claims need to be stopped altogether.

A few hints:

* The date will always be the first of any given month, so even if a user enters 3/15/2023 it will change to 3/1/2023 upon clicking **OK**.
* To stop auto generated claims, leave the next claim date blank. There will be no next claim when this field is blank.
* Once a user manually sets a date, it will not auto-update until the next auto-generation of a claim.

## Providers on Claims

The treating provider on the claim depends on the billing provider for the practice.

* If the treating provider (the provider on the procedure) matches the billing provider, then the treating provider on the claim is the same.
* If the treating provider (the provider on the procedure) is different than the billing provider, then patient's default primary provider will be the treating provider on the claim.

## Claim Payments

When generating Auto Ortho claims, consider where claim payments should be entered: on the initial procedure's claim or on the auto-generated claim.

To only allow staff to enter claim payments on the initial procedure's claim, check **Consolidate Ortho Insurance Payments** in Ortho Setup. Then enter any installment payments as [Supplemental Insurance Payments](claimpaymentsupplemental.html) on the original claim and receive auto-generated claims as zero payment claims.