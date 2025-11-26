Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Hosted Email Address Verification

Determine which email address is used to send Secure Email messages.

In the [Secure Email Setup](secureemailsetup.html) window, click **Sender Addresses**.

![](images/hostedEmailAddrVerification.png)

Email addresses to be used for Secure Email notifications are listed along with the verification status.

The default email address used by Secure Email notifications is *noreply@patientviewer.com*. However, the office email address may be used instead. To use the office email address, add the email in [Email Setup](emailsetup.html), then verify the email address (see below).

Note: Yahoo email addresses are not recommended as they will be rejected due to Yahoo's DMARC policy.

**Clinic**: Select a clinic from the dropdown. Verified email addresses for the clinic list.

**Verification Status**: The verification status of the email address. Statuses include Failed, Not Started, Pending, Success, and Temporary Failure.

**Use 'NoReply' as default email address**: Determine the default selection for the Sender options when sending Secure Email.

* Checked: Defaults the *Sender* to 'NoReply'. Secure Emails are sent from *noreply@patientviewer.com*.
* Unchecked: Defaults the *Sender* to the verified sender address.

**Add**: Select an email to start the verification process, see Verify Email Addresses below.

**Delete**: Removes a selected email address from the list.

## Verify Email Addresses

To verify an email address, click **Add**.

![](images/hostedEmailAddresses.png)

Email addresses already set up in Open Dental are listed. Additional emails can be added in [Email Setup](emailsetup.html).

Select an email and click **OK**. An email containing a link to complete the verification process is sent to the selected email address.

In a web browser or email client, open the verification email sent from noreply@patientviewer.com and click the link to verify the email address.

Return to the Hosted Email Address Verification window, and click **Refresh** to update the verification status.