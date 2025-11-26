Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Texting Terms of Service

See [eServices Texting](textintegratedusage.html).

## Text Messaging

It is the responsibility of the office to obtain consent to send a patient text messages.

Patients can give consent when they manually provide their mobile phone number. This can happen when:

* Creating an appointment via [Web Sched New Patient](webschednewpatsetup.html).
* Filling [Patient Forms](patientform.html).
* Filling [Web Forms](../site/webforms.html).
* Filling forms via [eClipboard](../site/eclipboard.html).

Alternatively, the office can verbally obtain consent. Once received, record the Text OK status in the [Edit Patient Information](patientedit.html) window.

In order to reduce outgoing SMS rejection rates, Open Dental attempts to shorten outgoing URLs with *patientviewer* branded sites. If unbranded URLs are not caught by Open Dental and are continually sent to phone carriers, your text messaging service may be cancelled by the carrier without notice.

## Patient Responses

**HELP**
 If Open Dental HQ detects a message with a response of HELP, we send back a message with a help link.

**START / OPTIN**
 If a patient has opted out of text messaging, they can opt back in anytime by texting either START or OPTIN to the office.

**STOP / END / QUIT / UNSUBSCRIBE**
 Patients can opt out of messages anytime. When a patient responds to a message with one of the following: STOP, END, QUIT, or UNSUBSCRIBE, a message is sent back informing the patient they have been opted out and will receive no further messages. This message is also forwarded to the office.

Open Dental HQ has a record of the patient opting out. At the office, the Text OK status for the patient is set to No with a commlog indicating the opt out request. While the office may attempt to continue sending a message, all messages to patients who have opted out are blocked by Open Dental HQ. A patient must text either START or OPTIN to allow receiving messages again.