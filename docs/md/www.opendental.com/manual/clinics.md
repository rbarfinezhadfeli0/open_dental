Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Clinics

The Clinics feature is useful when there are multiple locations and one database.

In the [Main Menu](mainmenu.html), click Clinics.

![](images/clinicsMainMenu.png)

The Clinics feature allows multiple locations to be run from one database while keeping locations separate for reporting.

Use this menu to select the clinic. Only clinics the logged-on user has access to are listed as options. To set the default clinic selected in the Main Menu when logging on, see *Track Last Clinic by* in [Preferences](preferences.html).

The clinic selection determines the following:

* The look of the [Appointments Module](appointments.html).
* The default clinic when adding new patients. When Headquarters is selected, *Unassigned* is the default. If adding a patient to an existing family, the clinic of the family is the default.
* The clinic for new appointments.
* The Lab Case status indicated in the Appointments Module. If *Headquarters* is the selected clinic, the status reflects all Lab Cases attached to scheduled appointments in any operatory, including those with no clinic assigned.
* The employees that list in the time clock and the clinic associated with clock-in events.
* Which [Alerts](alerts.html) show.

## Clinic Setup

When setting up clinics, do the following:

* If using eServices, contact [Open Dental support](../contact.html) before enabling Clinics.
* Enable the clinics feature [Show Features](showfeatures.html).
* Create each clinic in the [Clinic List](clinicsetup.html).
* Assign and restrict users to clinics in [User Edit](securityusers.html).
* Assign each patient a default clinic in the [Edit Patient Information](patientedit.html) window.
* Review other clinic specific settings:
  + [Operatories](operatories.html)
  + [Appointment Views](appointmentviews.html)
  + [Clearinghouse Clinic Setup](clearinghousesclinics.html)
  + [Fee Override for Provider or Clinic](procedurefeeoverrides.html)
  + [XCharge Setup for Clinics](xchargeclinic.html) or [PayConnect Setup for Clinics](payconnectclinics.html)
  + [Email Setup](emailsetup.html)
  + [Billing Defaults](billingdefaults.html) (clinic overrides).
  + [Definitions: Clinic Specialties](definitionsclinicspecialties.html) (useful for [Clone](patientclone.html) patients).

## Logic

Clinic selection: Below are some helpful guidelines about the clinic options available for selection in various areas of Open Dental.

* Typically only clinics associated with the logged-on user are options (User Security Profiles, Assign Clinics).
* *Unassigned* means there is no clinic assigned to a patient, or, if used as a filter option (e.g., for reports) includes all patients who have not been assigned to a specific clinic.
* *none* means there is no clinic assigned (e.g., to payments, procedures, adjustments).
* *All* means all clinics the user has access to.
* Headquarters is the default interface option (accessible via the Main Menu, Clinics) for users with no default clinic. In [Schedule](schedule.html) setup and [Manage Time Cards](timecardmanage.html), selecting Headquarters filters the results to employees not assigned a clinic.

Operatories: If an operatory has a clinic set, all appointments scheduled in that operatory are automatically assigned that clinic. If an operatory has no clinic, the appointments are assigned the patient's clinic. [Operatories](operatories.html)

Claims: To ensure claims are always credited to the correct clinic, follow these guidelines.

* Make sure each procedure is assigned to the correct clinic when it is completed. To make it easier, assign clinics to specific operatories, and place appointments in those operatories so the correct clinic is assigned by default.
* When the claim is created, it is automatically assigned a clinic based on the attached procedures, and this cannot be changed. If the wrong clinic gets attached to a claim, delete the claim, change all the procedures, then recreate the claim.

Patient Payments: The default clinic for patient payments is determined by *Default Clinic for patient payments* set in [Preferences](preferences.html).

Claim Payments and Adjustments: Claim payments and adjustments default to the patient's clinic. If *Unassigned*, the default is *None*.

Time Clock: Each time clock event is associated to a clinic. When clocking in, the clinic selected in the Main Menu is assigned to the event. Subsequent clock out events use the same clinic.

## Troubleshooting

Also see: [Multiple Locations](multiplelocations.html)

**General Information**:

* During HL7 import from eCW, clinics are not set for new patients.
* If Open Dental was used initially without the Clinic feature turned on, all patients that existed before enabling clinics have no clinic (ClinicNum of 0). A Clinic must be manually assigned to them. All new patients use the defaults.
* If Open Dental was used initially without the Clinic feature turned on, any previously scheduled appointments do not update to include a clinic. A clinic must be manually assigned to each appointment or the *Update Provs on Future Appointments* tool can be used to automatically assign Clinics (see [Operatory Edit](operatoryedit.html)).

**Patients with No Assigned Clinic**:
 To find patients with no assigned clinic, run the [Database Maintenance](databasemaintenance.html) tool and check results for PatientsNoClinicSet. If patients are found, then manually assign default clinics. If needed, contact Open Dental Support for a conversion service to associate clinics

**Turning off Clinics**:
 Turning off Clinics (disabling the Clinics feature from Show Features), essentially ignores the clinics preferences that have been assigned throughout Open Dental and hides clinic information. Clinic information and preferences are not deleted. If the Clinics feature is re-enabled, the previous Clinic settings and information is visible or enabled once more.

This may affect third-party integrations. Before disabling clinics, practices may need to enable users access to all clinics.