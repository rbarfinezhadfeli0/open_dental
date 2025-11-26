Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Payment Plan Unit Tests

These [Unit Test](unittesting.html) are for [Old Payment Plan](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paymentplanpatient.html).

**Down equals total amount**

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 100.00 | 100.00 | 0.00 | 1 |  |

| Period | Descript | Principal | Interest | Balance |
| --- | --- | --- | --- | --- |
| #1 | Downpay | 100.00 | 0.00 | 100.00 |

**Number of payments simple**

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 20.00 | 5 | 0.00 | 2 |  |

| Period | Descript | Principal | Interest | Balance |
| --- | --- | --- | --- | --- |
| #1 | Downpay | 5 | 0 | 5 |
| #2 |  | 7.5 | 0 | 12.50 |
| #3 |  | 7.5 | 0 | 20.00 |

**Term example**

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 1234.00 | 0.00 | 5.00 | 10 |  |

| Period | Descript | Principal | Interest | Balance |
| --- | --- | --- | --- | --- |
| #1 |  | 121.11 | 5.14 | 126.25 |
| #2 |  | 121.61 | 4.64 | 252.50 |
| #3 |  | 122.12 | 4.13 | 378.75 |
| #4 |  | 122.63 | 3.62 | 505.00 |
| #5 |  | 123.14 | 3.11 | 631.25 |
| #6 |  | 123.65 | 2.60 | 757.50 |
| #7 |  | 124.17 | 2.08 | 883.75 |
| #8 |  | 124.69 | 1.56 | 1010.00 |
| #9 |  | 125.20 | 1.05 | 1136.25 |
| #10 |  | 125.68 | .57 | 1262.50 |

**Term example**

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 8000.00 | 13.00 | 13.00 | 13 |  |

| Period | Descript | Principal | Interest | Balance |
| --- | --- | --- | --- | --- |
| #1 | Down | 13.00 | 0 | 13.00 |
| #2 |  | 575.45 | 86.53 | 674.98 |
| #3 |  | 581.69 | 80.29 | 1336.96 |
| #4 |  | 587.99 | 73.99 | 1998.94 |
| #5 |  | 594.36 | 67.62 | 2660.92 |
| #6 |  | 600.80 | 61.18 | 3322.90 |
| #7 |  | 607.31 | 54.67 | 3984.88 |
| #8 |  | 613.89 | 48.09 | 4646.86 |
| #9 |  | 620.54 | 41.44 | 5308.84 |
| #10 |  | 627.26 | 34.72 | 5970.82 |
| #11 |  | 634.05 | 27.93 | 6632.80 |
| #12 |  | 640.92 | 21.06 | 7294.78 |
| #13 |  | 647.87 | 14.11 | 7956.76 |
| #14 |  | 654.87 | 7.11 | 8618.74 |

**Real world example**

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 886.00 | 221.50 | 18 |  | 150.00 |

| Period | Descript | Principal | Interest | Balance |
| --- | --- | --- | --- | --- |
| #1 | Downpay | 221.50 | 0.00 | 221.50 |
| #2 |  | 140.03 | 9.97 | 371.50 |
| #3 |  | 142.13 | 7.87 | 521.50 |
| #4 |  | 144.26 | 5.74 | 671.50 |
| #5 |  | 146.43 | 3.57 | 821.50 |
| #6 |  | 91.65 | 1.37 | 914.52 |

**Payment amount example**

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 1436.00 | 136.00 | 12 |  | 175.00 |

| Period | Descript | Principal | Interest | Balance |
| --- | --- | --- | --- | --- |
| #1 | Downpay | 136.00 | 0.00 | 136.00 |
| #2 |  | 162.00 | 13.00 | 311.00 |
| #3 |  | 163.62 | 11.38 | 486.00 |
| #4 |  | 165.26 | 9.74 | 661.00 |
| #5 |  | 166.91 | 8.09 | 836.00 |
| #6 |  | 168.58 | 6.42 | 1011.00 |
| #7 |  | 170.26 | 4.74 | 1186.00 |
| #8 |  | 171.97 | 3.03 | 1361.00 |
| #9 |  | 131.40 | 1.31 | 1493.71 |

