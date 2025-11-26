Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR Document Reminders Sent to Patients

In [EHR Modified Stage 2](../site/ehrmodified2.html), there is no reporting requirement for reminders.

Reminders are notices sent to patients to remind them of preventive or follow-up care. Reminders are counted in the numerator for the EHR Reminders measure in two ways:

1. When you mark a reminder as *Sent* on the Reminders window (see below).
2. In version 15.1.21 and greater: When you send a recall reminder via the [Recall List](recalllist.html) that has a Commlog type of *Recall*.

To determine which patients meet the stage 1 criteria for a reminder, generate a Patient List based on Birthdate. See [EHR Generate Patient List](ehrpatientlistgenerate.html). To also determine which patients meet criteria and had a completed procedure within a date range, use query #868 in [Query Examples](https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx), specifying a birthdate, provider, and date range.

## Mark a reminder as *sent* on the reminders window

1. On the [EHR Dashboard](ehrdashboard1.html), click **Send reminders**.
   ![](images/ehrReminders.gif)

   The Reminders grid lists any reminders that have been triggered for the patient, based on Reminder Rules. Reminder rules are optional and set patient criteria for a reminder (e.g. age, conditions). See [EHR Reminder Rules](ehrsetupreminderrules.html). In the example above, the patient meets the criteria for being 5 years of age or younger.
2. Select the patient's preferred communication preference. Click **Edit**, select a confidential contact option, then click OK. This preference can be a filter in Patient Lists.
3. Select the reminder, then click **Send** to document that a reminder has been sent. A dated log entry will show in the Reminders Sent grid, and the numerator will increase in Measure Reports. See [EHR Measure Reports](ehrmeasures.html).