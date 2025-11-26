Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Payment Plan Examples

Below is guidance on how to set up a [Payment Plan](paymentplanpatient.html) for certain scenarios. All examples assume that procedure fees and insurance estimates are set up correctly.

See [Dynamic Payment Plan](paymentplandynamic.html) to create an open-ended repayment agreement.

**Patient Payment plan for treatment that is already completed**: Create a payment plan and attach the completed procedures as credits. The Total Amount, Tx Completed Amt, and Total Tx Amt will match.

![](images/payplanCompCredits.png)

**Patient Payment plan for procedures that are treatment planned, but not complete yet**:Create a payment plan and attach the treatment planned procedures. The Total Amount and Total Tx Amt will match. The Tx Completed Amt will initially be 0, but as the procedures are marked complete, the amount will automatically update. Payment plan credits in the account ledger will also be added as procedures are completed, thus offsetting the procedure charges.

![](images/payplanTPCredits.png)

**Patient Payment plan for completed procedures and treatment planned procedures**: Create a payment plan and attach the completed and treatment planned procedures. The Total Amount and Total Tx Amt will match. The Tx Completed Amt will initially equal the value of all completed procedures. As the treatment planned procedures are marked complete, the amount will automatically update. Payment plan credits in the account ledger will also be added as procedures are completed, thus offsetting the procedure charges.

![](images/payplanCompTpCredits.png)

**Uncommon: Patient Payment plan where you know the total payment plan amount, but do not want to attach procedure credits**: Create a payment plan and attach an unattached credit

1. Click **Tx Credits**.
2. click **Clear** to de-select all procedures.
3. Enter the payment plan amount in the Amt field.
4. click **Add**.

![](images/payplanUnattached.png)

The unattached credit amount will be considered a completed amount (Tx Completed Amt) and match the Total Tx Amt and Total Amount.

![](images/payplanCompCredits.png)