**Term plan with no interest and different final payment amount**

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 16318.33 | 0 | 0 | 12 |  |

| Period | Descript | Principal | Interest | Balance |
| --- | --- | --- | --- | --- |
| #1 |  | 1359.87 |  | 1359.87 |
| #2 |  | 1359.87 |  | 2719.74 |
| #3 |  | 1359.87 |  | 4079.61 |
| #4 |  | 1359.87 |  | 5439.48 |
| #5 |  | 1359.87 |  | 6799.35 |
| #6 |  | 1359.87 |  | 8159.22 |
| #7 |  | 1359.87 |  | 9519.09 |
| #8 |  | 1359.87 |  | 10878.96 |
| #9 |  | 1359.87 |  | 12238.83 |
| #10 |  | 1359.87 |  | 13598.70 |
| #11 |  | 1359.87 |  | 14958.57 |
| #12 |  | 1359.76 |  | 16318.33 |

## Recalculations

Bolded table rows indicate future charges.

1. **Balance Due on Account**

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 1000 | 100 | 15 | 9 |  |

| Date | Period | Descript | Principal | Interest | Payment | Balance |
| --- | --- | --- | --- | --- | --- | --- |
| 01/28/2015 | #1 | Downpay | 100.00 | 0.00 |  | 100.00 |
| 01/29/2015 | #2 |  | 95.11 | 11.25 |  | 206.36 |
| 02/28//2015 | #3 |  | 96.30 | 10.06 |  | 312.72 |
| 03/29/2015 | #4 |  | 97.50 | 8.86 |  | 419.08 |
| 04/01/2015 |  | Check |  |  | 419.08 | 0.00 |
| 04/29/2015 | #5 |  | 98.72 | 7.64 |  | 106.36 |
| **05/29/2015** | #6 |  | 99.96 | 6.40 |  | 212.72 |
| **06/29/2015** | #7 |  | 101.20 | 5.16 |  | 319.08 |
| **07/29/2015** | #8 |  | 102.47 | 3.89 |  | 425.44 |
| **08/29/2015** | #9 |  | 103.75 | 2.61 |  | 531.80 |
| **09/29/2015** | #10 |  | 104.99 | 1.37 |  | 638.16 |

1a. **Balance Due: If you select Prepay and Recalculate Interest**

| Prepay | Pay on Principal | Recalculate Interest |
| --- | --- | --- |
| X |  | X |

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 1000 | 100 | 15 | 9 |  |

| Date | Period | Descript | Principal | Interest | Payment | Balance |
| --- | --- | --- | --- | --- | --- | --- |
| 01/28/2015 | #1 | Downpay | 100.00 | 0.00 |  | 100.00 |
| 01/29/2015 | #2 |  | 95.11 | 11.25 |  | 206.36 |
| 02/28/2015 | #3 |  | 96.30 | 10.06 |  | 312.72 |
| 03/29/2015 | #4 |  | 97.50 | 8.86 |  | 419.08 |
| 04/01/2015 |  | Check |  |  | 419.08 |  |
| 04/29/2015 | #5 |  | 98.72 | 7.64 |  | 106.36 |
| **05/29/2015** | #6 | Increased Interest $1.33 | 99.95 | 7.73 |  | 214.04 |
| **06/29/2015** | #7 |  | 101.19 | 5.16 |  | 320.39 |
| **07/29/2015** | #8 |  | 102.46 | 3.38 |  | 426.74 |
| **08/29/2015** | #9 |  | 103.74 | 2.61 |  | 533.09 |
| **09/29/2015** | #10 |  | 105.03 | 1.31 |  | 639.43 |

