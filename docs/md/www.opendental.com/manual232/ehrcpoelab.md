Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR Medical Lab Order ( CPOE )

Medical lab orders can be entered in Open Dental and the results can be imported or entered directly. For an order to count for the EHR measure CPOE Laboratory Orders, a provider must be logged on when the order is created.

1. From the [EHR Dashboard](ehrdashboard1.html), click **Edit labs**.
   ![](images/ehrCpoeLab.gif) Only orders entered after December 31, 2013 show. To view prior orders, click Labs/Rads on the EHR dashboard.
2. Click Add.
   ![](images/ehrLabEdit.gif)
3. Enter the order information then click Save.
   * Required fields for a CPOE Lab Order:
     + **Ordering Provider**: Identifier, ID, Identifier Type, Universal ID. Click [...] to select a provider and auto-populate provider information. If the provider has an NPI, the default Identifier will be the NPI number. If the provider does not have an NPI, the Provider Number (OID) is the default. Identifier must be the NPI or Provider Number.
     + **Service Identifier**: Code System, Observation ID and Date/Time Start. Click [...] to select the LOINC code for this order.
        Date/Time Start must be entered using this format: YYYY-MM-DD.
   * Other Fields:
     + Place Order Number: To auto create order numbers, check the Auto box. Objecdt Identifiers (OIDs) must be set up. The Place Order ID number should exactly match the identifying number on the lab order being sent to the lab.
     + **Last Update**: This date reflects the last time results changed and affects the date of the order on the Lab Orders window. It is not updated automatically.
     + **All Dates**: Must be entered using this format: YYYY-MM-DD
     + **TQ1 Dates**: TQ1 equals Timing and Quantity.
     + **Notes**: Notes about the lab. You can create new notes, or add comments to existing notes.
     + **Add Result**: Add a lab result.
    If results for this lab have already been imported or entered, a line entry for each result will show. Double click to view.