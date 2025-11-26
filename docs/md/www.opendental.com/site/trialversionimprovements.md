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

# Trial Database Improvements

See [Installation](installation.html).

This is a list of changes that have been made to the demo and blank databases that come with the [Trial Version](trial.html).

## 24.3.54 to 25.1.61

* Updated the default appointment view
* Added an Insurance Payment Type of Insurance Refund
* Updated default code for bitwewings in Insurance History
* Create an Image Category named *Claim/PreD Responses* and enabled the usage of *ClaimResponses*
* Updates to codes used in Insurance Categories
* Added a code group for fillings
* Updated bitewing procedure code in Frequency Limitations
* Added Image Categories for Referrals and Lab Slips
* Updated Adjustment Type definitions
* Updated Insurance Categories
* Update SecDateTEdit fields to have no zeros
* Set the InfoFile path program property value for the Dexis program link to blank
* Change the % sign to come after the [APR] tag instead of before, in the default Payment Plan Terms and Conditions
* Set the preference, *Make claim specific income transfers when received*, to checked.
* Set the preference, *Allow assigning unearned income to providers*, to unchecked.
* Set the preference, *Broken appointment procedure type*, to *Both*
* Set the preference, *Appointments Module production uses operatories* to checked.
* Set the preference, *Appointment time locked by default* to checked.
* Various enhancements to Canada database
  + Set the preference *Appointment time locked by default* to checked
  + Set the preference *Procedure fee update behavior* to *Prompt, always*
  + Change default Insurance Categories to include Ortho
  + Removed non-Canada clearinghouses
  + Removed references to CDT codes
  + Set the ITRANS clearinghouse Comm Bridge to ITRANS2
  + Set the default 'Elig' clearinghouse flag on ITRANS 2.0
  + Various Payment Type additions: Cheque, VISA, MasterCard, Debit, Interac/e-Transfer, Cash, Patient Refund Cheque
  + Cleaned up the Code Groups
  + Set Pay Plan Logic should to *Age Credits and Debits*
  + Quebec updates to Insurance History

## 24.1.66 to 24.3.54

* Upgraded to Maria 10.11.10

## 24.1.47 to 24.1.66

* Family Balancer Tool enhancement.

## 23.2.42 to 24.1.47

* Updated grant tables.

## 22.4.55 to 23.2.42

* Upgraded MariaDB 10.5.11 to 10.5.19
* Removed multiple unused tables from database.

## 21.2.37 to 22.4.55

* Family Balancer Tool enhancement.
* Resolved Benefit Frequency Limitation bug.

## 20.5.67 to 21.2.37

* Add the optimizer\_switch=split\_materialized variable.
* Family Balancer tool fixes.

## 20.5.63 to 20.5.67

* Transitioned from MySQL 5.5 to MariaDB 10.5.

## 20.2.49 to 20.5.63

