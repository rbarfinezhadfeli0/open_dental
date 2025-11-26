Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Version 24.3

See [Versions](versions.html).

[![](images/versionHighlightsBlog.png)](https://opendental.blog/software-update-stable-version-24-3-highlights/)

Version 24.3 was released as stable on 12/19/2024.

## Major Changes

Added 2025 CDT Codes.

* Also backported to 24.2.48.
* New option to import treatment areas when updating procedure codes.

Integration with [Pearl AI](pearl.html).

* Send dental radiographs to Pearl to help detect potential conditions.

## Changes by Category

**Account Module**

* New preference to block claim creation until missing data is fixed.
* New preference to determine Payment Plan production date. (also backported to 24.2.51)
* Changed verbiage for some payment plan fields.

**Appointments Module**

* New setting to prevent more than one appointment-type task from being attached to the same appointment.
* New preference for Appointment provider change behavior.
* New option to include all dates in the Planned Appointment Tracker.
* Appointment View field to view patient's ward.

**Chart Module**

* New permission for *Perio Chart Copy*.
* Added Fax as a commlog mode option.
* New permission to edit Chart Views.

**eServices**

* Allow users to change the date format on web forms.
* Deprecated Mobile Sync feature.
* Billing List supports Message-to-Pay.
* Message-to-Pay option to send statement for family or individual.
* Integrate Payment Portal into eClipboard.
* Added audit trail entry for *MobileNotification*. (Also backported to 24.2.55)
* Enhanced eClipboard Setup window to be more intuitive.

**Family Module**

* Code Groups can be used when creating Other Benefits.
* New permission for disbanding a Super Family.
* Disbanding a Super Family is logged in the Audit Trail.

**Imaging Module**

* Right-click option to find the task an image is attached to.
* Print all images in a folder.

**Reports**

* New report setting to default User Query to Raw formatting.
* PayPlan Charges Due for Payment Plans added to Receivables Breakdown report.
* Updated filter options in the Procedures Not Billed to Insurance report.

**Miscellaneous**

* New preference to disable indexes when making an automatic update.
* New preference to add paging buttons to the Patient Select window.
* Added Claim Form items for subscriber First and Last name.
* New preference to treat blank entries as zero in Out of Network Fee Schedules.
* Updated Batch Quickscreen send time.
* New option to export Chart of Account as CSV file.
* Program Link output parameter for [ClinicNumCur].
* Added claim validation for one or more $0 procedures on a claim.
* Added Open Dental API end user license. (Also backported to 24.2.45)

**API**: [API Specification](apispecification.html)

* EobAttaches POST UploadSftp.
* Added ClaimPayments DELETE.
* Added ProcessStatus to Payments PUT.
* Added EmployerNum field to Patient resource.