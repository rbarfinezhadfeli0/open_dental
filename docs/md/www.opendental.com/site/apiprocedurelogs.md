Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API ProcedureLogs

See [API Specification](apispecification.html)

Procedurelogs are complex, see [Procedure](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7procedureedit.html) for more information.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [ProcedureLog Database Schema.](SchemaRedirect%EF%B9%96procedurelog.html)

## ProcedureLogs GET (single)

Version Added: 23.3.13

Get a single procedurelog.

**ProcNum:** Required in URL.

**Example Request:**
 GET /procedurelogs/20

**Example Response:**
 {
 "ProcNum": 20,
 "PatNum": 12,
 "AptNum": 1341,
 "ProcDate": "2022-05-05",
 "ProcFee": "130.00",
 "Surf": "MODL",
 "ToothNum": "4",
 "ToothRange": "",
 "Priority": 0,
 "priority": "",
 "ProcStatus": "C",
 "ProvNum": 2,
 "provAbbr": "DOC2",
 "Dx": 0,
 "dxName": "",
 "PlannedAptNum": 0,
 "PlaceService": "Office",
 "Prosthesis": "",
 "DateOriginalProsth": "0001-01-01",
 "ClaimNote": "",
 "DateEntryC": "2022-04-17",
 "ClinicNum": 0,
 "CodeNum": 2,
 "procCode": "D0120",
 "descript": "periodic oral evaluation - established patient",
 "UnitQty": 1,
 "BaseUnits": 0,
 "DateTP": "2022-04-17",
 "SiteNum": 0,
 "HideGraphics": "false",
 "CanadianTypeCodes": "",
 "ProcTime": "00:00:00",
 "ProcTimeEnd": "00:00:00",
 "DateTStamp": "2022-05-05 07:00:34",
 "Prognosis": 0,
 "IsLocked": "false",
 "BillingNote": "",
 "Discount": 0.0,
 "IsDateProsthEst": "false",
 "SecDateEntry": "2022-04-17 09:38:21",
 "serverDateTime": "2025-06-17 09:00:34"
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## ProcedureLogs GET (multiple)

Version Added: 21.1

Get a list of procedurelogs that meet a set of search criteria.

**Parameters:** All Optional.

**PatNum:** FK to patient.PatNum.
**AptNum:** (Added in version 22.3.32) FK to appointment.AptNum.
**ProcStatus:** (Added in version 25.2.21) Either "TP" (Treatment Plan), "C" (Complete), "EC" (Existing Current Provider), "EO" (Existing Other Provider), "R" (Referred Out), "D" (Deleted), "Cn" (Condition), or "TPi" (Treatment Plan inactive).
**PlannedAptNum:** (Added in version 24.4.5) FK to appointment.AptNum where appointment.AptStatus=Planned.
**ClinicNum:** (Added in version 23.3.13) FK to clinic.ClinicNum.
**CodeNum:** (Added in version 25.2.21) FK to procedurecode.CodeNum.
**DateTStamp:** Gets procedurelogs created on or after the specified date and time. String in "yyyy-MM-dd HH:mm:ss" format.

**Example Requests:**
 GET /procedurelogs?PatNum=261
 GET /procedurelogs?DateTStamp=2020-07-30 08:00:00&Offset=400
 GET /procedurelogs?AptNum=202
 GET /procedurelogs?ClinicNum=1

**Example Response:**
 [
 {
 "ProcNum": 1,
 "PatNum": 1,
 "AptNum": 12,
 "ProcDate": "2021-04-01",
 "ProcFee": "255.00",
 "Surf": "MODL",
 "ToothNum": "4",
 "ToothRange": "",
 "Priority": 0,
 "priority": "",
 "ProcStatus": "C",
 "ProvNum": 1,
 "provAbbr": "DOC1",
 "Dx": 0,
 "dxName": "",
 "PlannedAptNum": 0,
 "PlaceService": "Office",
 "Prosthesis": "",
 "DateOriginalProsth": "0001-01-01",
 "ClaimNote": "",
 "DateEntryC": "2021-11-03",
 "ClinicNum": 0,
 "CodeNum": 2,
 "procCode": "D0120",
 "descript": "periodic oral evaluation - established patient",
 "UnitQty": 1,
 "BaseUnits": 0,
 "DateTP": "2021-04-01",
 "SiteNum": 0,
 "HideGraphics": "false",
 "CanadianTypeCodes": "",
 "ProcTime": "13:00:00",
 "ProcTimeEnd": "00:00:00",
 "DateTStamp": "2021-11-03 05:30:06",
 "Prognosis": 0,
 "IsLocked": "false",
 "BillingNote": "",
 "Discount": 15.0,
 "IsDateProsthEst": "false",
 "SecDateEntry": "2021-11-03 05:28:49",
 "serverDateTime": "2021-11-03 09:32:45"
 },
 {
 "ProcNum": 34,
 "PatNum": 46,
 "AptNum": 0,
 "ProcDate": "2022-07-06",
 "ProcFee": "49.99",
 "Surf": "",
 "ToothNum": "",
 "ToothRange": "",
 "Priority": 0,
 "priority": "",
 "ProcStatus": "TP",
 "ProvNum": 1,
 "provAbbr": "DOC1",
 "Dx": 0,
 "dxName": "",
 "PlannedAptNum": 38,
 "PlaceService": "Office",
 "Prosthesis": "",
 "DateOriginalProsth": "0001-01-01",
 "ClaimNote": "",
 "DateEntryC": "2022-03-30",
 "ClinicNum": 0,
 "CodeNum": 176,
 "procCode": "D1110",
 "descript": "prophylaxis - adult",
 "UnitQty": 1,
 "BaseUnits": 0,
 "DateTP": "2022-03-30",
 "SiteNum": 0,
 "HideGraphics": "false",
 "CanadianTypeCodes": "",
 "ProcTime": "08:30:00",
 "ProcTimeEnd": "09:30:00",
 "DateTStamp": "2023-02-08 11:37:43",
 "Prognosis": 0,
 "IsLocked": "false",
 "BillingNote": "",
 "Discount": 0.0,
 "IsDateProsthEst": "false",
 "SecDateEntry": "2022-03-30 13:24:08",
 "serverDateTime": "2023-08-19 13:04:27"
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## ProcedureLogs GET InsuranceHistory

Version Added: 22.4.31

Gets the previous treatment dates of procedures for a patient's insurance plan, similarly to how it shows in the [Insurance History](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7inshistory.html) form.

**Parameters:**

**PatNum:** Required. FK to patient.PatNum.
**InsSubNum:** Required. FK to inssub.InsSubNum.

Returned fields are detailed below:

**insHistPrefName:** Name of the Preference that is storing the ProcedureCodes for that category.
**procDate:** Previous treatement date for this category. Returns "No History" if there is no record, or "Not Set" if that preference has no procedure codes.
**ProcNum:** FK to procedure.ProcNum for the most recent procedure for that category.

**Example Requests:**
 GET /procedurelogs/InsuranceHistory?PatNum=2617&InsSubNum=2046

**Example Response:**
 [
 {
 "insHistPrefName": "InsHistBWCodes",
 "procDate": "2021-12-12",
 "ProcNum": 13073
 },
 {
 "insHistPrefName": "InsHistPanoCodes",
 "procDate": "2023-03-08",
 "ProcNum": 17068
 },
 {
 "insHistPrefName": "InsHistExamCodes",
 "procDate": "No History",
 "ProcNum": 0
 },
 {
 "insHistPrefName": "InsHistProphyCodes",
 "procDate": "2023-03-07",
 "ProcNum": 17064
 },
 {
 "insHistPrefName": "InsHistPerioURCodes",
 "procDate": "No History",
 "ProcNum": 0
 },
 {
 "insHistPrefName": "InsHistPerioULCodes",
 "procDate": "Not Set",
 "ProcNum": 0
 },
 {
 "insHistPrefName": "InsHistPerioLRCodes",
 "procDate": "No History",
 "ProcNum": 0
 },
 {
 "insHistPrefName": "InsHistPerioLLCodes",
 "procDate": "2009-06-19",
 "ProcNum": 1074
 },
 {
 "insHistPrefName": "InsHistPerioMaintCodes",
 "procDate": "No History",
 "ProcNum": 0
 },
 {
 "insHistPrefName": "InsHistDebridementCodes",
 "procDate": "2023-03-01",
 "ProcNum": 17067
 }
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## ProcedureLogs GET GroupNotes

Version Added: 25.2.38

Gets the Group Notes for a set of procedures for a patient. See [Procedure Group Note](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7procgroupnote.html).

**Parameters:**

**PatNum:** Required in URL. FK to patient.PatNum.

Returned field types are detailed below:

**PatNum:** The patient.PatNum the groupnote is for.
**ProvNum:** The provNum assigned for the groupnote.
**ProcNum:** The procedulog.ProcNum being used as a groupnote where procedurecode.ProcCode='~GRP~'.
**ProcNums:** Array of ProcNums that are in the groupnote.
**Note:** Derived from the procnote table, this is the groupnote displayed in OpenDental.
**isSigned:** Either "true" or "false". "true" if the groupnote is signed.

**Example Request:**
 GET /procedurelogs/GroupNotes?PatNum=26

**Example Response:**
 [
 {
 "PatNum": 26,
 "ProvNum": 3
 "ProcNum": 1470,
 "ProcNums": [1471, 1472],
 "Note": "Medical: no changes",
 "isSigned": "False"
 },
 {
 "PatNum": 26,
 "ProvNum": 3
 "ProcNum": 1453,
 "ProcNums": [1454, 1455],
 "Note": "Schedule followup RCT ASAP",
 "isSigned": "True"
 }
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## ProcedureLogs POST (create)

Version Added: 21.4

Creates a new procedure for a given patient. Attempts to set them will be silently ignored. Furthermore, the following pairs of fields may only have one of the two passed in at once: Priority and priority, Dx and dxName. Not all procedure codes support Surfs, ToothNums, and ToothRanges. Procedure code default notes will not be used.

**PatNum:** Required. FK to patient.PatNum.
**ProcDate:** Required. String in "yyyy-MM-dd" format.
**ProcStatus:** Required. Either TreatmentPlanned (TP), Complete (C), or ExisitingOtherProvider (EO). (Added in version 25.1.14) Existing Current Provider (EC), Referred Out (R), or Condition (Cn).
**CodeNum:** (Added in version 25.2.21) This or **procCode** is Required. FK to procedurecode.CodeNum.
**procCode:** This or **CodeNum** is Required. This should be a valid D code, example: D0120. CodeNum is set automatically.

**AptNum:** Optional. FK to appointment.AptNum.
**ProcFee:** Optional. If none is given this will default to the procedurecodes default, with consideration of the patient's insurance.
**Priority:** Optional. Definition.DefNum where definition.Category=20. Default is the first definition in that Category. If Priority is used, then priority will be set automatically.
**priority:** Optional. String version of Priority. If priority is used, then Priority will be set automatically.
**ProvNum:** Optional. Defaults to the PriProv of the appointment if given, otherwise it will check the patient's default provider. Failing either of the previous options, it will be set to the dental office's default provider. If ProvNum is used, then provAbbr will be set automatically.
**Dx:** Optional. Definition.DefNum where definition.Category=16. Default is the first definition in that Category. If Dx is used, then dxName will be set automatically.
**dxName:** Optional. String version of Dx. If dxName is used, then Dx will be set automatically.
**PlannedAptNum:** Optional. Only set if this procedure is on a planned appointment, otherwise it will be 0.
**PlaceService:** (Added in version 25.2.21) Optional. Either "Office", "PatientsHome", "InpatHospital", "OutpatHospital", "SkilledNursFac", "CustodialCareFacility", "OtherLocation", "MobileUnit", "School", "MilitaryTreatFac", "FederalHealthCenter", "PublicHealthClinic", "RuralHealthClinic", "EmergencyRoomHospital", "AmbulatorySurgicalCenter", "TelehealthOutsideHome", "TelehealthInHome", or "OutreachSiteOrStreet". Public Health feature must be enabled. Defaults to DefaultProcedurePlaceService preference or clinic.DefaultPlaceService.
**Prosthesis:** (Added in version 25.2.21) Optional. Either "No" (shows as ""), Initial "I", or Replacement "R". Cannot be set if procedurecode.IsProsth is false. Default is "No".
**DateOriginalProsth:** (Added in version 25.2.21) Optional. String in "yyyy-MM-dd" format. Cannot be set if procedurecode.IsProsth is false. Default is "0001-01-01".
**ClaimNote:** (Added in version 25.2.21) Optional. Note that goes out on e-claims. Default empty string.
**ClinicNum:** Optional. Defaults to the patient's clinic.
**DateTP:** (Added in version 25.2.21) Optional. The date the procedure was originally treatment planned. String in "yyyy-MM-dd" format. Defaults to the date the procedure was created.
**SiteNum:** (Added in version 25.2.21) Optional. FK to site.SiteNum. Public Health feature must be enabled. Default 0.
**ProcTime:** (Added in version 25.2.21) Optional. Time of day the procedure started. String in "HH:mm:ss" format. Default "00:00:00".
**ProcTimeEnd:** (Added in version 25.2.21) Optional. Time of day the procedure ended. Medical Insurance feature must be enabled. String in "HH:mm:ss" format. Default "00:00:00".
**Prognosis:** (Added in version 25.2.21) Optional. FK to definition.DefNum where definition.Category=30. Default 0.
**ToothNum:** Required by procCodes with a Surf or Tooth treatment area.
**Surf:** Required for the treatment areas of some procCodes. Can be tooth Surfaces (B/F,V,M,O/I,D,L), mouth Quadrants (UL,UR,LR,LL), Sextants (1,2,3,4,5,6), or Arches (U or L).
**ToothRange:** Required by procCodes with a ToothRange treatment area, or for Quadrants and Arches when AreaAlsoToothRange is true. A string of numbers separated by commas and/or hyphen separated ranges.
**BillingNote:** (Added in version 25.2.21) Optional. Note that shows in the Account Module. Default empty string.
**Discount:** (Added in version 25.2.21) Optional. The dollar amount of the discount. Default 0.0.
**IsDateProsthEst:** (Added in version 25.2.21) Optional. Either "true" or "false". Default "false".

**Example Requests:**
 POST /procedurelogs

{
 "PatNum": 31,
 "ProcDate": "2021-04-28",
 "ToothRange": "2,3, 13-15",
 "Priority": 149,
 "ProcStatus": "TP",
 "dxName": "Defect (or miss fill)",
 "procCode": "D1206"
 }

or

{
 "PatNum": 29,
 "AptNum": 0,
 "ProcDate": "2021-04-25",
 "ProcFee": "125.95",
 "Surf": "MO",
 "ToothNum": "4",
 "priority": "Low",
 "ProcStatus": "TP",
 "ProvNum": 1,
 "Dx": 126,
 "PlannedAptNum": 0,
 "ClinicNum": 0,
 "CodeNum": 33,
 "ProcTime": "13:45:00",
 "BillingNote": "Courtesy discount approved by Dr. Pinciotti for patient loyalty.",
 "Discount": 25.99
 }

**Example Response:**
 {
 "ProcNum": 301,
 "PatNum": 29,
 "AptNum": 0,
 "ProcDate": "2021-04-25",
 "ProcFee": "125.95",
 "Surf": "MO",
 "ToothNum": "4",
 "ToothRange": "",
 "Priority": 148,
 "priority": "Low",
 "ProcStatus": "TP",
 "ProvNum": 1,
 "provAbbr": "DOC 1",
 "Dx": 126,
 "dxName": "Cracked Tooth",
 "PlannedAptNum": 0,
 "PlaceService": "Office",
 "Prosthesis": "",
 "DateOriginalProsth": "0001-01-01",
 "ClaimNote": "",
 "DateEntryC": "2021-04-17",
 "ClinicNum": "0",
 "CodeNum": 33,
 "procCode": "D2331",
 "descript": "resin-based composite - two surfaces, anterior",
 "UnitQty": 1,
 "BaseUnits": 0,
 "DateTP": "2021-04-17",
 "SiteNum": 0,
 "HideGraphics": "false",
 "CanadianTypeCodes": "",
 "ProcTime": "13:45:00",
 "ProcTimeEnd": "00:00:00",
 "DateTStamp": "",
 "Prognosis": 0,
 "IsLocked": "false",
 "BillingNote": "Courtesy discount approved by Dr. Pinciotti for patient loyalty.",
 "Discount": 25.99,
 "IsDateProsthEst": "false",
 "SecDateEntry": "2021-04-17 09:38:21",
 "serverDateTime": ""
 }

201 Created
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## ProcedureLogs POST GroupNote

Version Added: 22.2

Creates a Group Note for a set of procedures. These procedures must have the same procdate, clinic, and provider. Any repeated ProcNums will be silently ignored.

Some dental offices choose to include an aggregate of the individual procedures' notes into their Group Notes, with the new Note text appended. For more information about Group Notes see [Procedure Group Note](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7procgroupnote.html). To create a Note for a single procedure see [API ProcNotes](https://www.opendental.com/site/apiprocnotes).

**PatNum:** Required.
**ProcNums:** Required. An array of ProcNums, in [1,2,3] format.
**Note:** Required. The text for the Group Note.
**isSigned:** (Added in version 25.2.38) Optional. Either "true" or "false". "true" applies a digital signature to procnote. Default "false".
**ProvNum:**(Added in version 25.3.36) Optional. Default to patient.PriProv.

Returned field types are detailed below:

**PatNum:** FK to patient.PatNum.
**ProvNum:**FK to provider.ProvNum.
**ProcNum:** FK to the procedulog being used as the groupnote, which is codenum type ~GRP~.
**ProcNums:** Array of FKs to the procedulog that are in the groupnote.
**Note:** Not a database column. Derived from the procnote table. This note is only the most recent note from that table. If user changes it, then the business layer handles it by adding another procnote to that table.
**isSigned:** Represent the procedurelog.Signature field. Used to apply a digital signature stamp when true in ProcedureLogGroupNotes.

**Example Request:**
 POST /procedurelogs/GroupNote

{
 "PatNum": 52,
 "ProvNum":3,
 "ProcNums": [1470, 1472],
 "Note": "Medical: no changes \r\nPt concerns: none"
 }

**Example Response:**
 {
 "PatNum": 52,
 "ProvNum":3,
 "ProcNum": 1473,
 "ProcNums": [1470, 1472],
 "Note": "Medical: no changes \r\nPt concerns: none",
 "isSigned": "false"
 }

201 Created
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## ProcedureLogs POST InsuranceHistory

Version Added: 22.4.31

This functions similarly to entering a date in the [Insurance History](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7inshistory.html) form for a single category. Creates a new Existing Other Provider (EO) procedure and Insurance History (InsHist) claimproc for a given patient. The new procedure will use the patient's default clinic, default provider, and the first alphanumeric procedure code in the category for the insHistPrefName.

**PatNum:** Required. FK to patient.PatNum.
**InsSubNum:** Required. FK to inssub.InsSubNum.
**insHistPrefName:** Required. String. The PrefName of the Insurance History category. Either "InsHistBWCodes", "InsHistPanoCodes", "InsHistExamCodes", "InsHistProphyCodes", "InsHistPerioURCodes", "InsHistPerioULCodes", "InsHistPerioLRCodes", "InsHistPerioLLCodes", "InsHistPerioMaintCodes", or "InsHistDebridementCodes". Case sensitive.
**ProcDate:** Required. String in "yyyy-MM-dd" format. The date the procedure was completed.

**Example Request:**
 POST /procedurelogs/InsuranceHistory

{
 "PatNum": 572,
 "InsSubNum": 49,
 "insHistPrefName": "InsHistExamCodes",
 "ProcDate": "2023-01-23"
 }

**Example Response:**
 {
 "ProcNum": 19087,
 "PatNum": 572,
 "AptNum": 0,
 "ProcDate": "2023-01-23",
 "ProcFee": "0.00",
 "Surf": "",
 "ToothNum": "",
 "ToothRange": "",
 "Priority": 0,
 "priority": "",
 "ProcStatus": "EO",
 "ProvNum": 1,
 "provAbbr": "DOC1",
 "Dx": 0,
 "dxName": "",
 "PlannedAptNum": 0,
 "PlaceService": "Office"
 "Prosthesis": "",
 "DateOriginalProsth": "0001-01-01",
 "ClaimNote": "",
 "DateEntryC": "2025-06-24",
 "ClinicNum": 3,
 "CodeNum": 2,
 "procCode": "D0120",
 "descript": "periodic oral evaluation - established patient",
 "UnitQty": 1,
 "BaseUnits": 0,
 "DateTP": "2023-01-23",
 "SiteNum": 0,
 "HideGraphics": "false",
 "CanadianTypeCodes": "",
 "ProcTime": "00:00:00",
 "ProcTimeEnd": "00:00:00",
 "DateTStamp": "2025-06-24 15:33:24",
 "Prognosis": 0,
 "IsLocked": "false",
 "BillingNote": "",
 "Discount": 0.0,
 "IsDateProsthEst": "false",
 "SecDateEntry": "2025-06-24 15:33:24",
 "serverDateTime": ""
 }

201 Created
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## ProcedureLogs PUT (update)

Version Added: 22.1

Updates an existing procedure. When changing procCode, the treatment area of the current and passed in procedure codes must match. Attempting to pass in empty strings for ToothNum, Surf, and ToothRange will be silently ignored. The CodeNum, procCode, Discount, ToothNum, Surf, and ToothRange fields cannot be updated on procedures with a ProcStatus of C. If the procedurelog is associated with certain appointments, claims, or orthocases, then some fields cannot be updated. Procedure code default notes will not be used.

ProcedureLogs associated with adjustments, appointments, payments, payplancharges, or paysplits are updated exactly as in Open Dental.

**ProcNum:** Required in URL.

**AptNum:** Optional. AptNum of the appointment to attach this procedure to.
**ProcDate:** Optional. String in "yyyy-MM-dd" format.
**ProcFee:** Optional. Procedure fee.
**Priority:** Optional. Definition.DefNum where definition.Category=20.
**ProcStatus:** Optional. Either TreatmentPlanned (TP), Complete (C), or ExisitingOtherProvider (EO). (Added in version 25.1.14) Existing Current Provider (EC), Referred Out (R), or Condition (Cn).
**ProvNum:** Optional. ProvNum for a provider.
**Dx:** Optional. Definition.DefNum where definition.Category=16.
**PlannedAptNum:** Optional. AptNum of a planned appointment this procedure is attached to.
**PlaceService:** (Added in version 25.2.21) Optional. Either "Office", "PatientsHome", "InpatHospital", "OutpatHospital", "SkilledNursFac", "CustodialCareFacility", "OtherLocation", "MobileUnit", "School", "MilitaryTreatFac", "FederalHealthCenter", "PublicHealthClinic", "RuralHealthClinic", "EmergencyRoomHospital", "AmbulatorySurgicalCenter", "TelehealthOutsideHome", "TelehealthInHome", or "OutreachSiteOrStreet". Public Health feature must be enabled.
**Prosthesis:** (Added in version 25.2.21) Optional. Either "No" (shows as ""), Initial "I", or Replacement "R". Cannot be set if procedurecode.IsProsth is false.
**DateOriginalProsth:** (Added in version 25.2.21) Optional. String in "yyyy-MM-dd" format. Cannot be set if procedurecode.IsProsth is false.
**ClaimNote:** (Added in version 25.2.21) Optional. Note that goes out on e-claims.
**ClinicNum:** Optional. FK to clinic.ClinicNum.
**CodeNum:** (Added in version 25.2.21) Optional. FK to procedurecode.CodeNum. Cannot be specified alongside **procCode**.
**procCode:** Optional. ProcCode of a procedurecode entry. If passed in, the treatment area must be the same as the current procCode's. Cannot be specified alongside **CodeNum**.
**DateTP:** (Added in version 25.2.21) Optional. The date the procedure was originally treatment planned. String in "yyyy-MM-dd" format.
**SiteNum:** (Added in version 25.2.21) Optional. FK to site.SiteNum. Public Health feature must be enabled.
**ProcTime:** (Added in version 25.2.21) Optional. Time of day the procedure started. String in "HH:mm:ss" format.
**ProcTimeEnd:** (Added in version 25.2.21) Optional. Time of day the procedure ended. Medical Insurance feature must be enabled. String in "HH:mm:ss" format.
**Prognosis:** (Added in version 25.2.21) Optional. FK to definition.DefNum where definition.Category=30.
**ToothNum:** Optional. Can only be updated if the treatment area of this procCode supports ToothNum.
**Surf:** Optional. Can only be updated if the treatment area of this procCode supports Surf.
**ToothRange:** Optional. Comma separated ToothNums and/or dash separated ranges of ToothNums. Can only be updated if the treatment area of this procCode supports ToothRange, whether the procCode's TreatArea is ToothRange or its 'AreaAlsoToothRange' field is true.
**BillingNote:** (Added in version 25.2.21) Optional. Note that shows in the Account Module.
**Discount:** (Added in version 25.2.21) Optional. The dollar amount of the discount.
**IsDateProsthEst:** (Added in version 25.2.21) Optional. Either "true" or "false".

**Example Requests:**
 PUT /procedurelogs/100

{
 "AptNum": "1023",
 "ProcDate": "2022-04-25",
 "ProcFee": "250",
 "Priority": "153",
 "ProcStatus": "TP",
 "ProvNum": "2",
 "Dx": "139",
 "PlannedAptNum": "0",
 "PlaceService": "PublicHealthClinic",
 "ClinicNum": "2",
 "DateTP": "2022-04-26",
 "SiteNum": 9,
 "ToothNum":"14",
 "Surf":"MO",
 "ToothRange": ""
 }

or

{
 "procCode": "D9972",
 "Prosthesis": "",
 "Surf": "L",
 "ToothRange":"31,30, 18-21"
 }

**Example Response:**
 {
 "ProcNum": 179,
 "PatNum": 23,
 "AptNum": "1023",
 "ProcDate": "2022-04-25",
 "ProcFee": "250.00",
 "Surf": "MO",
 "ToothNum": "14",
 "ToothRange": "",
 "Priority": 153,
 "priority": "3",
 "ProcStatus": "TP",
 "ProvNum": 2,
 "provAbbr": "HYG1",
 "Dx": 139,
 "dxName": "None",
 "PlannedAptNum": "0",
 "PlaceService": "PublicHealthClinic",
 "Prosthesis": "",
 "DateOriginalProsth": "0001-01-01",
 "ClaimNote": "",
 "DateEntryC": "2022-03-02",
 "ClinicNum": "2",
 "CodeNum": 193,
 "procCode": "D2393",
 "descript": "resin-based composite - three surfaces, posterior",
 "UnitQty": 1,
 "BaseUnits": 0,
 "DateTP": "2022-04-26",
 "SiteNum": 9,
 "HideGraphics": "false",
 "CanadianTypeCodes": "",
 "ProcTime": "12:10:00",
 "ProcTimeEnd": "00:00:00",
 "DateTStamp": "2022-04-26 13:44:55",
 "Prognosis": 0,
 "IsLocked": "false",
 "BillingNote": "",
 "Discount": 0.0,
 "IsDateProsthEst": "false",
 "SecDateEntry": "2022-03-02 11:27:25",
 "serverDateTime": ""
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## ProcedureLogs PUT GroupNote

Version Added: 22.2.29

Updates a specific Group Note procedure for a given patient.

For more information about Group Notes see [Procedure Group Note](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7procgroupnote.html). To update a Note for a single procedure see [API ProcNotes](https://www.opendental.com/site/apiprocnotes).

**PatNum:** Required.
**ProcNum:** Required in URL. Must be the ProcNum of a procedure with a procCode of "~GRP~".
**Note:** Required. The text for the Group Note.
**doAppendNote:** (Added in version 25.2.38) Optional. Either "true" or "false". "true" indicates the current Note value of the GroupNote should be prepended to the Note passed in. Only append a GroupNote if the GroupNote is locked, but not Invalidated
**isSigned:** (Added in version 25.2.38) Optional. Either "true" or "false". "true" applies a digital signature to procnote Signature and overwrites existing signature. "false" clears the exisiting signature.
**ProvNum:**(Added in version 25.3.36) Optional.

Returned field types are detailed below:

**PatNum:** FK to patient.PatNum.
**ProvNum:**FK to provider.ProvNum.
**ProcNum:** FK to the procedulog being used as the groupnote, which is codenum type ~GRP~.
**ProcNums:** Array of FKs to the procedulog that are in the groupnote.
**Note:** Not a database column. Derived from the procnote table. This note is only the most recent note from that table. If user changes it, then the business layer handles it by adding another procnote to that table.
**isSigned:** Represent the procedurelog.Signature field. Used to apply a digital signature stamp when true in ProcedureLogGroupNotes.

**Example Request:**
 PUT /procedurelogs/1473/GroupNote

{
 "PatNum": 30,
 "ProvNum":3,
 "Note": "Dental exam"
 }

**Example Response:**
 {
 "PatNum": 30,
 "ProvNum":3,
 "ProcNum": 1473,
 "ProcNums": [1470, 1472],
 "Note": "Dental exam",
 "isSigned": "false"
 }
 200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## ProcedureLogs DELETE

Version Added: 22.1

Deletes a procedure. Can only delete procedures with a ProcStatus of TP, TPi, or (added in version 23.1.11) C. Procedures cannot be deleted if they are attached to a claim, insurance payment, patient payment, adjustment, prescription, or payment plan. Also cannot delete a procedure if it has referrals attached, is linked to an ortho case, or if it's the last procedure from a preauthorization claim.

**ProcNum:** Required in the URL.

**Example Request:**
 DELETE /procedurelogs/25

**Example Response:**
 200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## ProcedureLogs DELETE GroupNote

Version Added: 22.3.8

Deletes a GroupNote procedure.

**ProcNum:** Required in the URL. Must be the ProcNum of a procedure with a procCode of "~GRP~".

**Example Request:**
 DELETE /procedurelogs/144/GroupNote

**Example Response:**
 200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)