* In Family Module Preferences, *InsPlan option at bottom, 'Change Plan for all subscribers', is default* is unchecked by default.
* In Family Module Preferences, *Ins plans with exclusions use UCR fee (can be overridden by plan)* is checked by default.
* In Account Module Preferences, *Creating claims with $0 procedures* is set to *Warn* by default (Canada only).
* In Account Module Preferences, *Allow primary claim status to be 'Hold Until Pri Received'* is unchecked by default.
* In Account Module Preferences, *Show Payment Tracking column in the Edit Claim/Payment windows* is unchecked by default.
* In Account Module Preferences, *Show Patient Responsibility column in the Edit Claim/Payment windows* is checked by default.
* In Account Module Preferences, *Allow recurring charges to run in the absence of a patient balance* is unchecked by default.
* In Account Module Preferences, *Show family commlog entries by default* is unchecked by default.
* In Treatment Plan Module Preferences, *Frequency Limitation* codes for SRP and Perio Maintenance were removed.
* In Treatment Plan Module Preferences, removed *D codes* and applicable *T codes*.
* In Chart Module Preferences, *Procedure fee update behavior* is set to *No prompt, always change fee* by default.
* In Chart Module Preferences, *Use ICD-10 Diagnosis Codes (uncheck for ICD-9)* is checked by default.
* In Chart Module Preferences, *Prompt for Planned Appointments* is checked by default.
* In Setup, Appointments, Appointment Views, 15 minute intervals are set by default.
* In Setup, Appointments, Recall, status for Texted and Emailed is set to Texted/Emailed by default.
* In Setup, Appointments, Recall, Recall List Default View set to 180 *days past* and 30 *days future* with *also show in list if # of days since* set to 15, 30, 4.
* In Setup, Appointments, Recall Types, removed D codes from *Procs on Appt* and added in relevant T codes and mod intervals.
* In Setup, Family/Insurance, Claim Forms, renamed '1500\_02\_12' to 'Medical 1500\_02\_12' and set ADA 2019 as default.
* In Setup, Family/Insurance, Clearinghouses, ClaimConnect is set as default with report path added, and *Save DXC Attachments to Images Module* is unchecked by default.
* In Setup, Chart, Procedure Buttons, exam, cleaning, xray codes were moved into correct category.
* In Setup, Chart, Procedure Buttons, added 'prophy' and 'SPR 4 Quad' and moved 'watches' to the 'General' category.
* In Setup, Manage, Messaing and Messaging Buttons, various changes were made for ease of use.
* In Setup, Definitions, Appt Confirmed, various changes were made for consistency with other default databases.
* In Setup, Definitions, Billing Types, added 'Insured' 'Uninsured' and 'Friends/Family.'
* In Setup, Definitions, Blockout Types, added 'Staff Meeting' and 'Lunch.'
* In Setup, Definitions, Claim Custom Tracking, changed 'Called' to 'Resubmitted' with 30 days suppressed.
* In Setup, Definitions, Image Categories, set *treatplan usage* and added 'Lab Slips' 'Payment Plans' and 'Claim Attachments' with default usage.
* In Setup, Definitions, Payment Types, removed the word 'check' from 'Patient Refund.'
* In Setup, Definitions, Proc Code Categories, renamed category to 'Exams/Cleanings/Xrays.'
* In Setup, Definitions, Recall/Unsched Status, added abbreviation for 'Texted' and changed 'Txt/Eml'd' to Emailed. Also added 'Texted/Email' with abbreviation of 'Txt/Eml.'
* In Setup, Definitions, Task Priorities, added 'Urgent' and 'Low' and rearranged existing priorities.
* In Setup, Display Fields, TreatmentPlanModule, removed 'Sub' and added 'Appt' after 'Done'. Also renamed 'Priority' to 'Pri' and rearranged other display fields (Canada only).
* In Setup, Display Fields, PatientSelect, added *Bill Type* to the end of the list.
* In Setup, Miscellaneous, Languages used, added 'En' 'Sp' and 'Fr' for EOBS to show in correct language (Canada only).
* In Setup, Miscellaneous, *Show inactive patients by default* is unchecked by default.
* In Setup, Program Links, CareCredit, checked *Hide unused button* by default (Canada only).
* In Setup, Security, Security Settings, Groups, set all permissions for providers group to ensure all new permissions are included.
* In Lists, Procedure Codes, added 'Zclin' 'Zcond' 'Ztoth' and 'Ztoths' with use in Procedure Buttons as watches.
* In Lists, Procedure Codes, moved 'N1254' and 'N1255' to the 'Obsolete' procedure code category.
* In Lists, Zip Codes, deleted all 4 codes listed.
* In Setup, Chart, Procedure Buttons, buttons use T Codes so they can be tested.
* Added blank CEMT database.
* Installer set to always run as elevated user.

## 20.1.38 to 20.2.49

