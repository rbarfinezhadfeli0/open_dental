Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Dunning Messages

In [Billing](billing.html), at the right, below the Dunning Messages grid, click **Setup Dunning**.

![](images/dunningMsgSetup.png)

Dunning Messages are notes and email messages that show on [Billing](billing.html) statements generated via the [Billing List](billinglist.html). The messages are generated based on account aging, insurance pending, Billing Type, or a combination of these criteria.

## Filters

Filters apply to Dunning Messages listed in the Messages box to the right.

![](images/dunningMsgFilter.png)

**Billing Type**: Select the Billing Types assigned to Dunning Messages. CTRL + Click to choose multiple Billing Types. Billing Types are set up in [Definitions: Billing Types](definitionsbillingtypes.html).

**Clinic**: Select to view Dunning Messages assigned to a specific clinic. Clinic-restricted users can view Dunning Messages assigned to their accessible clinic(s) only.

**Age of Account**: Select the age of account assigned to the Dunning Messages. Filters for an exact match, except when Any Balance is selected (e.g., if filtering Over 60 Days results show only Dunning Messages with aging of Over 60 Days, does not include Over 90 Days)

**Days in Adv**: Filter by Days in Adv assigned to Dunning Message. Filters for an exact match.

**Insurance Payment Pending**: Filter by Insurance Payment Pending status of Dunning Message. Selecting *Doesn't Matter* returns messages with any status assigned.

## Messages

Messages that meet the filter criteria are listed. Dunning Messages can be filtered by clinic then sorted by criteria complexity: messages with more general criteria appear higher in the list and messages with stricter criteria appear lower. The first message that matches the billing criteria is used, starting from the bottom up (lower listed messages take precedence).

* Only one Dunning Message is used on any bill.
* The Dunning Message Email Statement template overrides the Billing Defaults, Email Statements template.
* If a Billing Defaults, General Message exists, it appears on the statement note above any Dunning Message.
* Dunning Messages do not show when a [Single Statement](statement.html) is generated.

![](images/dunningMsgList.png)

Double-click an existing Dunning Message to edit it.

**Add**: Click to create a new Dunning Message.

**Duplicate**: Select an existing Dunning Message and click to create a duplicate.

## Add or Edit Dunning Messages

Dunning Messages can be used to put a specific message on statements that meet specific criteria. Click **Add** to create a new Dunning Message from blank or double-click an existing Dunning Message to open the *Edit Dunning Message* window.

In the screenshot below is an example of a Dunning Message set up for a precollections warning in the statement bold note for accounts aged over 90 days with the Dunning Message to include a precollections email message.

![](images/dunningMsgEdit.png)

**Billing Type**: Highlight the Billing Type(s) to assign the message to. Billing Type is set on the [Edit Patient Information](patientedit.html).

**Age of Account**: Select the account age the message applies to. See [Aging](aging.html) for details about how aging is calculated.

**Days in Adv**: Enter a value to trigger the Dunning Message a certain number of days before an account reaches an aging bucket. If 0, the message is triggered at day 30, 60, or 90, depending on age of account selected.

**Insurance Payment Pending**: Select whether to include patients who have insurance payments pending.

* Doesn't Matter: Dunning Message applies regardless if patient has outstanding insurance claims or not.
* Yes: Dunning Message only applies is patient has outstanding insurance claims.
* No: Dunning Message applies if patient has no outstanding insurance claims.

**Statement Notes**:The messages that appears on statements. To edit placement of statement notes, See [Statement Layout](statementsheets.html).

* Message: Appears once at the bottom of the statement.
* Bold Message: Appears in bold red at the top and bottom of the statement.

**Super Family**: Check this box if the Dunning Message only applies to superfamily heads.

**Clinic**: Select the Clinic this Dunning Message applies to.

**Email Statement Override**: Enter the subject and/or message body for emailed statements. Variables can be used. This message overrides the Billing Defaults email message.