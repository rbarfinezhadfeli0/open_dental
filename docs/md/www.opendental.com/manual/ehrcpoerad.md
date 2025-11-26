Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

EHR Lab Order RAD codes

Lab orders for RAD codes (radiology orders) can be manually entered using the lab order interface and imaging results can be attached. This is an older method of entering CPOE radiology orders, but still valid. To be considered a radiology order the Service Identifier ([LOINC Codes](loinc.html)) must have a class type of *RAD*. For an order to count as CPOE, a provider must be logged on when the order is created.

Note: In version 15.4 and greater there is a different and simpler way to enter and approve CPOE radiology orders for EHR.

1. From the [EHR Dashboard](ehrdashboard1.html), click [Edit labs](ehrcpoelab.html).
   ![](images/ehrCpoeLab.gif)

   Only orders entered after December 31, 2013 show. To view prior orders, click Labs/Rads on the EHR dashboard.
2. Click Add.
   ![](images/ehrcpoeRad.gif)
3. Enter required order information.

   **Ordering Provider:** Identifier, ID, Identifier Type, Universal ID.

   Click [...] to select a provider and auto-populate provider information. If the provider has an NPI, the default Identifier will be the NPI number. If the provider does not have an NPI, the Provider Number (OID) is the default. Identifier must be the NPI or Provider Number.

   **Service Identifier:** Code System, Observation ID and Date/Time Start.

   Click *[...]*to select the LOINC code for this order. The code must have a classtype of RAD. For example, bitewings use the code 46386-9. Date/Time Start must be entered using this format: YYYY-MM-DD.

   Or, some dental related LOINC codes that might be useful include:
   ![](images/ehrLoincDental.png)

   To determine which other codes are RAD, you can use this Query:

   SELECT \* FROM loinc WHERE classtype="RAD";
4. Enter other information if desired (optional).
   * Place Order Number: Object Identifiers (OIDs) must be set up. To auto-create order numbers, check the Auto box. When you click Save, the ID, Identifier, and Universal ID fields will populate. The Place Order ID number should exactly match the identifying number on the lab order being sent to the lab.
   * Last Update: This date reflects the last time results changed and affects the date of the order on the Lab Orders window. It is not updated automatically.
   * All Dates: Must be entered using this format: YYYY-MM-DD
   * TQ1 Dates: TQ1 equals Timing and Quantity.
   * Notes: Notes about the lab. You can create new notes, or add comments to existing notes.
5. Click Save to close the window. The denominator and numerator for CPOE\_RadiologyOrdersOnly should increase by one. Measure details are visible in Stage 2 measure reports.
6. To track the imaging results, you have two options:
   * If you will send the order off and wait for results, reopen the order, click Manage Images, then check the Waiting for Images checkbox.
   * If/when the images are ready, reopen the order, click Manage Images, then attach them to the order. See Imaging Results.

## Troubleshooting

**The dates of orders on the Lab Orders window are all 01/01/0001.**

This date matches the Last Update date entered on the Lab Order Edit window. Change it as needed.