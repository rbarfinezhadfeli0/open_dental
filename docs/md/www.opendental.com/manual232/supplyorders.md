Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Supply Orders

The purpose of this feature is to track supply orders.

In the [Supply Inventory](supplyinventory.html) window, click **Orders**.

![](images/supplyOrders.png)

**New Order**: Select a Supplier from the dropdown, then click New Order to create a new pending order.

**Show received**: Check to show received orders.

**Supplier**: Use dropdown to filter the list by supplier, or to select the supplier for new orders.

The **Order History** grids lists pending and recent orders. Double-click an order to open Supply Order edit window.

The **Supplies on One Order** grid lists all the associated supplies for the highlighted order in Order History.

* To edit a supply's quantity or price per unit, double-click on the supply item.
* To edit an order's properties (date placed and note) double-click on the order. Alternatively, you can click in the Qty and/or Price/Unit cells to edit the amount. Changes made to prices here do not affect the main supply list.

**Add**: Click to add supplies to the selected order.

## Supply Order

Double-click an order to open the Supply Order window. From here, track or update details about a specific recent or pending order.

![](images/supplyOrderEdit.png)

* **Supplier**: Read only. This field cannot not be changed. When creating a new order, the supplier is chosen by whomever is selected in the Supplier dropdown on the Supply Orders window before New Order is clicked.
* **Date Placed**: Defaults to today's date on new order. Once a date is entered, the order is no longer considered pending.
* **Placed By**: For tracking purposes, a user can be selected from the Placed By dropdown. This will default to the currently logged-on user when the order is created, but will only save once a Date Placed has been entered. Unsent orders will always default to *None*. This is not a security field and can be edited at any time after order has been sent.
* **Date Received**: Enter date the order was received. Click **Today** to enter current date.
* **Note**: Enter any additional details about the order.

## Add a New Order

Click the **Supplier** dropdown and select a supplier. Click **New Order**. A new pending order will show in the **Order History** list, and it should be highlighted. Click **Add** and select the supply. Click **OK**, then repeat until all supplies are added and the order is complete. As you add supplies, the items will list in the Supplies on one Order grid.

Note: Items manually added to an order will default to a quantity of one and the price from the main supply list. Edit as required.

Once all items have been added, double-click on the pending order in the Order History. Edit as required. The Total Amount automatically calculates based on price and quantity entered. Any shipping charges can also be recorded. Enter a note if desired.