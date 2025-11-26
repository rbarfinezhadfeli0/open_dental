Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API SubstitutionLinks

See [API Specification](apispecification.html)

See [Estimate Downgrades](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7downgrades.html) for additional information.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [SubstitutionLink Database Schema.](SchemaRedirect%EF%B9%96substitutionlink.html)

## SubstitutionLinks GET

Version Added: 22.4.25

Gets a list of substitution links for a given insurance plan.

**PlanNum:** FK to InsPlan.planNum.

**Example Request:**
 GET /substitutionlinks?PlanNum=33

**Example Response:**

[
 {
 "SubstiutionLinkNum": 13,
 "PlanNum": 33,
 "CodeNum": 6,
 "SubstitutionCode": "D3002",
 "SubstOnlyIf": "Always"
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## SubstitutionLinks POST (create)

Version Added: 22.4.1

Creates a new SubstitutionLink. These links are created for a single insurance plan and will overwrite the ProcedureCode on a procedure with the SubstitutionCode. This replacement is based upon the SubstOnlyIf condition.

**PlanNum:** Required. FK to InsPlan.PlanNum.
**CodeNum:** Required. FK to ProcedureCode.CodeNum.
**SubstitutionCode:** Required. FK to ProcedureCode.ProcCode. Case-sensitive.
**SubstOnlyIf:** Required. Either "Always", "Molar", "SecondMolar", "Never", or "Posterior".

**Example Request:**
 POST /substitutionlinks

{
 "PlanNum": 34,
 "CodeNum": 6,
 "SubstitutionCode": "D3002",
 "SubstOnlyIf": "Molar"
 }

**Example Response:**

{
 "SubstitutionLinkNum": 16,
 "PlanNum": 34,
 "CodeNum": 6,
 "SubstitutionCode": "D3002",
 "SubstOnlyIf": "Molar"
 }

201 Created
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## SubstitutionLinks PUT (update)

Version Added: 22.4.25

Updates a substitution link.

**SubstitutionLinkNum:** Required in the URL.

**SubstitutionCode:** Optional. FK to ProcedureCode.ProcCode. Case-sensitive.
**SubstOnlyIf:** Optional. Either "Always", "Molar", "SecondMolar", "Never", or "Posterior".

**Example Request:**
 PUT /substitutionlinks/34

{
 "SubstitutionCode": "D3004",
 "SubstOnlyIf": "SecondMolar"
 }

**Example Response:**

{
 "SubstitutionLinkNum": 34,
 "PlanNum": 14,
 "CodeNum": 6,
 "SubstitutionCode": "D3004",
 "SubstOnlyIf": "SecondMolar"
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## SubstitutionLinks DELETE

Version Added: 22.4.25

Deletes an existing substitution link by SubstitutionLinkNum.

**SubsitutionLinkNum:** Required in URL.

**Example Request:**
 DELETE /substitutionlinks/25

**Example Response:**
 200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)