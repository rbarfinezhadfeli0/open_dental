Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

HL7 Unit Tests

These Unit Tests are for [eCW HL7 Message Structure](hl7ecwmsg.html).

## Test 1: Process ADT Message

**Message**:

MSH|^~\&|||||20120901100000||ADT^A04||P|2.3

EVN|A04|20120901100000||

PID|1|10||A10|Smiths^Jan^F||19760210|M||Hispanic|421 Main Ave^Apt 7^Salem^MA^97330||5305554045|5305554234||Single|||534997812|||Standard

GT1|1|11|Smiths^Jon^F||420 Main Ave^Apt7^Salem^MA^97330|5305554743|5303635432|19770730|F|||544071829

**Results**:

EcwOldFull, EcwOldStandalone, EcwOldTight, HL7DefEcwFull, HL7DefEcwStandalone, HL7DefEcwTight:

* Fail to locate the patient by the PatNum in PID.2, so insert a new patient into the database.
* Fail to locate the guarantor by the PatNum in GT1.2, so insert a new patient into the database.
* Set patient.Guarantor=guarantor.PatNum and guarantor.Guarantor=guarantor.PatNum.
* Set the patient's and guarantor's primary provider equal to the practice default provider.
* Set the patient's and guarantor's billing type equal to the practice default billing type.
* Other patient fields: LName,FName,MiddleI,Birthdate,Gender,Race,Address,Address2,City,State,Zip,HmPhone,WkPhone,Position,SSN,FeeSched.
* Other guarantor fields: LName,FName,MiddleI,Birthdate,Gender,Address,Address2,City,State,Zip,HmPhone,WkPhone,SSN.

EcwOldFull, EcwOldTight, HL7DefEcwFull, HL7DefEcwTight:

* Set patient.PatNum=10, patient.ChartNumber="A10", guarantor.PatNum=11, guarantor.ChartNumber="".

EcwOldStandalone, HL7DefEcwStandalone:

* Set patient.ChartNumber="10", guarantor.ChartNumber="11". (PatNums will be next auto-incremented value.)

## Test 2: Update Demographic Information

**Message**:

MSH|^~\&|||||20120901100000||ADT^A04||P|2.3

EVN|A04|20120901100000||

PID|1|10||A11|Smith^Jane^N||19760205|Female||White|421 Main St^Apt 17^Dallas^OR^97338||5035554045|5035554234||Married|||111224444|||Standard

GT1|1|11|Smith^John^L||421 Main St^Apt 17^Dallas^OR^97338|5035554743|5033635432|19770704|Male|||111223333

**Results**:

EcwOldFull, EcwOldStandalone, EcwOldTight, HL7DefEcwFull, HL7DefEcwStandalone, HL7DefEcwTight:

* Locate the patient inserted in Test 1 with PID.2 and the guarantor from Test 1 with GT1.2.

EcwOldFull, EcwOldTight, HL7DefEcwFull, HL7DefEcwTight:

* PID.2 and GT1.2 are PatNum so locate by PatNum.
* Update patient.ChartNumber to A11.
* All other demographic information should be updated.

EcwOldStandalone, HL7DefEcwStandalone:

* PID.2 and GT1.2 are ChartNumber so locate by ChartNumber.
* patient.ChartNumber is not changed.
* All other demographic information should be updated.

## Test 3: Message With Missing First or Last Name

**Message**:

MSH|^~\&|||||20120901100000||ADT^A04||P|2.3

EVN|A04|20120901100000||

PID|1|10||A10|Smith^^N||19760215|M||Asian|421 Main Ave^Apt 7^Salem^MA^97330||5305554045|5305554234||Single|||111224444|||Standard

GT1|1|11|^John^L||421 Main Ave^Apt 7^Salem^MA^97330|5305554743|5303635432|19770730|Female|||111223333

**Results**:

EcwOldFull, EcwOldStandalone, EcwOldTight, HL7DefEcwFull, HL7DefEcwStandalone, HL7DefEcwTight:

* No information gets be updated.
* Compare test patient and guarantor before message to test patient and guarantor after message.

## Test 4: Parse Date

Message:

MSH|^~\&|||||20120901100000||ADT^A04||P|2.3

EVN|A04|20120901100000||

PID|1|20||A100|Smith^Jane^N||197602|Female||White|421 Main St^Apt 17^Dallas^OR^97338||5035554045|5035554234||Married|||111224444|||Standard

GT1|1|21|Smith^John^L||421 Main St^Apt 17^Dallas^OR^97338|5035554743|5033635432|197707030711|Male|||111223333

Results:

EcwOldFull, EcwOldStandalone, EcwOldTight:

