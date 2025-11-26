Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Required DoseSpot eRx Information

General requirements to use [DoseSpot eRx](dosespotuse.html):

* A valid Open Dental registration key (for DoseSpot integration).
* Update to the most current stable version.
* A high-speed connection (cable, DSL, etc) is necessary for efficient use.

If any of the following requirements are not met when DoseSpot is enabled, an error message displays when the eRx button in the Chart Module is clicked.

* To enable or create prescriptions, the logged in user must have the *Rx Create* permission. See [Permissions](permissions.html).
* Due to strict data requirements, the following information must be entered before prescriptions can be sent:
  + Practice ([Practice Setup](practice.html))
    - Practice phone (10 digits)
    - Practice address, including a city name and a 2 character US state abbreviation (all caps) with a 9 digit zip code. Cannot be P.O. Box.
  + If Clinics are enabled, enter the following information for each clinic that sends prescriptions. ([Clinic List](clinicsetup.html))
    - Clinic phone (10 digits)
    - Clinic address including a city name and a 2 character US state abbreviation (all caps) with a 9 digit zip code. Cannot be P.O. Box.
  + For each provider who sends prescriptions, enter the following information. Provider cannot be marked as a non-person. ([Providers](providers.html))
    - First name (only letters, dashes, and spaces allowed; no special characters)
    - Last name (only letters, dashes, and spaces allowed; no suffixes or special characters)
    - A 10 digit NPI
    - A valid DEA Number (if the provider does not have a DEA number, enter 'none')
    - A valid State License ID
    - A valid State Where Licensed
    - A valid birthdate
  + Patient
    - First Name, Last Name, Date of Birth. Entered in [Edit Patient Information](patientedit.html)
    - Email address and phone number. Entered in [Edit Patient Information](patientedit.html)
    - Full patient address. Entered in [Edit Patient Information](patientedit.html)
    - Height and Weight for patients under the age of 18. Entered in [Vital Signs](vitalsignsenter.html)

NDC#s: All transmitted medications must have an associated NDC (National Drug Code) which is assigned by the FDA whenever a new drug enters the market.