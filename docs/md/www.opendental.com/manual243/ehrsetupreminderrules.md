Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR Reminder Rules

Reminder rules for [Patient Reminders](ehrreminderssend.html) are optional. A patient does not need to meet a specific rule to document that a reminder has been *sent*. The rules define criteria a patient must meet for a reminder to show in their Reminder window. Criteria can be based on problems, allergies, medications, age, gender, or lab results.

1. In the [Main Menu](mainmenu.html), click Setup, Chart, [EHR](ehrsetupwindow.html), then click **Reminder Rules**.
   ![](images/ehrReminderRule.gif)

   All rules currently defined are listed.
2. Click Add, or double click a rule to edit.
   ![](images/ehrEditReminderRule.gif)
3. Select the criteria that a patient must meet for a reminder to list in their Reminder window.
   * **Reminder Criterion**: Select the category this rule applies to. There are six choices: Problem, Medication, Allergy, Age, Gender, Lab Result.
   * **Criterion Value**: Enter the value that will trigger the reminder. Less than < and greater than > symbols are allowed. This field only is visible for Age, Gender (male or female) and Lab Results rules.
   * **Medication**: Click [...] to select a medication from the [Medications List](medicationmaster.html). This field is only visible for Medication rules.
   * **Allergy**: Click [...] to select an allergy from the [Allergy List](allergiesmaster.html). This field is only visible for Allergy rules.
   * **Problem**: Click [...] to select a problem from the [Problem List](problemmaster.html). The associated ICD-9 code will also show. This field is only visible for Problem rules.
   * **Reminder Message**: Enter the reminder message.
4. Click OK to save the reminder rule.