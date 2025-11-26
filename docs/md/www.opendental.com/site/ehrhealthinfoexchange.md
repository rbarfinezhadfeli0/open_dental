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

# EHR Objective 5: Health Information Exchange

This information applies to EHR Modified Stage 2 for Program Years 2015 to 2018. For current information, see:

* [EHR Modified Stage 2](ehrmodified2.html)
* [2019 Program Requirements - Medicaid](https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/2019ProgramRequirementsMedicaid.html)
* [Open Dental EHR](https://opendental.com/site/ehrlicense.html)

Measure: Providers that transition or refer patients to another provider or setting of care must:

1. Create a summary of care using Open Dental
2. Electronically transmit the summary of care to a receiving provider for more than 10% of transitions of care and referrals.

**Exclusions Available?**

Yes. If provider has less than 100 referrals to another provider during the reporting period.

## Resources

[2017 Spec Sheet](https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/MedicaidEPStage2_Obj5.pdf) (PDF)

[2018 Spec Sheet](https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/MedicaidEPModStage2_2018_Obj5.pdf) (PDF)

## Calculations

SummaryofCare:

* Denominator: Number of outgoing Referrals TO another provider (must be a doctor) during the reporting period.
* Numerator: Number of referrals in the denominator to whom a summary of care was provided (printed, by Email, or exported). Creating a referral automatically provides a summary of care to the patient portal and affects the numerator.

SummaryofCareElectronic:

* Denominator: Number of outgoing referrals TO another provider (must be a doctor) during the reporting period.
* Numerator: Referrals in the denominator to whom a summary of care was sent electronically (by Email or exported).

## Setup

Part 2, electronic transmission, requires setting up a secure way to send summaries of care. You have two options:

1. Send directly from Open Dental using [Encrypted Email](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7emailencrypted.html). This requires obtaining, installing, and sharing email security certificates.
2. Contract with a Health Information Service Provider (HISP) to perform authentication, encryption, and trust verification on your behalf. You can then export summaries of care and use the HISP to send securely.

## Instructions

[Summaries of Care](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrsummaryofcaresend.html)