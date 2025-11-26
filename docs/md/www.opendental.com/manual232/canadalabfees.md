Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Canada Lab Fees

For [Canada](canada.html) users, in the [Procedure Codes](procedurecodes.html) list, double-click a procedure code.

![](images/canadaIsLabFee.png)

Lab fees can be charted in Open Dental and associated with a procedure code. The default lab code is 99111, however other codes can be used.

To ensure a procedure code is considered a lab, check **Is Lab Fee** in the Edit Procedure Code window.

## Attaching Lab Fees to Procedures

Labs should be attached to a procedure code prior to sending a claim.

There are two ways to associate a lab with a procedure.

1. Add the lab fee directly to the procedure code.

   Double-click on the procedure code, then click the Canada tab. Type in the lab amount. Add up to two lab fees.

   Note: If the carrier supports version 04 e-Claims, both fees are sent. If the carrier supports version 02 e-Claims, then only one lab fee is sent.

   ![](images/canadaLabTab.png)

   This will automatically create the 99111 procedure code.
2. Manually attach a lab fee.

   Chart the procedure and the lab procedure code separately. Once both are charted, in the Chart Module, highlight both the procedure and lab, right-click on either code, and select **Attach Lab Fee**.

   ![](images/canadaLabAttach.png)

   This will attach the lab fee with the procedure. Use this method if using a custom lab procedure code.

When a lab is attached to a procedure code, a visual indicator of ^^ will appear in the description.

![](images/canadaProcwithLabFee.png)

The lab fee can be updated from the lab procedure. Double-click the lab procedure code to open [Procedure Info](procedureedit.html) and edit the Amount as needed.

## Providers

By default, the provider associated with the lab procedure matches the provider on the attached dental procedure.

To change the provider on a lab, double-click into the lab procedure and use the Provider dropdown. When the provider on the lab procedure differs from the dental procedure, a warning will appear when sending claims. The warning message is informational only and does not stop the claim from sending.

## Removing Lab Fees

To remove a lab fee, double-click the procedure, select the Canada tab, and clear out the fee. Alternatively, delete the lab procedure separately.

Lab fees can also be detached from procedures by right-clicking the lab procedure in the Chart Module and selecting **Detach Lab Fee**.

## Appointments

Lab procedures will show on a separate line in the Appointments Module. The lab amount calculates into production.

![](images/canadaLabAppt.png)

## Insurance Estimates

Lab fee estimates are based on the coverage of the associated procedure. Overrides to estimates must happen on the procedure rather than the lab. To use the same insurance estimate logic for PPO plans, enable the *Canadian PPO insurance plans create lab estimates* preference.

## Claims

Lab procedures should be attached to the related procedure before submitting on a claim. If the lab procedure is a custom procedure code, printed and electronic claims will show only the first 5 characters, but EOB printouts will show the custom code as it shows in Open Dental. Claim Acknowledgments do not display lab procedures.

Lab procedures will show in the Edit Claim window. The lab fee will show as a separate line item.

![](images/canadaLabFeesClaim.png)

On a printed claim, the lab will show on the same line item as the procedure.

![](images/canadaLabOnPrint.png)