Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

API TreatPlanAttaches

See [API Specification](apispecification.html)

Used to show Procedures attached to a TreatPlan with TPStatus of either Active or Inactive. For Saved treatment plans, use [ProcTPs](apiproctps.html). See [Treatment Plans](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7treatmentplanedit.html) for more information.

Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.
 See [TreatPlanAttach Database Schema.](SchemaRedirect%EF%B9%96treatplanattach.html)

## TreatPlanAttaches GET

Version Added: 22.4.16

Gets a list of treatplanattaches associated to a specified treatplan. Use [TreatPlans GET](apitreatplans.html) to find the TreatPlanNum of an existing treatplan.

**TreatPlanNum:** Required in the URL. FK to treatplan.TreatPlanNum.

**Example Request:**
 GET /treatplanattaches?TreatPlanNum=1845

**Example Response:**
 [
 {
 "TreatPlanAttachNum": 3211,
 "TreatPlanNum": 1845,
 "ProcNum": 1977,
 "Priority": 151,
 "priority": "1"
 },
 {
 "TreatPlanAttachNum": 3222,
 "TreatPlanNum": 1845,
 "ProcNum": 11018,
 "Priority": 159,
 "priority": "Recmend"
 },
 {
 "TreatPlanAttachNum": 3223,
 "TreatPlanNum": 1845,
 "ProcNum": 11017,
 "Priority": 148,
 "priority": "Wait"
 },
 {
 "TreatPlanAttachNum": 3234,
 "TreatPlanNum": 1845,
 "ProcNum": 11005,
 "Priority": 0,
 "priority": ""
 },
 etc...
 ]

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## TreatPlanAttaches POST

Version Added: 23.2.17

Creates an association between a treatment plan and a procedure.

**TreatPlanNum:** Required. FK to treatplan.TreatPlanNum.
**ProcNum:** Required. FK to procedurelog.ProcNum.

**Priority:** Optional. definition.DefNum where definition.Category=20. Default 0.

**Example Request:**
 POST /treatplanattaches

{
 "TreatPlanNum": 9,
 "ProcNum": 132,
 "Priority": 148
 }

**Example Response:**
 {
 "TreatPlanAttachNum": 70,
 "TreatPlanNum": 9,
 "ProcNum": 132,
 "Priority": 148,
 "priority": "Wait"
 }

201 Created
 400 BadRequest (with explanation)
 404 NotFound (with explanation)

## TreatPlanAttaches PUT

Version Added: 23.2.17

Updates the Priority on a treatplanattach.

**TreatPlanAttachNum:** Required in the URL.

**Priority:** definition.DefNum where definition.Category=20.

**Example Request:**
 PUT /treatplanattaches/70

{
 "Priority": 149
 }

**Example Response:**
 {
 "TreatPlanAttachNum": 70,
 "TreatPlanNum": 9,
 "ProcNum": 132,
 "Priority": 149,
 "priority": "Low"
 }

200 OK
 400 BadRequest (with explanation)
 404 NotFound (with explanation)