Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Arrivals: What Patient Sees

[Arrivals](arrivalssetup.html) is an automated messaging eService that directs patients on what to do upon arrival to the office.

Custom Arrival messages are sent automatically to the patient before each appointment. The patient can reply to the text which updates the appointment status in Open Dental and triggers another message with more instructions.

A common use case for Arrivals is to allow an office to more easily manage the number of patients physically in the office by automatically instructing patients to wait in their vehicle until notified or start the check-in process on their own device with the BYOD feature.

## One-Time Setup

The following must be set prior to using Arrivals:

* Sign up for [eConfirmations](econfirmationsetup.html) via [eServices Signup](eservicessignup.html).
* Enable [Arrivals](arrivalssetup.html).
* Customize Arrival messages in the [Edit Rule](editrule.html) window.

## Arrival Workflow

1. The Arrival message is sent to the patient automatically, using the rules set in the Edit Arrival Rule window.
   ![](images/arrivalSent.png)
2. The patient replies with the Arrival Code. (In this example, *A.*)
   ![](images/arrivalA.png)
3. In Open Dental, the patient is marked as *Arrived* and placed in the Waiting Room.
   ![](images/arrivalAppt.png)
4. The patient is sent an automatic reply requesting they continue waiting in their vehicle.
   ![](images/arrivalRemainOutside.png)
    Optionally, eClipboard users can request the patient fill forms using BYOD. See [BYOD: Workflow](byodworkflow.html) and [BYOD: What Patient Sees](byodsees.html). When enabled, a link displays to open eClipboard (as pictured above).

5. When the provider is ready for the patient, the office sends a Come In text message.
   * Right-click the appointment and select *Send Come In Text.*
   ![](images/arrivalComeIn.png)
6. The patient receives the message and can then enter the building for their appointment.
   ![](images/arrivalApptReady.png)