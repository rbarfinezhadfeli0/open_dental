Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

CareCredit Payment

See [CareCredit Setup](carecreditsetup.html).

In the [Payment](payment.html) window, at the upper right, is the **CareCredit** button.

![](images/careCreditPaymentButton.png)

Follow these steps when taking a CareCredit payment.

## Take a Payment

1. In the [Account Module](account.html), click **Payment**.
2. Enter the entire treatment amount, and click OK to open the Payment window.

   Note: Though CareCredit deducts a processing fee, the payment should be entered as the full amount the patient agreed to. Any financing agreement between CareCredit and the patient, and any costs associated with accepting CareCredit, should not be documented in the patient's account to affect the balance (i.e., adjustments). The CareCredit *Merchant Fee* is noted in the payment Note and Surcharge Fee field once the payment is processed.
3. Verify the paysplits or select the completed procedures and treatment planned procedures.
4. Click the **CareCredit** button. The payment type changes to the type set in CareCredit Setup.
   * If the [Preference](preferences.html),  *Payments prompt for Payment Type*, is disabled, the payment type changes to the type set in CareCredit Setup. If the preference is enabled, users must manually select a payment type.
5. If prompted, select a provider, then click OK to open the CareCredit Purchase Portal.

   Note: If there are multiple paysplits with different providers (including prepayment splits with no provider) the Providers window opens. The user needs to select a provider from the list to represent the transaction.
   * The Providers window does not open if all paysplits have the same provider or no provider (prepayment).
   * The provider selection does not affect the paysplits in Open Dental.
   * If using *Merchant Numbers by Provider*, select the provider with a merchant number.
6. In the CareCredit Purchase Portal, click **Next**.
   ![](images/careCreditPurchase.png)

   Note:
   * The patient name and zip code auto-populates with the information found in Open Dental.
   * Once this window opens, the purchase request must be completed within 30 minutes.
   * The print button does not print what is seen in any of the forms steps, it just prints a message that the form needs completed.
   * Do not leave this window and do other things in Open Dental.
   * If this window must be closed before the CareCredit transaction was completed, a prompt displays to acknowledge the close. The payment still saves in Open Dental. Double-click back into the payment to start over or delete it from the account.
7. Verify the Purchase Amount, enter or look up the patient's CareCredit account number, and click **Next**.
   ![](images/careCreditPurchaseConfirm.png)

   Note: The patient name and purchase amount are pulled from Open Dental and auto-populates the form.
   * If the user does not know the Account Number, they can look it up by the patient's SSN & Zip Code or by the Patient's Name & Phone number.
   * The patient zip code, name, and phone number autopopulate.The SSN does not autopopulate the form, it must be entered manually.
8. Enter the patient's identification information, select a financing option, and click **Submit Transaction**.
   ![](images/careCreditPurchasePatConfirm.png)
   * **Cardholder ID**: Use the dropdown to select an option to verify the patient's identity. Options are drivers license, green card/resident alien, government-issued ID, military ID, passport, state-issued ID, and tribal ID.
   * **Financing Option**: Select an option (i.e., Care Credit, Clear Aligner) to open the dropdown and view and select financing terms. The options the user selected during setup under CareCredit Action, Manage, appear here.

     Note: Only options the patient's purchase amount qualifies for list.
   * **Practice Memo**: Enter a memo that appears on the patient's CareCredit statement and at the bottom of the Pay Note of the Payment window.If 30 minutes has passed since beginning this process, a session expired message instructs the user to start over. The session could be expired during any of the above steps, a notification does not display until Submit Transaction is clicked.
9. Print the CareCredit receipt and have the patient sign, then click **Close**.
   ![](images/careCreditPurchaseComplete.png)

Once the purchase window is closed, the Payment window closes and posts to the patient account. The transaction details are added to the Pay Note of the Payment window.

## Declined Payments

If a CareCredit payment is declined, the payment still posts to the patient account. Double-click back into the payment to delete it.