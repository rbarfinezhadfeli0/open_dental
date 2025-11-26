Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Claim Ack 277

The 277 format for e-claim acknowledgment reports contains more detailed status information about the sent batch than a 997 or 999 format.

In [Send Claims](claimsend.html), under History, double-click a StatusNotify\_277 row.

![](images/etrans277.png)

See [Clearinghouses](clearinghouses.html) for more information on e-claims.

When a 277 is received:

* In the Insurance Claims History grid, the corresponding rows for the sent claims have an AckCode column set to *A* or *R*.
* The 277 also shows as a separate row with a Type of *StatusNotify\_277*. Double-click the row to open the Claim Status Response window.

The only information from the above window that gets automatically processed/imported is the claim status column (*Accepted* or *Rejected*).