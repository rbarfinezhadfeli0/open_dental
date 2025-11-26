Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Category Percentage Insurance Plan

Set up an out-of-network [Insurance Plan Type](insplantypes.html) when the office is not contractually obligated to reduce its fees. This is a traditional percentage insurance plan.

## Out-of-Network Plan Using Blue Book

Blue Book is a a tool that uses allowed fees entered on received claims to update estimates for future procedures. See [Insurance Blue Book Setup](bluebooksetup.html).

1. Optional: create a *Manual Blue Book* [Fee Schedule](feeschedules.html) for the carrier's known fees.
2. On the Insurance Plan:
   * **Plan Type**: *Category Percentage*
   * **Fee Schedule**: *None*
   * **Manual Blue Book**: The carrier's out-of-network fee schedule (optional)
   * **Use Blue Book**: Ensure this box is checked to use Blue Book for insurance estimates.

![](images/plancatperc3.png)

When Blue Book is enabled, Manual Blue Book is the only *Carrier Allowed Amount* fee schedule available. Manual Blue Book fees may or may not be selected based on the hierarchy set up in [Insurance Blue Book Setup](bluebooksetup.html).

## Out-of-Network Plan with a Fee Schedule

Even if the office is not contractually obliged to follow out-of-network fees, offices can enter the fees in order to get more accurate insurance estimates..

1. Create an out-of-network [Fee Schedule](feeschedules.html) for the carrier and enter the out-of-network fees.
2. On the Edit Insurance Plan window, set the following:
   * **Plan Type**: *Category Percentage*
   * **Fee Schedule**: *None* (uses the provider's default fee schedule, e.g., office fees)
   * **Out of Network (Old)**: The carrier's out-of-network fee schedule

![](images/plancatperc2.png)

* In the *Other Ins Info* tab, check **Claims show UCR fee, not billed fee**.
* [Benefits](benefitinfo.html): Percentages will be based on the out-of-network fee schedule. If the published fee schedule shows exact amounts that will be paid, set category percentages to 100%.

All fees on procedures will show the provider's fees, but the out-of-network fee schedule will be used for estimates. Percentages will be based on the out-of-network fee schedule. The patient is still responsible for any difference between the office fee and the published insurance fee. If desired, the office can update out-of-network fees as users enter claims and payments.

## Out-of-Network Plan with No Fee Schedule

In this setup, estimates and procedure fees will be based on the provider's fee schedule.

On the [Insurance Plan](insplan.html), set the following:

* **Plan Type**: *Category Percentage*
* **Fee Schedule**: *None* (uses the provider's default fee schedule, e.g., office fees)

This method will generally provide the least accurate insurance estimates. Insurance estimates will be based on a percentage of the provider's fee schedule .

![](images/plancatperc1.gif)