# File: ./www.opendental.com/manual243/unittestpaymentplan.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Payment Plan Unit Tests</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('unittestpaymentplan','unittesting.html','advancedtopics','technical','manual')">
<nav class="LeftTree">
<div class="TopBarLeft"><p>Table of Contents</p></div>
<div id="Manual"><a href="manual.html">Manual</a></div>
</nav>
<div class="RightMain">
<div class="TopBar">
    <a href="../index.html">
        <div class="Logo">
            <img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
        </div>
    </a>
    <div class="TopBarLinks">
        <div class="TopBarTitle">Manual 
					<select id="SelectVersion" class="TopBarVersionDrop" onchange="location = this.options[this.selectedIndex].value;
						for (var i = 0; i < document.getElementById('SelectVersion').options.length; i++) {
							if (document.getElementById('SelectVersion').options[i].attributes.selected)
								document.getElementById('SelectVersion').selectedIndex=i;
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/unittestpaymentplan.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/unittestpaymentplan.html" >v24.2</option><option value="https://www.opendental.com/manual241/unittestpaymentplan.html" >v24.1</option><option value="https://www.opendental.com/manual233/unittestpaymentplan.html" >v23.3</option><option value="https://www.opendental.com/manual232/unittestpaymentplan.html" >v23.2</option><option value="https://www.opendental.com/manual231/unittestpaymentplan.html" >v23.1</option><option value="https://www.opendental.com/manual224/unittestpaymentplan.html" >v22.4</option><option value="https://www.opendental.com/manual223/unittestpaymentplan.html" >v22.3</option><option value="https://www.opendental.com/manual222/unittestpaymentplan.html" >v22.2</option><option value="https://www.opendental.com/manual221/unittestpaymentplan.html" >v22.1</option><option value="https://www.opendental.com/manual214/unittestpaymentplan.html" >v21.4</option><option value="https://www.opendental.com/manual213/unittestpaymentplan.html" >v21.3</option><option value="https://www.opendental.com/manual212/unittestpaymentplan.html" >v21.2</option><option value="https://www.opendental.com/manual211/unittestpaymentplan.html" >v21.1</option><option value="https://www.opendental.com/manual205/unittestpaymentplan.html" >v20.5</option><option value="https://www.opendental.com/manual204/unittestpaymentplan.html" >v20.4</option><option value="https://www.opendental.com/manual203/unittestpaymentplan.html" >v20.3</option><option value="https://www.opendental.com/manual202/unittestpaymentplan.html" >v20.2</option><option value="https://www.opendental.com/manual201/unittestpaymentplan.html" >v20.1</option><option value="https://www.opendental.com/manual194/unittestpaymentplan.html" >v19.4</option><option value="https://www.opendental.com/manual193/unittestpaymentplan.html" >v19.3</option><option value="https://www.opendental.com/manual192/unittestpaymentplan.html" >v19.2</option><option value="https://www.opendental.com/manual191/unittestpaymentplan.html" >v19.1</option><option value="https://www.opendental.com/manual184/unittestpaymentplan.html" >v18.4</option><option value="https://www.opendental.com/manual183/unittestpaymentplan.html" >v18.3</option><option value="https://www.opendental.com/manual182/unittestpaymentplan.html" >v18.2</option><option value="https://www.opendental.com/manual181/unittestpaymentplan.html" >v18.1</option><option value="https://www.opendental.com/manual174/unittestpaymentplan.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Payment Plan Unit Tests</p></div>
<div class="GeneralPageContent">
<p>These <a href="../site/unittesting.html">Unit Test</a> are for <a href="paymentplanpatient.html">Old Payment Plan</a>.</p>
<p><b>Down equals total amount</b></p>
<table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>100.00</td>
<td>100.00</td>
<td>0.00</td>
<td>1</td>
<td></td>
</tr>
</table>
<table class="simpletable">
<tr>
<th style="width:20%"> Period</th>
<th style="width:20%">Descript</th>
<th style="width:20%">Principal</th>
<th style="width:20%">Interest</th>
<th style="width:20%">Balance</th>
</tr>
<tr>
<td>#1</td>
<td>Downpay</td>
<td>100.00</td>
<td>0.00</td>
<td>100.00</td>
</tr>
</table>
<br/><p><b>Number of payments simple</b><table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>20.00</td>
<td>5</td>
<td>0.00</td>
<td>2</td>
<td></td>
</tr>
</table>
</p>
<table class="simpletable">
<tr>
<th style="width:20%">Period</th>
<th style="width:20%">Descript</th>
<th style="width:20%">Principal</th>
<th style="width:20%">Interest</th>
<th style="width:20%">Balance</th>
</tr>
<tr>
<td>#1</td>
<td>Downpay</td>
<td>5</td>
<td>0</td>
<td>5</td>
</tr>
<tr>
<td>#2</td>
<td></td>
<td>7.5</td>
<td>0</td>
<td>12.50</td>
</tr>
<tr>
<td>#3</td>
<td></td>
<td>7.5</td>
<td>0</td>
<td>20.00</td>
</tr>
</table>
<br/><p><b>Term example</b><table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>1234.00</td>
<td>0.00</td>
<td>5.00</td>
<td>10</td>
<td></td>
</tr>
</table>
</p>
<table class="simpletable">
<tr>
<th style="width:20%">Period</th>
<th style="width:20%">Descript</th>
<th style="width:20%">Principal</th>
<th style="width:20%">Interest</th>
<th style="width:20%">Balance</th>
</tr>
<tr>
<td>#1</td>
<td></td>
<td>121.11</td>
<td>5.14</td>
<td>126.25</td>
</tr>
<tr>
<td>#2</td>
<td></td>
<td>121.61</td>
<td>4.64</td>
<td>252.50</td>
</tr>
<tr>
<td>#3</td>
<td></td>
<td>122.12</td>
<td>4.13</td>
<td>378.75</td>
</tr>
<tr>
<td>#4</td>
<td></td>
<td>122.63</td>
<td>3.62</td>
<td>505.00</td>
</tr>
<tr>
<td>#5</td>
<td></td>
<td>123.14</td>
<td>3.11</td>
<td>631.25</td>
</tr>
<tr>
<td>#6</td>
<td></td>
<td>123.65</td>
<td>2.60</td>
<td>757.50</td>
</tr>
<tr>
<td>#7</td>
<td></td>
<td>124.17</td>
<td>2.08</td>
<td>883.75</td>
</tr>
<tr>
<td>#8</td>
<td></td>
<td>124.69</td>
<td>1.56</td>
<td>1010.00</td>
</tr>
<tr>
<td>#9</td>
<td></td>
<td>125.20</td>
<td>1.05</td>
<td>1136.25</td>
</tr>
<tr>
<td>#10</td>
<td></td>
<td>125.68</td>
<td>.57</td>
<td>1262.50</td>
</tr>
</table>
<br/><p><b>Term example</b><table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>8000.00</td>
<td>13.00</td>
<td>13.00</td>
<td>13</td>
<td></td>
</tr>
</table>
</p>
<table class="simpletable">
<tr>
<th style="width:20%">Period</th>
<th style="width:20%">Descript</th>
<th style="width:20%">Principal</th>
<th style="width:20%">Interest</th>
<th style="width:20%">Balance</th>
</tr>
<tr>
<td>#1</td>
<td>Down</td>
<td>13.00</td>
<td>0</td>
<td>13.00</td>
</tr>
<tr>
<td>#2</td>
<td></td>
<td>575.45</td>
<td>86.53</td>
<td>674.98</td>
</tr>
<tr>
<td>#3</td>
<td></td>
<td>581.69</td>
<td>80.29</td>
<td>1336.96</td>
</tr>
<tr>
<td>#4</td>
<td></td>
<td>587.99</td>
<td>73.99</td>
<td>1998.94</td>
</tr>
<tr>
<td>#5</td>
<td></td>
<td>594.36</td>
<td>67.62</td>
<td>2660.92</td>
</tr>
<tr>
<td>#6</td>
<td></td>
<td>600.80</td>
<td>61.18</td>
<td>3322.90</td>
</tr>
<tr>
<td>#7</td>
<td></td>
<td>607.31</td>
<td>54.67</td>
<td>3984.88</td>
</tr>
<tr>
<td>#8</td>
<td></td>
<td>613.89</td>
<td>48.09</td>
<td>4646.86</td>
</tr>
<tr>
<td>#9</td>
<td></td>
<td>620.54</td>
<td>41.44</td>
<td>5308.84</td>
</tr>
<tr>
<td>#10</td>
<td></td>
<td>627.26</td>
<td>34.72</td>
<td>5970.82</td>
</tr>
<tr>
<td>#11</td>
<td></td>
<td>634.05</td>
<td>27.93</td>
<td>6632.80</td>
</tr>
<tr>
<td>#12</td>
<td></td>
<td>640.92</td>
<td>21.06</td>
<td>7294.78</td>
</tr>
<tr>
<td>#13</td>
<td></td>
<td>647.87</td>
<td>14.11</td>
<td>7956.76</td>
</tr>
<tr>
<td>#14</td>
<td></td>
<td>654.87</td>
<td>7.11</td>
<td>8618.74</td>
</tr>
</table>
<br/><p><b>Real world example</b><table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>886.00</td>
<td>221.50</td>
<td>18</td>
<td></td>
<td>150.00</td>
</tr>
</table>
</p>
<table class="simpletable">
<tr>
<th style="width:20%">Period</th>
<th style="width:20%">Descript</th>
<th style="width:20%">Principal</th>
<th style="width:20%">Interest</th>
<th style="width:20%">Balance</th>
</tr>
<tr>
<td>#1</td>
<td>Downpay</td>
<td>221.50</td>
<td>0.00</td>
<td>221.50</td>
</tr>
<tr>
<td>#2</td>
<td></td>
<td>140.03</td>
<td>9.97</td>
<td>371.50</td>
</tr>
<tr>
<td>#3</td>
<td></td>
<td>142.13</td>
<td>7.87</td>
<td>521.50</td>
</tr>
<tr>
<td>#4</td>
<td></td>
<td>144.26</td>
<td>5.74</td>
<td>671.50</td>
</tr>
<tr>
<td>#5</td>
<td></td>
<td>146.43</td>
<td>3.57</td>
<td>821.50</td>
</tr>
<tr>
<td>#6</td>
<td></td>
<td>91.65</td>
<td>1.37</td>
<td>914.52</td>
</tr>
</table>
<br/><p><b>Payment amount example</b><table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>1436.00</td>
<td>136.00</td>
<td>12</td>
<td></td>
<td>175.00</td>
</tr>
</table>
</p>
<table class="simpletable">
<tr>
<th style="width:20%">Period</th>
<th style="width:20%">Descript</th>
<th style="width:20%">Principal</th>
<th style="width:20%">Interest</th>
<th style="width:20%">Balance</th>
</tr>
<tr>
<td>#1</td>
<td>Downpay</td>
<td>136.00</td>
<td>0.00</td>
<td>136.00</td>
</tr>
<tr>
<td>#2</td>
<td></td>
<td>162.00</td>
<td>13.00</td>
<td>311.00</td>
</tr>
<tr>
<td>#3</td>
<td></td>
<td>163.62</td>
<td>11.38</td>
<td>486.00</td>
</tr>
<tr>
<td>#4</td>
<td></td>
<td>165.26</td>
<td>9.74</td>
<td>661.00</td>
</tr>
<tr>
<td>#5</td>
<td></td>
<td>166.91</td>
<td>8.09</td>
<td>836.00</td>
</tr>
<tr>
<td>#6</td>
<td></td>
<td>168.58</td>
<td>6.42</td>
<td>1011.00</td>
</tr>
<tr>
<td>#7</td>
<td></td>
<td>170.26</td>
<td>4.74</td>
<td>1186.00</td>
</tr>
<tr>
<td>#8</td>
<td></td>
<td>171.97</td>
<td>3.03</td>
<td>1361.00</td>
</tr>
<tr>
<td>#9</td>
<td></td>
<td>131.40</td>
<td>1.31</td>
<td>1493.71</td>
</tr>
</table>
<br/><p><b>Term plan with no interest and different final payment amount</b><table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>16318.33</td>
<td>0</td>
<td>0</td>
<td>12</td>
<td></td>
</tr>
</table>
</p>
<table class="simpletable">
<tr>
<th style="width:20%">Period</th>
<th style="width:20%">Descript</th>
<th style="width:20%">Principal</th>
<th style="width:20%">Interest</th>
<th style="width:20%">Balance</th>
</tr>
<tr>
<td>#1</td>
<td></td>
<td>1359.87</td>
<td></td>
<td>1359.87</td>
</tr>
<tr>
<td>#2</td>
<td></td>
<td>1359.87</td>
<td></td>
<td>2719.74</td>
</tr>
<tr>
<td>#3</td>
<td></td>
<td>1359.87</td>
<td></td>
<td>4079.61</td>
</tr>
<tr>
<td>#4</td>
<td></td>
<td>1359.87</td>
<td></td>
<td>5439.48</td>
</tr>
<tr>
<td>#5</td>
<td></td>
<td>1359.87</td>
<td></td>
<td>6799.35</td>
</tr>
<tr>
<td>#6</td>
<td></td>
<td>1359.87</td>
<td></td>
<td>8159.22</td>
</tr>
<tr>
<td>#7</td>
<td></td>
<td>1359.87</td>
<td></td>
<td>9519.09</td>
</tr>
<tr>
<td>#8</td>
<td></td>
<td>1359.87</td>
<td></td>
<td>10878.96</td>
</tr>
<tr>
<td>#9</td>
<td></td>
<td>1359.87</td>
<td></td>
<td>12238.83</td>
</tr>
<tr>
<td>#10</td>
<td></td>
<td>1359.87</td>
<td></td>
<td>13598.70</td>
</tr>
<tr>
<td>#11</td>
<td></td>
<td>1359.87</td>
<td></td>
<td>14958.57</td>
</tr>
<tr>
<td>#12</td>
<td></td>
<td>1359.76</td>
<td></td>
<td>16318.33</td>
</tr>
</table>
<br/><h2>Recalculations</h2>
<p>Bolded table rows indicate future charges.</p>
<p>1. <b>Balance Due on Account</b></p>
<table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>1000</td>
<td>100</td>
<td>15</td>
<td>9</td>
<td></td>
</tr>
</table>
<table class="simpletable">
<tr>
<th style="width:14%">Date</th>
<th style="width:14%">Period</th>
<th style="width:14%">Descript</th>
<th style="width:14%">Principal</th>
<th style="width:14%">Interest</th>
<th style="width:14%">Payment</th>
<th style="width:14%">Balance</th>
</tr>
<tr>
<td>01/28/2015</td>
<td>#1</td>
<td>Downpay</td>
<td>100.00</td>
<td>0.00</td>
<td></td>
<td>100.00</td>
</tr>
<tr>
<td>01/29/2015</td>
<td>#2</td>
<td></td>
<td>95.11</td>
<td>11.25</td>
<td></td>
<td>206.36</td>
</tr>
<tr>
<td>02/28//2015</td>
<td>#3</td>
<td></td>
<td>96.30</td>
<td>10.06</td>
<td></td>
<td>312.72</td>
</tr>
<tr>
<td>03/29/2015</td>
<td>#4</td>
<td></td>
<td>97.50</td>
<td>8.86</td>
<td></td>
<td>419.08</td>
</tr>
<tr>
<td>04/01/2015</td>
<td></td>
<td>Check</td>
<td></td>
<td></td>
<td>419.08</td>
<td>0.00</td>
</tr>
<tr>
<td>04/29/2015</td>
<td>#5</td>
<td></td>
<td>98.72</td>
<td>7.64</td>
<td></td>
<td>106.36</td>
</tr>
<tr>
<td><b>05/29/2015</b></td>
<td>#6</td>
<td></td>
<td>99.96</td>
<td>6.40</td>
<td></td>
<td>212.72</td>
</tr>
<tr>
<td><b>06/29/2015</b></td>
<td>#7</td>
<td></td>
<td>101.20</td>
<td>5.16</td>
<td></td>
<td>319.08</td>
</tr>
<tr>
<td><b>07/29/2015</b></td>
<td>#8</td>
<td></td>
<td>102.47</td>
<td>3.89</td>
<td></td>
<td>425.44</td>
</tr>
<tr>
<td><b>08/29/2015</b></td>
<td>#9</td>
<td></td>
<td>103.75</td>
<td>2.61</td>
<td></td>
<td>531.80</td>
</tr>
<tr>
<td><b>09/29/2015</b></td>
<td>#10</td>
<td></td>
<td>104.99</td>
<td>1.37</td>
<td></td>
<td>638.16</td>
</tr>
</table>
<br/><p>1a. <b>Balance Due: If you select Prepay and Recalculate Interest</b></p>
<table class="simpletable">
<tr>
<th style="width:33%">Prepay</th>
<th style="width:33%">Pay on Principal</th>
<th style="width:33%">Recalculate Interest</th>
</tr>
<tr>
<td>X</td>
<td></td>
<td>X</td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>1000</td>
<td>100</td>
<td>15</td>
<td>9</td>
<td></td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:14%">Date</th>
<th style="width:14%">Period</th>
<th style="width:14%">Descript</th>
<th style="width:14%">Principal</th>
<th style="width:14%">Interest</th>
<th style="width:14%">Payment</th>
<th style="width:14%">Balance</th>
</tr>
<tr>
<td>01/28/2015</td>
<td>#1</td>
<td>Downpay</td>
<td>100.00</td>
<td>0.00</td>
<td></td>
<td>100.00</td>
</tr>
<tr>
<td>01/29/2015</td>
<td>#2</td>
<td></td>
<td>95.11</td>
<td>11.25</td>
<td></td>
<td>206.36</td>
</tr>
<tr>
<td>02/28/2015</td>
<td>#3</td>
<td></td>
<td>96.30</td>
<td>10.06</td>
<td></td>
<td>312.72</td>
</tr>
<tr>
<td>03/29/2015</td>
<td>#4</td>
<td></td>
<td>97.50</td>
<td>8.86</td>
<td></td>
<td>419.08</td>
</tr>
<tr>
<td>04/01/2015</td>
<td></td>
<td>Check</td>
<td></td>
<td></td>
<td>419.08</td>
<td></td>
</tr>
<tr>
<td>04/29/2015</td>
<td>#5</td>
<td></td>
<td>98.72</td>
<td>7.64</td>
<td></td>
<td>106.36</td>
</tr>
<tr>
<td><b>05/29/2015</b></td>
<td>#6</td>
<td>Increased Interest $1.33</td>
<td>99.95</td>
<td>7.73</td>
<td></td>
<td>214.04</td>
</tr>
<tr>
<td><b>06/29/2015</b></td>
<td>#7</td>
<td></td>
<td>101.19</td>
<td>5.16</td>
<td></td>
<td>320.39</td>
</tr>
<tr>
<td><b>07/29/2015</b></td>
<td>#8</td>
<td></td>
<td>102.46</td>
<td>3.38</td>
<td></td>
<td>426.74</td>
</tr>
<tr>
<td><b>08/29/2015</b></td>
<td>#9</td>
<td></td>
<td>103.74</td>
<td>2.61</td>
<td></td>
<td>533.09</td>
</tr>
<tr>
<td><b>09/29/2015</b></td>
<td>#10</td>
<td></td>
<td>105.03</td>
<td>1.31</td>
<td></td>
<td>639.43</td>
</tr>
</table>
<br/><p>1b.<b>Balance Due: If you select Prepay and do not Recalculate Interest</b></p>
<table class="simpletable">
<tr>
<th style="width:33%">Prepay</th>
<th style="width:33%">Pay on Principal</th>
<th style="width:33%">Recalculate Interest</th>
</tr>
<tr>
<td>X</td>
<td></td>
<td></td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>1000</td>
<td>100</td>
<td>15</td>
<td>9</td>
<td></td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:14%">Date</th>
<th style="width:14%">Period</th>
<th style="width:14%">Descript</th>
<th style="width:14%">Principal</th>
<th style="width:14%">Interest</th>
<th style="width:14%">Payment</th>
<th style="width:14%">Balance</th>
</tr>
<tr>
<td>01/28/2015</td>
<td>#1</td>
<td>Downpay</td>
<td>100.00</td>
<td>0.00</td>
<td></td>
<td>100.00</td>
</tr>
<tr>
<td>01/29/2015</td>
<td>#2</td>
<td></td>
<td>95.11</td>
<td>11.25</td>
<td></td>
<td>206.36</td>
</tr>
<tr>
<td>02/28//2015</td>
<td>#3</td>
<td></td>
<td>96.30</td>
<td>10.06</td>
<td></td>
<td>312.72</td>
</tr>
<tr>
<td>03/29/2015</td>
<td>#4</td>
<td></td>
<td>97.50</td>
<td>8.86</td>
<td></td>
<td>419.08</td>
</tr>
<tr>
<td>04/01/2015</td>
<td></td>
<td>Check</td>
<td></td>
<td></td>
<td>419.08</td>
<td>0.00</td>
</tr>
<tr>
<td>04/29/2015</td>
<td>#5</td>
<td></td>
<td>98.72</td>
<td>7.64</td>
<td></td>
<td>106.36</td>
</tr>
<tr>
<td><b>05/29/2015</b></td>
<td>#6</td>
<td>Increased Interest $3.84</td>
<td>102.47</td>
<td>7.73</td>
<td></td>
<td>216.56</td>
</tr>
<tr>
<td><b>06/29/2015</b></td>
<td>#7</td>
<td></td>
<td>102.47</td>
<td>3.89</td>
<td></td>
<td>322.92</td>
</tr>
<tr>
<td><b>07/29/2015</b></td>
<td>#8</td>
<td></td>
<td>102.47</td>
<td>3.89</td>
<td></td>
<td>429.28</td>
</tr>
<tr>
<td><b>08/29/2015</b></td>
<td>#9</td>
<td></td>
<td>102.47</td>
<td>3.89</td>
<td></td>
<td>535.64</td>
</tr>
<tr>
<td><b>09/29/2015</b></td>
<td>#10</td>
<td></td>
<td>102.49</td>
<td>3.87</td>
<td></td>
<td>642.00</td>
</tr>
</table>
<br/><p><b>1c. Balance Due: If you select Pay on Principal and Recalculate Interest</b></p>
<table class="simpletable">
<tr>
<th style="width:33%">Prepay</th>
<th style="width:33%">Pay on Principal</th>
<th style="width:33%">Recalculate Interest</th>
</tr>
<tr>
<td></td>
<td>X</td>
<td>X</td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>1000</td>
<td>100</td>
<td>15</td>
<td>9</td>
<td></td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:14%">Date</th>
<th style="width:14%">Period</th>
<th style="width:14%">Descript</th>
<th style="width:14%">Principal</th>
<th style="width:14%">Interest</th>
<th style="width:14%">Payment</th>
<th style="width:14%">Balance</th>
</tr>
<tr>
<td>01/28/2015</td>
<td>#1</td>
<td>Downpay</td>
<td>10.00</td>
<td>0.00</td>
<td></td>
<td>100.00</td>
</tr>
<tr>
<td>01/29/2015</td>
<td>#2</td>
<td></td>
<td>95.11</td>
<td>11.25</td>
<td></td>
<td>206.36</td>
</tr>
<tr>
<td>02/28/2015</td>
<td>#3</td>
<td></td>
<td>96.30</td>
<td>10.06</td>
<td></td>
<td>312.72</td>
</tr>
<tr>
<td>03/29/2015</td>
<td>#4</td>
<td></td>
<td>97.50</td>
<td>8.86</td>
<td></td>
<td>419.08</td>
</tr>
<tr>
<td>04/01/2015</td>
<td></td>
<td>Check</td>
<td></td>
<td></td>
<td>419.08</td>
<td>0.00</td>
</tr>
<tr>
<td>04/29/2015</td>
<td>#5</td>
<td></td>
<td>98.72</td>
<td>7.64</td>
<td></td>
<td>106.36</td>
</tr>
<tr>
<td><b>05/29/2015</b></td>
<td>#6</td>
<td>Increased Interest $1.33</td>
<td>99.95</td>
<td>7.73</td>
<td></td>
<td>214.04</td>
</tr>
<tr>
<td><b>06/29/2015</b></td>
<td>#7</td>
<td></td>
<td>101.19</td>
<td>5.16</td>
<td></td>
<td>320.39</td>
</tr>
<tr>
<td><b>07/29/2015</b></td>
<td>#8</td>
<td></td>
<td>102.46</td>
<td>3.89</td>
<td></td>
<td>426.74</td>
</tr>
<tr>
<td><b>08/29/2015</b></td>
<td>#9</td>
<td></td>
<td>103.74</td>
<td>2.61</td>
<td></td>
<td>533.09</td>
</tr>
<tr>
<td><b>09/29/2015</b></td>
<td>#10</td>
<td></td>
<td>105.03</td>
<td>1.31</td>
<td></td>
<td>639.43</td>
</tr>
</table>
<br/><p><b>1d. Balance Due: If you select Pay on Principal and do not Recalculate Interest</b></p>
<table class="simpletable">
<tr>
<th style="width:33%">Prepay</th>
<th style="width:33%">Pay on Principal</th>
<th style="width:33%">Recalculate Interest</th>
</tr>
<tr>
<td></td>
<td>X</td>
<td></td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>1000</td>
<td>100</td>
<td>15</td>
<td>9</td>
<td></td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:14%">Date</th>
<th style="width:14%">Period</th>
<th style="width:14%">Descript</th>
<th style="width:14%">Principal</th>
<th style="width:14%">Interest</th>
<th style="width:14%">Payment</th>
<th style="width:14%">Balance</th>
</tr>
<tr>
<td>01/28/2015</td>
<td>#1</td>
<td>Downpay</td>
<td>100.00</td>
<td>0.00</td>
<td></td>
<td>100.00</td>
</tr>
<tr>
<td>01/29/2015</td>
<td>#2</td>
<td></td>
<td>95.11</td>
<td>11.25</td>
<td></td>
<td>206.36</td>
</tr>
<tr>
<td>02/28/2015</td>
<td>#3</td>
<td></td>
<td>96.30</td>
<td>10.06</td>
<td></td>
<td>312.72</td>
</tr>
<tr>
<td>03/29/2015</td>
<td>#4</td>
<td></td>
<td>97.50</td>
<td>8.86</td>
<td></td>
<td>419.08</td>
</tr>
<tr>
<td>04/01/2015</td>
<td></td>
<td>Check</td>
<td></td>
<td></td>
<td>419.08</td>
<td>0.00</td>
</tr>
<tr>
<td>04/29/2015</td>
<td>#5</td>
<td></td>
<td>98.72</td>
<td>7.64</td>
<td></td>
<td>106.36</td>
</tr>
<tr>
<td><b>05/29/2015</b></td>
<td>#6</td>
<td>Increased Interest $3.84</td>
<td>102.47</td>
<td>7.73</td>
<td></td>
<td>216.56</td>
</tr>
<tr>
<td><b>06/29/2015</b></td>
<td>#7</td>
<td></td>
<td>102.47</td>
<td>3.89</td>
<td></td>
<td>322.92</td>
</tr>
<tr>
<td><b>07/29/2015</b></td>
<td>#8</td>
<td></td>
<td>102.47</td>
<td>3.89</td>
<td></td>
<td>429.28</td>
</tr>
<tr>
<td><b>08/29/2015</b></td>
<td>#9</td>
<td></td>
<td>102.47</td>
<td>3.89</td>
<td></td>
<td>535.64</td>
</tr>
<tr>
<td><b>09/29/2015</b></td>
<td>#10</td>
<td></td>
<td>102.49</td>
<td>3.87</td>
<td></td>
<td>642.00</td>
</tr>
</table>
<br/><p><b>2. Overpaid</b></p>
<table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>1000</td>
<td>100</td>
<td>15</td>
<td>9</td>
<td></td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:14%">Date</th>
<th style="width:14%">Period</th>
<th style="width:14%">Descript</th>
<th style="width:14%">Principal</th>
<th style="width:14%">Interest</th>
<th style="width:14%">Payment</th>
<th style="width:14%">Balance</th>
</tr>
<tr>
<td>01/28/2015</td>
<td>#1</td>
<td>Downpay</td>
<td>100.00</td>
<td>0.00</td>
<td></td>
<td>100.00</td>
</tr>
<tr>
<td>01/29/2015</td>
<td>#2</td>
<td></td>
<td>95.11</td>
<td>11.25</td>
<td></td>
<td>206.36</td>
</tr>
<tr>
<td>02/28//2015</td>
<td>#3</td>
<td></td>
<td>96.30</td>
<td>10.06</td>
<td></td>
<td>312.72</td>
</tr>
<tr>
<td>03/29/2015</td>
<td>#4</td>
<td></td>
<td>97.50</td>
<td>8.86</td>
<td></td>
<td>419.08</td>
</tr>
<tr>
<td>04/29/2015</td>
<td>#5</td>
<td></td>
<td>98.72</td>
<td>7.64</td>
<td></td>
<td>525.44</td>
</tr>
<tr>
<td>05/01/2015</td>
<td></td>
<td>Check</td>
<td></td>
<td></td>
<td>725.00</td>
<td>-199.56</td>
</tr>
<tr>
<td><b>05/29/2015</b></td>
<td>#6</td>
<td></td>
<td>99.96</td>
<td>6.40</td>
<td></td>
<td>-93.20</td>
</tr>
<tr>
<td><b>06/29/2015</b></td>
<td>#7</td>
<td></td>
<td>101.20</td>
<td>5.16</td>
<td></td>
<td>13.16</td>
</tr>
<tr>
<td><b>07/29/2015</b></td>
<td>#8</td>
<td></td>
<td>102.47</td>
<td>3.89</td>
<td></td>
<td>119.52</td>
</tr>
<tr>
<td><b>08/29/2015</b></td>
<td>#9</td>
<td></td>
<td>103.75</td>
<td>2.61</td>
<td></td>
<td>225.88</td>
</tr>
<tr>
<td><b>09/29/2015</b></td>
<td>#10</td>
<td></td>
<td>104.99</td>
<td>1.37</td>
<td></td>
<td>332.24</td>
</tr>
</table>
<br/><p><b>2a. Overpaid: If you select Prepay and Recalculate Interest</b></p>
<table class="simpletable">
<tr>
<td style="width:33%">Prepay</td>
<td style="width:33%">Pay on Principal</td>
<td style="width:33%">Recalculate Interest</td>
</tr>
<tr>
<td>X</td>
<td></td>
<td>X</td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>1000</td>
<td>100</td>
<td>15</td>
<td>9</td>
<td></td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:14%">Date</th>
<th style="width:14%">Period</th>
<th style="width:14%">Descript</th>
<th style="width:14%">Principal</th>
<th style="width:14%">Interest</th>
<th style="width:14%">Payment</th>
<th style="width:14%">Balance</th>
</tr>
<tr>
<td>01/28/2015</td>
<td>#1</td>
<td>Downpay</td>
<td>100.00</td>
<td>0.00</td>
<td></td>
<td>100.00</td>
</tr>
<tr>
<td>01/29/2015</td>
<td>#2</td>
<td></td>
<td>95.11</td>
<td>11.25</td>
<td></td>
<td>206.36</td>
</tr>
<tr>
<td>02/28/2015</td>
<td>#3</td>
<td></td>
<td>96.30</td>
<td>10.06</td>
<td></td>
<td>312.72</td>
</tr>
<tr>
<td>03/29/2015</td>
<td>#4</td>
<td></td>
<td>94350</td>
<td>8.86</td>
<td></td>
<td>419.08</td>
</tr>
<tr>
<td>04/29/2015</td>
<td>#5</td>
<td></td>
<td>98.72</td>
<td>7.64</td>
<td></td>
<td>525.44</td>
</tr>
<tr>
<td>05/01/2015</td>
<td></td>
<td>Check</td>
<td></td>
<td></td>
<td>725.00</td>
<td>-199.56</td>
</tr>
<tr>
<td>05/13/2015</td>
<td></td>
<td>Recalculated based on prepayment</td>
<td>199.56</td>
<td>0.00</td>
<td></td>
<td>0.00</td>
</tr>
<tr>
<td><b>05/29/2015</b></td>
<td>#6</td>
<td>Prepaid</td>
<td>0.00</td>
<td>0.00</td>
<td></td>
<td>0.00</td>
</tr>
<tr>
<td>06/29/2015</td>
<td>#7</td>
<td></td>
<td>6.74</td>
<td>3.91</td>
<td></td>
<td>10.65</td>
</tr>
<tr>
<td>07/29/2015</td>
<td>#8</td>
<td></td>
<td>102.52</td>
<td>3.83</td>
<td></td>
<td>117.00</td>
</tr>
<tr>
<td>08/29/2015</td>
<td>#9</td>
<td></td>
<td>103.81</td>
<td>2.54</td>
<td></td>
<td>223.35</td>
</tr>
<tr>
<td>09/29/2015</td>
<td>#10</td>
<td></td>
<td>99.74</td>
<td>1.25</td>
<td></td>
<td>324.34</td>
</tr>
</table>
<br/><p><b>2b. Overpaid: If you select Prepay and do not Recalculate Interest</b></p>
<table class="simpletable">
<tr>
<th style="width:33%">Prepay</th>
<th style="width:33%">Pay on Principal</th>
<th style="width:33%">Recalculate Interest</th>
</tr>
<tr>
<td>X</td>
<td></td>
<td></td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>1000</td>
<td>100</td>
<td>15</td>
<td>9</td>
<td></td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:14%">Date</th>
<th style="width:14%">Period</th>
<th style="width:14%">Descript</th>
<th style="width:14%">Principal</th>
<th style="width:14%">Interest</th>
<th style="width:14%">Payment</th>
<th style="width:14%">Balance</th>
</tr>
<tr>
<td>01/28/2015</td>
<td>#1</td>
<td>Downpay</td>
<td>100.00</td>
<td>0.00</td>
<td></td>
<td>100.00</td>
</tr>
<tr>
<td>01/29/2015</td>
<td>#2</td>
<td></td>
<td>95.11</td>
<td>11.25</td>
<td></td>
<td>206.36</td>
</tr>
<tr>
<td>02/28/2015</td>
<td>#3</td>
<td></td>
<td>96.30</td>
<td>10.06</td>
<td></td>
<td>312.72</td>
</tr>
<tr>
<td>03/29/2015</td>
<td>#4</td>
<td></td>
<td>97.50</td>
<td>8.86</td>
<td></td>
<td>419.08</td>
</tr>
<tr>
<td>04/29/2015</td>
<td>#5</td>
<td></td>
<td>98.72</td>
<td>7.64</td>
<td></td>
<td>525.44</td>
</tr>
<tr>
<td>05/01/2015</td>
<td></td>
<td>Check</td>
<td></td>
<td></td>
<td>725.00</td>
<td>-199.56</td>
</tr>
<tr>
<td>05/13/2015</td>
<td></td>
<td>Recalculated based on prepayment</td>
<td>199.56</td>
<td>0.00</td>
<td></td>
<td>0.00</td>
</tr>
<tr>
<td><b>05/29/2015</b></td>
<td>#6</td>
<td>Prepaid</td>
<td>0.00</td>
<td>0.00</td>
<td></td>
<td>0.00</td>
</tr>
<tr>
<td><b>06/29/2015</b></td>
<td>#7</td>
<td></td>
<td>8.30</td>
<td>4.86</td>
<td></td>
<td>13.16</td>
</tr>
<tr>
<td><b>07/29/2015</b></td>
<td>#8</td>
<td></td>
<td>101.50</td>
<td>4.86</td>
<td></td>
<td>119.52</td>
</tr>
<tr>
<td><b>08/29/2015</b></td>
<td>#9</td>
<td></td>
<td>101.50</td>
<td>4.86</td>
<td></td>
<td>225.88</td>
</tr>
<tr>
<td><b>09/29/2015</b></td>
<td>#10</td>
<td></td>
<td>101.51</td>
<td>4.85</td>
<td></td>
<td>332.24</td>
</tr>
</table>
<br/><p>2c. <b>Overpaid: If you select Pay on Principal and Recalculate Interest</b></p>
<table class="simpletable">
<tr>
<th style="width:33%">Prepay</th>
<th style="width:33%">Pay on Principal</th>
<th style="width:33%">Recalculate Interest</th>
</tr>
<tr>
<td></td>
<td>X</td>
<td>X</td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>1000</td>
<td>100</td>
<td>15</td>
<td>9</td>
<td></td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:14%">Date</th>
<th style="width:14%">Period</th>
<th style="width:14%">Descript</th>
<th style="width:14%">Principal</th>
<th style="width:14%">Interest</th>
<th style="width:14%">Payment</th>
<th style="width:14%">Balance</th>
</tr>
<tr>
<td>01/28/2015</td>
<td>#1</td>
<td>Downpay</td>
<td>100.00</td>
<td>0.00</td>
<td></td>
<td>100.00</td>
</tr>
<tr>
<td>01/29/2015</td>
<td>#2</td>
<td></td>
<td>95.11</td>
<td>11.25</td>
<td></td>
<td>206.36</td>
</tr>
<tr>
<td>02/28/2015</td>
<td>#3</td>
<td></td>
<td>96.30</td>
<td>10.06</td>
<td></td>
<td>312.72</td>
</tr>
<tr>
<td>03/29/2015</td>
<td>#4</td>
<td></td>
<td>97.50</td>
<td>8.86</td>
<td></td>
<td>419.08</td>
</tr>
<tr>
<td>04/29/2015</td>
<td>#5</td>
<td></td>
<td>98.72</td>
<td>7.64</td>
<td></td>
<td>525.44</td>
</tr>
<tr>
<td>05/01/2015</td>
<td></td>
<td>Check</td>
<td></td>
<td></td>
<td>725</td>
<td>-199.56</td>
</tr>
<tr>
<td>05/13/2015</td>
<td></td>
<td>Recalculated based on pay on principal</td>
<td>199.56</td>
<td>0.00</td>
<td></td>
<td>0.00</td>
</tr>
<tr>
<td><b>05/29/2015</b></td>
<td>#6</td>
<td></td>
<td>61.02</td>
<td>3.91</td>
<td></td>
<td>64.93</td>
</tr>
<tr>
<td><b>06/29/2015</b></td>
<td>#7</td>
<td></td>
<td>61.78</td>
<td>3.15</td>
<td></td>
<td>129.86</td>
</tr>
<tr>
<td><b>07/29/2015</b></td>
<td>#8</td>
<td></td>
<td>62.55</td>
<td>2.38</td>
<td></td>
<td>194.79</td>
</tr>
<tr>
<td><b>08/29/2015</b></td>
<td>#9</td>
<td></td>
<td>63.34</td>
<td>1.59</td>
<td></td>
<td>259.72</td>
</tr>
<tr>
<td><b>09/29/2015</b></td>
<td>#10</td>
<td></td>
<td>64.12</td>
<td>0.80</td>
<td></td>
<td>324.64</td>
</tr>
</table>
<br/><p><b>2d. Overpaid: If you select Pay on Principal and do not Recalculate Interest.</b></p>
<table class="simpletable">
<tr>
<th style="width:33%">Prepay</th>
<th style="width:33%">Pay on Principal</th>
<th style="width:33%">Recalculate Interest</th>
</tr>
<tr>
<td></td>
<td>X</td>
<td></td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:20%">Total Amount</th>
<th style="width:20%">Down Payment</th>
<th style="width:20%">APR</th>
<th style="width:20%">Number of Payments</th>
<th style="width:20%">Payment Amt</th>
</tr>
<tr>
<td>1000</td>
<td>100</td>
<td>15</td>
<td>9</td>
<td></td>
</tr>
</table>
<br/><table class="simpletable">
<tr>
<th style="width:14%">Date</th>
<th style="width:14%">Period</th>
<th style="width:14%">Descript</th>
<th style="width:14%">Principal</th>
<th style="width:14%">Interest</th>
<th style="width:14%">Payment</th>
<th style="width:14%">Balance</th>
</tr>
<tr>
<td>01/28/2015</td>
<td>#1</td>
<td>Downpay</td>
<td>100.00</td>
<td>0.00</td>
<td></td>
<td>100.00</td>
</tr>
<tr>
<td>01/29/2015</td>
<td>#2</td>
<td></td>
<td>95.11</td>
<td>11.25</td>
<td></td>
<td>206.36</td>
</tr>
<tr>
<td>02/28/2015</td>
<td>#3</td>
<td></td>
<td>96.30</td>
<td>10.06</td>
<td></td>
<td>312.72</td>
</tr>
<tr>
<td>03/29/2015</td>
<td>#4</td>
<td></td>
<td>97.50</td>
<td>8.86</td>
<td></td>
<td>419.08</td>
</tr>
<tr>
<td>04/29/2015</td>
<td>#5</td>
<td></td>
<td>98.72</td>
<td>7.64</td>
<td></td>
<td>525.44</td>
</tr>
<tr>
<td>05/01/2015</td>
<td></td>
<td>Check</td>
<td></td>
<td></td>
<td>725</td>
<td>-199.56</td>
</tr>
<tr>
<td>05/13/2015</td>
<td></td>
<td>Recalculated based on pay on principal</td>
<td>199.56</td>
<td>0.00</td>
<td></td>
<td>0.00</td>
</tr>
<tr>
<td><b>05/29/2015</b></td>
<td>#6</td>
<td></td>
<td>62.56</td>
<td>3.89</td>
<td></td>
<td>66.45</td>
</tr>
<tr>
<td><b>06/29/2015</b></td>
<td>#7</td>
<td></td>
<td>62.56</td>
<td>3.89</td>
<td></td>
<td>132.90</td>
</tr>
<tr>
<td><b>07/29/2015</b></td>
<td>#8</td>
<td></td>
<td>62.56</td>
<td>3.89</td>
<td></td>
<td>199.35</td>
</tr>
<tr>
<td><b>08/29/2015</b></td>
<td>#9</td>
<td></td>
<td>62.56</td>
<td>3.89</td>
<td></td>
<td>265.80</td>
</tr>
<tr>
<td><b>09/29/2015</b></td>
<td>#10</td>
<td></td>
<td>62.57</td>
<td>3.897</td>
<td></td>
<td>332.24</td>
</tr>
</table>
</div>
</div>
</body>
</html>```
