Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

HL7 Message Types

Below is a description of [HL7](hl7.html) inbound and outbound message types that are supported. Outbound message type descriptions also include what actions in Open Dental cause an outbound message.

[Generic HL7 Message Structure](hl7genericmsg.html), [eCW HL7 Message Structure](hl7ecwmsg.html), [LabCorp HL7 Definition](hl7labcorpmsg.html)

## Inbound Messages

**ACK** - **General Acknowledgment Message:** In TCP/IP mode, every message sent by Open Dental should be acknowledged by the receiving software. If an acknowledgment is not received within 5 seconds of sending a message, an event log warning will be entered and the message will be resent within 6 seconds.

**ADT** - **Patient Demographics Message:** Updates patient demographic information. If an inbound ADT message is defined, changes made to patient information within Open Dental may be overwritten by the next inbound ADT message for the patient.

**PPR** -**Patient Problem Message:** Either adds a new problem or updates an existing problem, based on the problem action field, usually PPR-1. The problem code in PPR-3.0 must be a SNOMED code identified by SNM (not case sensitive) in PPR-3.2. There must be a problem in the Open Dental database with the same SNOMED code assigned, and there must be a unique identifier with assigning authority root in PPR-4.0 and PPR-4.2 respectively. Start and stop dates are allowed in PPR-7 and PPR-9 respectively, but either or both can be omitted and the problem will still be inserted. If the patient has an active problem with this SNOMED code in their medical chart, but the unique identifier received does not refer to the existing problem, the existing problem will be marked inactive and the new problem will be inserted and linked to the unique identifier. If the patient has an active problem with this SNOMED code and the unique identifier does reference the existing problem, the start and stop dates will be updated and the problem status will be set to active.

**SIU** - **Schedule Information Unsolicited Message:** Used when Open Dental assumes the role of an auxiliary application. In this role, Open Dental does not modify the schedule. Appointments are inserted from these inbound messages without regard to operatories or schedules or overlaps. For this reason, when Open Dental is the auxiliary application the Appointment module is hidden. If it was not hidden, there would be errors when the operatories were drawn and all of the appointments for the day were overlapping in the same operatory.

**SRM** - **Schedule Request Message**: Used when Open Dental assumes the role of the filler application. In this role, Open Dental maintains and controls the schedules of the providers and operatories. So appointments are created and modified in Open Dental and a definition for an inbound SIU message should NOT be in the enabled HL7 definition. There may, however, be an outbound SIU message defined for communicating appointment information to another software (see *Outbound Messages - SIU*). Another software may, however, request modifications to existing appointments in Open Dental. These requests are received in the form of an SRM message with event type S03. Only some of the appointment details can be modified by an inbound SRM. The appointment cannot be moved or have the length adjusted, since the external software has no knowledge of the operatory/provider schedules and openings. An inbound SRM message can change the provider (both dentist and hygienist), the confirmation status, the clinic, and the note for the specified appointment. There is also support for breaking an appointment, using an SRM with event type S04 (see the [Open Dental HL7 Interface Specifications](../resources/HL7MessagingInterfaceSpecs.pdf) for an explanation of the different event types).

## Outbound Messages

**ACK - General Acknowledgment Message** If the enabled HL7 definition is set to TCP/IP mode, every message received will be acknowledged by an outbound ACK message. If the message was successfully parsed and processed, the message will contain AA (Application Accept) in MSA-1. If there was an error with the message structure or if a required element was not included in the message, the MSA-1 field will contain AE (Application Error).

**ADT - Patient Demographics Message** Outbound ADT messages communicate new patient information or updates to existing patient information. ADT messages will be created if there is a definition for an outbound ADT in the enabled HL7 definition in the following situations.

* When patient demographic information is entered into the patient edit window and the OK button is pressed, an ADT message with event type A08 (Update Patient Information) will be created and sent with the updated patient information. If the patient is new, the ADT message will have event type A04 (Register Patient).
* If adding new patients from the add family window, one ADT message with event type A04 will be created and sent for each family member.
* If a new patient is created from importing a web form, an ADT message with event type A04 will be created and sent.

**DFT - Detailed Financial Transaction Message** Outbound DFT messages communicate information about procedures completed in Open Dental. They can also be used to transmit treatment plan PDFs. DFTs are created and sent if there is a definition for an outbound DFT in the enabled HL7 definition in the following situations.

