Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Repeating Charges

Use the Repeating Charges tool or set up automated repeating charges to post repeating procedures to patient accounts each month.

In the [Main Menu](mainmenu.html), click Tools, Repeating Charges.

![](images/repeatingChargeTool.gif)

To use this feature, enable *Repeating Charges* in [Show Features](showfeatures.html).

To set up repeating procedures for a patient, see [Repeating Charge](repeatingcharge.html).

To edit the charge amount for existing repeating charges on all patients or, just patients in a [Super Family](superfamily.html) at once, see the [Database Maintenance](databasemaintenance.html) tool, *Repeat Charge*.

## Repeating Charges Tool

The repeating charge tool will complete any repeating procedures set up for a patient, create a primary and secondary insurance claim for the procedure (if enabled), and allocate any prepayments (if enabled). Run this tool before generating the [Billing List](billinglist.html) to include repeating charges on patient statements and before running the recurring charges tool to include these patients with new balances.

To run the tool:

1. In the main menu, click Tools, Repeating Charges.
2. **Run aging on accounts after posting charges**: Check to run [Aging](aging.html) and update the age of account balances for patients with the new charges.
3. Click OK. The total number of procedures and claims added will show.

Note:

* If the tool is run after the scheduled repeating charge day (up to 1 month and 20 days after), it will backdate all missed repeating charges to the patient's account with the date of the scheduled charge.
* An [Audit Trail](audittrail.html) entry is made each time Repeating Charges is run.

## Automated Repeating Charges

Optionally, enable automatic Repeating Charges in [Preferences](preferences.html) to automatically post repeating procedures at a specific time each day instead of manually running the tool. The automated service also creates primary and secondary insurance claims for posted procedures (if *Create Claim* is enabled for the repeating charge), and allocates any prepayments (if *Use Unearned* is enabled for the Repeating Charge). To enable the service, enable the *Repeating charges run automatically* preference and set the *Repeating charges run time*. To include Repeating Charges on Statements, set the time to run prior to generating the Billing List. Set the run time at least 30 minutes to an hour before the automated *[Recurring Charges](recurringcharges.html) run time* (if enabled).

This is to include repeating procedures on statements and in credit card charges. Also, ensure the computer with the [OpenDentalService](servicemanager.html) (typically the server) is on at the scheduled run time. Open Dental does not need to be running but the computer must be on for the service to work.

Once enabled, Repeating Charges only post once per day and are not run if Automated Repeating charges are currently running or have been run or if the Repeating Charge Tool is currently running or has been run. If the *Repeating charges run time* is changed, the service will not run again until the next day. The Repeating Charge Tool may be safely run at any time to post new Repeating Charges that are set up after the automated preference has been run.

Automated Repeating Charges cannot run if Aging is currently running. If Aging is running at the scheduled *Repeating charges run time*, it is attempted again until successful (i.e., Aging is no longer running).

**Example of transactions when a prepayment is applied to a repeating charge using an income transfer.**

![](images/repeatingchargePrepayment.gif)

**Example of transactions when a claim is created automatically for a repeating charge.**

![](images/repeatingChargeClaim.gif)

## Troubleshooting

**Why is a repeating charge on the patient's account, but there is no log in the Audit Trail?**

Repeating Charges do not create Audit Trail entries. Additionally, if *Create Claim* or *Use Unearned* are enabled for the recurring charge, there is no Audit Trail log for these actions.

**Why do I get a message with the date and time repeating charges last started when trying to run the tool?**

If you attempt to run the repeating charges tool and get the message below, this indicates repeating charges are still in progress.

![](images/repeatingChargeToolFlgMsg.png)

Once repeating charges have started, whether by the tool or automated service, a flag with the start date and time is set to prevent other users from running the tool again. When complete, the flag is cleared. If, after 24 hours, you continue to get this message or notice repeating charges have not posted, try clearing the flag manually. Have a user with the *Security Admin* permission log in and re-run the repeating charges tool.

The security admin is prompted to restart repeating charges.

![](images/repeatingChargeToolFxMsg.png)

Click OK. The flag will reset and the repeating charge tool will restart. If successful, a message box will appear with the total number of repeating procedures posted.