1b.**Balance Due: If you select Prepay and do not Recalculate Interest**

| Prepay | Pay on Principal | Recalculate Interest |
| --- | --- | --- |
| X |  |  |

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 1000 | 100 | 15 | 9 |  |

| Date | Period | Descript | Principal | Interest | Payment | Balance |
| --- | --- | --- | --- | --- | --- | --- |
| 01/28/2015 | #1 | Downpay | 100.00 | 0.00 |  | 100.00 |
| 01/29/2015 | #2 |  | 95.11 | 11.25 |  | 206.36 |
| 02/28//2015 | #3 |  | 96.30 | 10.06 |  | 312.72 |
| 03/29/2015 | #4 |  | 97.50 | 8.86 |  | 419.08 |
| 04/01/2015 |  | Check |  |  | 419.08 | 0.00 |
| 04/29/2015 | #5 |  | 98.72 | 7.64 |  | 106.36 |
| **05/29/2015** | #6 | Increased Interest $3.84 | 102.47 | 7.73 |  | 216.56 |
| **06/29/2015** | #7 |  | 102.47 | 3.89 |  | 322.92 |
| **07/29/2015** | #8 |  | 102.47 | 3.89 |  | 429.28 |
| **08/29/2015** | #9 |  | 102.47 | 3.89 |  | 535.64 |
| **09/29/2015** | #10 |  | 102.49 | 3.87 |  | 642.00 |

**1c. Balance Due: If you select Pay on Principal and Recalculate Interest**

| Prepay | Pay on Principal | Recalculate Interest |
| --- | --- | --- |
|  | X | X |

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 1000 | 100 | 15 | 9 |  |

| Date | Period | Descript | Principal | Interest | Payment | Balance |
| --- | --- | --- | --- | --- | --- | --- |
| 01/28/2015 | #1 | Downpay | 10.00 | 0.00 |  | 100.00 |
| 01/29/2015 | #2 |  | 95.11 | 11.25 |  | 206.36 |
| 02/28/2015 | #3 |  | 96.30 | 10.06 |  | 312.72 |
| 03/29/2015 | #4 |  | 97.50 | 8.86 |  | 419.08 |
| 04/01/2015 |  | Check |  |  | 419.08 | 0.00 |
| 04/29/2015 | #5 |  | 98.72 | 7.64 |  | 106.36 |
| **05/29/2015** | #6 | Increased Interest $1.33 | 99.95 | 7.73 |  | 214.04 |
| **06/29/2015** | #7 |  | 101.19 | 5.16 |  | 320.39 |
| **07/29/2015** | #8 |  | 102.46 | 3.89 |  | 426.74 |
| **08/29/2015** | #9 |  | 103.74 | 2.61 |  | 533.09 |
| **09/29/2015** | #10 |  | 105.03 | 1.31 |  | 639.43 |

**1d. Balance Due: If you select Pay on Principal and do not Recalculate Interest**

| Prepay | Pay on Principal | Recalculate Interest |
| --- | --- | --- |
|  | X |  |

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 1000 | 100 | 15 | 9 |  |

| Date | Period | Descript | Principal | Interest | Payment | Balance |
| --- | --- | --- | --- | --- | --- | --- |
| 01/28/2015 | #1 | Downpay | 100.00 | 0.00 |  | 100.00 |
| 01/29/2015 | #2 |  | 95.11 | 11.25 |  | 206.36 |
| 02/28/2015 | #3 |  | 96.30 | 10.06 |  | 312.72 |
| 03/29/2015 | #4 |  | 97.50 | 8.86 |  | 419.08 |
| 04/01/2015 |  | Check |  |  | 419.08 | 0.00 |
| 04/29/2015 | #5 |  | 98.72 | 7.64 |  | 106.36 |
| **05/29/2015** | #6 | Increased Interest $3.84 | 102.47 | 7.73 |  | 216.56 |
| **06/29/2015** | #7 |  | 102.47 | 3.89 |  | 322.92 |
| **07/29/2015** | #8 |  | 102.47 | 3.89 |  | 429.28 |
| **08/29/2015** | #9 |  | 102.47 | 3.89 |  | 535.64 |
| **09/29/2015** | #10 |  | 102.49 | 3.87 |  | 642.00 |

