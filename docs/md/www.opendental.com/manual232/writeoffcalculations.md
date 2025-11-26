Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

PPO Insurance Calculations

Below is an explanation of the math behind write-offs, covered amounts, insurance estimates, and patient portion for [PPO Insurance Plan](planppo.html).

Sample fees:

* Office Fee = $150
* PPO Fee = $127
* Deductible = $50
* Covered Percentage = 80%

**Write-off**: The difference between the office fee and contracted PPO fee.

Office Fee - PPO Fee = Write-off

$150 - $127 = $23

**Covered Amount**: Subtract the deductible from the PPO fee (before applying the covered percentage).

PPO Fee - Deductible = Covered Amount

$127 - $50 = $77

**Insurance Estimate**: Apply the covered percentage to the covered amount.

Covered Amount x Covered Percentage = Insurance Estimate

$77 x 80% = $61.60

**Patient Portion**: Subtract the insurance estimate amount and write-off from the office fee.

Office Fee - Write-off - Insurance Estimate = Patient Portion

$150 - $23 - $61.60 = $65.40

**Verify**: To verify the estimates are correct, add the write-off, insurance estimate, and patient portion. This will equal the office fee.

Write-off + Insurance Estimate + Patient Portion = Office Fee

23 + 61.60 + 65.40 = 150

## Downgrades

In this example we will explain the math behind a two surface downgrade. For posterior composites, most companies still base their payment calculations on the corresponding amalgam code for the same number of surfaces.

Sample Fees

* Office Fee for D2392 = $150
* PPO Fee for D2392 (composite) = $127
* PPO Fee for D2150 (amalgam) = $100
* Deductible = $50
* Covered Percentage = 80%

**Write-off**: The billed code is always used for the PPO fee, so for a downgrade it uses the PPO fee for D2392 (composite). This is the last time the D2392 PPO fee is used.

Office Fee - PPO Fee = Write-off

$150 - $127 = $23

**Covered Amount**: Subtract the deductible from the PPO Fee for D2150 (amalgam),

PPO Fee - Deductible = Covered Amount

$100 - $50 = $50

**Insurance Estimate**: Apply the covered percentage to the covered amount.

Covered Amount x Covered Percentage = Insurance Estimate

$50 x 80% = $40

**Patient Portion**: Subtract the insurance estimate amount and write-off from the office fee.

Office Fee - Writeoff - Insurance Pay = Patient Portion

$150 - $23 - $40 = $87

**Verify**: To verify the estimates are correct, add the write-off, insurance estimate, and patient portion. This will equal the office fee.

Write-off + Insurance Estimate + Patient Portion = Office Fee

23 + 40 + 87 = 150

For more information about downgrades, see [Estimate Downgrades](downgrades.html).