Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Provider

Use the Edit Provider window to create providers and edit provider information.

In the [Main Menu](mainmenu.html), click Lists, [Providers](providers.html). Click **Add** or double-click an existing provider to edit.

![](images/providerEdit.png)

The window is divided into three tabs: General, Supplemental IDs, and Web Sched. A description of all options on this window is below.

Note: If viewing information for a provider that has been removed due to a merge (deleted), all fields are viewable only, not editable.

## General Tab

Use the General tab to enter provider information for billing and other miscellaneous features.

![](images/providerEditBasics.png)

**Provider ID**: A system generated unique identifier that is useful for third party reporting.

**Abbreviation**: A short abbreviation that will identify the provider in various lists throughout the program. There is a 255 letter limit. May be changed at any time.

**Last Name / First Name / MI**: Last name, First Name, and Middle Initial of provider. If billing as an entity, enter the billing entity name as the Last Name.

**Suffix**: Informational only.

**Preferred Name**: Enter the full preferred name for the provider. This name will show for patients checking in via [eClipboard](../site/eclipboard.html), for patients viewing their appointments in [Patient Portal](../site/patientportal.html), and for patients scheduling an appointment via [Web Sched](../site/websched.html).

**Birthdate**: Provider's birthdate. Required when using DoseSpot eRx.

**SSN or TIN:** Enter the number used for billing purposes. Most offices will enter their TIN.

![](images/providerEditLicense.png)

**State License Number**: The Provider's practicing state license number.

**State Where Licensed**: Enter the provider's licensing state.

**DEA Number**: Enter the provider's DEA Number. Required when sending prescriptions. If the provider does not have a DEA Number, enter *None*.

**State Rx ID:** The provider's state assigned Rx ID. Required when sending prescriptions.

**Edit**: Only displays when Clinics is enabled. Click to open Additional Provider Properties to view or edit clinic-level overrides for provider IDs.
![](images/providerEditClinicOverrides.png)

* **CareCredit Merch Num**: Only used when CareCredit users are using Merchant Number by provider. Enter the provider's 16-digit merchant number as provided by CareCredit.
  + If an office has stopped using CareCredit, but has not disabled the bridge in [CareCredit Setup](carecreditsetup.html), an *x* will automatically display in front of the Merchant Number when Batch Quickscreen is attempted. This lets Open Dental know the account is closed and not to allow transactions.

**Medicaid ID**: Required when billing to Medicaid. This is a provider specific ID issued by Medicaid.

**National Provider ID**: i.e., NPI.

* For electronic prescriptions, the individual provider NPI, not the organizational NPI must be used.
* If an office has a separate Facility NPI, users can create a separate provider profile for the facility. Enter the facility name as the Last Name, and check the *Not a Person* box. To set the facility as the default practice or clinic billing provider (and use the facility NPI), select the facility as the default insurance billing provider in [Practice](practice.html) or [Clinic Setup](clinicsetup.html).

![](images/providerEditMisc.png)

**Term Date**: The date when the provider will no longer be active. After the term date has ended, the provider will be unable to schedule or complete appointments, create prescriptions, or send new claims.

**Appointment Color**: The background color on the schedule for the provider's appointments, time bar, and operatory. Click the box to select the color. Lighter colors help black text show more clearly. Click **None** to clear the selected color.

**Highlight Outline Color**: The color of the outline that surrounds appointment information for this provider. The outline only shows when the appointment is selected. Click **None** to clear the selected color.

**EHR Meaningful Use**: EHR only. Determines which measures show in reports and on the dashboard when this provider is the primary provider. There are four options:

* Use Global: Use the global meaningful use stage set in [EHR Settings](ehrsettings.html).
* Stage 1: Show stage 1 measures.
* Stage 2: Show stage 2 measures.
* Modified Stage 2: Show [EHR Modified Stage 2](../site/ehrmodified2.html) measures. This is the recommended setting for 2017.

**Claim Billing Prov Override**: Optional. Select a non-person entity (set up as a non-person provider) that will be set as the default billing provider on claims when this provider is the treating provider. The claim billing provider will override the *Default Insurance Billing Provider* set in Clinic or Practice setup.

