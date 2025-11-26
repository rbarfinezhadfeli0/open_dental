Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Secure Email: Workflow

See [Secure Email Setup](secureemailsetup.html).

Secure email messages can be sent to patients, and patient replies are also secure.

First, enable Secure Email in [eServices Signup](eservicessignup.html).

## Sending Secure Email

To send a secure email message:

1. In Open Dental, select the patient to email.
   * If emailing another provider or office, add them as a patient. Set the patient status for these accounts to *NonPatient*.
2. Click **Email**.
3. Enter the email subject and body. Both fields are required to include text. Attach any files if needed.
4. Click **Send Secure**.
   * See [Email Message Edit](emailmessage.html) for details.
   * Emails can only be sent directly to the patient. CC or BCC addresses are not allowed.

## Patient Process

When a patient receives a secure email message, they can do the following to view the message:

1. In their email client, they receive a notice that a secure email is available.
   ![](images/secureEmailWorkflowPat1.png)
2. The patient clicks **View Secure Email**. They are then prompted to enter a one-time passcode. Secure emails are scheduled to expire seven days after the send date. If the email is past the Expiration date/time, the patient receives a warning and they cannot view the email. A new email must be sent instead.
   ![](images/secureEmailWorkflowPat2.png)
3. The passcode is emailed to the same email address for the patient.
   ![](images/secureEmailWorkflowPat3.png)
4. The patient copies and pastes the code, then clicks **Verify**.
   ![](images/secureEmailWorkflowPat4.png)
5. The patient is then be able to view the secure message.
   ![](images/secureEmailWorkflowPat5.png)
    Tabs:
   * Inbox: The patient can view other received secure email messages.
   * Sent: The patient can view replies they sent back to the office.
   * Files: The patient can view any files attached to secure email messages.

6. If the patient wishes to reply, they can click **Reply All**.
    Attachments can be included in replies (bmp, cur, docx, gif, ico, jfif, jpeg, jpg, log, pdf, pjp, pjpeg, png, svg, tif, tiff, txt). Maximum file size is 20MB.
   ![](images/secureEmailWorkflowPat6.png)
7. When the patient is done reviewing messages, they can click **Menu**, then **Sign Out**.

## Receiving Patient Replies

An [Alert](alerts.html) appears in the Main Menu when a patient has sent a new secure email reply. To view replies to Secure Emails, see [Email Client](emailinbox.html).

![](images/secureEmailReceive.png)

Note:

* If testing Secure Email, use a different *To* Address than the *From* Address. Using the same email address for *To* and *From* does not allow a notification to be sent.
* Attachments sent from the patient are available in the patient's chart.