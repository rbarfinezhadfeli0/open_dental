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

# EHR Objective 3: Computerized Provider Order Entry (CPOE)

This information applies to EHR Modified Stage 2 for Program Years 2015 to 2018. For current information, see:

* [EHR Modified Stage 2](ehrmodified2.html)
* [2019 Program Requirements - Medicaid](https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/2019ProgramRequirementsMedicaid.html)
* [Open Dental EHR](https://opendental.com/site/ehrlicense.html)

## Measures

CPOE means that an order is entered by a licensed provider. To count as CPOE in Open Dental, a provider must be logged on.

**Measure 1**: More than 60% of medication orders created by EP during reporting period are recorded using CPOE.

**Measure 2**: More than 30% of medical laboratory orders created by EP during reporting period are recorded using CPOE. Medical lab orders are usually for blood work.

**Measure 3**: More than 30% of radiology orders (x-rays) created by EP during reporting period are recorded using CPOE.

Note: In version 15.4 and greater, there is a new and simplified method of creating and approving CPOE radiology orders. All x-ray procedures are automatically counted as radiology orders, and procedures added or approved by an EHR provider count as CPOE.

**Exclusions Available?**

Yes. Providers qualify for an exclusion for a measure if they order less than 100 of the order type during the reporting period.

## Resources

[2017 Spec Sheet](https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/MedicaidEPStage2_Obj3.pdf) (PDF)

[2018 Spec Sheet](https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/MedicaidEPModStage2_2018_Obj2.pdf) (PDF)

![](images/YouTube_PlayButton_15px.png) See our video playlist: [EHR Webinars](https://www.youtube.com/playlist?list=PLyjZ9PCVynCmkPdhlP5DZKz61iZJrenKi).

## Calculations

Note: There are 3 calculation options for CPOE medication order but you will only report one.

CPOE\_MedOrdersOnly

* Denominator: All medication orders created by the provider and entered during the reporting period.
* Numerator: Medication orders in the denominator entered using CPOE.

CPOE\_LabOrdersOnly:

* Denominator: The number of medical laboratory orders for an ordering provider, created by a provider, with a date/time start during the reporting period.
* Numerator: Orders in the denominator entered by a provider.

CPOE\_RadiologyOrdersOnly (version 15.4 and greater):

* Denominator: The number of completed radiology procedures (by default CDT codes D0210 - D0340 and D0364 - D0386) associated with the provider plus any lab orders with a 'RAD' LOINC code for the provider with a date/time start during the reporting period.
* Numerator: Orders in the denominator approved or entered by the provider.

CPOE\_RadiologyOrdersOnly (version 15.3 and earlier):

* Denominator: The number of radiology orders (orders with a 'RAD' LOINC code) ordered for the provider with a date/time start during the reporting period.
* Numerator: Orders in the denominator entered by a provider.

## Setup

Determine how medication orders/prescriptions will be created:

* Legacy eRx (comprehensive version)
* Paper prescriptions in Open Dental. If using this option, you should also qualify for the [EHR Objective 4: ePrescribing](ehreprescribing.html) exclusion.

## Instructions

To create CPOE orders, a provider must be logged on to Open Dental.

Medication Orders: Must have count, instructions, refill and start date. Once created, orders list in the patient's medication list, sorted by start date.

* If using Legacy eRx, see [Writing and Transmitting Legacy eRx](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7newcrop.html).
* If writing paper prescriptions, see [Rx / Prescription](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7rx.html).

Lab Orders

* [EHR Medical Lab Order ( CPOE )](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrcpoelab.html)
* [EHR Lab Results](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrcpoelabresultsenter.html)

Radiology Orders

* [EHR Radiology Order List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrcpoeradapprove.html) (new method)
* [EHR Lab Order RAD codes](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrcpoerad.html) (old method)
* [EHR Attach Image to Radiology Order](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrcpoeradresultsattach.html)

Access 2011 CPOE Lab/Radiology Orders - On the EHR Dashboard, click Labs/Rads under 2011 Ed.