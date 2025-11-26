Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Version 25.2

See [Versions](versions.html).

[![](images/versionHighlightsBlog.png)](https://opendental.blog/version-25-2/)

Version 25.2 was released as stable on 09/09/2025.

## Major Changes

eClipboard Web released

* Allow patients to fill forms and complete eClipboard checklist items from a web browser
* Send patient-specific links to eClipboard Web ahead of a patient appointment

Integration with BetterDiagnostics

* Help providers easily identify common dental pathologies for patients 18 and above
* Filter AI annotations by pathology to customize your viewing experience

Mass Email feature

* Upload patient email lists to a Mailchimp audience
* Commlogs emails on the accounts of patients who received an email

## Changes by Category

**Account Module**

* Option to automatically add Carecredit Merchant Fee Adjustments
* Implemented XConnect to validate claims for DentalXChange users
* Added a read-only Credit Card field when processing a payment with a saved card via PayConnect
* Patient Payment Plans, added ability to attach paysplits to payment plans when an Unearned Type of Payment Plan Prepay is selected
* CareCredit Self-Service option
* New preference to prompt for Medical EOB on primary claims

**Appointments Module**

* New preference for *Provider time bars show on Operatory background*
* Waiting Room button to open in new window

**Chart Module**

* In the Chart Module, Medical area, fixed Med Urgent and Medical Summary rows to be bold for consistency with other fields
* Allergies marked as Other on imported eForms can be converted to an allergy listed on the Allergy list
* Problems marked as Other on imported eForms can be converted to a problem listed on the Problem list
* Added birthdate to printed Graphical Perio Charts

**eForms**

* New eForm field for Patient List allows patients to select the family member that is the insurance subscriber
* New eForm field for Ins Pick allows easier entry and import of insurance plans
* eForms consider Sheets when calculating frequency
* Improved Patient Forms window interface
* Removed Imported status from Fill eForm window

**eServices**

* Secure Email messages allow patients to unsubscribe
* Moved option to use Secure Email for Web Sched Recall to Web Sched Recall Setup
* Allow Secure Email for Web Sched Recall to be determined by clinic
* Allow Message-to-Pay emails to send via Secure Email
* In Message-to-Pay Setup, customize receipt email template

**Family Module**

* User interface changed in the Edit Benefit window
* Updated Insurance Answers Plus bridge
* In Insurance History, edit or remove entered dates

**Manage Module**

* In the Task Filter window, the Clinic and Region dropdowns now include an *Unassigned* option.
* Task window now has a Task Category dropdown when enabled in Tasks Preferences
* In the Task Filter window, added the ability to select a specific patient
* Added additional logic to the preference, *Don't auto-process claims w/these CARCs*

**Miscellaneous**

* Removed DentalXChange Patient Credit Score bridge, as the service has been discontinued
* Added bridge to DTX Studio
* New report, Insurance Pending Supplementals, for tracking pending insurance overpayments and underpayments
* Ability to add EOBs to preauthorizations
* Added domain login when changing the user on a procedure note or group note or when signing sheets
* Updated the names of several security permissions
* New security permission for *Treatment Planned Procedure Edit Fee*
* New preferences for read/write delay when using replication
* Ability to open a read-only version of the wiki to use when Open Dental is closed
* New Database Maintenance Tool for Invalid Characters (GDI+) to clean up unsupported characters
* Wiki search option to limit page results
* In CareCredit Transactions, added a column for Net Amount
* Audit Trail logs when clinic for a patient has been changed
* Preference to *Blur when switching between modules to prevent accidental clicking*
* Option to copy images in the Imaging Module without drawings or annotations

**API**: [API Specification](apispecification.html)

* PaySplits PUT ProvNum
* ClaimProcs POST Supplemental
* SheetFields GET (single)
* ASAPComms, supports recalls
* Appointments - Add ability to set Time Arrived
* RefAttaches GET DateTStamp
* Added additional fields to the patientnotes endpoint
* SheetFields PUT
* Added FeeSched parameter and field to Patients GET
* Commlogs PUT
* Added Prosthesis, DateOriginalProsth and IsDateProsthEst to procedurelogs endpoint
* InsPlans POST/PUT ClaimFormNum/ManualFeeSchedNum
* Added EobAttaches DELETE
* ClaimForms GET
* ClaimPayments PUT CheckAmt
* Patients POST, Add Premed