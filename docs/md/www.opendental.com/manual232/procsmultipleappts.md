Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Procedure over Multiple Appointments

When [Entering Treatment](entertreatment.html), group procedures that occur over multiple visits.

## Group for Multiple Visits

Procedures can be grouped as a reminder to only send the claim when all procedures have been completed.

In the [Chart Module](chart.html), highlight the procedures, then right-click and select **Group for Multiple Visits**.

![](images/groupForMultiple.gif)

Alternatively, when setting up a [Procedure Button](procedurebuttonedit.html), mark the button as **Group for Multiple Visits**.

![](images/groupForMultipleProcButton.png)

When one of the grouped procedures is set complete, it will display with a status of *Complete (In Process)* in the [Procedure](procedureedit.html) Info window and [Account Module](account.html). Once all procedures in the group have been set complete or procedures are ungrouped, the *In Process* status will be removed.

Once procedures are grouped, they can be ungrouped when needed. In the Chart Module, right-click on a grouped procedure and select **View Multivisit Group(s)**.

![](images/ungroupMultiVisit.gif)

The View Multi Visit Group window will open.

![](images/multiVisitGroup.gif)

* **Ungroup**: Select procedures, then click to remove them from the group.

## Claims

Claims that include procedures grouped for multiple visits will be assigned a Claim Status of *Hold for In Process*.

If completed procedures are grouped with treatment planned procedures after a claim has been created and the claim status is *Waiting to Send*, *Hold until Pri Received*, or *Unsent* the claim status will be changed to *Hold for In Process*.

Once all procedures in the group have been set complete or remaining treatment planned procedures are ungrouped, the claim status will be changed to *Waiting to Send*. The claim status cannot be changed if any procedure status is *Complete (In Process)*. See [Edit Claim](claimedit.html): Claim Status.

If a claim needs to be sent prior to other procedures in the group being completed, ungroup the completed procedures to send the claim.

## Fees

For crowns, bridges, dentures, partials, etc, there is usually a prep or impression appointment and then a seat or deliver appointment. The fee is either charged at the first appointment or the last appointment. Decide which method to use before setting up the procedure codes in the [Procedure Codes](procedurecodes.html).

Note: Some insurance companies prefer the procedure to be billed on the prep date, though many do request to be billed on the seat date. The insurance company may have a clause that the coverage date of the patient may only apply to the seat date.

**Fee due at first appointment**: This method is a more effective way to ensure the practice collects the money for the procedure. The responsibility falls on the patient to follow up and make sure the crown gets seated, etc. The patient is charged whether or not they return.

1. Schedule the first appointment. For the procedure use the standard ADA code with the proper fee attached. The default [Procedure Notes](procedurenotes.html) would be notes for the prep or impression (e.g., 3 carps 2% Lido-1:100k epi, prep, cord with hemostat, PVS, etc. -or- Alginate impression, opposing alginate, shade 102, etc.)
2. For the second appointment, use a special no-fee procedure code that is marked *do not bill insurance* and has a fee of $0. The code should not look like an ADA code (e.g., use a beginning N instead of the usual D to indicate no-fee). The procedure might be *Crown Seat* or *Denture Deliver*. The procedure note would be the standard note for seating or delivering. Example: Removed temp, checked contacts and bite, showed to patient, cemented Fuji. -or- Delivered. Checked fit, bite, appearance, etc.

**Fee due at the second or last appointment**: This method tends to more closely follow most insurance company policies. If the patient does not return for their second appointment, follow up and charge the patient for the lab fee they incurred.

1. Schedule the first appointment using the no-fee procedure code that is not billed to insurance such as *Crown Prep* or *Denture Imp*, with the appropriate procedure notes (see above).
2. For the second appointment, use the standard ADA code that is billed to insurance.

## Logic

* When selecting procedures and grouping manually, using right-click **Group for Multiple Visits**, all procedures are grouped into one group.
* When charting procedures using a Procedure Button with *Group for mutliple visits* enabled:
  + Procedure buttons with [Auto Codes](autocode.html) attached will be placed into one group, regardless of treatment area selected.
  + Procedure buttons without Auto Codes attached will be placed into multiple groups, based on treatment area (e.g., tooth number).