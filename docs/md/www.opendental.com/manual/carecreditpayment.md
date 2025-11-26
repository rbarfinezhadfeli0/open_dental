Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

CareCredit Payment

See [CareCredit Setup](carecreditsetup.html).

In the [Payment](payment.html) window, at the upper right, is the **CareCredit** button.

![](images/careCreditPaymentButton.png)

See [CareCredit Self-Service Payment](carecreditselfservice.html) for instructions on processing payments using the self-service link.

## Take a Payment

Follow these steps when taking a CareCredit payment.

1. In the [Account Module](account.html), click **Payment**.
2. Enter the entire treatment amount, and click OK to open the Payment window.

   Note: Though CareCredit deducts a processing fee, the payment should be entered as the full amount the patient agreed to. Any financing agreement between CareCredit and the patient, and any costs associated with accepting CareCredit, should not be documented in the patient's account to affect the balance (i.e., adjustments). The CareCredit *Merchant Fee* is noted in the payment Note and Surcharge Fee field once the payment is processed.
3. Verify the paysplits or select the completed procedures and treatment planned procedures.
4. Click the **CareCredit** button. The payment type changes to the type set in CareCredit Setup.
   * If the [Preference](preferences.html),  *Payments prompt for Payment Type*, is disabled, the payment type changes to the type set in CareCredit Setup. If the preference is enabled, users must manually select a payment type.
5. If prompted, select a provider, then click OK to open the CareCredit Transaction Portal.

   Note: If there are multiple paysplits with different providers (including prepayment splits with no provider) the Providers window opens. The user needs to select a provider from the list to represent the transaction.
   * The Providers window does not open if all paysplits have the same provider or no provider (prepayment).
   * The provider selection does not affect the paysplits in Open Dental.
   * If using *Merchant Numbers by Provider*, select the provider with a merchant number.
6. In the CareCredit Transaction Portal, click the *Submit a purchase transaction in the office for the patient/client* and type Account Details or look up the patient's CareCredit account number. Exp Date and CVV fields appear after starting to enter Credit Card number. Click **Continue**.
   ![](images/careCreditPurchase.png)

   Note:
   * Once this window opens, the purchase request must be completed within 30 minutes.
   * The print button does not print what is seen in any of the forms steps, it just prints a message that the form needs completed.
   * Do not leave this window and do other things in Open Dental.
   * If this window must be closed before the CareCredit transaction was completed, a prompt displays to acknowledge the close. The payment still saves in Open Dental. Double-click back into the payment to start over or delete it from the account.
7. Verify the *Purchase Amount* and select a *Program name*. Choose a *Promotional Financing Option*. Click **Submit**.
   * Financing Options: (i.e., Care Credit, Clear Aligner) The options selected during setup under CareCredit Action, Manage, appear here. Only options the patient's purchase amount qualifies for are listed.![](images/careCreditPurchaseConfirm.png)
8. Click **Print Receipt** to open the CareCredit receipt and choose print options. Click **Done**  when finished and to enable the Send Receipt option. Click **Send Receipt** to send a copy of the receipt via text or email to the patient/client. Click **Close** to exit the window.
   ![](images/careCreditPurchaseComplete.png)

Once the purchase window is closed, the Payment window closes and posts to the patient account. The transaction details are added to the Pay Note of the Payment window.

## Declined Payments

If a CareCredit payment is declined, the payment still posts to the patient account. Double-click back into the payment to delete it.