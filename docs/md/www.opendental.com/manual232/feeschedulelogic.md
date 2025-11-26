Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Fee Schedule Logic

See [Procedure Codes](procedurecodes.html).

The [Fee Schedule](feeschedules.html) used for procedure fee estimates is determined using the logic below.

## Insurance

**PPO Plan Types**

Fee billed is based on the Fee Schedule (assigned in [Edit Provider](providerseditwindow.html)) of the patient's primary provider. The Fee Schedule of the treating provider is not considered.

![](images/feeLogicProvSched.png)

The Fee Schedule assigned in Edit Insurance Plan is used for write-off calculations. It does not affect the billed fee.

When using PPO insurance, if  *Use UCR fee for billed fee even if PPO fee is higher*, is enabled in [Preferences](preferences.html), the provider fee is used even if the PPO fee is higher. Disable this preference to always bill the higher fee.

**Category Percentage and Medicaid/Flat Co-pay Plan Types**

The fee billed is based on the *Fee Schedule* assigned to the [Insurance Plan](insplan.html). If the patient has multiple insurance plans, the Fee Schedule of the first insurance plan listed in the Family Module is used (i.e., order = 1 in Edit Insurance Plan).

![](images/feeLogicMedicaid.png)

If no Fee Schedule is assigned to the insurance plan, the fee is billed in the following order:

Priority 1: Fee Schedule assigned in [Edit Patient Information](patientedit.html) (rarely used).

![](images/feeLogicRarelyUsed.png)

Priority 2: Fee Schedule of the provider assigned to the procedure, if any (*Assign to Prov* on the [Procedure Code](procedurecodeedit.html)).

Priority 3: Fee Schedule of the provider assigned to the procedure's appointment or to any appointment scheduled today.

Priority 4: Fee Schedule of the patient's primary provider.

**Capitation Plan Types**

Capitation insurance does not normally bill any fee to the patient account. If the patient has a capitation insurance plan, using the Capitation Plan Type with a copay, the fee billed is based on the *CoPay* Fee Schedule assigned in the Edit Insurance Plan window. If there is no copay for a procedure, the fee billed is $0.

![](images/feeLogicCopay.png)

If the insurance plan is mixed capitation ([HMO / DMO Insurance Plan with Copays and Supplemental Payments](planhmosupplemental.html)), the same logic applies as for PPO Plan Types as described above since these plans use the *PPO Percentage* Plan Type.

Note: For any insurance Plan Type, overrides may affect the fee billed. See Overrides section below for more information.

## No Insurance / Discount Plans

If a patient does not have insurance or is assigned to a [Discount Plan](discountplans.html), fees are billed in the following priority:

Otherwise, for patients without insurance, the Fee Schedule of the provider who has priority is used.

* Priority 1: Fee Schedule assigned in Edit Patient Information (rarely used).
* Priority 2: Fee Schedule of the provider assigned to the procedure, if any (Assign to Prov on the [Procedure Code](procedurecodeedit.html)).
* Priority 3: Fee Schedule of the provider assigned to the procedure's appointment or to any appointment scheduled today.
* Priority 4: Fee Schedule of the patient's primary provider.

Note: Overrides may affect the fee billed. See Overrides section below for more information.

## Medical

If the patient has medical insurance, the Fee Schedule of the first medical insurance plan listed in the Family module is used.

If a [Procedure Code](procedurecodeedit.html) is a dental code cross-coded to a medical code, then the preference, *Use medical fee for new procedures*, determines the fee. If enabled, the fee of the medical code is used; if disabled the fee of the dental code is used.

Note: Overrides may affect the fee billed. See Overrides section below for more information.

## Overrides

After the Fee Schedule is determined, then any [Provider and/or Clinic-Specific Overrides](procedurefeeoverrides.html) are applied to that Fee Schedule.

For example, if the default fee for a procedure in the prioritized Fee Schedule is $110, but there is an override in that Fee Schedule for the treating provider of $125, the fee billed is $125.

Setting up overrides is helpful in the case of specialist or clinic specific fees and should be done in lieu of setting up individual Fee Schedules for clinics or providers.

For Discount Plan patients, if overrides exist for a treating provider on a Discount Plan Fee Schedule, these fees are used to determine the patient discount.

## Copay Fee Schedule Tips

How a copay Fee Schedule should be created depends on the information sent by insurance.

* If the insurance Fee Schedule is the total amount you are allowed to collect (including patient copay amounts):
  1. Create the *Patient Co-pay Amounts* Fee Schedule.
  2. Create the insurance Fee Schedule using the amounts provided by the carrier.
* If the insurance Fee Schedule is the amount insurance is paying you (and patient copay is not included in the amount):
  1. Create the *Patient Co-pay Amounts* Fee Schedule.
  2. Create the insurance Fee Schedule by taking the insurance amount and adding the copay amount.
      (e.g., if the insurance will pay $100, and the patient copay is $50, the Fee Schedule amount should show $150)