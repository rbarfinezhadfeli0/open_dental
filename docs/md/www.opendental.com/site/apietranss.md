Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API Etranss

See [API Specification](apispecification.html)

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [Etrans Database Schema.](SchemaRedirect%EF%B9%96etrans.html)

## Etranss GET

Version Added: 23.2.7

Gets all etranss for a patient.

**Parameters**:

**PatNum**: Required.
**CarrierNum**: Optional. FK to Carrier.CarrierNum.
**ClaimNum**: Optional. FK to Claim.ClaimNum.

**Example Request:**
 GET /etranss?PatNum=66

**Example Response:**
 [
 {
 "EtransNum": 143,
 "DateTimeTrans": "2023-07-31 10:40:41",
 "ClearingHouseNum": 0,
 "Etype": "ERA\_835",
 "ClaimNum": 54,
 "OfficeSequenceNumber": 0,
 "CarrierTransCounter": 0,
 "CarrierTransCounter2": 0,
 "CarrierNum": 12,
 "CarrierNum2": 0,
 "PatNum": 66,
 "BatchNumber": 4534,
 "AckCode": "",
 "TransSetNum": 0,
 "Note": "",
 "EtransMessageTextNum": 22,
 "AckEtransNum": 0,
 "PlanNum": 72,
 "InsSubNum": 21,
 "TransSetId835": 0,
 "CarrierNameRaw": "Yamhill Community Care",
 "PatientNameRaw": "Smith, Jane",
 "UserNum": 0
 }
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)