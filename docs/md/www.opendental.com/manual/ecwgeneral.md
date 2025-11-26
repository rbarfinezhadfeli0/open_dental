Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

eCW General Information

Below is general information about using Open Dental with [eClinicalWorks](bridgeeclinicalworks.html).

## Usernames and Passwords

Users in Open Dental are automatically created when a user first launches Open Dental from eCW. The initial Open Dental password will match the user's eCW password. If an eCW password changes, it also needs to be updated in Open Dental. This can be done by logging into Open Dental using the old eCW password, then selecting File, Change Password. [Change Password](changepassword.html)

## Dental Visit Types

Every time you add a new visit type in eCW, contact eCW so they can update their interface.

## PDFs

Two kinds of PDFs can be sent from Open Dental to eCW as part of the HL7 messages.

1. A copy of the Progress Notes (procedures in Chart module). This happens in the [Edit Appointment](aptedit.html) window when pushing the Finish & Send button or the Notes PDF button.
2. A [Treatment Plan](treatmentplan.html) gets sent every time a TP is saved using the Save button.

In eCW, the PDF files can be accessed in Patient Documents.

## Medical History (Tight Integration)

Prescriptions, medications, problems, allergies, and medical history are entered into eCW and show in Open Dental's read only [Medical](medical.html).

## Prescriptions (Tight Integration)

Prescriptions show in the read-only Medical window. For 32 bit operating systems they may show in the Progress Notes. Prescriptions should always be created in eCW. eCW will then create an identical prescription in Open Dental, viewable in the read-only Medical window.

* 32 bit Operating Systems: The New Rx button in Open Dental may launch the eClinicalWorks prescriptions window where you can create the prescription, depending on your eCW configuration. Changes to the prescription in eCW do not propagate to Open Dental, so create a new prescription or alter in both places if you must edit a prescription. Note that if you are upping a dosage it is a new prescription, not an edited one. Normally you will not edit prescriptions once made.
* 64 bit Operating systems: There is no New Rx button in Open Dental. Create the prescription in eCW.

## EHR

* Tight Integration: eCW will be your Practice Management and EHR system for meaningful use. Open Dental only provides dental charting.
* Standalone mode: You can use eCW or Open Dental for EHR meaningful use, but not both. If you are going to use Open Dental, see [Open Dental EHR](../site/ehrlicense.html).

## Updating to a New Version of Open Dental

See [Update](update.html).