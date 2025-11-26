Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Canada Claim History and ROT

For [Canada](canada.html) users, in the [Manage Module](manage.html), click Send Claims.

![](images/canadaclaimSend.png)

Canadian insurance claims can be managed on the Insurance Claims window. Claims cannot be sent as a batch in Canada.

For a full description of all buttons and columns, see [Send Claims](claimsend.html). Below is detail on features specific to Canada.

## Toolbar

![](images/sendClaimsToolbarCanada.png)

Toolbar options:

* **Outstanding**: Request outstanding transactions (ROT) from the default clearinghouse. See Retrieve Reports below.
* **Payment Rec**: Get payment reconciliation transactions for a specific carrier, billing and treating provider. This report is not used often.

## Retrieve Reports (ROT - Request Outstanding Transactions)

Users are alerted of outstanding transactions (mailbox items) when sending claims. Retrieving them is optional and does not affect patient accounts.

![](images/canadaNotification.png)

Click **Outstanding** to retrieve reports.

If a user is notified of outstanding transactions upon sending a claim, and would like to retrieve them, they should use these options (in any order):

* Version 4: Selected by default. Sends the ROT (04) request to recently used carriers.
* Version 4 To Specific Carrier: Select this option, a carrier from the list and the appropriate Office Number, then click OK. Useful when retrieving mailbox items immediately after receiving the notification (select the most recent carrier that a claim was sent to).

![](images/canadaclaimSendOut.png)

Note: Mailbox items might be automatically retrieved for multiple carriers at a time (others on the same network as the selected carrier) and oftentimes only a single request is necessary to download all mailbox items.

Wait for responses to show. When each step is complete, a dialog with the word *Done* shows.

## History

**Undo**: Changes a sent claim status to *Waiting to Send*.

* Does not reverse sent claims. See Reversals section in [Canada Claims](canadaclaims.html) for more information.
* A record of sent or printed claims are available in the History grid. Double-click a row to view sent and received information.