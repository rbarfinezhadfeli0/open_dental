Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Auto Ortho

Auto Ortho information for a patient includes the insurance plan's orthodontic claim defaults and the patient's orthodontic treatment information (total months, total used, time remaining).

In the [Account Module](account.html), when *Show Auto Ortho in account module* is enabled, an Auto Ortho tab shows next to Patient Account.

![](images/OrthoAutoTab.png)

Two preferences in [Ortho Setup](orthosetup.html) determine if and where Auto Ortho information shows:

* *Show Auto Ortho in Account Module*
* *Show Auto Ortho information in the Ortho Chart*

## Auto Ortho Tab

**Primary/Secondary/Other Ins**: Shows the insurance plan's orthodontic claim information as entered on the [Insurance Plan](insplan.html), Ortho tab. Double-click anywhere in the area to open the Ortho Patient Setup window.

**ClaimType**: How the carrier wants to receive orthodontic claims (Ortho Claim Type).

* *Initial Claim Only*: Send a single orthodontic claim for the initial procedure.
* *Initial Plus Visit*: Send an orthodontic claim manually for the initial procedure and each subsequent visit.
* *Initial Plus Periodic*: Send an orthodontic claim manually for the initial procedure, then send periodic claims based on a specific frequency, fee, and procedure. This setting makes the patient eligible for the Auto Ortho Tool ([Ortho Auto Claims](orthoautoclaim.html)).

The following information may also show:

* **Frequency**: How often the claim will be auto-created (Auto Proc Period). Only shows when claim type is Initial Plus Periodic.
* **FeeBilled**: The procedure fee billed in the claim (Ortho Auto Fee). Only shows when claim type is Initial Plus Periodic.
* **LastClaim**: The last date a claim for the Ortho Auto Procedure was sent.
* **NextClaim**: The date the next automated claim will be created. Defaults to the first of the month following the placement procedure completion date (e.g. procedure date 12/15, NextClaim will be set to 1/1). Updates each time Ortho Auto claims are generated for the insurance plan. Only shows when claim type is Initial Plus Periodic.

**Pat Ortho Info**: Displays the patient's orthodontic information once the initial orthodontic procedure has been completed.

* **Total Tx Time**: The patient's total amount of time in treatment time in months and days.
* **Date Start**: The date the initial orthodontic procedure was set complete. See Ortho Setup to select criteria for the default initial orthodontic procedure. To manually enter a different date, enter a date for Ortho Placement Date, then click **Override**. To reset the default date, click **Default**.
* **Tx Months Total**: The total number of treatment months. The default is set in Ortho Setup. To manually enter a different total, enter the number of months in Patient Ortho Months Treat, then click **Override**. To reset the default, click **Default**. This amount is used to determine the end date for orthodontic claims generated using the Auto Ortho Tool.
* **Months in Treatment**: The number of months since the patient's initial orthodontic procedure was set complete.

Note: By default, Months in Treatment continues to calculate after the treatment has been completed. To prevent this, enable the *Completing Debond procedure overrides months treatment* preference in [Ortho Setup](orthosetup.html).

* **Months Rem**: The amount of treatment months remaining.

## Ortho Chart

When *Show Auto Ortho in ortho chart* is selected, an Ortho Info grid shows in the upper left corner of the [Ortho Chart](orthochart.html). It displays the same Pat Ortho Info that shows in the Auto Ortho tab (above)

![](images/orthoChartInfo.gif)