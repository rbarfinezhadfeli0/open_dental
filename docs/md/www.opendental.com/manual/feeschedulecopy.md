Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Fees Copy

Easily copy existing fees to a new fee schedule using Fee Tools.

In [Fee Tools](feescheduletools.html), at the left, is the *Copy To* section.

![](images/feeToolsCopy.png)

Use to copy fees in one fee schedule to a different fee schedule. Only fees that exactly match the selected criteria will be copied. Users can copy only global fees in a fee schedule or further narrow criteria to only clinic and/or provider-specific fees. As a preventive measure, before changing fees in a fee schedule (e.g., [Fees Increase](feescheduleincrease.html) or [Fees Import](feesimport.html)), we recommend creating a backup copy of the original fees.

## Copying Fees

Before copying fees, create a new blank Fee Schedule:

1. Open [Fee Schedules](feeschedules.html).
2. Click **Add**.
3. Name the fee schedule and select a type.
4. Click **Save**.

To copy an existing Fee Schedule:

1. In Lists, Procedure Codes, click **Fee Tools**.
2. Under *Select Fees*, select the fee criteria to copy by clicking the dropdown arrows or **[...]**.
   * Clinic and Provider options are only enabled if the selected fee schedule allows clinic and provider-specific fees (*Use Global Fees* is unchecked).
   * Only fees that exactly match the criteria will be copied:
     + If only a fee schedule is selected, only the global fees will be copied.
     + If a fee schedule and a clinic are selected, only the clinic-specific fees will be copied.
     + If a fee schedule and a provider are selected, only the provider-specific fees will be copied.
     + If a fee schedule, a clinic, and a provider are selected, only fees that are clinic and provider specific will be copied.
![](images/feeScheduleSelectFees.png)3. Under *Copy To*, select where the fees will be copied to.
   * We recommend selecting similar criteria as the *Select Fees* criteria. To select multiple clinics, use the clinic picker **[...]**.
![](images/feeScheduleCopyTo.png)4. Click **Copy**.
![](images/feeschedulecopymsg.png)5. A warning is shown to inform that existing fees are deleted and new fees will be copied. Click **OK** to continue.
6. Once fees are copied, there is a *Done* message. Click **OK** to close the message.