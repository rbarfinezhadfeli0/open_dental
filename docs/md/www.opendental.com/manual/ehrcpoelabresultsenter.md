Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

EHR Lab Results

Results for medical lab orders can be imported or copied from a .txt file in HL7 format or entered manually. Entering / importing lab test results was a measure in both stage 1 and stage 2, but is no longer a reporting requirement in [EHR Modified Stage 2](../site/ehrmodified2.html).

## Importing or copying results from an HL7 .txt file

Open Dental will attempt to identify the patient from the lab result information and match the results with an existing Lab Order. If the order doesn't yet exist, it will be created automatically. If a patient match is not made, you will need to manually attach the correct patient.

Option 1: If the lab results were emailed to you, and the results are sent as a .txt file attachment in HL7 format, they can be imported from email:

1. Open your email inbox.
2. Open the email message, then double-click on the txt attachment. If the file is properly formatted, the lab results will be parsed and attached to the lab order.

Option 2: Copy the HL7 message and import the results.

1. Copy the received HL7 message to the clipboard (select all and press Ctrl + C).
2. On the [EHR Dashboard](ehrdashboard1.html), click **Edit Labs**, **Import**.
   ![](images/ehrcpoeresultcopy.gif)
3. Highlight *Paste HL7 Lab Message Text Here*, then press Ctrl + V to copy the results from the clipboard.
4. Click OK.

**View Results**: Open the original lab order. On the [Lab Order Edit](ehrcpoelab.html) window, under Lab Results, a line item for the results should list. Double click to view.

## Entering results manually

1. On the EHR Dashboard, click **Edit labs**. Double click on the original Lab Order.
2. On the right, click **Add Result**.
   ![](images/cpoeLabResults.gif)
3. Enter the results and click OK to save.

Note: To count towards the numerator for EHR CPOE Lab Results, the following information is required:

* Observation Value Type must equal Structured Numeric or Numeric.
* Must have a Code System/Element ID or Alt Code System/Alt Element ID, and it must a SNOMED CT code.