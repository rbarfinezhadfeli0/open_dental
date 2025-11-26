Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Electronic Eligibility and Benefits

Eligibility requests retrieve benefit information from a Clearinghouse.

In the [Insurance Plan](insplan.html) window, in the middle, click **Request**.

![](images/ebenefit.png)

Electronic eligibility and benefit information allows staff to electronically verify a patient's insurance eligibility and benefits in real time (e.g., percentages, deductibles, maximums, limitations, and history). Non-subscriber benefits that are not identified as family coverage are inserted as patient override benefits.

Electronic Eligibility checks can be run as a batch by creating a [Scheduled Process](scheduledprocesses.html).

The following third-parties are known to offer eligibility services:

* [ClaimConnect](eclaimsclaimconnect.html) (DentalXChange).
* [Electronic Dental Services(EDS)](eclaimseds.html)
* [Emdeon / ChangeHealthcare/ WebMD](eclaimswebmd.html)
* [Trojan](trojan.html)

## Dates

The Dates grid shows information on eligibility and active service dates.

![](images/ebenefitDates.png)

## Miscellaneous Options

![](images/ebenefitMisc.png)

**Viewing Mode**: Select how to view the response message. Options are Electronic Import or Message Text.

**Mark for import if**: Select whether benefits for *In network* or *Out of network* should be imported. Dependent on the practice's disposition with the carrier.

**Show Raw Message of...**:

* **Request**: Click to display raw version of the benefit request message sent to the clearinghouse.
* **Response**: Click to see the raw response message sent by the clearinghouse. See the example below:

![](images/ebenefitRaw.gif)

Note: Open Dental tries to interpret each raw benefit and to provide an equivalent Open Dental benefit object in the right column. Any of these can be imported, but it still takes a human to interpret the data. Most carriers still send very sparse data, frequently nothing more than single yes or no response on whether the patient is covered.

**Print**: If there are HTML responses, view and print the HTML. Otherwise, the main grid is printed.

## Response Benefit Information

This grid displays benefit details received from clearinghouse.

![](images/ebenefitResponseGrid.png)

Columns:

* **Response**: Includes both out of network and in network benefits. Use care in selecting which to import.
* **Note**: Notes about the benefit.
* **Import As Benefit**: Displays how the benefit will import into Open Dental.

Import Benefit Coinsurance:

* **Carrier sends patient %**: Select if benefit response describes patient responsibility. This is the default.
* **Carrier sends insurance %**: Select if benefit response describes insurance portion.

**Current Group Num**: The entered group number on the selected patient. A red warning displays if this does not match the group number reported by the carrier below.

**Response Group Num**: The group number returned by the carrier.

**Import**: Highlight benefit rows from the grid, then click to import benefits to the patient's plan. Prior to importing, users should review the highlighted benefit rows and Current Benefits grid (below) to ensure duplicate benefits are not imported.

## Current Benefits

This grid lists current benefits entered in on the selected patient's insurance plan.

![](images/ebenefitCurrent.png)

## Note

Use the note box to record notes as desired when importing benefits.

![](images/ebenefitNote.png)

**Delete**: Delete the response.

## Setup

1. Register with the vendor. If a clearinghouse, make sure Real Time Eligibility or real time services is enabled.
2. Enable the vendor in Open Dental.
   * If a clearinghouse, set the clearinghouse as the default clearinghouse for *Eligibility*:
     1. Open the [Clearinghouses](clearinghouses.html) list.
     2. Highlight the clearinghouse from the list.
     3. Click **Eligibility**.
     4. If clearinghouse details have not been entered previously, double-click the clearinghouse to enter any details.
   * If Trojan, enable the bridge, then click **Trojan** on the Edit Insurance Plan window.
3. Verify that each carrier's electronic ID is entered accurately in Open Dental ([Insurance Plan](insplan.html) or [Carriers](carriers.html)). To determine a carrier's electronic ID, check with the clearinghouse.

## View Request History

On the [Edit Insurance Plan](insplanedit.html) window, click **History**. All requests and responses are stored for future reference.

![](images/ebenefitHistory.gif)