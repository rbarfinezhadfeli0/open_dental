Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Version 24.2

See [Versions](versions.html).

[![](images/versionHighlightsBlog.png)](https://opendental.blog/software-update-stable-version-24-2-highlights/)

Version 24.2 was released as stable on 10/10/2024.

**Appointments Module**

* Added Insurance Carrier as display field for Recall List.
* Added Appointment View setting to only show days with scheduled appointments or providers in the week view.
* Language translations for recall messages.

**Account Module**

* Quarterly and yearly intervals added to Repeating Charges.
* Authorized Procedures section added to Recurring Charges.
* Hover over Ins Est to see outstanding Claim Procedures.
* Automatically create tertiary claims using the New Claim button.
* Payment Plan credits are only added to the account grid once a procedure is set complete.
* Multi Visit Group procedures use the current benefit year for estimates.
* Add additional PayPlan Charges and add or edit future PayPlan Charges.
* Preference to automatically prompt for dental claims when receiving a medical claim.
* Option to show Super Families in Account Module.

**Chart Module**

* Printed or saved Perio Charts show patient birthdate.
* Perio Chart defaults to logged-on provider.

**Manage Module**

* Date received field added for individual supplies in a Supply Order.
* Select multiple clinics to filter from the insurance claims window.
* Remove Old Data tool optionally includes the WikiListHist, WikiPageHist, and TaskHist tables.

**eServices**

* ODTouch app released as a stable.
* Added ability to print from ODTouch.
* Set a default sheet to load for eRouting actions in ODTouch.
* Additional Payment Portal actions added to the eService Activity Log.
* Text messages are also marked read in Open Dental when opened in ODMobile or ODTouch.
* Create custom eRouting actions.
* New setting to determine if secure email is used for statements.
* Preference to send an opt-out message when changing the Text OK status from Yes to No.
* eServices Listener automatically opens necessary eConnector ports.

**Preferences**

* Moved Ortho and Enterprise settings to Preferences.
* Preference to ensure addresses are valid.
* Preference to sort Imaging Module files by descending or ascending date.

**Miscellaneous**

* Ability to merge duplicate allergies.
* Added server name to the Query Monitor.
* Enhancement to include last two patnum digits in Trophy Enhanced bridge.
* New Database Maintenance method for ProcedurelogNotCompletedAttachedToReceivedClaimprocOrPaySplitOrAd.
* Appriss bridge renamed to Bamboo.
* Renamed EwooEZDent bridge to EZDenti and created a new bridge for Ez3Di.
* Daily Procedures report includes treatment area when applicable.
* New permission to control edits to the Fee Billed to Insurance.
* Integration with Bola AI.
* Deprecated the Midway Dental Supply bridge.
* New tool to mass change insurance plan types.
* Select email attachments from Image Categories.
* New window for Security Badge setup.
* Printer Setup includes additional options for virtual printers.
* Added new export options for queries.

**API**: [API Specification](apispecification.html)

* Diseases GET make PatNum optional.
* New resource ToothInitial.
* Added RecallTypes GET.
* Added SecUserNumEntry, DateEntry, and SecDateTEdit to Adjustments GET.
* Added Get (single) to DiseaseDefs GET.
* Added Planned Appointments Item Order to Appointments resources.
* Tasks PUT allow taskStatus to be updated.
* Added Provider, Operatory, and Schedule tables to ApiEvents.
* Added GET(single) and optional CarrierNum and PlanType filters to InsPlans.
* Added CustomTracking to Claims GET, PUT, and POST.
* Added ClaimPayments POST Batch.
* Added GET (single) to Statements.
* Added Labcases GET.
* Added LabTurnarounds GET.
* Added ProcNotes GET.
* Added ability to digitally sign ProcNotes POST.
* Added Recalls PUT.
* Added Recalls POST.
* Added Documents PUT.
* Added Documents DELETE.
* Added Laboratories GET.
* Added RxPats GET.
* Added Pharmacies GET.