* Insert two new patients, patient from PID and guarantor from GT1.
* patient.Birthdate=0001-01-01 because it is less than 8 digits.
* guarantor.Birthdate=0001-01-01 because it is more than 8 digits.

HL7DefEcwFull, HL7DefEcwStandalone, HL7DefEcwTight:

* Insert two new patients, patient from PID and guarantor from GT1.
* patient.Birthdate=0001-01-01 because it's less than 8 digits.
* guarantor.Birthdate=1977-07-03 7:11 AM but inserted as date 1977-07-03.

## Test 5: Process SIU Message

**Message**:

MSH|^~\&|||||20120901100000||SIU^S12||P|2.3

SCH|100|100|||||Checkup||||^^1200^20120901100000^20120901102000||||||||||||||

PID|1|30||A30|Smiths2^Jan2^L||19760210|Male||Hispanic|421 Main Ave^Apt 7^Salem^MA^97330||5305554045|5305554234||Single|||222334444|||Standard

**Results**:

EcwOldFull, EcwOldTight, HL7DefEcwFull, HL7DefEcwTight:

* Fail to locate patient so insert new patient.
* No PV1 or AIG segment.
* New appointment so insert appointment into database with appointment.AptNum=100.
* appointment.PatNum=30; appointment.AptStatus=ApptStatus.Scheduled; appointment.Note="Checkup"; appointment.AptDateTime="2012-09-01 10:00 AM"; appointment.Pattern="XXXX"; appointment.ProvNum=pat.PriProv=preference.PracticeDefaultProv.

EcwOldStandalone, HL7DefEcwStandalone:

* Gets processed as a failed incoming message.

## Test 6: Update Information

**Message**:

MSH|^~\&|||||20120901100000||SIU^S12||P|2.3

SCH|100|100|||||Checkup and Fillings||||^^2400^20120902100000^20120902104000||||||||||||||

PID|1|30||A300|Smith2^Jane2^N||19760205|Female||White|421 Main St^Apt 17^Dallas^OR^97338||5035554045|5035554234||Married|||222334444|||Standard

**Results**:

EcwOldFull, EcwOldTight, HL7DefEcwFull, HL7DefEcwTight:

* Locate the patient with PatNum in PID.2 and appointment with AptNum in SCH.1 (inserted in Test 5).
* Update the appointment and patient information.
* appointment.Note="Checkup and Fillings"; appointment.AptDateTime="2012-09-02 10:00 AM"; appointment.Pattern="XXXXXXXX".

EcwOldStandalone, HL7DefEcwStandalone:

* Gets processed as a failed incoming message.

## Test 7: Mismatched appointment.PatNum and patient.PatNum

**Message**:

MSH|^~\&|||||20120901100000||SIU^S12||P|2.3

SCH|100|100|||||Checkup and Fillings||||^^2400^20120903100000^20120903104000||||||||||||||

PID|1|30||A300|Smith2^Jane2^N||19760210|Male||White|421 Main St^Apt 17^Dallas^OR^97338||5035554045|5035554234||Married|||222334444|||Standard

**Results**:

EcwOldFull, EcwOldTight, HL7DefEcwFull, HL7DefEcwTight:

* Before processing this message, change appointment.PatNum from appointment updated in Test 6 to 40.
* Locate the patient with PID.2 and appointment with SCH.1.
* Compare appointment.PatNum (now 40) to patient.PatNum (30) and since they don't match anymore, do not update any information.
* We will use appointment.AptDateTime to verify that nothing was changed in the appointment table.
* Compare the patient before processing the message to the patient after processing to verify no changes were made.
* After test return appointment.PatNum to 30 for Test 8.

EcwOldStandalone, HL7DefEcwStandalone:

* Gets processed as a failed incoming message.

## Test 8: Missing Patient's Last Name

**Message**:

MSH|^~\&|||||20120901100000||SIU^S12||P|2.3 SCH|100|100|||||Checkup and Fillings and Crown||||^^2400^20120902100000^20120902104000||||||||||||||PID|1|30||A300|^Jane2^N||19760205|Male||White|421 Test St^Apt 17^Dallas^OR^97338||5035554041|5035554234||Married|||222334444|||Standard

**Results**:

EcwOldFull, EcwOldTight, HL7DefEcwFull, HL7DefEcwTight:

* Locate the patient and appointment but since there is no LName, do not update any information.
* We will use appointment.Note and patient information to verify that no information was changed.

EcwOldStandalone, HL7DefEcwStandalone:

* Gets processed as a failed incoming message.

## Test 9: Process AIG Segment

**Message**:

MSH|^~\&|||||20120901100000||SIU^S12||P|2.3

