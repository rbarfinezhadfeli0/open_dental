Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

eClipboard: Payment

Patients can review statements and make payments on the eClipboard device.

In the [Account Module](account.html), click the [Payment](payment.html) dropdown. Select **Send Payment to eClipboard**.

![](images/accounteClipboard.png)

Payments via eClipboard are only available for [XCharge (OpenEdge)](xcharge.html), [Edge Express](edgeexpress.html), or [PayConnect 1.0](payconnectsetup.html) users.

## Patient Currently in Session

If a patient is currently in an eClipboard session, click **Send Payment to eClipboard** to add the option to the Check-in checklist.

Alternatively, this option can automatically be added to the Check-in checklist when *Allow payment when patient is checking in* is enabled in eClipboard Setup. Another checklist item (e.g., patient forms or patient photo) must display for patients to view payment information.

![](images/eclipboardPaymentChecklist.png)

## Patient Not in Session

If the patient is not currently in an eClipboard session, the statements and payment request can be sent to the device.

1. In the Account Module, click the Payment dropdown.
2. Select **Send Payment to eClipboard**.
3. The following window displays:
   ![](images/eClipboardPaymentQR.png)
4. In eClipboard, tap the **QR icon**.
   * Alternatively, in the eClipboard menu, tap **Patient Payment**.![](images/eClipboardPaymentQRDevice.png)
5. Either use the device camera to scan the QR code, or type in the unlock code.
6. The Payment window in eClipboard opens.
   ![](images/eClipboardPaymentMain.png)

## Viewing Statements

All statements listed in the Account Module display.

1. In eClipboard, tap the dropdown next the statement to view.
2. Tap **Open Statement**.
3. A PDF of the statement opens.
![](images/eClipboardStatement.png)

## Make a Payment

Make a payment using a card on file.

Note:

* If a card does not exist on file, see below for instructions on adding a card.
* It is recommended an updated statement is added to the account prior to taking a payment. To update the balance after opening eClipboard, create a statement in Open Dental, then tap **Refresh** in eClipboard.

1. At the top of the eClipboard Payment info, the balance of the last statement displays.
   ![](images/eClipboardPayInfo.png)
2. Tap **Make Payment**.
   ![](images/eClipboardPay.png)
3. The payment window opens.
   * Enter an optional note, the amount, and select the card. Then tap **Make Payment**.
   * **Save new card?**: Tap the box to save the card.

## Manage Credit Cards

Cards can be added and deleted as needed.

In eClipboard, tap **Manage Cards**.
![](images/eClipboardManageCards.png)

Cards currently on file display.

* Tap **New Card** to add a new card on file. Enter card and customer information. Then tap **Make Payment** to add the card.
  + This button is only visible for XCharge Users. If using PayConnect, add new cards from within the Open Dental Account Module instead.
* Tap **Delete** to remove the selected card from file.