* In Lists, State Abbreviations, added Canadian province abbreviations (Canada only).
* Preference, Setup/Treatment Plan: Correct TP frequencies and ins history codes (Canada only).
* Procedure Buttons: Remove ADA codes from quick buttons and add more categories (Canada only).
* Add more auto codes (Canada only).
* Move '~Bad' procedure codes to the 'Obsolete' procedure code category.
* Added procedure codes: N4140, N4141, N4142.
* Rearrange procedure code categories (Canada only).
* Correct procedure code descriptions for 72421 and 72429 (Canada only).
* Moved procedure codes N4105, N4106, N4107, N4108 to the 'Obsolete' procedure code category (Canada only).
* Preference, Lists/Procedure Codes: Default *Show Hidden* as unchecked.
* All 'N' and 'Z' procedure codes default to *Do not bill to insurance*.
* Added Canadian Time Units to all procedure codes (Canada only).
* Added messages to the Op 1, Op 2, and Op 3 messaging buttons.
* In Chart Module Preferences *Prompt for Planned Appointment* is unchecked by default.
* In Appointment Module Preferences *Appointment time locked by default* is checked by default (Canada only).
* In Appointment Module Preferences *Show ! on appts for ins not sent* is checked by default.
* In Account Module Preferences the *Pay plan charge logic* is set to *Age Credits and Debits* by default.
* In Setup, Definitions, Claim Custom Tracking, added 'Called' with 0 days suppressed.
* In Setup, Definitions, Image Categories, Lab Slips category defaults to a usage of Lab Cases.
* In Setup, Definitions, Image Categories, Payment Plans category defaults to a usage of Payment Plans.
* In Setup, Definitions, Image Categories, BW, FMX, Panos, and Photos image categories defaults to a usage of Show in Chart module.
* In Setup, Definitions, Payment Types, changed 'Check' to 'Cheque' (Canada only).
* In Setup, Definitions, Insurance Payment Types, changed 'Check' to 'Cheque' (Canada only).
* In Setup, Definitions, App Procs Quick Add, added procedures (Canada only).
* In Setup, Definitions, Adjustment Types, renamed 'Return Check' to 'Returned Check Fee'.
* In Setup, Definitions, Adjustment Types, hid 'Write off' (US only) and 'Patient Refund'.
* Display Fields, Family Recall Grid: 'Previous Date' renamed to 'Previous' and moved to Showing with 'Interval', rearrange list, shrink Type to 80, and shrink all date fields to 75 and Interval to 70.
* Display Fields, Patient Select: Remove SSN, add Wireless Phone, rename PatNum to Acct# and shrink to 60.
* Auto Notes: Fixed broken notes and removed name 'Kelli'.
* In Setup, Security, Security Groups/Regular User: Update user permissions and remove date limitation from *Procedures Not Billed report*.
* In Setup, Security, Security Groups/Admin User: Set all permissions.
* In Setup, Security, Global Security Settings: Set default user group to Regular Users.
* Language Translation, PatientSelect: Rename 'State' to 'Province' and 'SSN' to 'SIN' (Canada only).
* Added insurance category for use with tracking scaling time units (Canada only).
* Removed outdated US and Canadian claim forms.
* Removed US clearinghouses from the Canada database.
* Removed non-US clearinghouses from the US database.
* Updated Canadian recall types.
* Updated Canadian Claim form XML.
* Set ITRANS as default clearinghouse (Canada only).
* Set ITRANS and ClaimStream to default to download EOBs (not auto-receive) (Canada only).
* ClaimStream no longer lists 000090 override (Canada only).
* Changed the default region to 'English (Canada)' for Canada databases.

## 19.3.63 to 20.1.38

* Add rx edit permission to the Admin user group for both opendental and demo DB. (And possibly revisit other perms Admin should have by default)
* Appointments for the Trial version Demo DB, Dummy Patient appts are all in 2008/2009. Moved them to a current date.

## 19.2.60 to 19.3.63

* Preference, Setup/Misc: Default to checked: "Search for preferred name in the first name field in Select Patient window"
* Preference, Setup/Chart: Default to checked: "Procedure Group Notes aggregate"
* Display Fields, Family Recall Grid: Add all of the available fields by default, shrink the default widths to fit better, and rearrange in this order: Type, Prev, Freq, Due, Sched, Note
* Display Fields, PatientSelect: Remove SSN and put WirelessPhone in its place
* Preference, Security permission: Admin user should not have a date restriction for the new permission of: "New Claims from Procs Not Billed Report, NewClaimsProcNotBilled"

## 19.2.55 to 19.2.60

* Modified the Canadian Claim Form in the Canadian database. Replaced the 'BillingDentistNPI', 'BillingDentist' , 'PayToDentistAddress', 'PayToDentistAddress2', 'PayToDentistCity', 'PayToDentistST', 'PayToDentistZip', and 'BillingDentistPhoseRaw' fields with 'TreatingDentistNPI', TreatingDentist' , 'TreatingDentistAddress', 'TreatingDentistAddress2', 'TreatingDentistCity', 'TreatingDentistST', 'TreatingDentistZip', and 'TreatingDentistPhoseRaw', respectively.

## 19.1.55 to 19.2.55

* In chart patient information move the display field for all medical information to the top.
* Default check preference for "Procedure Group Note does aggregate"

## Version 18.3.50 to 19.1.55

* Set the default setting for Themes to Modern Blue in the trial version.
* Set the insurance categories to the default values in the Canada database.
* Alphabetize Reports in each section for ease of use and better user experience

  Note: (with the exception of *More Options* in the P&I category)