SCH|100|100|||||Checkup and Fillings||||^^2400^20120902100000^20120902104000||||||||||||||

PID|1|30||A300|Smith2^Jane2^N||19760205|Female||White|421 Main St^Apt 17^Dallas^OR^97338||5035554045|5035554234||Married|||222334444|||StandardAIG|1||DOC1^Albert, Brian S||||

**Results**:

EcwOldFull, EcwOldTight, HL7DefEcwFull, HL7DefEcwTight:

* An optional AIG segment is included, so use that segment to insert a new provider.
* provider.Abbr=DOC1; provider.EcwID=DOC1; provider.LName=Albert; provider.FName=Brian; provider.MI=S; appointment.ProvNum=provider.ProvNum; patient.PriProv=provider.ProvNum

EcwOldStandalone, HL7DefEcwStandalone:

* Gets processed as a failed incoming message.

## Test 10: Process PV1 Segment

**Message**:

MSH|^~\&|||||20120901100000||SIU^S12||P|2.3

SCH|100|100|||||Checkup and Fillings||||^^2400^20120902100000^20120902104000||||||||||||||

PID|1|30||A300|Smith2^Jane2^N||19760205|Male||White|421 Main St^Apt 17^Dallas^OR^97338||5035554045|5035554234||Married|||222334444|||StandardPV1|1||||||DOC2^Lexington^Sarah^J||||||||||||

**Results**:

EcwOldFull, EcwOldTight, HL7DefEcwFull, HL7DefEcwTight:

* Use the PV1 segment to insert a new provider and set the appropriate fields as in Test 9.

EcwOldStandalone, HL7DefEcwStandalone:

* Gets processed as a failed incoming message.

## Test 11: Create DFT Message

**Setup**:

* Add 2 D0230 procedures, a D0150 procedure, and a D2332 procedure all with complete status and ProcDate='2012-09-06' to the patient with PatNum=10.
* Set the 2332 procedurelog.ToothNum=26 and procedurelog.Surf=MID.
* Make sure the procedurelog.ProcFee for D0230 is 20.00, the D0150 is 75.00, and the D2332 is 150.00.
* Using DOC1 provider from Test 9, schedule an appointment for patient 10 with appointment.AptNum=500 and appointment.ProvNum=provider.ProvNum and attach the four procedures.
* Create a DFT message for this patient, provider, appointment, and procedures.

**Results**:

EcwOldFull, EcwOldTight:

MSH|^~\&|OD||ECW||20120906075519||DFT^P03||P|2.3

EVN|P03|20120906075519|

PID|1|A11|10||Smith^Jane^N||19760205|F||White|421 Main St^Apt 17^Dallas^OR^97338||5035554045|5035554234||Married|||111224444|||

PV1|||||||DOC1^Albert, Brian S^^||||||||||||500|||||||||||||||||||||||||||||||

FT1|1|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert, Brian S^^|DOC1^Albert, Brian S^^|75.00|||D0150|^

FT1|2|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert, Brian S^^|DOC1^Albert, Brian S^^|20.00|||D0230|^

FT1|3|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert, Brian S^^|DOC1^Albert, Brian S^^|20.00|||D0230|^

FT1|4|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert, Brian S^^|DOC1^Albert, Brian S^^|150.00|||D2332|26^MID

ZX1|6|PDF|PATHOLOGY^Pathology Report^L|treatment|Test Message

HL7DefEcwFull, HL7DefEcwTight:

MSH|^~\&|OD||ECW||20120906075519||DFT^P03||P|2.3

EVN|P03|20120906075519|

PID|1|A11|10||Smith^Jane^N||19760205|F||White|421 Main St^Apt 17^Dallas^OR^97338||5035554045|5035554234||Married|||111224444|||

PV1|||||||DOC1^Albert^Brian^S||||||||||||500|||||||||||||||||||||||||||||||

FT1|1|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert^Brian^S|DOC1^Albert^Brian^S|75.00|||D0150|^

FT1|2|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert^Brian^S|DOC1^Albert^Brian^S|20.00|||D0230|^

FT1|3|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert^Brian^S|DOC1^Albert^Brian^S|20.00|||D0230|^

FT1|4|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert^Brian^S|DOC1^Albert^Brian^S|150.00|||D2332|26^MID

ZX1|6|PDF|PATHOLOGY^Pathology Report^L|treatment|Test Message

EcwOldStandalone, HL7DefEcwStandalone: DFT messages are not created in Standalone mode.

## Test 12: Create DFT Message With Multiple Providers

**Setup**:

* Change the provider for the D2332 procedure on the appointment with AptNum=500 to DOC2 from Test 10.
* Create DFT message again for this patient, provider, appointment, and procedures and verify that the FT1 segment for that procedure lists the correct provider.

