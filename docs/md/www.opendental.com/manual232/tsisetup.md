Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

TSI Setup

In [Program Links](programlinks.html), double-click on Transworld Systems Inc. (TSI).

![](images/bridgeTransworld.png)

To begin using the [TSI Collections](tsicollections.html) Interface, there are three basic steps:

1. Sign up with TSI and receive your TSI credentials.
2. Set up the TSI program link.
3. Create a *collections* billing type for TSI accounts.

## Step 1: Sign Up for TSI Services

See <https://www.tsico.com/alliances-opendental/>.

## Step 2: Set up the TSI Program Link in Open Dental

1. Check the **Enabled** box.
2. **Clinic**: Only visible if clinics is turned on. Use to enter different credentials for each clinic. Click the dropdown to select the clinic, then proceed to steps 4 - 8.

   Note: By default, credentials entered for Headquarters will be copied for each clinic. Once an individual clinic credentials is modified to differ from Headquarters, changes to Headquarter settings will no longer affect the clinic's settings.
3. *Services Enabled*: Select the TSI services to enable.
   * **Accelerator**: Gentle payment reminder letters sent to patients on your behalf.
   * **Profit Recovery**: TSI contacts patients on your behalf in a more urgent, yet friendly approach.
   * **Professional Collections**: Urges patients to make payments before they are charged off as bad debt.
4. *SFTP Server Details*: Enter the TSI SFTP server details and login credentials (provided by TSI).
   * **Address**
   * **Port**
   * **Username**
   * **Password**

     Note: User must have the *Manage High Security Properties* permission to edit or add a password.
5. *Client IDs*: Enter your client ID for each enabled service.
   * **Accelerator**: The ID provided to you by TSI for the Accelerator service.
   * **Profit Recovery/Collection**: The ID provided to you by Transworld for Profit Recovery and/or Collection service.
6. **"Paid in Full" thank you letter**: Check this box to have TSI send a thank you letter to patients once the balance is paid.
7. **Exclude Positive Adj Type**: Select a positive [Adjustment](adjustments.html) type that will be excluded from updates to TSI.
8. **Exclude Negative Adj Type**: Select a negative adjustment type that will be excluded from updates to TSI.
9. To enter different credentials for another clinic, select the clinic, then repeat steps 4 - 7.
10. **OpenDentalService Send Time**: Select when data will be sent and synced with Transworld. We recommend setting a time after business hours. If left blank, transaction data is not synced.
11. **Repeat Every**: Select how often the OpenDentalService will send and sync accounts. The recommended setting is one time per day.
    * Click the up/down arrows to increase/decrease the value.
    * Click the down arrow to select Days, Hours, or Minutes.
12. **Paid in Full Billing Type**: Select a non-collection (C) billing type to auto-assign to accounts once the balance has been paid in full.
13. Click **OK** to save all settings.

Note:

* The OpenDentalService Send Time and 'Repeat Every' settings are not clinic specific. They affect every clinic.
* TSI may take up to 72 hours to process transactions after being sent by the OpenDentalService.

## Step 3: Create a TSI *Collections* Billing Type

Open Dental will automatically assign this billing type to all accounts that are sent to TSI.

1. In the Main Menu, click Setup, Definitions.
2. Select Billing Types.
3. Click Add.
4. Enter a name to use for the billing type that will be auto-assigned to guarantors that have been sent to TSI (e.g. Transworld).
5. In the second box, enter C to mark this billing type as the *collections* billing type.

   Note:
   * There should only be one *C* billing type. If there are multiple, TSI will always assign the *C* billing type listed first.
   * Once a patient is sent to TSI, TSI will be responsible for billing the patient, so it is good practice to remove that billing type from the [Billing List](billing.html) so they are not billed by the office as well.

Warnings:

* Do not manually assign the TSI *C* billing type to any patient. Manual assignment will not initiate TSI account management. Thus the account could fall through the cracks.
* Do not manually change a patient's billing type from the TSI *C* billing type to another. Manual changes will not stop TSI account management, however will stop account syncing that could result in double, yet different statements.

## Disable the TSI Service in Open Dental / Hide the TSI button

1. In the Main Menu, click Setup, Program Links. Double-click on Transworld.
2. Uncheck the *Enabled* box.
3. Check the *Hide Unused Button* box to hide the button in the Manage Module.
4. Click OK to save.