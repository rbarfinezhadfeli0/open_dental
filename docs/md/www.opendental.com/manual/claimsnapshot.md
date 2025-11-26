Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Claim Snapshot

Claim Snapshot is a background process used by multiple [Reports](reports.html).

Claim Snapshot stores the original insurance write-off, fee, and expected insurance payment information when a claim is created. The Claim Snapshot cannot be viewed in Open Dental. Changes to estimates, fee schedules, insurance benefits, etc, do not affect the Claim Snapshot.

Fees, write-offs, and estimates stored in the Claim Snapshot affect the following reports:

* [Insurance Aging Report](reportinsaging.html)
* [Custom Aging Report](reportcustomaging.html)
* [Monthly Production Goal Report](reportproductiongoal.html) - When utilizing *Using initial claim date for write-off estimates, insurance pay date for write-off adjustments* setting for insurance write-offs.
* [Production and Income Reports](reportprodinc.html) - When utilizing *Using initial claim date for write-off estimates, insurance pay date for write-off adjustments* setting for insurance write-offs.
* [Daily Write-off Report](reportdailywriteoffs.html) - When utilizing *Using initial claim date for write-off estimates, insurance pay date for write-off adjustments* setting for insurance write-offs.
* [PPO Writeoffs Report](reportppowriteoffs.html) - When utilizing *Using initial claim date for write-off estimates, insurance pay date for write-off adjustments* setting for insurance write-offs.
* [Provider Payroll Production and Income Report](reportprovpayroll.html)
* [Aging of Accounts Receivable (A/R) Report](reportaging.html) - When *Age writeoff estimates* is checked.
* [Net Production Detail Daily Report](reportnetproddaily.html) - When *Calculate write-offs by claim snapshot for today's date in Net Production Detail report* is enabled in [Report Setup: Misc Settings](reportmiscsettings.html)

The fees, write-offs and estimates in the Claim Snapshot may differ from what is shown in the [Claim Procedure](claimprocedure.html). An existing Claim Snapshot cannot be updated or changed. In order for fees, write-offs, estimates, or dates in a Claim Snapshot to be updated and affect reports, the existing claim and associated Claim Procedures must be deleted and a new claim recreated. This creates a new Claim Snapshot.