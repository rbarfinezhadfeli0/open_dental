Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Version 25.1

See [Versions](versions.html).

[![](images/versionHighlightsBlog.png)](https://opendental.blog/version-25-1/)

Version 25.1 was released as stable on 05/29/2025.

## Major Changes

eClipboard 25 released. (Also backported to Version 24.4)

* Updated interface, including accessibility options and dark mode.
* Electronic patient forms via eForms.

## Changes by Category

**Account Module**

* View history of Canadian attachments.
* Deprecated Payment Plan charge logic.
* Added Pay Plan Unlock permission.
* PayConnect 2.0 receipts include cardholder information.
* Audit Trail now logs the dollar amount a Payment Plan's completed amount has changed.
* PayConnect 2.0 remembers last Terminal for Transaction by workstation.
* In the Patient Account tab, Sales Tax is sorted to the bottom of the date of service. (Also backported to Version 24.4.52)
* Allow Sales Tax procedures on claims.

**Appointments Module**

* New permission for BlockoutsFlagged.
* Allow more than one completed task on an appointment.

**eServices**

* Message-to-Pay alert when proper tags are not being included.
* Added *Disable Typed Signature* preference to New Patient Thank-You messages.
* Autosave eForms when submitted via eClipboard 25.
* Automatically send Message-to-Pay links on statement creation.
* In eClipboard Form Rule, option to prefill non-database fields using data from prior forms on Sheets and eForms. (Also backported to Version 24.4.51)
* In the Kiosk Manager, removed the Delete button for eClipboard devices. (Also backported to Version 24.4.52)

**Family Module**

* Ability to Hide and Delete Code Groups.
* Allow two Insurance History dates per category.

**Imaging Module**

* Integration with BetterDiagnostics.
* Document titles made more clear for Canada claim responses saved to the Imaging Module.
* Details button added to Scanning Setup window.

**Manage Module**

* Updated Totals for Period section of Time Cards.
* Preference to auto split ERAs with CARC denial codes.

**Miscellaneous**

* Group Notes allow multiple procedure providers, no procedures, or procedures with varying procedure statuses.
* Changes to InsEstOverride and AllowedAmtOverride fields logged in Audit Trail.
* Program Link replacement field for [SelectedProcNums]. (Also backported to Version 24.4.34)
* Always install API Service on dental office update. (Also backported to Vesions 24.3.61 and 24.4.33)
* Easily change user when providers are adding signatures on sheets.
* Updated process of autosaving Sheets to be more intuitive.
* Autofill data from a guarantor's account on certain eForm fields.
* Automatically import data from certain eForm fields.
* New Database Maintenance method for *EmailmessageInvalidCharactersInBodyText*. (Also backported to Version 24.4.42)
* Option to hide medications.
* Easily view Conditional Child Fields connected to a parent in eForms.
* Added bridge to Overjet.
* Ability to compare wiki drafts to current wiki page.
* New Database Maintenance method for *SecurityHashRehashPatientTable*. (Also backported to Version 24.4.48)
* Added Provider and Clinic filters to the Edit Procedure Code window, More Fees button.
* Added tabs to Fee Tools window.

API: [API Specification](apispecification.html)

* InsPlans Add IsMedical.
* Claims PUT - add InsSubNum2 as an optional parameter.
* Userods PUT userGroupNums and IsPasswordResetRequired.
* Add ability to set paysplit amounts on payments.
* ProcedureLogs POST/PUT - add ability to set ProcStatus to CN, EC, or R.
* Popups PUT DateTimeDisabled.
* Commlogs GET DateTStamp.
* Schedules Add DateTStamp.
* Add optional SheetType filter to SheetDefs GET.
* Add additional fields to insplan resource.
* Add SheetFieldDefs GET.
* Add ClaimProcs GET (single).
* SecUserNumEntry can now be specified on Appointments POST.