Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Version 24.1

See [Versions](versions.html).

[![](images/versionHighlightsBlog.png)](https://opendental.blog/software-update-stable-version-24-1-highlights/)

Version 24.1 was released as stable on 06/25/2024.

## Major Changes

New Message-to-Pay feature.

* Integrated with the Payment Portal.
* Send text or email messages directly to patient from the Account Module.
* Customizable message template.
* Patients can quickly make payments from their mobile device.

## Changes by Category

**Account Module**

* Integration with EDS Attachment Service.
* Edit Payment Plan charges from the Account Module, Patient Account grid.
* Preference to automatically recalculate secondary claims when the primary claim is received.
* Option to only show excluded Adjustments Types for TSI users.
* Canada lab procedures can have insurance underpayments and overpayments associated.
* Added preference, *Require full lock to save a Payment Plan if there is an APR entered*. (Also backported to V23.3.42)
* Enhancements to more easily add attachments when using the DentalXChange Attachment Service. (Also backported to 23.3.41)

**eServices**

* Additional actions added to eServices Activity Log for Web Forms.
* ODTouch supports Auto Codes.
* Appointment Types add procedures when appropriate in ODTouch.
* ODTouch Progress Notes broken into individual pages.
* Payment Portal requires account number for patients with duplicate accounts.
* Added button to ODTouch Appointments to quickly return to today's date.
* Patients can delete saved cards when using Payment Portal.
* Ability to delete eRouting checklist for a patient.
* Chart and Appointments added to Patient Menu dropdown in ODTouch.
* Made clinic selection more clear in ODTouch.
* Added Integrated Texting to ODTouch.
* Ability to search prescription list when creating or managing prescriptions for a patient.
* Added Missing / Primary tab to ODTouch charting.
* Secure Email and Payment Portal include option to easily access licenses.
* Renamed *Mobile Web/ODMobile* permission to *ODTouch/ODMobile*.

**Family Module**

* Super Family grid allows Patient Fields as Display Fields.
* Customizable Age Limits using Code Groups.
* Deprecated Dentaide Card Sequence from Canada insurance plans.

**Imaging Module**

* Option to include header with patient information on images print from Imaging Module.
* Ability to add Subscriber ID to Mounts.

**Manage Module**

* Billing List option to automatically add autograph to outgoing emails.
* Preference to exclude certain CARCs when auto-processing ERAs.

**Miscellaneous**

* New database maintenance method for *ToothChartInvalidInitialTypes*.
* Audit trail tracks when a card is added or removed.
* Patient Status Setter tool does not consider patient with Unscheduled, Broken, or Patient Note appointments.
* Merge and reorder PickList field items in Display Fields.
* Moved Miscellaneous settings to Preferences.
* MySQL Connector updated from 8.0.11 to 8.0.32.
* Option to show CareCredit and PayConnect fees on Daily Payments Report.
* Add *ClinicNum* as an optional command line parameter.
* CareCredit Pre-Approval Amount and CareCredit Available Credit fields added to Patient Field Defs and Appointment Views.
* Additional customization options for CareCredit Quickscreen.
* Option to optimize data before running the Remove Old Data tool.
* Added additional Submit button at the bottom of mobile Web Forms.
* New appointment right-click option to view attached tasks.
* New options to support badges when logging on to Open Dental.
* Option to send multiple copies when creating a task from an appointment.

**API**: [API Specification](apispecification.html)

* Added TreatPlans PUT.
* Added OperatoryType to Operatories GET.
* Added Ward and AdmitDate to patients.
* Set DischargeDate in EhrPatients PUT endpoint.
* InsVerifies add Note to resource.
* Added CovSpans GET.
* Added CovSpans POST PUT and DELETE.
* Added CovCats POST and PUT.
* Added CodeGroups POST and PUT.
* Added IsPreferred to Referrals GET.