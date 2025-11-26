Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

EHR Syndromic Surveillance Observations

See [EHR Dashboard](ehrdashboard1.html).

Syndromic surveillance data can be recorded during a patient's appointment, then exported as an HL7 ADT standardized message. See [EHR Export Syndromic Surveillance Data](ehrsyndromicdataexport.html).

1. Select the patient.
2. In the [Appointments Module](appointments.html) or [Chart Module](chart.html), double click the appointment to open the [Edit Appointment](aptedit.html).
3. On the left side of the window, scroll down to the last of the appointment information fields.
   ![](images/ehrSyndromic.gif)
4. Click **Obs**.
   ![](images/ehrSyndromicObs1.gif)

   All observations already recorded and attached to the appointment are listed.
5. Click Add to add an observation.
   ![](images/ehrsyndromicObs.gif)
6. Select the information, then click OK to save.
   * Observation Question: The data elements collected are based on EHR certification requirements.
     + BodyTemp
     + DateIllnessOrInjury
     + PatientAge
     + PrelimDiag
     + TriageNote
     + OxygenSaturation
     + ChiefComplaint
     + TreatFacilityID
     + TreatFacilityLocation
     + VisitType
   * Value Type: 5 values can be assigned to an observation question.
     + Address: Inserts the Practice address as the Facility Address.
     + Coded: Select a LOINC, SNOMEDCT, ICD9 or ICD10 code.
     + DateAndTime: Type the date/time in the Value field.
     + Numeric: Type the numeric value then select the Value Type.
     + Text: Type text in the Value field.
7. To export the data, see [EHR Export Syndromic Surveillance Data](ehrsyndromicdataexport.html).