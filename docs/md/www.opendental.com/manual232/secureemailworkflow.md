Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

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

When a patient receives a secure email message, they will do the following to view the message:

1. In their email client, they will receive a notice that a secure email is available.
   ![](images/secureEmailWorkflowPat1.png)
2. The patient clicks **View Secure Email**. They will be prompted to enter a one-time passcode. If the email is past the Expiration date/time, the patient receives a warning and they cannot view the email. The office must send a new email instead.
   ![](images/secureEmailWorkflowPat2.png)
3. The passcode will be emailed to the same email address for the patient.
   ![](images/secureEmailWorkflowPat3.png)
4. The patient will copy and paste the code, then clicks **Verify**.
   ![](images/secureEmailWorkflowPat4.png)
5. The patient will then be able to view the secure message.
   ![](images/secureEmailWorkflowPat5.png)
    Tabs:
   * Inbox: The patient can view other received secure email messages.
   * Sent: The patient can view replies they sent back to the office.
   * Files: The patient can view any files attached to secure email messages.

6. If the patient wishes to reply, they will click **Reply All**.
    Attachments can be included in replies (bmp, cur, docx, gif, ico, jfif, jpeg, jpg, log, pdf, pjp, pjpeg, png, svg, tif, tiff, txt). Maximum file size is 20MB.
   ![](images/secureEmailWorkflowPat6.png)
7. When the patient is done reviewing messages, they can **Sign Out**.

## Receiving Patient Replies

An [Alert](alerts.html) will appear in the Main Menu when a patient has sent a new secure email reply. To view replies to Secure Emails, see [Email Client](emailinbox.html).

![](images/secureEmailReceive.png)

Note:

* If testing Secure Email, use a different *To* Address than the *From* Address. Using the same email address for *To* and *From* will not allow a notification to be sent.
* Attachments sent from the patient are available in the patient's chart.