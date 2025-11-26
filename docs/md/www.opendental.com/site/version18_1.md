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

# Version 18.1

See [Versions](versions.html).

 Version 18.1 was released on 07/16/2018. EHR certified 2014 edition.

## Major Changes

* Web Sched New Patient setup changes. [Setting up Web Sched New Patient](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html)
  + Option to allow patient to select the provider when scheduling an appointment online. [Setting up Web Sched New Patient](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html)
  + Interface changes to Hosted URL grid on the Web Sched New Patient setup window. [Setting up Web Sched New Patient](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html)
  + Option to show a Web Form after a patient schedules a Web Sched New Patient appointment online. [Setting up Web Sched New Patient](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html)
  + Associate Web Sched New Patient Appointment definitions (reasons for appointments) with appointment types. [Definitions, Web Sched New Patient Appointment Types](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7definitionswebschednewpatappttypes.html)[Appointment Types](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appointmenttypes.html)
  + Appointment types associated to Web Sched New Patient Appointment Type definitions determine Web Sched New Patient appointment procedures, length, and time patterns. [Appointment Types](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appointmenttypes.html)
  + Associate operatories to Web Sched New Patient Appointment Types. [Operatory Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7operatories.html)
  + Option to require patients to verify email address or text number using a verification code when trying to schedule Web Sched New Patient appointments. [Setting up Web Sched New Patient](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html)
* eConfirmation setup changes. [eConfirmation Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html)
  + Create multiple eConfirmation rules. [eConfirmation Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html)
  + Option in eConfirmations for one-click or two-click confirmation. [eConfirmation Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html)
  + 'Do not send within' option added for eConfirmation rules, eReminder rules, and Patient Portal invites. Allows user to control whether messages are sent for short notice appointments. [eConfirmation Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html)
* Patient Portal: Additional methods of directing patients to the online patient payment interface. [Online Patient Payments](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7portalonlinepayments.html)
* PaySimple credit card processing integration. [PaySimple](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paysimple.html)

## All Changes by Category

Account

