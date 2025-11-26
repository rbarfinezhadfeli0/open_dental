Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Required NewCrop eRx Information

Before a prescriber can create or send an electronic prescription via the [NewCrop eRx / Prescription](newcrop.html) interface, necessary information must be entered into Open Dental.

General requirements to use NewCrop eRx:

* A valid Open Dental registration key.
* Current stable version of Open Dental.
* Microsoft Edge.
* A high-speed connection (cable, DSL, etc) is necessary for efficient use.

If any of the following requirements are not met when you enable NewCrop eRx, you will get an error message when you click the **eRx** button in the Chart Module.

* To enable or create prescriptions, the logged-on user must have the *Rx Create* permission. See [Permissions](permissions.html).
* Due to strict data requirements, the following information must be entered before you can send a prescription:
  + Practice ([Practice Setup](practice.html))
    - Practice phone (10 digits)
    - Practice fax (10 digits)
    - Practice address, including a city name and a 2 character US state abbreviation (all caps) with a 9 digit zip code. Cannot be P.O. Box.
  + If Clinics are enabled, enter the following information for each clinic that will send prescriptions. ([Clinic List](clinicsetup.html))
    - Clinic phone (10 digits)
    - Clinic fax (10 digits)
    - Clinic address including a city name and a 2 character US state abbreviation (all caps) with a 9 digit zip code. Cannot be P.O. Box.
  + For each provider who will send prescriptions, enter the following information. Provider cannot be marked as a non-person. ([Providers](providers.html))
    - First name (only letters, dashes, and spaces allowed; no special characters)
    - Last name (only letters, dashes, and spaces allowed; no suffixes or special characters)
    - A 10 digit NPI
    - A valid DEA Number (if you do not have a DEA number, enter 'none')
    - A valid State License ID
    - A valid State Where Licensed
  + Patient
    - Valid birth date. Entered in [Edit Patient Information](patientedit.html)
    - If the patient state is not blank, it must be valid. Entered in [Edit Patient Information](patientedit.html).
    - Height and Weight (for patients under the age of 18). Entered in [Vital Signs](vitalsignsenter.html).

NDC#s: All transmitted medications must have an associated NDC (National Drug Code) which is assigned by the FDA whenever a new drug enters the market.