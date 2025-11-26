Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Arrivals

Arrivals allow an office to easily manage the number of patients physically in the office.

In [eServices Setup](eservicessetup.html), click [Automated Messaging](automatedmessaging.html).

![](images/arrivals.png)

Arrivals automatically send a text message to patients requesting they wait in their vehicle before their appointment. When the patient arrives, they text the response back to the office. This changes the Confirmation Status to *Arrived*, sends an automatic text message asking the patient to wait outside, and creates an [Alert](alerts.html) to notify the office. When the appointment is ready, the office can then right-click on the appointment and send a *Come In*  text message to the patient stating they can come inside the building.

Optionally, use BYOD for patients to fill forms from their mobile device as well. See [BYOD: Workflow](byodworkflow.html) and [BYOD: What Patient Sees](byodsees.html).

* Arrivals are only available for offices using [eConfirmations](econfirmationsetup.html). Per text message fees apply.
* Also see: [Arrivals: What Patient Sees](arrivalssees.html).

Note:

* If multiple appointments on the same day share the same patient email address and/or wireless phone number, the associated Arrival will be grouped into one text message.
* Similarly, if multiple patients from a family are scheduled, only patients sharing the same phone number are marked as *Arrived* when the patient replies.
* If the same phone number is used for patients in different families, an Arrival message is not sent.
* If a patient has been sent an Arrival message, and the appointment Confirmation Status is manually set to *Arrived*, the automatic text message asking the patient to wait outside still sends.
* The Confirmation Status may vary if the office has edited the Time Arrived trigger in [Preferences](preferences.html).

## Activate / Deactivate Arrivals

Arrivals can be activated or deactivated as needed.

![](images/arrivalActivate.png)

* To enable Arrivals, click **Activate Arrivals**. The Arrival row displays in green with a status of *Active*.
* To disable Arrivals, click **Deactivate Arrivals**. The Arrival row displays in red with a status of *Inactive*.

After activating Arrivals, set up Arrival Rules. See [Edit Rule](editrule.html).