**Results**:

EcwOldFull, EcwOldTight:

MSH|^~\&|OD||ECW||20120906075519||DFT^P03||P|2.3

EVN|P03|20120906075519|

PID|1|A11|10||Smith^Jane^N||19760205|F||White|421 Main St^Apt 17^Dallas^OR^97338||5035554045|5035554234||Married|||111224444|||

PV1|||||||DOC1^Albert, Brian S^^||||||||||||500|||||||||||||||||||||||||||||||

FT1|1|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert, Brian S^^|DOC1^Albert, Brian S^^|75.00|||D0150|^

FT1|2|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert, Brian S^^|DOC1^Albert, Brian S^^|20.00|||D0230|^

FT1|3|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert, Brian S^^|DOC1^Albert, Brian S^^|20.00|||D0230|^

FT1|4|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert, Brian S^^|DOC1^Albert, Brian S^^|150.00|||D2332|26^MID

ZX1|6|PDF|PATHOLOGY^Pathology Report^L|treatment|Test Message

HL7DefEcwFull, HL7DefEcwTight:

MSH|^~\&|OD||ECW||20120906075519||DFT^P03||P|2.3

EVN|P03|20120906075519|

PID|1|A11|10||Smith^Jane^N||19760205|F||White|421 Main St^Apt 17^Dallas^OR^97338||5035554045|5035554234||Married|||111224444|||

PV1|||||||DOC1^Albert^Brian^S||||||||||||500|||||||||||||||||||||||||||||||

FT1|1|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert^Brian^S|DOC1^Albert^Brian^S|75.00|||D0150|^

FT1|2|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert^Brian^S|DO1^Albert^Brian^S|20.00|||D0230|^

FT1|3|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert^Brian^S|DOC1^Albert^Brian^S|20.00|||D0230|^

FT1|4|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert^Brian^S|DOC1^Albert^Brian^S|150.00|||D2332|26^MID

ZX1|6|PDF|PATHOLOGY^Pathology Report^L|treatment|Test Message

EcwOldStandalone, HL7DefEcwStandalone: DFT messages are not created in Standalone mode.

## Test 13: Truncate D Codes to Dxxxx

**Setup**:

* Insert a procedure D2332A, with treatment area surface and ProcFee=200.00.
* Insert another procedure 2332AA with treatment area surface and ProcFee=250.00.
* Add a D2332A on tooth 1 with surfaces MOD, and a 2332AA on tooth 2 with surfaces MOD to the patient's chart.
* Schedule an appointment for the patient with AptNum=600, appointment.ProvNum=ProvNum for provider DOC1 and attach the two procedures.
* Create a DFT message for these procedures, appointment, patient, and provider and verify that the D2332A gets truncated to D2332 and the 2332AA doesn't get changed.

**Results**:

EcwOldFull, EcwOldTight:

MSH|^~\&|OD||ECW||20120906093201||DFT^P03||P|2.3

EVN|P03|20120906093201|

PID|1|A11|10||Smith^Jane^N||19760205|F||White|421 Main St^Apt 17^Dallas^OR^97338||5035554045|5035554234||Married|||111224444|||

PV1|||||||DOC1^Albert, Brian S^^||||||||||||600|||||||||||||||||||||||||||||||

FT1|1|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert, Brian S^^|DOC1^Albert, Brian S^^|200.00|||D2332|1^MOD

FT1|2|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert, Brian S^^|DOC1^Albert, Brian S^^|250.00|||2332AA|2^MOD

ZX1|6|PDF|PATHOLOGY^Pathology Report^L|treatment|Test Message

HL7DefEcwFull, HL7DefEcwTight:

MSH|^~\&|OD||ECW||20120906093201||DFT^P03||P|2.3 EVN|P03|20120906093201|

PID|1|A11|10||Smith^Jane^N||19760205|F||White|421 Main St^Apt 17^Dallas^OR^97338||5035554045|5035554234||Married|||111224444|||

PV1|||||||DOC1^Albert^Brian^S||||||||||||600|||||||||||||||||||||||||||||||

FT1|1|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert^Brian^S|DOC1^Albert^Brian^S|200.00|||D2332|1^MOD

FT1|2|||20120906000000|20120906000000|CG||||1.0||||||||||DOC1^Albert^Brian^S|DOC1^Albert^Brian^S|250.00|||2332AA|2^MOD

ZX1|6|PDF|PATHOLOGY^Pathology Report^L|treatment|Test Message

EcwOldStandalone, HL7DefEcwStandalone: DFT messages are not created in Standalone mode.