**2. Overpaid**

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 1000 | 100 | 15 | 9 |  |

| Date | Period | Descript | Principal | Interest | Payment | Balance |
| --- | --- | --- | --- | --- | --- | --- |
| 01/28/2015 | #1 | Downpay | 100.00 | 0.00 |  | 100.00 |
| 01/29/2015 | #2 |  | 95.11 | 11.25 |  | 206.36 |
| 02/28//2015 | #3 |  | 96.30 | 10.06 |  | 312.72 |
| 03/29/2015 | #4 |  | 97.50 | 8.86 |  | 419.08 |
| 04/29/2015 | #5 |  | 98.72 | 7.64 |  | 525.44 |
| 05/01/2015 |  | Check |  |  | 725.00 | -199.56 |
| **05/29/2015** | #6 |  | 99.96 | 6.40 |  | -93.20 |
| **06/29/2015** | #7 |  | 101.20 | 5.16 |  | 13.16 |
| **07/29/2015** | #8 |  | 102.47 | 3.89 |  | 119.52 |
| **08/29/2015** | #9 |  | 103.75 | 2.61 |  | 225.88 |
| **09/29/2015** | #10 |  | 104.99 | 1.37 |  | 332.24 |

**2a. Overpaid: If you select Prepay and Recalculate Interest**

|  |  |  |
| --- | --- | --- |
| Prepay | Pay on Principal | Recalculate Interest |
| X |  | X |

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 1000 | 100 | 15 | 9 |  |

| Date | Period | Descript | Principal | Interest | Payment | Balance |
| --- | --- | --- | --- | --- | --- | --- |
| 01/28/2015 | #1 | Downpay | 100.00 | 0.00 |  | 100.00 |
| 01/29/2015 | #2 |  | 95.11 | 11.25 |  | 206.36 |
| 02/28/2015 | #3 |  | 96.30 | 10.06 |  | 312.72 |
| 03/29/2015 | #4 |  | 94350 | 8.86 |  | 419.08 |
| 04/29/2015 | #5 |  | 98.72 | 7.64 |  | 525.44 |
| 05/01/2015 |  | Check |  |  | 725.00 | -199.56 |
| 05/13/2015 |  | Recalculated based on prepayment | 199.56 | 0.00 |  | 0.00 |
| **05/29/2015** | #6 | Prepaid | 0.00 | 0.00 |  | 0.00 |
| 06/29/2015 | #7 |  | 6.74 | 3.91 |  | 10.65 |
| 07/29/2015 | #8 |  | 102.52 | 3.83 |  | 117.00 |
| 08/29/2015 | #9 |  | 103.81 | 2.54 |  | 223.35 |
| 09/29/2015 | #10 |  | 99.74 | 1.25 |  | 324.34 |

**2b. Overpaid: If you select Prepay and do not Recalculate Interest**

| Prepay | Pay on Principal | Recalculate Interest |
| --- | --- | --- |
| X |  |  |

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 1000 | 100 | 15 | 9 |  |