* Canada blank database: Move code 00011 into the obsolete category and ensure code 01011 "Dental Visit/orientation" is available instead.
* Unlink Aspirin as a generic medication to Acetaminaphen.

## Version 18.3.32 to 18.3.50

* Turn clinics off in any dbs that have the clinics feature turned on with no clinics entered so that selecting a patient does not give an error message to the user (e.g. demo db).

## Version 17.4.91 to 18.2.45

* Updated default preference for Credits Greater than Proc Fee to *Warn*.
* Changes to Query Favorites.
* Updated the schedule in the Appointments Module of demo database.
* Preference for Appointment Require Procedure is checked by default.

## Version 15.4.35 to 17.1.35

* Verified auto note prompts.
* Days Past default value on Recall Setup window changed.
* All printed treatment plans are formatted using the Treatment Plan sheet.
* In Account Module Preferences, Line Item Payment Plans is turned on by default.
* ImageFX bridge renamed to Patient Gallery.
* In Family Module Preferences, InsPlan option at bottom, *Change Plan for all subscribers* is checked by default.
* In Appointment Module Preferences *Appointments require procedures* is checked by default.
* In Setup, Definitions, Image Categories, Treatment Plan category defaults to a usage of *Treatment Plans*.
* Wiki basics page added to wiki.
* Queries added to the User Query Favorites.
* Canada Insurance Category Spans updated.
* Dee Capitation added as an example of a patient with a capitation plan.
* Paula Perio added as an example of a patient with a perio chart.

## Version 14.1.18 to 15.4.35

* Created providers for Canada.
* Claim Form default is ADA 2012.
* Clearinghouse format default is 5010.
* In the Problem List, *Keep problem list alphabetized* is checked by default.
* In Setup, Definitions, Insurance Payment Types, *Check* is the default.
* In Setup, Manage, Messaging, Front user has a light color.
* Installing the trial will not override data in an existing database named opendental. Instead, the current database is renamed before writing a new opendental database.
* MDL and ML quick buttons now associated with surfaces.

## Version 13.2.36 to 14.1.18

* Trial installer executable now has the Open Dental logo on it.
* Uncompressing progress of the trial installer now shows so that users can see that progress is being made instead of it looking like nothing is happening.

## Version 12.4.41 to 13.2.36

* Chart module only shows All and Photo Image Category tabs.
* COB rule default is Standard instead of Basic.
* On the Patient Edit window, the *Text Message ??* behavior defaults to *No* instead of *Yes*.
* Added insurance category for implants.
* No longer able to update databases with the trial version.
* Removed broken query examples from favorite list.
* Added an Excuse Letter to the custom sheet defs.

## Version 11.0.41 to 12.4.41

* Created a user called User and a user group called Regular Users which has typical permission privileges.
* Corrected the spelling of abscess in Diagnosis.
* Chart Module, Show tab, added a *Default View*.
* Manage Module, Backup: Restore A-Z images to this folder: now shows **C:\OpenDentImages\ instead of C:\OpenDentalData\**.
* Added payment type Patient Refund Check.

## Version 7.6 to 11.0.41

* Recall types, added more triggers.
* Procedure Code Tools, added a checkbox and tool for resetting the recall triggers to use D-codes instead of T-codes.
* Implant procedures have treatment area set as tooth instead of mouth and paint type changed to implant.
* Code D4910 Perio Maint falls under the Perio category now.
* Added sample auto note for comp exams with common prompts.
* Added sample allergies, medications and prescriptions.
* Changed the name of *Standard* fee schedule to *Office Fees*.
* Changed the default Provider and Hygienist names to Default Provider and Default Hygienist.
* Changed the default practice info to *Your Practice info here*.
* Added a default blockout *lunch* or *meeting*.
* Added a watch tooth as an N1254 code and watch surface code as an N2546 code.
* Added the watch tooth (N1254) and watch surface (N2546) to Procedure Buttons under Exams & Xrays catagory.

## Version 6.9.19 to 7.6

* Box in setup for *allow setting individual procedures complete* is unchecked by default.
* In Recall Setup, Postcards per Sheet was changed to 4.

## Version 6.5.22 to 6.9.19

* Emdeon clearinghouse claim export path, change from **C:\WebMD\Claims\ to C:\WebMDClient\Claims\**
* Adjustment types: Remove *patient refund check* and *write off* x2
* Recall: add default days range, add days since last reminders, ?date changed to brackets.
* In Setup Recall, filled in the text for second and third reminders.
* Registration Key window overhauled.
* All procedure code categories are now unhidden.