* For eCW interfaces, if the *Finish & Send* button is pressed from the Edit Appointment window, an outbound DFT message will be created and sent with the procedure details for the attached procedures as well as a PDF segment containing a PDF version of the procedure information.
* For eCW interfaces, if the *Notes PDF* button is pressed from the Edit Appointment window, a progress notes PDF will be sent in a DFT message. The DFT message will not contain any FT1 (Financial Transaction Information) segments with procedure information, since the procedures are sent when the "Finish & Send" button is pressed and sending them again could cause duplicates in eCW.
* For eCW interfaces, if the *Save TP* button in the Treatment module is pressed, a DFT with no FT1 segments will be created and sent with a PDF version of the treatment plan in it.
* For non-eCW users, a button in the Chart module toolbar will appear when an HL7 definition is enabled that will be labeled with the description of the definition on it. Users can select procedures in the progress notes grid and press the button to generate an outbound DFT message with the procedures in it. Pressing the button without first selecting procedures will cause a DFT to be created and sent with any procedures completed with today

**SIU - Schedule Information Unsolicited Message** SIU messages are sent to communicate appointment related changes to an external application. Five event types are used by Open Dental in outbound SIU messages. S12 - New Appointment, S13 - Appointment Rescheduling, S14 - Appointment Modification, S15 - Appointment Cancellation, and S17 - Appointment Deletion. The following is a list of actions in Open Dental that will trigger an SIU message with the specified event type.

* From the Edit Appointment window, if the status of the appointment is set to Broken, an SIU message with event type S15 will be created and sent when the OK button is pressed.
* From the Edit Appointment window, if an appointment is deleted, an SIU message with event type S17 will be created and sent when the OK button is pressed.
* From the Edit Appointment window, when the OK button is pressed, and SIU message will be sent with event type S12 if it is a new appointment or S14 if it is a modification of an existing appointment.
* From the Appointments for patient window, if the Schedule Recall button is pressed, an SIU message with event type S12 will be created and sent.
* From the Appointment module, if a Planned appointment or an appointment with Unscheduled status is moved from the Pinboard and placed in an operatory on the schedule, an SIU message with event type S12 will be created and sent. If the appointment is moved from the Pinboard to the schedule that is not a new appointment, this is an appointment rescheduling and the event type will be S13.
* From the Appointment module, if an appointment is moved from one time slot to another without the use of the Pinboard, this is an appointment rescheduling and the SIU message created and sent will have an event type of S13.
* From the Appointment module, if either Send to Unscheduled List or Break Appointment are chosen from the right-click menu, or the Break Appointment or Send to Unscheduled List buttons are pressed, an SIU message with event type S15 will be created and sent.
* From the Appointment module, if Set Complete is chosen from the right-click menu or the Set Complete button is pressed, an SIU message with event type S14 will be created and sent.
* From the Appointment module, if Delete is chosen from the right-click menu or the Delete button is pressed, an SIU message with event type S17 will be created and sent.
* From the Chart module, if Set Complete is chosen from the right-click menu, an SIU message with event type S14 will be created and sent.

**SRR - Schedule Request Response Message** An SRR - Schedule Request Response Message is generated and sent in response to an SRM - Schedule Request Message. The SRR notifies the application responsible for sending the SRM whether the requested modification took place or not. Since the only appointment modification supported are updating the appointment note, setting the dentist or hygienist, updating the confirmation status, changing the ClinicNum of the appointment, or setting the appointment status to Broken, the response to an SRM message is usually to confirm that the requested modification took place. The only situations that a requested modification would not be performed is if the patient referenced by the SRM could not be found, the appointment referenced could not be found, an appointment and a patient were located but the patient located is not the patient on the appointment, or some other error occurred during the processing of the message. In these situations, the SRM will still trigger an SRR, but the SRR will have the acknowledgment code AE (Application Error) in the MSA-1 field.

As long as the patient is found, the appointment exists, the patient on the appointment and the patient referenced by the PID segment are the same patient, and the message is able to be processed correctly (not malformed), the SRM will be acknowledged with acknowledgment code AA (Application Accept) in the MSA-1 field.