[![Open Dental Software](resources/logo.png)](../index.html)

503-363-5432

☰

* [Home](../index.html)
* [Trial Version](trial.html)
* [Order](order.html)
* [Documentation](documentation.html)
* [Forum](http://opendentalsoft.com/forum/)
* [Contact Us](contact.html)
* [![](resources/iconSearch.gif)](searchSite.html)

# Version 18.2

See [Versions](versions.html)

Version 18.2 was released on 09/21/2018. EHR certified 2014 edition.

.NET 4.5.2 is required. See [.NET](dotnet.html) to upgrade (Windows 7 users).

## Major Changes

* Enter a term date for a provider to restrict sending claims or prescriptions, and scheduling or completing appointments. [Provider](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7providerseditwindow.html)
* New Patient Status Setter tool to inactivate patients that have not been in for a specified time. [Patient Status Setter](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7patientstatussetter.html)
* ACH option added for Pay Simple. [PaySimple Add Card](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paysimpleaddcard.html)
* Income transfer manager. [Income Transfer](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7incometransfer.html)
* 2018 ICD 10 codes. [ICD-10 Codes](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7icdcodes.html)
* Integration with DentalXChange Attachment Service. [DentalXChange Attachment](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7dentalxchangeattachmentservice.html)

## Changes by Category

**Account Module**

* ACH option added for Pay Simple. [PaySimple Add Card](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paysimpleaddcard.html)
* Closing a payment plan will no longer remove remaining future adjustments. [Close Payment Plans](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paymentplanclose.html)
* Provider column added to Payment Plan Procedures and Credits window. [Payment Plan Procedures and Credits](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paymentplantxcredits.html)
* Warning occurs when a procedure's provider is different from the payment plan's provider. [Old Payment Plan](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paymentplanpatient.html)
* Speed enhancements. [Account Module](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7account.html)
* Preselect specific payment plan charges or adjustments when entering a new payment. [Payment](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7payment.html)
* XCharge, PayConnect, and PaySimple can be enabled at the same time. [Credit Card Payment](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paymentpatientcreditcard.html)
* *Prevent saving new cards* option determines whether new card information can be saved and whether new transactions can be processed. [XCharge Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7xchargesetup.html), [PayConnect Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7payconnectsetup.html), [PaySimple Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paysimplesetup.html)
* Credit card security code (CVV) and zip code can be entered on PayConnect transactions saved tokens. [PayConnect Window](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7payconnectpaymentwindow.html)
* Option to automate recurring charges. <https://www.opendental.com/manual182/modulesetupaccount.html>
* Recurring charges will now stop when Open Dental is shut down. [CC Recurring Charges](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7recurringcharges.html)

**Appointments**

* Add NetProduction to an appointment view to show Daily Production in the Appointments module. [Appointment View Edit](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appointmentvieweditwindow.html)
* Speed enhancements for clinic appointment search.
* Search results limited to providers on the schedule for the selected appointment view. [Pinboard](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7apptpinboard.html)
* Add broken appointments to the ASAP list. [Break Appointment](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7apptbreak.html), [ASAP List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7asaplist.html)
* Set a default date range in the unscheduled list. [Unscheduled List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7unscheduled.html)

**Clinics**

* *Unrestricted Search* permission allows users who are restricted to a specific clinic to search all patients in the database. They can also change a patient's clinic from the Edit Patient Information grid. [Permissions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7permissions.html)
* Time required to generate statements for multiple clinics has been reduced. [Billing List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7billinglist.html)
* Clinic filter when retrieving web forms. [Web Forms Retrieve](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webformsretrieve.html)
* Limit to Ops in Clinic option added to Schedule Setup window. Quickly selects all providers and employees associated with the selected clinic. [Schedule Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7schedule.html)
* Options to *Clear All Blockouts for Day, Op only, Limit to Ops in Clinic Filter,*  or *Clear All Blockouts for Day, Clinic only* added to right-click menu on Appointments. [Blockouts](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7blockouts.html)

**eServices**

* Patients cannot be sent more than one eConfirmation text in the same day. [eConfirmations](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html)
* When logging on to the Mobile Web, Clinic defaults to the clinic last active when the user logged off or closed Open Dental. [Mobile Web Home](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7mobilewebuse.html)
* Option to enable/disable electronic signatures on all web forms. [Web Form Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webformsupload.html)
* Option to enable/disable typed signatures on certain web forms by modifying the URL. [Web Form Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webformsupload.html)
* Option to exclude a patient from eConfirmations and eReminders. [Edit Patient Information](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7patientedit.html)
* Time slot finding logic enhanced for the Web Sched appointment search.
* Web Sched Recalls can now be sent out for custom recall types. [Web Sched Recall](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webschedrecallsetup.html)
* Include an opt-out statement in eService emails that includes practice/clinic address and instructions to unsubscribe. [Email Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7emailsetup.html)
* When using a StatementURL, patient will be directed to the Patient Portal sign-in window. [Payment Portal](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7portalpaymentsbypatient.html)
* Appointment time patterns are preserved for appointments created from the mobile web feature. [Mobile Web Operatories](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7mobilewebuseops.html)
* Interface changes to the Patient Portal setup tab. [Patient Portal](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7portalhostedbyod.html)
* Option to add a clinic ID to the patient portal URL. [Patient Portal](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7portalhostedbyod.html)

**Feature Requests**

* Comments column added to Feature Request window.[Feature Requests](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7featurerequests.html)
* Version Completed column added to Feature Request window. [Feature Requests](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7featurerequests.html)
* Filter Feature Request window by Mine and My Votes. [Feature Requests](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7featurerequests.html)
* Bounty $ field removed from the Feature Request window. [Feature Requests](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7featurerequests.html)
* Once a request is submitted, the Description and Details fields can no longer be edited.[Feature Requests](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7featurerequests.html)

**Insurance**

* Additional frequency limitation categories. [Frequency Limitations](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7insfrequencylimitations.html)
* Frequency Checking tab in Treatment Plan Module Preferences. Set the codes that are affected by each frequency limitation category. [Treatment Plan Module Preferences](https://www.opendental.com/manual182/modulesetuptreat.html)
* Sealant Through Age option added to Benefit Info window. [Benefits](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7benefitinfo.html)
* Mark fields on the Edit Insurance Payment as required. [Required Fields](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7requiredfields.html)
* New preference to allow, warn, or prevent users from creating claims with $0 procedures. [Account Module Preferences](https://www.opendental.com/manual182/modulesetupaccount.html)
* Option to not calculate PPO write-offs on downgrages. [Insurance Plan](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7insplan.html)
* Show HTML view panel for EDS eligibility requests (271s). [Electronic Eligibility and Benefits](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ebenefits.html)
* Prevent sending secondary insurance claims by carrier or by insurance plan. *Do not send claims electronically* checkbox on the Edit Carrier window and Edit Insurance Plan window changed to Send Electronically dropdown with three options (Send claims electronically, Don't send claims electronically, Don't send secondary claims electronically). [Insurance Plan](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7insplan.html), [Carriers](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7carriers.html)
* Waiting Period benefit type. [Benefits](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7benefitinfo.html)
* Print button added to the ERA procedure paid window. [EOB Claim Details](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7claimseraeobdetails.html)
* Preauthorization estimates update when ERA835 preauthorizations are processed. [Preauthorization](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7preauth.html)
* ERAs check the procedure statuses on a claim when determining if a supplemental payment is needed [ERA](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7era.html)
* When selecting a subscriber, patient status shows next to patient name. [Add Insurance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7insadd.html)
* Add a discount plan indicator to an appointment view and/or appointment bubble. [Appointment View Edit](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appointmentvieweditwindow.html), [Display Fields](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7displayfields.html)
* Preference added to set how blank entries in fixed benefit fee schedules are handled. [Family Module Preferences](https://www.opendental.com/manual182/modulesetupfamily.html), [PPO Fixed Benefit Insurance Plan](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7planppofixed.html)

**Reports**

* Group and fitler the Insurance Aging Report by carrier or group name. [Insurance Aging Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportinsaging.html)
* Option to only view preauthorized claims in the Outstanding Insurance Claims report. [Outstanding Insurance Claims Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportoutins.html)
* Procedure Codes report renamed to Procedure Codes - Fee Schedules. [Procedure Codes - Fee Schedules Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportprocedurecodes.html)
* Procedures Not Billed to Insurance report includes a right-click *Go to Account* option. Report can stay open while working in other windows. [Procedures Not Billed to Insurance Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportprocsnotbilledins.html)
* PayPlan Credit and Production - PayPlanCredits columns added to Receivables Breakdown report when the Account Module Preference, Pay Plan Charge Logic is set to *Age Credits and Debits*. [Receivables Breakdown Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportreceivablesbreakdown.html), [Account Module Preferences](https://www.opendental.com/manual182/modulesetupaccount.html)

**Supply Inventory**

* Track shipping charges in the Supply Orders window. [Supply Orders](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7supplyorders.html)
* Interface changes to the Supply Orders window. [Supply Orders](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7supplyorders.html)
* Quickly add all supplies on the shopping list to a new or pending order. [Supplies](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7supplies.html)
* Track who placed an order in the Supply Orders window. [Supply Orders](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7supplyorders.html)
* Supply inventory auto-calculates quantity when adding to order. [Supply Orders](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7supplyorders.html)

**Miscellaneous**
 HTML formatted emails added to send emails with embedded images, tables, different text color, fonts, headings, and links. [HTML Email](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7emailhtml.html)
 Enter a term date for a provider to restrict sending claims, sending prescriptions, and scheduling or completing appointments. [Provider](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7providerseditwindow.html)
 Stop Database Maintenance button finishes current DBM and cancels the queued tools. [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html)
 Some changes made by the database maintenance tool are tracked in the table dbmlog. [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html)
 2018 ICD 10 codes. [ICD-10 Codes](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7icdcodes.html)
 Improved billing summary window to include billing error details. [Billing List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7billinglist.html)
 Add time card rules that prevent employees from clocking in before a designated time. [Time Card Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7timecardsetup.html)
*Allow paid 30 minute breaks* preference determines whether break time is considered paid or unpaid, and whether the Break option is available in the Time Clock. [Manage Module Preferences](https://www.opendental.com/manual182/modulesetupmanage.html)
 Removed Oracle Database Type label and list box from the Choose Database window. [Oracle](oracle.html)
 Exam sheet enhancement to warn users before overwriting changes others have made while the window is open. [Exam Sheet](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7examsheets.html)
 EstPatientPortion added as an output text field for routing slips. [Output Text Field Names](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7outputtextfields.html)
 EstPatientPortion added as an available field for the Edit Appointment window. [Display Fields](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7displayfields.html)
 referral.nameL added as an output text field for Referral Letters. [Output Text Field Names](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7outputtextfields.html)
 Alphabetize quick paste notes within a category. [Quick Paste Notes Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7quickpastenotessetup.html)
 Diagnostics button added to About window to show user general system settings. [About](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7aboutwindow.html)
 Accounting entries are no longer created for income transfers when Auto Payment Entries is set up. [Accounting Transactions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7transactionhistory.html)
 Receive a warning when provider schedules overlap. [Schedule Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7schedule.html)
 Minor changes to the Copy/Paste section in Schedule Setup. [Schedule Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7schedule.html)
 Search progress notes for a specific word or phrase. [Show Chart Views](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7showtabchart.html)
 Reorder or alphabetize CEMT connections. [CEMT Connections](cemtconnections.html)
 Additional security checks added to the CEMT tool. [CEMT Security](cemtsecurity.html)
 Security permissions reorganized in the Security window. [Security](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7security.html)
 Enforce Clinic Specialty option added to Appointments Module Preferences. [Appointment Module Preferences](https://www.opendental.com/manual182/modulesetupappts.html)
 Option to show patient specialty in the main title bar and patient select area of the Account module. [Miscellaneous Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7miscsetup.html)
 Specialty added as available field for the Select Patient window and Chart Patient Information areas. [Display Fields](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7displayfields.html)
 Days of supply in the Edit Rx window can now handle partial days. [Rx / Prescription](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7rx.html)
 Option to Show patient account numbers in the Transworld AR Manager. [TSI Collections](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7tsicollections.html)
 Last Proc added as an available column for the Transworld AR Manager grids (ArManagerSentGrid, ArManagerUnsentGrid). [Display Fields](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7displayfields.html)
 Audit trail entry when a user changes a user group's permissions or changes a user's group. ["Security Admin" Permission](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7permissionssecurityadmin.html)
 Integration with DentalXChange Attachment Service. [DentalXChange Attachment](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7dentalxchangeattachmentservice.html)