* Account Module Preference to 'Allow prepayments to providers'. [Account Module Preferences](https://www.opendental.com/manual181/modulesetupaccount.html)
* Manage Module Preference to 'Insurance Payments to Show auto deposit'. When enabled, an 'auto deposit' will be made when entering a claim payment. [Manage Module Preferences](https://www.opendental.com/manual181/modulesetupmanage.html)
* Auto Deposit Account definition for use with auto deposits of claim payments. [Definitions, Auto Deposit Account](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7definitionsautodepositaccount.html)
* When creating an invoice, user can select payment plan charges. [Invoices](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7invoice.html)
* New Pay Plan Logic option for 'No Charges to Account (rarely used)' causes payment plans to have no affect on account balance. [Account Module Preferences](https://www.opendental.com/manual181/modulesetupaccount.html)
* 'Show Proc Breakdown' option is now user specific. [Account Module](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7account.html)
* Make negative adjustments on payment plans. [Payment Plan Window](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paymentplanpatient.html)
* Account Module Preference to 'Age negative adjustments by adjustment date'. [Account Module Preferences](https://www.opendental.com/manual181/modulesetupaccount.html)
* Account Module Preference to 'Allow future dated transactions'. [Account Module Preferences](https://www.opendental.com/manual181/modulesetupaccount.html)
* New Definition for Payment Plan categories. [Definitions: Payment Plan Categories](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7definitionspaymentplancategories.html)
* Category column added to the Account module Payment Plan grid indicates a payment plan's category. [Account Module](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7account.html)
* Filter the TSI A/R Manager to include guarantors with a balance less than or equal to $0. [TSI Interface in Open Dental](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7tsicollections.html)
* Force unearned types to match the attached paysplit's unearned type when there is not one previously set. [Allocating Unearned Income](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7unearnedallocate.html)
* Negative (offsetting) prepayments are now required to be attached to their original prepayments. [Allocating Unearned Income](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7unearnedallocate.html)
* Sync providers when prepayments are attached to payment splits. [Allocating Unearned Income](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7unearnedallocate.html)
* Commlog auto save preference moved from Chart Module Preferences to Account Module Preferences. [Account Module Preferences](https://www.opendental.com/manual181/modulesetupaccount.html)
* Update the Sent status when the user prints a statement from the Fill Sheet window. [Statement Window](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7statementwindow.html)
* Combo boxes used in custom statement sheets show on printed and saved PDFs. [Statement Window](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7statementwindow.html)
* When creating an invoice, user can select payment plan charges. [Invoices](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7invoice.html)
* New output text fields for invoicePayPlanLabel and invoicePayPlanValue. [Customizing Statements using Sheets](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7statementsheets.html)

Canada

* Option to automatically receive Canadian EOBs. [ITRANS](itrans.html)
* Import carrier information with the click of a button when ITRANS is your default clearinghouse. [Canada Carriers and Networks](canadacarriers.html)

Chart

* Chart Module Preferences divided into two tabs: Behavior and Appearance. [Chart Module Preferences](https://www.opendental.com/manual181/modulesetupchart.html)
* Chart module preference for Prompt for Planned Appointment. [Chart Module Preferences](https://www.opendental.com/manual181/modulesetupchart.html)
* When a procedure has a treatment area of sextant or arch, user must select an arch or sextant when charting the procedure. [Procedure Info Window](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7procedureedit.html)
* The Chart module's Signed column will now indicate when any form has been electronically signed. [Chart Module](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7chart.html)
* Chart module speed enhancements. [Chart Module](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7chart.html)
* New automation trigger option, RxCreate, when creating a prescription that is a controlled substance or requires a procedure code. [Automation](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7automation.html)

Clinics

* When copying fees, select multiple clinics as the 'Copy To' criteria by using the clinic picker [...]. [Copying Fees](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7feeschedulecopy.html)
* Enter a unique DEA number for each provider/clinic combination. [Edit Provider Window](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7providerseditwindow.html)
* Enter a unique DoseSpot User ID for each provider/clinic combination. [User Security Profiles](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7securityusers.html)
* When clinics are on, option to force user to select a default clinic when adding a patient. [Family Module Preferences](https://www.opendental.com/manual181/modulesetupfamily.html)
* Retrieved web forms are filtered by clinic. [Retrieving Web Forms from the Server](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webformsretrieve.html)

eServices

* Associate a photo and description with providers that list in the Web Sched Recall and Web Sched New Patient interface. [Edit Provider Window](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7providerseditwindow.html)
* When sending a single text message, and the monthly spending limit is reached, user will be prompted to increase the limit. [Sending General Text Messages](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7textmessages.html)
* Option to use long date format in messages. [eServices Setup Miscellaneous Tab](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7eservicesmisctab.html)
* Web Sched New Patient
  + Option to allow patient to select the provider when scheduling an appointment online.  [Setting up Web Sched New Patient](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html)
  + Interface changes to Hosted URL grid on the Web Sched New Patient setup window. [Setting up Web Sched New Patient](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html)
  + Option to show a Web Form after a patient schedules a Web Sched New Patient appointment online. [Setting up Web Sched New Patient](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html)
  + Associate Web Sched New Patient Appointment definitions (reasons for appointments) with appointment types. [Definitions, Web Sched New Patient Appointment Types](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7definitionswebschednewpatappttypes.html)[Appointment Types](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appointmenttypes.html)
  + Appointment types associated to Web Sched New Patient Appointment Type definitions determine Web Sched New Patient appointment procedures, length, and time patterns. [Appointment Types](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appointmenttypes.html)
  + Associate operatories to Web Sched New Patient Appointment Types. [Operatory Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7operatories.html)
  + Option to require patients to verify email address or text number using a verification code when trying to schedule Web Sched New Patient appointments. [Setting up Web Sched New Patient](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webschednewpatsetup.html)
* Web Sched Recall
  + Set a default confirmation status for appointments scheduled using Web Sched Recall. [Setting up Web Sched Recall](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webschedrecallsetup.html)
  + Option to allow patient to select the provider when scheduling an appointment online. [Setting up Web Sched Recall](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webschedrecallsetup.html)
  + New alert notifies staff when patient makes an appointment online using Web Sched Recall. [Alerts](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7alerts.html)
* eReminders and eConfirmations

+ Create an unlimited number of eConfirmation rules. [eConfirmation Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html)
+ Option in eConfirmations for one-click or two-click confirmation. [eConfirmation Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html)
+ 'Do not send within' option added for eConfirmation rules, eReminder rules, and Patient Portal invites. Allows user to control whether messages are sent for short notice appointments. [eConfirmation Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html), [eReminders Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ereminderssetup.html)
+ When a patient has multiple appointments on the same day, only their earliest appointment will show in eConfirmations and eReminders. [eConfirmation Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html), [eReminders Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ereminderssetup.html)
+ Renamed the Preferred send order option in the Edit eConfirmation Rule window to Preferred Confirm Method. [eConfirmation Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7econfirmationsetup.html), [eReminders Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ereminderssetup.html)

* Patient Portal: Additional methods of directing patients to the online patient payment interface. [Online Patient Payments](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7portalonlinepayments.html)
  + Send patients directly to a Hosted Payment URL so they can make a payment online. [Setting up the Patient Portal](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7portalhostedbyod.html)
  + On customized statements, include a clickable URL patients can use to access online payments (statementURL or statementShortURL). [Customizing a Statement using Sheets](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7statementsheets.html)
  + When emailing statements from the billing list, the email message can contain a clickable link to the online patient payment interface. [Billing Defaults](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7billingdefaults.html)
  + When generating statements from the billing list, option to also send a text message that includes a clickable link to the online patient payment interface. [Billing Options](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7billing.html), [Billing Defaults](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7billingdefaults.html)
* Web Forms:
  + Patients can sign Web Forms that contain a signature box. [What Patients See when Filling out Web Forms](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webformspatient.html)
  + Prev, Next, Submit buttons in the mobile view moved to the top of the window. [What Patients See when Filling out Web Forms](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7webformspatient.html)

Insurance

* ERAs that are split by procedure can be matched and processed together. [Processing an ERA](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7era.html)
* Tooth range added to box 24A of the medical claim form (SystemandTeeth). [HCFA 1500 Claim Form](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7claimform1500.html)
* The Batch Insurance (EOB) window carrier filter now finds all carriers that contain the search term. [Batch Insurance Payments](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7claimpaymentbatch.html)
* Option to enable/disable ERA downloads for ClaimConnect or Electronic Dental Services (EDS). [ClaimConnect](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7eclaimsclaimconnect.html), [Electronic Dental Services (EDS)](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7eclaimseds.html)
* New PPO Fixed Benefit plan type for insurance plans. [In-Network Fixed Benefit Plans](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7planppofixed.html)
* New FixedBenefit type for Fee Schedules. [Fee Schedules](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7feeschedules.html)
* New option on the Clearinghouse window to retrieve reports at a set time. [Clearinghouse Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7clearinghouses.html)

Reports

* New Discount Plan report. [Discount Plan Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportdiscountplan.html)
* Incomplete Procedure Notes report is non-modal. [Incomplete Procedure Notes Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportincompleteprocnote.html)
* Proc Code column added to Claims not Sent report. [Claims Not Sent Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportclaimsnotsent.html)
* Broken Appointments graphic report allows user to select D9986, D9987 or both. [Graphic Reports](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportsgraphicsetup.html)
* Enhancements to the Finance Charge Report. [Finance Charge Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportfinancecharge.html)
* Run released query favorites via the main menu, User Query sub menu. [Query Favorites](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7queryfavorites.html)
* In the Appointments report, view appointments scheduled using Web Sched ASAP. [Appointments Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportappts.html)
* W/O Est column renamed W/O Change and behavior updated. [Aging of AR Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportaging.html), [Insurance Aging Reports](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportinsaging.html)
* Check box on the Aging of A/R report to 'Age negative adjustments'. [Aging of A/R Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportaging.html)
* Option to prompt user to enter variables (SET statements) when running a query favorite. [Query Favorites](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7queryfavorites.html)
* Custom aging report does not include patients with a status of deceased. [Custom Aging Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportcustomaging.html)

Security

* In the main menu, the Setup, Security menu option has sub menu options: Security Settings (opens the main Security window) and Add User (add a new User Security Profile). [Main Menu](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7mainmenu.html)
* Add User permission allows user to add a new user security profile via the Add User menu option, even if they don't have the Security Admin permission. [Security Permissions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7permissions.html), [User Security Profiles](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7securityusers.html)
* In Global Security Settings, set a default user group to apply to new users added via the Add User menu option. [Global Security Settings](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7securitysettings.html)
* Edit EO or EC Procedures permission controls whether or not a user can edit procedures with an existing other or existing current status. [Security Permissions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7permissions.html)
* Single sign on available when using the Middle Tier. [Middle Tier](middletier.html)
* View Claim permission controls whether or not a user can view and create claims. [Security Permissions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7permissions.html)
* Treat Plan Sign permission controls whether or not a user can sign a treatment plan. [Security Permissions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7permissions.html)
* Discount Plan Edit permission is tracked in the audit trail. [Audit Trail](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7audittrail.html)
* Repeating Charge Tool permission controls whether or not a user can run the repeating charge tool. [Security Permissions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7permissions.html)
* A password is required when adding a new user and passwords must be 'strong'. [Global Security Settings](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7securitysettings.html)

Treatment Plan

* Option to add a PPO/Allowed Fee column to Treatment Plan grid. [Display Fields](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7displayfields.html)
* Create planned appointments from the Treatment Plan module. [Planned Appontments](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7apptplanned.html)
* In Definitions, the Treatment Plan Priority category will display item order in second column. [Definitions, Treat'Plan Priorities](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7definitionstreatplanpriorities.html)
* tpPatPortionEst output text field available for treatment plans using sheets. [Output Text Fields](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7outputtextfields.html)

Miscellaneous

* Associate ICD10 codes to prescriptions. [Writing and Transmitting Legacy eRx Prescriptions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7newcrop.html)
* Option to filter the Confirmation List by appointment confirmation status. Minor enhancements to the Confirmation List window. [Confirmation List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7confirmationlist.html)
* ASAP List, Recall tab lists all patients with a recall marked ASAP, even if they have received a recall reminder already. [ASAP List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7asaplist.html)
* Select where in Open Dental individual emails show/don't show. [Email Inbox](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7emailinbox.html)
* Email template window has a scrollbar. [Email Templates](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7emailtemplates.html)
* Training Videos menu item added to Help menu. Links to the Open Dental website page for webinars. [Main Menu](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7mainmenu.html)
* When using Letter Merge, set the default Image category for generated letters. [Letter Merge](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7lettermerge.html)
* Flag a carrier to reverse electronic co-insurance benefit percentages. [Insurance Carriers List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7carriers.html)
* In the Central Enterprise Management Tool (CEMT), Display Fields option added to the Setup menu. Allows user to customize the columns that show when searching for patients. [Central Enterprise Management Tool (CEMT)](central.html).
* New Miscellaneous Setup option for 'Middle tier server caches fees'. [Miscellaneous Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7miscsetup.html)
* Columns added to the Accounting Transaction History window. [Accounting Transaction History](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7transactionhistory.html)
* Date added to the printed accounting reconcile report. [Reconciling Accounting Transactions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reconcile.html)
* Option in the Recall List to view patients whose recall type conflicts with the procedures on a scheduled recall appointment. [Recall List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7recalllist.html)
* In the Recall List, the Recently Contacted tab lists patients who have been sent a recall reminder within a date range. [Recall List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7recalllist.html)
* Tasks can be sent to multiple task lists. [Tasks](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7tasks.html)
* New table called Entrylog. [Programming Resources](programmingresources.html), Database Documentation
* Middle Tier speed improvements. [Middle Tier](middletier.html)
* Exam sheets can remain open while working in other windows.[Exam Sheets](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7examsheets.html)
* Quickly view and print employee schedules from the Manage module. [Viewing Employee Schedules](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7scheduleview.html)
* Overhaul of the Reseller Portal.
* Copying a task will also copy task number and patient number. [Task Window](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7taskswindow.html)
* Mark as Read right click menu option for tasks. [Task Lists and Tasks](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7tasksarea.html)
* When searching tasks, option to use a report server to avoid slowness. [Task Search](../manual/tasksearch.html)
* View daily production goals in the Appointments module. [Production Totals](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7productiontotals.html)
* Ortho Insight 3D Bridge. [Ortho Insight 3D Bridge](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7bridgeorthoinsight.html)
* When using Podium and a patient's Text OK status is set to No, an invitation will be sent via email if patient has an email address. [Podium Bridge](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7bridgepodium.html)
* The Backup tool has a new Archive tab. Enhancements to interface. [Backup and Archive Tool](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7backuptool.html)
* Updates to how the Appointments module is refreshed. [Appointments Module](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7appointments.html)
* Option to hide DBM methods. [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html)
* ProcedureLogTPAttachedToClaim DBM moved to Old tab. [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html)
* InsSubNumMismatchPlanNum DBM moved to Old tab. [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html)
* ProcedurelogMultipleClaimProcForInsSub DBM moved to Old tab. [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html)
* DateNoZeros DBM moved to the Old tab. [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html)
* CanadaCarriersCdaMissingInfo DBM moved to Old tab. [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html)
* Windows F10 key functionality is suppressed main modules. [Main Menu](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7mainmenu.html)
* In Replication Setup, the IP address is auto-poputlated in the server description. [Replication: Add Servers and Designate a Slave Monitor](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7replicationservers.html)
* Diagnostics button added to the About window. Shows general system settings. [About Window](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7aboutwindow.html)