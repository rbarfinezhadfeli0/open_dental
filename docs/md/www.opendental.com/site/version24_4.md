Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Version 24.4

See [Versions](versions.html).

[![](images/versionHighlightsBlog.png)](https://opendental.blog/version24_4/)

Version 24.4 was released as stable on 03/20/2025.

## Major Changes

eForms added for use with upcoming updated eClipboard app.

* Includes various forms.
* Ability to customize included forms or create new forms.
* Dynamic fields means patients only see fields applicable to them.

## Changes by Category

**Account Module**

* Select specific sheet for use when printing Payment Plans.
* Preference to hide Message-to-Pay option in Account Module, Payment dropdown.
* Send message-to-pay messages to guarantor when sending single patient statement.
* Associate Message-to-Pay payments with a Payment Type.
* Quickly add procedure code for Sales Tax.

**Appointments Module**

* Button to copy Appointment Views.

**Chart Module**

* Implant icon removed from Perio Chart when an implant is removed.
* Added *Attached Gingiva* to Perio Chart.
* Option to use the term Recession instead of Gingival Margin.
* Chart letters via Microsoft Word allows for longer notes.

**eServices**

* Typed signatures on Web Forms display date and time stamp on imported form.
* Allow custom time formatting on Automated Messages.

**Manage Module**

* Option to export Accounting Transaction History as .csv or .txt file.
* Match ERA with claim when fee or date of service do not match.

**Miscellaneous**

* Filters added to Query Monitor.
* New permissions for *ImageSignatureCreate* and *SignedImageEdit*.
* Effective date for fee schedules.
* Ability to include notes about fee schedules.
* New Incomplete Procedure Notes option to include all procedures with no notes.
* Audit Trail entry when changes are made to the Report Server. (Also backported to 24.3.35)
* Updated CDA procedure codes for 2025. (Also backported to 24.3.32)
* Enhanced Raw Emails tool to cleanup Unicode white space characters.
* Daily Procedures report split into two reports.
* Individual Procedures report available to right-click to go to patient.
* Easier entry of code ranges in Code Groups.
* Improved Medication List search.
* Added additional secondary insurance Static Text Fields.
* Combined CareCredit and PayConnect fees on Daily Payment Report.
* Added hospitalization dates to medical claim form.

**API**: [API Specification](apispecification.html)

* Added carriers GET (single) to carriers endpoint.
* Procedurelogs GET (multiple) can now be filtered by PlannedAptNum.
* Added Labturnarounds PUT and POST.
* Claimprocs GET multiple can now be filtered by Status.
* Added MedicaidID to patients POST and PUT.
* Added Tasks GET (single).
* Referrals GET by BusinessName.
* Added more fields to Referrals object.
* Insverifies GET (multiple) can now be filtered by FKey.
* Providers GET now includes a single and multiple.
* Added Labcases PUT, POST, and DELETE.
* New TaskNotes resource.
* Laboratories - Add POST.
* Appointments GET by AppointmentTypeNum.
* Laboratories - Add PUT.
* Queries PUT and POST - enhance query screening.
* Added ProcTPs PUT.
* PaySplits GET by ProcNum.
* Added treatplans - Add DELETE.
* Added payments POST Refund.
* Added a ToothInitial table ApiEvent.
* Added PayPlans GET single.
* Providers POST - add ability to set StateLicense and NationalProvID.