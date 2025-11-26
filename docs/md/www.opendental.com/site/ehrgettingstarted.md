[![Open Dental Software](resources/logo.png)](../index.html)

503-363-5432

☰

* [Home](../index.html)
* [Trial Version](trial.html)
* [Order](order.html)
* [Documentation](documentation.html)
* [Forum](http://opendentalsoft.com/forum/)
* [Contact Us](contact.html)
* [![](resources/iconSearch.gif)](searchSite.html)

# EHR Setup

This information applies to EHR Modified Stage 2 for Program Years 2015 to 2018. For current information, see:

* [EHR Modified Stage 2](ehrmodified2.html)
* [2019 Program Requirements - Medicaid](https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/2019ProgramRequirementsMedicaid.html)
* [Open Dental EHR](https://opendental.com/site/ehrlicense.html)

EHR setup is required before beginning a Meaningful Use (MU) reporting period for [EHR Modified Stage 2](ehrmodified2.html). Configuration of items will determine what options are available when you enter patient data and calculations of percentages in [EHR Measure Reports](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrmeasures.html) and [EHR Clinical Quality Measures](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrcqm.html).

## Admin Tasks

* **Turn on EHR features**

  In the [Main Menu](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7mainmenu.html), click Setup, Advanced Setup, [Show Features](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7showfeatures.html). Check the *Medicaid*, *Public Health*, and *EHR boxes*. Click OK twice, then exit and restart the program.
* **Security** ([Security](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7security.html))

  Make sure every provider (dentist) has a username they can use to log on to Open Dental. Providers must be logged on for [CPOE](ehrcpoe.html) orders and eRx.

  + In the main menu, click Setup, Security.
  + Double click on a user.
  + Select a provider from the list.
  + Click OK to attach the user to the provider.
* **[EHR Setup Window](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrsetupwindow.html)**
  1. For each EHR provider, enter annual [EHR Annual Provider Keys](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrproviderkeys.html) supplied by technical support.
  2. Import standardized medical and procedural coding systems that are used to validate data. We recommend importing all code systems (except CPT), but at a minimum import SNOMED CT, RxNORM, LOINC and CVX codes. These code systems are required for several EHR measures. See [Importing Code Systems](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7codesystemimport.html).
  3. Set your stage of Meaningful Use in EHR Settings. For 2018 the setting should be Modified Stage 2. See [EHR Set Meaningful Use Stage](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrmustagesetting.html).
  4. For CQMs: Set default encounter and pregnancy codes. See [EHR Default Pregnancy Code](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrpregnancycode.html), [EHR Default Encounter Code](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrencountercode.html).
     + Setting a default encounter code automatically triggers a CQM encounter when a procedure is set complete. This in turn affects CQM denominators. If you don't set a default, you will need to manually create encounters, or your CQM values will be zero.
     + The default pregnancy code is the default code assigned to patients who are excluded from a vital signs BMI exam due to pregnancy. Thus it excludes patients from some CQMs.
  5. Set up a unique Object Identifier (OID). This is required when exporting summaries of care, medical laboratory orders, or CQMs. See [EHR Object Identifiers (OIDs)](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehroid.html).
* **Set up the Master Lists**:
  1. [Problem List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7problemmaster.html)
     1. Make sure there are no duplicates.
     2. Associate all problems with a code (SNOMED CT recommended). This is required for problems to show on summaries of care.
     3. Create a None problem to use when no problems known. You may want to use SNOMED CT code 160245001 which has a description of 'No current problems or disability (situation)'.
  2. [Medications List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7medicationmaster.html)
     1. Make sure there are no duplicates.
     2. Associate every medication with an RxNorm.
     3. Create a None medication to use when no medications known.
  3. [Allergy List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7allergiesmaster.html)
     1. Make sure there are no duplicates.
     2. Associate every allergy with an Allergy Type. This is required for allergies to show on summaries of care.
     3. Associate every medication allergy with a medication that has an RxNorm code.
     4. Create a None allergy to use when no allergies known.
  4. Set the indicator for *no problems*, *no medications*, *no allergies* in Preferences.
     + Select the *None* allergy as the Indicator that patient has No Allergies.
     + Select the *None* problem as the Indicator that patient has No Problems.
     + Select the *None* medication as the Indicator that patient has No Medications.
* **Patient-specific Education**: Define the conditions that trigger education resources and define the resources. See [EHR Setup Education Resources and Triggers](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrsetupedresources.html).
* **[Public Health Reporting](ehrpublichealth.html)**: Contact your state early to determine if public health agencies have reporting requirements, such as paperwork or registration. Even if you qualify for an exclusion, additional steps may be required.

## Provider Tasks

* **[Clinical Decision Support](ehrcds.html)**
  1. Configure Clinical Decision Support rules and define CDS Permissions. [EHR Configure CDS Rules](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrcdsconfigure.html), [EHR CDS Permissions](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrcdspermissions.html)
  2. If you will write more than 100 medication orders, enable Legacy eRx - comprehensive version to enable drug interaction checks (see E-Prescribing below).
  3. Save supporting documentation (e.g. screenshots) to prove CDS rules and drug interaction checks were implemented for the entire reporting period.
* **[e-Prescribing](ehreprescribing.html)**
  1. If you anticipate writing more than 100 permissable prescriptions, enable Legacy eRx. The comprehensive version includes drug formulary checks and drug interaction checks.
  2. Set up [Formulary Checks](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7newcropformularychecks.html) in the Legacy eRx interface (add insurance carriers to your healthplan list and attach carriers to patients).

## Technical Tasks

* **Health Information Exchange**: Determine how you will exchange summaries of care electronically with other providers. You have two options:
  1. Use Open Dental to securely email summaries of care. This requires obtaining, installing, and sharing email security certificate(s). See [Email Encryption Options](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7emailencrypted.html).
  2. Contract with a Health Information Service Provider (HISP) to perform authentication, encryption, and trust verification on your behalf. You can then export summaries of care and use the HISP to send securely.
* **Patient Electronic Access**: Set up the [Patient Portal Feature](patientportal.html) You will need to provide patients with electronic access to the portal within 4 days of their first office visit during a reporting period.
* **Secure Messaging**: Use [Secure WebMail Feature](securewebmail.html).