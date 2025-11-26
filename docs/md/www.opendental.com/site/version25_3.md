Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Version 25.3

See [Versions](versions.html).

Version 25.3 was released as beta on 09/09/2025.

Features and enhancements will be added to this page as the version progresses.

## Major Changes

**Web Sched Existing Patient overhaul**

* Redesigned Web Sched New Patient with updated user interface
* Split Web Sched Existing Patient from Web Sched New Patient, making a new distinct URL

**Internal office chat**

* Intra-office chat with other Open Dental users
* Leave chat open, even when Open Dental is closed

**Added 2026 CDT Codes**

* Also backported to 25.2.62

## Changes by Category

**Account Module**

* Removed excess text from Ortho Case window (Also backported to 25.2.38)
* Added clarification for the *Insurance Write-off Edit*  permission (Also backported to 25.2.38)
* Log PayConnect errors in the eConnector (Also backported to 25.2.40)
* CareCredit option to set a Merchant Refund Adjustment Type to offset any adjustments created by merchant fees
* New preference to have payment plans bypass global lock (Also backported to 25.2.44)
* Allow attaching paysplits to Payment Plans in more scenarios (Also backported to 25.2.55)

**Appointments Module**

* New preference for *If no provider time set for either provider, show secondary color in appt timebar*
* Audit trail logs more details when moving or editing appointments
* Changed permission name from *Appointment Create* to *Appointment Create. Also covers moving a planned appt off the pinboard in an attempt to schedule.* (Also backported to 25.2.40)
* Changed permission name from *Appointment Move. Dragging, moving to pinboard, or setting unscheduled. Does not block moving Unscheduled appointment from that list.* to *Appointment Move. Includes Dragging, moving to pinboard, and setting unscheduled, regardless of appt status. Does not block moving Unscheduled appointment from that list. Does not block moving planned appts to the pinboard.* (Also backported to 25.2.40)
* Mirror appointments when two providers see the same patient within the same appointment

**eServices**

* Ability to personalize eClipboard 25 devices with selected colors
* Deprecated BYOD
* Web Sched ASAP tracks which user sent a message
* Updated the Register with Carriers form for integrated texting
* View eClipboard 25 and eClipboard Web licenses

**Family Module**

* Updated editing interface for Other Benefits
* Insurance Plan list now includes In Net column to denote when a plan is in network
* Insurance Exclusions and Age Limitation by tooth number

**Manage Module**

* Added *Reports To* filter for the Employee Time Clock
* Button to quickly add check number in accounting transactions
* Print checks from Accounting Transactions for assets, includes new sheet type of *Check*
* Add payee name to accounting transactions
* Email statements now include patient last name
* In Accounting, added checkbox to mark a transaction as *Needs Review*

**Miscellaneous**

* In Edit Vital Signs window, added a notes box (Also backported to 25.2.36)
* In Support Status, added QR code to allow access to Help from mobile devices (Also backported to 24.4.56, 25.1.62, and 25.2.38)
* Edit Medication window, removed Missing/Generic tab (Also backported to 25.2.37)
* Moved database maintenance method for *Notes With Too Much White Space* to Tools tab (Also backported to 25.2.41)
* Added printer options window when printing from some areas
* In the Imaging Module, when editing text, font actual size and apparent size calculates automatically (Also backported to 25.2.41)
* Removed excess text from Edit Checkbox window
* Allow users to access other areas when Ortho Chart is open
* *Export .csv* and *Export .txt* options added to various areas
* Ability to add barcode to statements for use with an envelope stuffing machine
* Changed permission name from *Claim Procedure Edit Fee billed To Ins* to *Claim Procedure Edit Fee Billed to Ins or Code Billed to Ins.*
* Changed permission name from *Edit the Fee Billed to Ins on Claim Procedures.* to *Edit the Fee or Procedure Billed to Ins on Claim Procedures.*
* File Monitor to record read and writes to the OpenDentImages folder
* New Database Maintenance method for *EmployeeMissingSupervisor*
* Audit trail tracks changes to preferred name
* Easier entry of adding procedures to an active treatment plan

**API**

* Added TreatArea to benefits endpoint
* Procedurelogs PUT GroupNote - Added ability to append note
* CodeGroups - Added 'ShowInFrequency' and 'ShowInOther'
* PatFields PUT, return an object in the response
* RxPats GET Add ErxPharmacyInfo field
* Payments PUT Partial, allow PayPlanCharges
* Procedurelogs - Allow creating completed procedures without being attached to an appointment
* Added statements POST
* New PayPlanLinks resource
* Added PayPlans PUT (dynamic)