| Date | Period | Descript | Principal | Interest | Payment | Balance |
| --- | --- | --- | --- | --- | --- | --- |
| 01/28/2015 | #1 | Downpay | 100.00 | 0.00 |  | 100.00 |
| 01/29/2015 | #2 |  | 95.11 | 11.25 |  | 206.36 |
| 02/28/2015 | #3 |  | 96.30 | 10.06 |  | 312.72 |
| 03/29/2015 | #4 |  | 97.50 | 8.86 |  | 419.08 |
| 04/29/2015 | #5 |  | 98.72 | 7.64 |  | 525.44 |
| 05/01/2015 |  | Check |  |  | 725.00 | -199.56 |
| 05/13/2015 |  | Recalculated based on prepayment | 199.56 | 0.00 |  | 0.00 |
| **05/29/2015** | #6 | Prepaid | 0.00 | 0.00 |  | 0.00 |
| **06/29/2015** | #7 |  | 8.30 | 4.86 |  | 13.16 |
| **07/29/2015** | #8 |  | 101.50 | 4.86 |  | 119.52 |
| **08/29/2015** | #9 |  | 101.50 | 4.86 |  | 225.88 |
| **09/29/2015** | #10 |  | 101.51 | 4.85 |  | 332.24 |

2c. **Overpaid: If you select Pay on Principal and Recalculate Interest**

| Prepay | Pay on Principal | Recalculate Interest |
| --- | --- | --- |
|  | X | X |

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 1000 | 100 | 15 | 9 |  |

| Date | Period | Descript | Principal | Interest | Payment | Balance |
| --- | --- | --- | --- | --- | --- | --- |
| 01/28/2015 | #1 | Downpay | 100.00 | 0.00 |  | 100.00 |
| 01/29/2015 | #2 |  | 95.11 | 11.25 |  | 206.36 |
| 02/28/2015 | #3 |  | 96.30 | 10.06 |  | 312.72 |
| 03/29/2015 | #4 |  | 97.50 | 8.86 |  | 419.08 |
| 04/29/2015 | #5 |  | 98.72 | 7.64 |  | 525.44 |
| 05/01/2015 |  | Check |  |  | 725 | -199.56 |
| 05/13/2015 |  | Recalculated based on pay on principal | 199.56 | 0.00 |  | 0.00 |
| **05/29/2015** | #6 |  | 61.02 | 3.91 |  | 64.93 |
| **06/29/2015** | #7 |  | 61.78 | 3.15 |  | 129.86 |
| **07/29/2015** | #8 |  | 62.55 | 2.38 |  | 194.79 |
| **08/29/2015** | #9 |  | 63.34 | 1.59 |  | 259.72 |
| **09/29/2015** | #10 |  | 64.12 | 0.80 |  | 324.64 |

**2d. Overpaid: If you select Pay on Principal and do not Recalculate Interest.**

| Prepay | Pay on Principal | Recalculate Interest |
| --- | --- | --- |
|  | X |  |

| Total Amount | Down Payment | APR | Number of Payments | Payment Amt |
| --- | --- | --- | --- | --- |
| 1000 | 100 | 15 | 9 |  |

| Date | Period | Descript | Principal | Interest | Payment | Balance |
| --- | --- | --- | --- | --- | --- | --- |
| 01/28/2015 | #1 | Downpay | 100.00 | 0.00 |  | 100.00 |
| 01/29/2015 | #2 |  | 95.11 | 11.25 |  | 206.36 |
| 02/28/2015 | #3 |  | 96.30 | 10.06 |  | 312.72 |
| 03/29/2015 | #4 |  | 97.50 | 8.86 |  | 419.08 |
| 04/29/2015 | #5 |  | 98.72 | 7.64 |  | 525.44 |
| 05/01/2015 |  | Check |  |  | 725 | -199.56 |
| 05/13/2015 |  | Recalculated based on pay on principal | 199.56 | 0.00 |  | 0.00 |
| **05/29/2015** | #6 |  | 62.56 | 3.89 |  | 66.45 |
| **06/29/2015** | #7 |  | 62.56 | 3.89 |  | 132.90 |
| **07/29/2015** | #8 |  | 62.56 | 3.89 |  | 199.35 |
| **08/29/2015** | #9 |  | 62.56 | 3.89 |  | 265.80 |
| **09/29/2015** | #10 |  | 62.57 | 3.897 |  | 332.24 |