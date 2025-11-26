Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Version 17.4

See [Versions](versions.html).

Version 17.4 was released on 5/2/2018.

Blog: [Stable Version 17.4 Highlights](https://opendental.blog/2018/05/09/software-update-stable-version-17-4/)

Major Changes
**DoseSpot**: New ePrescribing option with DoseSpot. Features two-way medication syncing, proxy clinicians, and provider notifications for prescriptions ready to send. [DoseSpot](https://www.opendental.com/manual174/dosespot.html)

**Patient Portal:** New methods to automate providing access to the patient portal. [Granting Access to the Portal](https://www.opendental.com/manual174/portalaccess.html)

* Email automated Patient Portal Invitations before or after a scheduled appointment. Invitations include the credentials to access the portal. [Setting up the Patient Portal](https://www.opendental.com/manual174/portalhostedbyod.html)
* Include the patientPortalCredentials static text field on a sheet. When the sheet is generated for a patient who has not yet accessed the portal, portal login credentials will display on the sheet. [Granting Access to the Portal](https://www.opendental.com/manual174/portalaccess.html)

**eReminders and eConfirmations**

* Create an unlimited number of eReminder rules per appointment. [Setting up eReminders](https://www.opendental.com/manual174/ereminderssetup.html)
* Customize the aggregated text and email messages sent to multiple family members at once. [Setting up eReminders](https://www.opendental.com/manual174/ereminderssetup.html), [Setting up eConfirmations](https://www.opendental.com/manual174/econfirmationsetup.html)

**Web Sched Verify:** When a patient successfully books a Web Sched Recall, New Patient, or ASAP appointment online, follow up with an automated verification message that includes appointment details. [Web Sched Verify](https://www.opendental.com/manual174/webschedverify.html)

**Account Collections using Transworld Systems Interface:** [TSI (Transworld) Billing and Collections Service](https://www.opendental.com/manual174/tsicollections.html)

* Send past due accounts to collections using the Transworld program link. [Set up the TSI Program Link](https://www.opendental.com/manual174/tsisetup.html)
* Manage accounts in the Transworld window, including suspending and cancelling collections. [TSI Interface](https://www.opendental.com/manual174/tsimanage.html)
* Accept payments directly through Transworld. [Payments to a TSI Account](https://www.opendental.com/manual174/tsipayment.html)

Changes by Category
**Account**

* Preference to 'Allow storing credit card numbers' removed from Account Module preferences. [Account Module Preferences](https://www.opendental.com/manual174/modulesetupaccount.html)
* Add adjustments for multiple procedures using Add Multiple in the Adjustment dropdown or by right-clicking the Account module grid. [Adjustments](https://www.opendental.com/manual174/adjustments.html)
* Credit filter added to Add Multiple window. [Add Multiple Adjustments Window](https://www.opendental.com/manual174/adjustmentsmultiwindow.html)
* Preference to allow/block emailing of credit card receipts when entering a patient payment. [Account Module Preferences](https://www.opendental.com/manual174/modulesetupaccount.html)
* Set a default processing method for PayConnect in the program link. [Set up PayConnect (a single set of credentials)](https://www.opendental.com/manual174/payconnectsetup.html)
* Enforce Valid Adjustments preference can force adjustment provider to match attached procedure. [Account Module Preferences](https://www.opendental.com/manual174/modulesetupaccount.html)
* View number of patients attached to a discount plan in the Discount Plans window, Pats column. [Discount Plans](https://www.opendental.com/manual174/discountplans.html)

**Alerts**

* Alert notifies user about appointments scheduled via Web Sched ASAP. Quickly open the Web Sched Appointments report. [Alerts](https://www.opendental.com/manual174/alerts.html)
* Alert indicates when the eConnector is down. [Alerts](https://www.opendental.com/manual174/alerts.html)
* Alert indicates when the eConnector has an error. [Alerts](https://www.opendental.com/manual174/alerts.html)
* Alert notifies user when the MySQL server has more than half the allowed connections. [Alerts](https://www.opendental.com/manual174/alerts.html)

**Appointments**

* Unscheduled and planned appointments, as well as recalls, can be marked ASAP and added to the ASAP list. [ASAP List](https://www.opendental.com/manual174/asaplist.html)
* Option to create blockout types that do not allow appointment scheduling. [Definitions: Blockout Types](https://www.opendental.com/manual174/definitionsblockouts.html)
* Option to create blockout types that do not allow cut/copy/paste. [Definitions: Blockout Types](https://www.opendental.com/manual174/definitionsblockouts.html)[Blockouts](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7blockouts.html)
* Create and edit "No Schedule" and "Don't cut copy paste" blockouts without the blockout permission. [Permissions](https://www.opendental.com/manual174/permissions.html), [Blockouts](https://www.opendental.com/manual174/blockouts.html)
* Appointment module preferences have been divided into two tabs: Appearance and Behavior. [Appointment Module Preferences](https://www.opendental.com/manual174/modulesetupappts.html)
* Preference to set a default length for appointments without attached procedures. [Appointment Module Preferences](https://www.opendental.com/manual174/modulesetupappts.html)
* Add scheduling notes per provider. Notes are visible in the Appointments module when clicking on an operatory header. [Edit Provider Window](https://www.opendental.com/manual174/providerseditwindow.html)
* Add scheduling notes per clinic. Notes are visible in the Appointments module when clicking on an operatory header. [Edit Clinic Window](https://www.opendental.com/manual174/cliniceditwindow.html)
* Options to add net production and patient portion to an appointment view. [Appointment View Edit Window](https://www.opendental.com/manual174/appointmentvieweditwindow.html)
* Sent eReminders and eConfirmations show in the Communications Log grid of the Edit Appointment window. [Edit Appointment Window](https://www.opendental.com/manual174/aptedit.html)
* Option to view merged patients in the Select Patient window. [Selecting Patients](https://www.opendental.com/manual174/patientselect.html)
* User is warned if they attempt to make an appointment for a merged patient, and prompted to switch to active patient. [Merge Patients](https://www.opendental.com/manual174/mergepatients.html)

**Billing**

* Statements show patnums after the patient's name for an individual and in a column for a superfamily. [Super Families](https://www.opendental.com/manual174/superfamily.html)
* Include patient last name in the rows of a statement. [Statement Window](https://www.opendental.com/manual174/statementwindow.html)
* Preference to add compounding interest to finance charges in the Finance/Billing Charges window. [Billing / Finance Charges](https://www.opendental.com/manual174/financecharges.html)

**Bridges**

* New command line available fields added for custom program links. [Custom Bridges](https://www.opendental.com/manual174/bridgecustom.html)
* CADI bridge. [Bridge - CADI](https://www.opendental.com/manual174/bridgecadi.html)
* HDX WILL bridge. [Bridge - HDX Will](https://www.opendental.com/manual174/bridgehdxwill.html)
* New substitution output text field for [Address2] added for custom bridges. [Custom Bridges](https://www.opendental.com/manual174/bridgecustom.html)
* For custom bridge output text files, an additional replacement field added for birthdate format yyyy-MM-dd. [Custom Bridges](https://www.opendental.com/manual174/bridgecustom.html)

**Canada**

* IsAccident field on printed claim forms shows an X if there is a set Accident Date. [Claims - Canada](https://www.opendental.com/manual174/canadaclaims.html)

**Chart**

* Preference to merge procedures notes when multiple users attempt to edit concurrently. [Procedure Notes](https://www.opendental.com/manual174/procedurenotes.html)
* RCT paint type added for pulpectomy on primary teeth. [Primary Teeth](https://www.opendental.com/manual174/primary.html)
* Allow saving XVWeb images from the Chart module. [XV Web Integration](https://www.opendental.com/manual174/xvwebintegration.html)
* XVWeb images show as thumbnails as they are downloaded in the Chart module. [XV Web Integration](https://www.opendental.com/manual174/xvwebintegration.html)
* Referral letters can show tooth chart, including procedures and tooth chart legend. [Sheet Elements and Options](https://www.opendental.com/manual174/sheetsaddelements.html)
* When the User column is added to the Chart View, email line items will indicate who was logged on when the email was sent.  [Show Tab / Chart Views](https://www.opendental.com/manual174/showtabchart.html)
* Progress notes update when tooth selections are changed in the tooth chart. 'Show Selected Teeth' must be checked. [Chart Module](https://www.opendental.com/manual174/chart.html)
* Delete procedures that are attached to a preauthorization. [Preauthorizations](https://www.opendental.com/manual174/preauth.html)

**Clinics**

* Save default dunning and general messages per clinic. [Dunning Messages](https:///manual174/billingdunningmsg.html), [Billing Defaults](https://www.opendental.com/manual174/billingdefaults.html)
* The billing list can be run for multiple specific clinics. [Billing List](https://www.opendental.com/manual174/billinglist.html)
* Turning clinics off when eServices are enabled triggers a popup to disable or keep eServices. [Clinics](https://www.opendental.com/manual174/clinics.html), [Show Features](https://www.opendental.com/manual174/showfeatures.html)
* Run Global Fee Update for multiple clinics at once. [Updating Fees for Treatment Planned Procedures](https://www.opendental.com/manual174/feesupdate.html)

**Rx / eRx**

* 17.4.12 - New ePrescribing option with DoseSpot. Features two-way medication syncing, proxy clinicians, and provider notifications for prescriptions ready to send. [DoseSpot](https://www.opendental.com/manual174/dosespot.html)
* Pharmacy information auto populates in the Edit Rx window for electronic prescriptions. [New Rx / Write a Prescription](https://www.opendental.com/manual174/rx.html)
* Add a CDT procedure code to a printed prescription. [Edit Clinic Window](https://www.opendental.com/manual174/cliniceditwindow.html), [Prescription List](https://www.opendental.com/manual174/rxsetup.html)
* Output text fields for Rx Sheets have been renamed and have new functionality. [Sheets: Rx / Single Prescriptions](https://www.opendental.com/manual174/sheetsrx.html)
* RxNorm codes are now used to standardize medications in the United States and download automatically if they are not imported. [RxNorms](https://www.opendental.com/manual174/rxnorms.html)

**eServices**

* eReminders and eConfirmations
  + Create an unlimited number of eReminder rules per appointment. [Setting up eReminders](https://www.opendental.com/manual174/ereminderssetup.html)
  + Customize the aggregated text and email messages sent to multiple family members at once. [Setting up eReminders](https://www.opendental.com/manual174/ereminderssetup.html), [Setting up eConfirmations](https://www.opendental.com/manual174/econfirmationsetup.html)
  + Confirmation statuses set as triggers for Time Arrived, Time Seated, and Time Dismissed are excluded when sending eReminders or eConfirmations. [Appointment Confirmation Status](https://www.opendental.com/manual174/confirmationstatus.html)
* Web Sched
  + Web Sched Verify: When a patient successfully books a Web Sched Recall, New Patient, or ASAP appointment online, follow up with an automated verification message that includes appointment details. [Web Sched Verify Messages](https://www.opendental.com/manual174/webschedverify.html)
  + Patients can request to be notified of an earlier opening when scheduling online via Web Sched Recall. [Web Sched Recall: What Patients See](https://www.opendental.com/manual174/webschedrecallsees.html)
  + Aggregated Web Sched Recall messages will generate a commlog for each patient. [Recall List](https://www.opendental.com/manual174/recalllist.html), [Web Sched Recall Setup](https://www.opendental.com/manual174/webschedrecallsetup.html)
  + Option to force patients to use the U.S. 10 digit format when entering phone numbers in the Web Sched New Patient interface. [Setting up Web Sched New Patient](https://www.opendental.com/manual174/webschednewpatsetup.html)
  + Web Sched ASAP appointments added to the Web Sched Appointments report. [Web Sched Appointments Report](https://www.opendental.com/manual174/webschedapptreport.html)
* Text Messaging window limited to 100 messages. Use paging buttons to see additional texts if over 100. [Text Messaging Inbox](https://www.opendental.com/manual174/textmsginbox.html)
* Patient Portal [Patient Portal](https://www.opendental.com/manual174/patientportal.html)
  + New methods to automate providing access to the patient portal. [Granting Access to the Portal](https://www.opendental.com/manual174/portalaccess.html)
    - Email automated Patient Portal Invitations before or after a scheduled appointment. Invitations include the credentials to access the portal. [Setting up the Patient Portal, Patient Portal Invites](https://www.opendental.com/manual174/portalhostedbyod.html)
    - Include the patientPortalCredentials static text field on a sheet. When the sheet is generated for a patient who has not yet accessed the portal, portal login credentials will display on the sheet. [Granting Access to the Portal, patientPortalCredentials Static Text Field](https://www.opendental.com/manual174/portalaccess.html)
  + Passwords generated by Open Dental are random, 8 digit one-time use passwords. Patients will be prompted to change their credentials when they first log in to the portal. [Granting Access to the Portal](https://www.opendental.com/manual174/portalaccess.html)
* eConnector service enhancements. [eConnector](https://www.opendental.com/manual174/econnector.html)
* Web form birthdate format is based on the Windows region settings of the office. [Web Forms: What Patients See](https://www.opendental.com/manual174/webformspatient.html)

**Family**

* Patient merge improvements. [Merge Patients](https://www.opendental.com/manual174/mergepatients.html)
* Prompt to remove future appointments for patients marked "deceased". [Edit Patient Information Window](https://www.opendental.com/manual174/patientedit.html)
* Check for duplicate patients from the Add Family window. [Enter New Patients by Family](https://www.opendental.com/manual174/familyadd.html)
* Referral sources can be designated "preferred". [Referral List](https://www.opendental.com/manual174/referralsetup.html)
* Option to view merged patients in the Select Patient window. [Selecting Patients](https://www.opendental.com/manual174/patientselect.html)
* Search for patients by invoice number in the Select Patient window. [Display Fields](https://www.opendental.com/manual174/displayfields.html)
* Preference to automatically sync the email address of the guarantor to all family members in the Add Family window. [Family Module Preferences](https://www.opendental.com/manual174/modulesetupfamily.html)
* Referral letters that contain a procedure grid or tooth chart are saved as PDF. [Referral Letters](https://www.opendental.com/manual174/letterreferral.html)
* Family module preference for 'Insurance plans default to show UCR fee on claims' now sets all plans to use UCR fees instead of just category percentage plans. [Family Module Preferences](https://www.opendental.com/manual174/modulesetupfamily.html)

**Fees**

* Show Hidden checkbox for procedure codes can only be accessed from Lists, Procedure Codes. [Procedure Code List](https://www.opendental.com/manual174/procedurecode.html)
* Removed 'Import eCW' button from the Fee Tools window. [Fee Tools](https://www.opendental.com/manual174/feescheduletools.html)
* Update write-off estimates independently from fee schedules in the Fee Tools window. [Updating Fees for Treatment Planned Procedures](https://www.opendental.com/manual174/feesupdate.html)

**Insurance**

* Access other parts of Open Dental while the Batch Insurance Payments window is open, when accessed from the Manage module. [Batch Insurance Payments](https://www.opendental.com/manual174/claimpaymentbatch.html)
* Access other parts of Open Dental while the Insurance Payment (EOB) window is open, when accessed from the Batch Insurance Payments window. [Batch Insurance Payments](https://www.opendental.com/manual174/claimpaymentbatch.html)
* Filter outstanding claims in the Insurance Payment (EOB) window by ClaimID. [Batch Insurance Payments](https://www.opendental.com/manual174/claimpaymentbatch.html)
* Search outstanding claims by full name in the Insurance Payment (EOB) window. [Batch Insurance Payments](https://www.opendental.com/manual174/claimpaymentbatch.html)
* Preference to allow future dated insurance payments. [Account Module Preferences](https://www.opendental.com/manual174/modulesetupaccount.html), Insurance tab
* Request benefit information for non-subscribers. [Electronic Benefits](https://www.opendental.com/manual174/ebenefits.html)
* Detailed progress bar added to Get Reports function in Insurance Claims window. [Managing Insurance Claims](https://www.opendental.com/manual174/claimsend.html)
* Customize the default format of a new Claim ID using Claim Identification Prefix in Account Module Preferences, Insurance tab. [Account Module Preferences](https://www.opendental.com/manual174/modulesetupaccount.html)
* Insurance Verification time calculation enhancements. [Insurance Verification List](https://www.opendental.com/manual174/insverifylist.html)
* New Definitions category for Carrier Group Names. [Definitions, Carrier Group Names](https://www.opendental.com/manual174/definitionscarriergroupnames.html)
* Associate an insurance carrier with a carrier group. [Insurance Carrier List](https://www.opendental.com/manual174/carriers.html)
* New Medicaid COB rule for secondary insurance. [COB Rules](https://www.opendental.com/manual174/cob.html)
* Customize printed ERAs using Sheets. [Customizing an ERA Using Sheets](https://www.opendental.com/manual174/sheetsera.html)
* Customize the header that prints on customized ERA sheets. [Customizing the ERAGridHeader using Sheets](https://www.opendental.com/manual174/sheetseragridheader.html)
* Attach supplemental payments (claim reversals and claim correcitons) to their claims in the ERA window. [Process ERAs](https://www.opendental.com/manual174/eraprocess.html)
* View write-off and deductible amounts in the ERA window and ERA Claim Details window. [Process ERAs](https://www.opendental.com/manual174/eraprocess.html)
* The Ins Payment Create permission is required to access the ERA window from Manage Module. [Permissions](https://www.opendental.com/manual174/permissions.html), [Manage ERAs](https://www.opendental.com/manual174/claimsERA835Manage.html)
* Add tracking status directly to claims on an ERA. [Tracking an Outstanding ERA](https://www.opendental.com/manual174/claimsera835trackingstatus.html)

**Payments**

* Sort the Outstanding Charges grid on the Payment window by column. Filter by date range, provider, clinic, patient, code, and amount ending. [Payment Window](https://www.opendental.com/manual174/payment.html)
* Checkbox on the Payment window determines if super family member charges and splits show. [Payment Window](https://www.opendental.com/manual174/payment.html)
* Merged Force users to attach procedures to adjustments with Enforce Valid Adjustments in Account Module Preferences. [Account Module Preferences](https://www.opendental.com/manual174/modulesetupaccount.html)
* Allow users to preselect account charges when adding a new payment. [Entering a Credit Card Patient Payment](https://www.opendental.com/manual174/paymentpatientcreditcard.html), [Entering a Non-Credit Card Payment](https://www.opendental.com/manual174/paymentpatientother.html)
* The "Prefer this patient" checkbox only shows if the family has multiple patients. [Entering a Credit Card Patient Payment](https://www.opendental.com/manual174/paymentpatientcreditcard.html), [Entering a Non-Credit Card Payment](https://www.opendental.com/manual174/paymentpatientother.html)
* Preference to remove prompt that suggests allocating unearned income when creating a claim. [Account Module Preferences](https://www.opendental.com/manual174/modulesetupaccount.html)
* Paysplit manager added to income transfer window. [Income Transfer](https://www.opendental.com/manual174/incometransfer.html)

**Reports**

* In the Unearned Income Report, filter out families that have a zero net dollar unearned income balance. [Unearned Income Report](https://www.opendental.com/manual174/reportunearnedincome.html)
* Birthday Report date range includes year. [Birthday Report](https://www.opendental.com/manual174/reportbirthdays.html)
* Daily Payments Report preference to show payment splits by provider or not. [Daily Payments Report](https://www.opendental.com/manual174/reportdailypayments.html)
* Sort the Treatment Finder report by column heading. [Treatment Finder Report](https://www.opendental.com/manual174/reporttreatfinder.html)
* Unfinalized payments show on the Reports window. [Standard Reports](https://www.opendental.com/manual174/reportsstandard.html)
* Two providers with the same first and last name can run Production and Income and Daily Payments reports when one of the providers has the permission to do so. [Production and Income Reports](https://www.opendental.com/manual174/reportprodinc.html), [Daily Payments](https://www.opendental.com/manual174/reportdailypayments.html)
* New Custom Aging report allows users to choose which transactions to include. [Custom Aging Report](https://www.opendental.com/manual174/reportcustomaging.html)
* Exclude archived patients from the Aging of AR report. [Aging of A/R Report](https://www.opendental.com/manual174/reportaging.html)
* Run the Graphic Reports on a report server. [Report Server](https://www.opendental.com/manual174/reportserver.html)
* The Outstanding Insurance Claims report has its own Display Fields category, allowing report customization. [Display Fields](https://www.opendental.com/manual174/displayfields.html)
* New filter options for Outstanding Insurance Claims report. [Outstanding Insurance Claims Report](https://www.opendental.com/manual174/reportoutins.html)
* Patient date of birth field added to Outstanding Insurance Claims report. [Outstanding Insurance Claims Report](https://www.opendental.com/manual174/reportoutins.html)
* Deleted providers no longer show on reports. [Provider List](https://www.opendental.com/manual174/providers.html)
* Unfinalized Payments Report enhancements. [Unfinalized Payments Report](https://www.opendental.com/manual174/reportunfinalizedinsurancepayments.html)
* The write-off estimates optionally aged in the aging report are now aged by procedure date instead of claimsnapshot date. [Aging of A/R Report](https://www.opendental.com/manual174/reportaging.html)
* In the Production and Income report, optionally show both procedure date for write-off estimates and insurance pay date for write-off adjustments using the "both" radio button. [Production and Income Reports](https://www.opendental.com/manual174/reportprodinc.html)
* Query Favorites are searchable. [Query Favorites](https://www.opendental.com/manual174/queryfavorites.html)
* Production and Income reports and Daily Payments reports have a separate checkbox to include Unearned Income independently of attached provider. [Production and Income Reports](https://www.opendental.com/manual174/reportprodinc.html), [Daily Payments](https://www.opendental.com/manual174/reportdailypayments.html)
* Four Unearned Income reports show in the Unearned Income reports window. [Unearned Income Report](https://www.opendental.com/manual174/reportunearnedincome.html)
  + [Unearned Allocation report](https://www.opendental.com/manual174/reportunearnedallocation.html)
  + [Net Unearned Income report](https://www.opendental.com/manual174/reportnetunearnedincome.html)
  + [Line Item Unearned Income report](https://www.opendental.com/manual174/reportlineitemunearned.html)
  + [Unearned Accounts report](https://www.opendental.com/manual174/reportunearnedaccounts.html)

**Security**

* Interface changes to the Security window. [Security Window](https://www.opendental.com/manual174/security.html)
  + Security window divided into a Users tab, User Group Tab. [Security Window](https://www.opendental.com/manual174/security.html)
  + Global Security Settings are accessible via a Settings menu item on the Security window. [Global Security Settings](https://www.opendental.com/manual174/securitysettings.html)
  + Users tab shows the user's group and a read-only overview of the group's security permissions. [Security Window](https://www.opendental.com/manual174/security.html)
  + Users Group tab shows the group's permissions as well as all users in the group. Use this tab to assign permissions to the group. [Adding or Renaming User Groups](https://www.opendental.com/manual174/securityusergroups.html)
* Users can be associated to multiple user groups. [User Security Profiles](https://www.opendental.com/manual174/securityusers.html)
* Logging off of Open Dental now triggers an OK/No prompt. Set default behavior with a preference. [Security: Logging On/Off](https://www.opendental.com/manual174/securitylogin.html)
* Patient Edit permission logs an entry in the audit trail when a patient is moved to a different family, or patient information is changed and saved. [Permissions](https://www.opendental.com/manual174/permissions.html)
* Fee Schedule Edit permission restricts editing fee schedules from the Setup and Lists menus. [Permissions](https://www.opendental.com/manual174/permissions.html), [Fee Schedules](https://www.opendental.com/manual174/feeschedules.html)
* Referral Edit permission allows/blocks user from editing or deleting referrals. It is tracked in the audit trail. [Permissions](https://www.opendental.com/manual174/permissions.html)
* Perio Chart Edit permission logs an entry in the audit trial when a perio exam is added, deleted, or copied. [Permissions](https://www.opendental.com/manual174/permissions.html)
* Procedure Code Edit permission logs changes to individual procedure codes. [Permissions](https://www.opendental.com/manual174/permissions.html)
* Recall Edit permission logs changes to recalls, recall types, and recall triggers. [Permissions](https://www.opendental.com/manual174/permissions.html)
* When a task is deleted, an entry is made in the security log that records the tasknum of the deleted task. [Permissions](https://www.opendental.com/manual174/permissions.html)
* Security Admin permission logs an entry in the audit trail when permissions are granted or revoked for user groups. [Permissions](https://www.opendental.com/manual174/permissions.html)
* PreAuth Sent Edit permission allows/blocks user from editing preauths that have already been sent. [Permissions](https://www.opendental.com/manual174/permissions.html), [Preauthorizations](https://www.opendental.com/manual174/preauth.html)
* Filter the audit trail based on the last time an item was edited. [Audit Trail](https://www.opendental.com/manual174/audittrail.html)
* New audit trail column displays the date and time of the change before last. [Audit Trail](https://www.opendental.com/manual174/audittrail.html)
* Claim History Edit permission has a user group lock date instead of a global lock date. [Permissions](https://www.opendental.com/manual174/permissions.html)
* Lock dates are no longer considered when procedures have a status of EO or EC. [Security Lock Dates](https://www.opendental.com/manual174/securitylockdates.html)

**Miscellaneous** Generate a unique serial number for equipment entries. [Equipment](https://www.opendental.com/manual174/equipment.html)
 Set a tab order for combo boxes on sheets. [Filling out Sheets](https://www.opendental.com/manual174/sheetsfillout.html)
 Use the Int Link button to add a new page in the wiki. [Wiki Page: Add / Edit](https://www.opendental.com/manual174/wikiaddedit.html)
 An error indicates when an incorrect password is entered in the Service Manager during an installation attempt. [Service Manager](https://www.opendental.com/manual174/servicemanager.html)
 Option to display information entered in old, renamed custom patient fields. [Custom Patient Fields](https://www.opendental.com/manual174/custompatientfields.html)
 Access Quick Paste Notes through the Setup menu. [Main Menu](https://www.opendental.com/manual174/mainmenu.html)
 Single practices can now add specialities to patient clones when creating the clone. [Patient Clones](https://www.opendental.com/manual174/patientclone.html)
 Preference to send Unhandled Exception report directly to Open Dental support. [Miscellaneous Setup](https://www.opendental.com/manual174/miscsetup.html), [Unhandled Exceptions](https://www.opendental.com/manual174/unhandledexception.html)
 Apteryx images can be saved to the Open Dental Images module. [XV Web Integration](https://www.opendental.com/manual174/XVWebIntegration.html)
 FHIR includes allergies, medications, and conditions. [FHIR Restful API Service](https://www.opendental.com/manual174/fhir.html)
 Denti-Cal testing for new SFTP paths. [Denti-Cal](https://www.opendental.com/manual174/dentical.html)
 When copying a fee schedule, a message will indicate when the copy is done. [Copying Fee Schedules](https://www.opendental.com/manual174/feeschedulecopy.html)
 Enhancements to the Select Patient window. [Selecting Patients](https://www.opendental.com/manual174/patientselect.html)
 Added a database maintenance to find payments that are attached to an incorrect payment plan type, paysplits that are attached to insurance payment plans, and claim payments that are attached to patient payment plans. [DBM Log Results](https://www.opendental.com/manual174/dbmlogresults.html)
 Improvements to overallocation warning messages. [Payments](https://www.opendental.com/manual174/paymentpatient.html), [Adjustments](https://www.opendental.com/manual174/adjustments.html), [Insurance Payments](https://www.opendental.com/manual174/claimpayment.html), [Claim Procedure](https://www.opendental.com/manual174/claimprocedure.html)
 Removed SecurityLogInvalidKeyDBM. [Database Maintenance](https://www.opendental.com/manual174/databasemaintenance.html)
 Display Field window enhancements. [Display Fields](https://www.opendental.com/manual174/displayfields.html)

**Enhancements**
 Use an internal MD5 hash algorithm implementation instead of the .NET framework cryptography implementation.
 Load time improvements in Account module. [Account Module](https://www.opendental.com/manual174/account.html)
 Improved update speed. [Updating Open Dental](https://www.opendental.com/manual174/update.html)
 Open Dental generally uses less memory.
 Speed enhancements to Middle Tier. [Middle Tier](https://www.opendental.com/manual174/middletier.html)
 Speed enhancements to processes involving fees.