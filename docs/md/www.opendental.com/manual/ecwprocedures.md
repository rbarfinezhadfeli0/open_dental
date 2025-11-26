Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

eCW Procedures

When using Open Dental in Tight Integration with [eClinicalWorks](bridgeeclinicalworks.html), as procedures are completed in Open Dental, they are sent to eCW for billing and claim purposes. This section assumes that the appointment (encounter) was previously created in eCW.

## Send a Procedure to eCW

1. Access Open Dental from eCW by selecting View Dental Chart. The VisitID/AptNum is passed silently to Open Dental and an appointment will show in the Chart. It was transferred there via HL7 within 70 seconds of the last appointment edit in eCW.
2. If you haven't already added today's treatment planned procedures, chart the procedures with status treatment planned. See [Enter Treatment](entertreatment.html).
3. In the [Chart Module](chart.html), double click on today's appointment to see treatment planned procedures. Highlight the procedures to attach. Any other procedures that have been completed already will be automatically highlighted.
4. Verify the correct provider is attached to the appointment.
5. Change the appointment status from *Scheduled* to *Complete*, then click OK.
6. This will generate any default [Procedure Notes](procedurenotes.html), mark the procedures as *Complete* (which does not mean you are finished, only that these are the procedures you have done today), and apply the associated provider to the completed procedures.
7. If you use [Procedure Group Note](procgroupnote.html), highlight your completed procedures, then right click and select Group Note to enter.
8. During the course of the appointment, procedures may still be altered, added, removed, etc.
9. When patient treatment is done, open the appointment and check the procedures one last time for accuracy.
10. Signatures and procedure notes are verified prior to Finish & Send if boxes *Require Signatures for Procedure Notes* and *Don't Allow Incomplete Procedure Notes* are checked.
11. Click Finish & Send to close Open Dental and send the procedures to eCW. The Finish & Send button is labeled Complete prior to version 12.4.47.

If the procedures were sent incorrectly and need to be altered, open the appointment again and click Revise. This allows you to fix them in Open Dental. They will also need to be separately fixed in eCW. The user must have the security permission *EcwAppointmentRevise* in order to revise.

## Duplicate Procedures

Duplicate procedures are checked for and removed from HL7 messages. In order to send more than one of the same procedure, there must be a distinguishing characteristic (e.g. tooth number, tooth range, surface, or procedure fee). The recommended property is tooth number. We do not recommend procedure fee.

* If it is a filling or crown, the distinguishing characteristic is Tooth Number.
* If a procedure doesn't have a tooth treatment area, create a dummy code that will have that treatment area. For example, to add multiple PA's, create a code D0230b with a treatment area of tooth. For each additional PA you complete for the patient, select a different tooth so they all show up in the HL7 DFT message. The HL7 service will remove any characters after the first five digits, so the 'b' would not be included in the DFT message.

## Full-mouth Series Procedure Button

A custom procedure button can be set up to handle a 6 PA series. The button must be set up exactly like this:

* Procedure code for PA must be area *mouth*, and must have an abbreviation of *PA*. The ordinary PA code can be used.
* Procedure code for PA+ must be created that is different than the normal PA+ code. See Duplicate Procedures above. The second PA+ code must have an area of *Tooth* and must have a abbreviation of *PA+*.
* A procedure button must be created so that it has these exact six codes on it: *PA, PA+, PA+, PA+, PA+, PA+*.

When the button is used, it will create a PA with no tooth number as well as 5 additional PAs with tooth numbers of 8,14,19,24, and 30. These procedures will not trigger the duplicate procedures warning for HL7 because they have unique tooth numbers to distinguish them.