**Hourly Production Goal**: Set an hourly production goal for the provider. This value will be used to calculate the daily production goal in the [Appointments Module](appointments.html). See [Production Totals](productiontotals.html) for details.

![](images/ProviderEditFee.png)

**Fee Schedule**: The provider's default fee schedule (e.g., the UCR fee schedule). See [Fee Schedule Logic](feeschedulelogic.html) for details on fee schedule usage.

**Specialty**: The provider's specialty. Customize options in [Definitions: Provider Specialties](definitionsproviderspecialty.html).

![](images/providerEditSched.png)

**Scheduling Note**: When the user clicks on an operatory header in the appointment schedule on a day the provider is scheduled, text entered here will display in the operatory header dropdown next to the provider's scheduled time.

**Custom ID**: A user-editable unique identifier that is useful for third party reporting.

**Taxonomy Code Override**: Enter a Taxonomy Code to override Specialty.

![](images/providerEditAnesth.png)

**Anesthesia Provider Groups (optional)**: Assign the provider to an anesthesia group. If assigned, this provider will populate the corresponding dropdowns in the [Anesthesia](anesthesia.html) record.

![](images/providerEditOptions.png)

**Secondary Provider (Hyg)**: Mark the provider as a non-billable provider (such as a hygienist). The provider can still be manually selected as the billing or treating provider on claims if needed.

**Signature on File**: Indicate whether or not the provider has a signature on file. May affect what shows on the [ADA Claim Forms](claimformADA2012.html) for treating provider signature.

**Not a Person**: Check this box to mark the provider as an entity or organization instead of a person. Then enter business ID numbers instead of personal ID numbers. Useful when offices want to use practice or facility as the provider on claims.

**Hidden**: Remove this provider as a selection option in various areas of the program (e.g., for providers who are no longer with the practice). Their [Schedule](schedule.html) will be removed and an *X* will show in the Hidden column of the Providers List. The provider will still be a selection option in standard reports. Hidden providers cannot access eRx. This will not affect scheduled appointments.

Note: Providers associated with an Appointment View cannot be marked hidden. See [Appointment View Setup](appointmentviewsetup.html) to remove them first.

**Hidden on Reports**: Remove this provider as a selection option in [Standard Reports](reportsstandard.html). An *X* will show in the Hide on Reports column of the Providers List.

**Use Electronic Prescriptions (eRx)**: Enable Electronic Prescriptions for this provider. There are per provider fees. Once enabled, a provider must still complete identity proofing before use. Contact support for assistance. Unchecking this box will disable eRx for this provider.

## Supplemental IDs Tab

Click the Supplemental IDs tab to store provider IDs assigned by insurance companies, especially Blue Cross/Blue Shield. When billing an insurance company using this payor ID, the assigned ID will show on the claim.

![](images/providerEditSupplemental.png)

Click **Add** to create a new supplemental ID. Click **Delete** to remove an ID.
![](images/providersID.png)

* **Payor (Electronic) ID**: The payor ID of the carrier. This is case sensitive and must match the [Electronic Payer ID](payerids.html) list exactly.
* **Type**: Type of supplemental ID. Informational only.
* **Assigned ID Number**: The supplemental ID number assigned.

## Web Sched Tab

Enter a provider description and photo that will show in the [Web Sched Recall](webschedrecallsetup.html) and [Web Sched New Patient](webschednewpatsetup.html) interface when patients are allowed to select their provider.

![](images/providerEditWebSched.png)

**Description**: Enter the provider description.

**Picture**: Click **[...]** to select a picture file on the computer. Click **None** to clear a picture selection.

## Clinics Tab

Provider clinic associations set in this tab will determine which providers show in the provider selectors for those clinics.

![](images/providerEditClinics.png)

When set to **All**, the provider will be available for all clinics. If specific clinics are highlighted, the provider can only be selected at those clinics.

Providers can also be set to show or not show if they are associated to a clinic-restricted user in security setup. Even if the provider is associated to a clinic in the provider setup window, the provider's user must also have access to that clinic for any other user to select that provider, even if the other user is not restricted. For restricting users to specific clinics please see: [User Edit](securityusers.html).