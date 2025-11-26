Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

EHR Vaccine Data

On the [EHR Dashboard](ehrdashboard1.html), click Vaccines.

![](images/ehrVaccine.gif)

If you administer vaccines, immunization data can be recorded in Open Dental, then exported in HL7 format (see [EHR Export Vaccine Data](ehrvaccineexport.html)).

Note: Before entering vaccines, see [EHR Vaccine Setup](ehrvaccinesetup.html).

Listed are all vaccines already administered to the patient.

Click Add to add a new vaccine or double click to edit.

![](images/ehrVaccineEdit.gif)

Enter the vaccine data, then click OK to save. Some information is required.

* **Vaccine Defs**: Options are defined in [EHR Vaccine Setup](ehrvaccinesetup.html). Drug Manufacturer will auto-populate based on the selected vaccine.
* **Date Time Start/Stop**: Auto-populated with today's date. When exporting vaccine data, the stop date may be blank, or may be the same as the start date. If any other values are entered for the stop date and an export is attempted, the export will be blocked.
* **Amount**: The numerical value of the dose administered. May be a fraction.
* **Units**: The amount's unit of measurement. Options are defined in [EHR Vaccine Drug Units](ehrvaccinedrugunits.html).
* **Lot NumberandDate Expiration**: Required when exporting and Administration Note is NewRecord. Optional for historical vaccines.
* **City and State Where Filled**: Auto-populated based on the [Practice](practice.html) city and state. State is required when exporting. City is required when Completion Status is anything other than NotAdministered.
* **Completion Status and Refusal Reason**: Refusal Reason is required when exporting if Completion Status is Refused. If a Refusal Reason is specified when Completion Status is not Refused, then the export will be blocked.
* **Observations**: To add an observation, click Add.

![](images/ehrVaccineObserve.gif)

Select the information, then click OK to save.

* **Observation Question**: The data elements collected are based on EHR certification requirements.
* **Value Type**: The value type to use for the observation Value. The selection will determine which data entry fields are enabled.
  + Coded: If selected, enables the Value Code System field (CVX, HL70064, SCT).
  + Dated: Type the date/time in the Value field.
  + Numeric: Type the numeric value then select the Value Units.
  + Text: Type text in the Value field.
  + DateAndTime: Enter the date as a Value.
* **Value Code System**: Only enabled if Coded is the Value Type. Select the code system.
* **Value Units**: Only enabled if Numeric is the Value Type. Select the unit of measurement.
* **Date Observed**: Enter a date or click Today to insert today's date.
* **Method Code**: Only enabled if the observation question is FundPgmEligCat.

Vaccine data entry is less strict than vaccine exporting, so you may enter vaccine data without exporting if desired (e.g. non-EHR offices). See [EHR Export Vaccine Data](ehrvaccineexport.html).