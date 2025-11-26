Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Version 21.1

See [Versions](versions.html)

Version 21.1 was released on 06/01/2021.

![](images/youtubeLogo.png) Overview of [Version 21.1](https://youtu.be/CEspTRpQvic)

## Major Changes

**Discount Plans**: Have more control over discount plan setup. [Discount Plans](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7discountplans.html), [Discount Plan Subscriber Edit](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7discountplan.html)

* Allow for plan notes and subscriber notes.
* Create and add frequency limitations.
* Allow an annual max.
* Discount Plans are automatically assigned a Plan ID Number.
* Discount plan amount now considers the unit quantity.

**Open Dental Mobile**: View reports from a mobile device. [ODMobile Menu](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7opendentalmobilemenu.html)

**Treatment Plan**: Taxable procedures can display tax amount. [Display Fields](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7displayfields.html), [Treatment Plan Module](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7treatmentplan.html)

## Changes by Category

**Account Module**

* When using Blue Book, default the cursor into the Allowed column when entering claim payments. [Receive Claim](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7claimreceive.html)
* Account Module always displays Quick Procs, even if user does not have *Account Procs Quick Add* permission. [Quick Procs](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7quickprocs.html), [Permissions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7permissions.html)
* Allow associating treatment planned procedures with dynamic payment plans. [Payment Plan](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paymentplandynamic.html)
* Payment Plan Tx Credits include Discount Plan adjustments in *Rem Before* amounts. [Payment Plan Procedures and Credits](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paymentplantxcredits.html)
* Block moving credit cards with recurring charges between patients. (also backported to 20.5.39) [Credit Card Manage](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7creditcardsmanage.html)
* Deleting a credit card now checks for duplicate tokens. (Also backported to 20.4.61 and 20.5.40) [Authorize Recurring Charges](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7recurringchargesauthorize.html)
* Payment type is now required before voiding a transaction. (Also backported to 20.5.43) [Payment](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7payment.html)
* Dynamic Payment Plan interest calculation now only considers the principal for completed procedures when *Await procedure completion* is selected. [Payment Plan](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paymentplandynamic.html)

**Chart Module**

* Paging is disabled when progress notes are sorted by a column. [Chart Module](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7chart.html)
* Re-order procedures on a procedure button. [Procedure Buttons](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7procedurebuttons.html)
* Patient information in Open Dental updates in DoseSpot. (Also backported to 20.5.33) [DoseSpot eRx / Prescription](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7dosespotuse.html)
* Patient last name displays on superfamily commlogs in the Chart Module when the patient first name field is blank.[Show Chart Views](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7showtabchart.html), [Commlog](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7commlog.html)

**eServices**

* Text message sent when an attempt to confirm an appointment fails. [eConfirmations](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html)
* Improved phone number matching for incoming text messages. (Also backported to 20.5.49) [Text Messaging Mailbox](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7textmsginbox.html)
* Web Sched Recall can group by family. [Recall List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7recalllist.html)
* Mobile Settings button added to eService Setup window. [Mobile App Credentials](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7mobilesettings.html), [eServices Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7eservicessetup.html)
* Added eService Activity Log. [eService Activity Log](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7eserviceactivitylog.html)
* Removed the *Show Pre-Screen Questions* option from eService Web Sched Advanced window. (Also backported to 20.5.47) [Web Sched Advanced](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webschedadvanced.html)
* Web Sched Existing Patient can have either text or email available for two-factor authentication. [Web Sched Advanced](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webschedadvanced.html)
* Web Sched appointments report default date range is now from one month in the past, to the current date. [Web Sched Appointments Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webschedapptreport.html)
* Added eClipboard appointment confirmation status option. [eConfirmations](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html)
* Offices can use their own email address when sending mass emails. [Hosted Email Address Verification](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7hostedemailaddressverification.html)
* Allow sending BYOD link when appointment is in a status other than Arrived. [Automated Messaging](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7automatedmessaging.html)
* Preference to have appointments with a specified status not change when checking in via eClipboard. [Automated Messaging](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7automatedmessaging.html)

**Family Module**

* Added a date picker dropdown to the Birthdate text box in the Edit Patient Information window. [Edit Patient Information](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7patientedit.html)
* Merged patients are removed from superfamilies if they were placed in one. [Merge Patients](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7mergepatients.html)

**Imaging Module**

* Item Info window now displays after importing files and using the Paste button. [Imaging Module](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7images.html), [Image Info](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7imageinfo.html)
* Patient selection is cleared when switching users while in the Imaging Module. [Imaging Module](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7images.html)

**Manage Module**

* Add new employers when importing insurance plans. [Import Ins Plan 834](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7importinsplans834.html)
* On Hand Quantity added to Supply and Inventory. [Supplies](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7supplies.html)
* TSI users can print or export the Account Receivable Manager grid. [TSI Collections](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7tsicollections.html)
* Updated terminology in TSI Setup window and Account Receivable Manager. [TSI Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7tsisetup.html), [TSI Collections](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7tsicollections.html)
* Right-click options to quickly access patients and tasks. [Task](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7tasks.html), [Commlog](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7commlog.html)
* Ability to have multiple task lists open at once. [Manage Module](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7manage.html)
* Added tasknum to task window. [Task](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7tasks.html), [Task Window](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7taskswindow.html)
* Enhancements to emails automatically downloaded to the email inbox from Gmail. [Email Address Edit](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7emailaddressedit.html)
* 'Email Inbox' updated to 'Email Client' and now includes a sent messages filter. [Email Client](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7emailinbox.html)
* Remove Old Data tool includes the *EmailMessage* table. [Remove Old Data](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7removeolddata.html)
* Clinic button added to the TSI A/R Manager. [TSI Collections](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7tsicollections.html)

**Reports**

* Custom Aging Report displays when a provider is marked as hidden. [Custom Aging Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportcustomaging.html)
* Optimized the payment plans report. [Payment Plans Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportpaymentplan.html)
* Procedures with deleted procedure notes are now included on the Incomplete Procedure Notes Report when *Include procedures with no notes* is checked. [Incomplete Procedure Notes Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportincompleteprocnote.html)

**Security**

* Audit trail tracks when patient status is changed. [Audit Trail Permissions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7audittrailpermissions.html)
* Ability to filter the user list when logging into Open Dental. [Log On](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7securitylogin.html)
* Security log added when a patient's Text OK status is changed. [Text Message](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7textmessages.html), [Audit Trail Permissions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7audittrailpermissions.html)

**Treatment Plan Module**

* Use custom sheets per clinic for Treatment Plans. [Sheet Def Defaults](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7sheetdefaults.html)
* Allow users without the *Insurance Payment Create* security permission to enter insurance payment estimates on preauthorizations. (Also backported to 20.5.45) [Preauthorization](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7preauth.html), [Permissions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7permissions.html)

**Miscellaneous**

* Button for None added to definitions picker window. [Definitions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7definitions.html)
* Diagnostics window shows count of hidden clinics. [Diagnostics](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7diagnostics.html)
* CareCredit shows batch Quickscreen transactions. [CareCredit Transactions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7carecredittransactions.html)
* CareCredit batch and manual Quickscreen round the estimated fee to the nearest dollar. (Also backported to 20.4.60 and 20.5.38) [CareCredit Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7carecreditsetup.html), [CareCredit Action](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7carecreditaction.html)
* New CareCredit status on the appointment right-click options. [Appointments Module](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appointments.html)
* Database maintenance method for PatientMissing moved to the Tools tab. [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html)
* Database maintenance method to un-delete procedures associated with income. [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html)
* Database maintenance method for invalid Canadian ROT responses. (Also backported to 20.5.49) [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html)
* Database maintenance methods automatically moved to Old tab when they do not need to be run again. [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html)
* Procedures on appointment transfer to patient and referral letters. [Static Text Field Names](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7statictextfields.html)
* When a shutdown signal is received, users will be automatically closed out of Open Dental without warning. [Miscellaneous Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7miscsetup.html)
* Added user preference to the *Ignore Content* checkbox for wiki search. [Wiki Search](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7wikisearch.html)
* Appointment Module net production includes TP procedure discounts when the *Add daily adjustments to net production* preference is checked. [Production Totals](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7productiontotals.html), [Appointments Module Preferences](https://www.opendental.com/manual211/modulesetupappts.html), [TP Procedure Discount](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7treatmentplandiscounts.html)
* Procedure Code Tools now fix D code abbreviations. (Also backported to 20.5.41) [Procedure Code Tools](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7procedurecodetools.html)
* Emails created from the Fill Sheet window now default the From field to the logged-on user's email address. (Also backported to 20.5.41) [Fill Sheet](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7sheetsfillout.html), [Email Message Edit](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7emailmessage.html)
* Insurance Plan List filters updated. (Also backported to 20.5.43) [Insurance Plans](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7insplanlist.html)
* EDS electronic statements are now batched into a single file. (Also backported to 20.5.43) [Billing Defaults](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7billingdefaults.html), [Manage Module Preferences](https://www.opendental.com/manual211/modulesetupmanage.html)
* Commlogs are now only considered automatic if created by the OpenDentalService, eConnector, FHIR, etc. (Also backported to 20.4.62 and 20.5.45) [Commlog](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7commlog.html)
* Field to use either the patient's preferred name or patient's first name. (Also backported to 20.5.51) [Static Text Field Names](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7statictextfields.html), [Program Link Output File](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7programlinkoutputfile.html), [Mass Email Templates](https://www.opendental.com/manual211/massemailtemplates.html), [Email Message Edit](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7emailmessage.html)
* Code System Import is accessible regardless of if EHR is turned on. (Also backported to 20.5.51) [Importing Code Systems](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7codesystemimport.html)
* Security Admin permission required to add IP Address to Cloud Management. ["Security Admin" Permission](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7permissionssecurityadmin.html)
* Open Dental Cloud permission to allow login from any location. [Open Dental Cloud Sign In](opendentalcloudsignin.html)