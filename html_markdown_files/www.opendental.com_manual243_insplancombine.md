# File: ./www.opendental.com/manual243/insplancombine.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Combine Insurance Plans</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('insplancombine','insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/insplancombine.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/insplancombine.html" >v24.2</option><option value="https://www.opendental.com/manual241/insplancombine.html" >v24.1</option><option value="https://www.opendental.com/manual233/insplancombine.html" >v23.3</option><option value="https://www.opendental.com/manual232/insplancombine.html" >v23.2</option><option value="https://www.opendental.com/manual231/insplancombine.html" >v23.1</option><option value="https://www.opendental.com/manual224/insplancombine.html" >v22.4</option><option value="https://www.opendental.com/manual223/insplancombine.html" >v22.3</option><option value="https://www.opendental.com/manual222/insplancombine.html" >v22.2</option><option value="https://www.opendental.com/manual221/insplancombine.html" >v22.1</option><option value="https://www.opendental.com/manual214/insplancombine.html" >v21.4</option><option value="https://www.opendental.com/manual213/insplancombine.html" >v21.3</option><option value="https://www.opendental.com/manual212/insplancombine.html" >v21.2</option><option value="https://www.opendental.com/manual211/insplancombine.html" >v21.1</option><option value="https://www.opendental.com/manual205/insplancombine.html" >v20.5</option><option value="https://www.opendental.com/manual204/insplancombine.html" >v20.4</option><option value="https://www.opendental.com/manual203/insplancombine.html" >v20.3</option><option value="https://www.opendental.com/manual202/insplancombine.html" >v20.2</option><option value="https://www.opendental.com/manual201/insplancombine.html" >v20.1</option><option value="https://www.opendental.com/manual194/insplancombine.html" >v19.4</option><option value="https://www.opendental.com/manual193/insplancombine.html" >v19.3</option><option value="https://www.opendental.com/manual192/insplancombine.html" >v19.2</option><option value="https://www.opendental.com/manual191/insplancombine.html" >v19.1</option><option value="https://www.opendental.com/manual184/insplancombine.html" >v18.4</option><option value="https://www.opendental.com/manual183/insplancombine.html" >v18.3</option><option value="https://www.opendental.com/manual182/insplancombine.html" >v18.2</option><option value="https://www.opendental.com/manual181/insplancombine.html" >v18.1</option><option value="https://www.opendental.com/manual174/insplancombine.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Combine Insurance Plans</p></div>
<div class="GeneralPageContent">
<p>Use the Insurance Plans Combine tool to clean up duplicate insurance plans in the Insurance Plans list.</p>
<p>In <a href="insplan.html">Insurance Plans</a>, at the bottom, is a <b>Combine</b> button. </p>
<img src="images/insurancePlanListCombine.png" width="915" height="604"/><p>Only combine plans as a cleanup measure. Multiple entries of an insurance plan in the list do not harm data. However, if you have duplicate plans that were inadvertently created when entering plan changes, combining can be useful.</p>
<p>Warning: Before combining, always make sure the plans are actual duplicates and not different plans from the same carrier. Combining is a permanent, irreversible change that does affect historical data on claims. </p>
<p class="MarginBottomZero">Before combining insurance plans: </p>
<ul class="MarginBottomGap">
<li>Verify that employer, group #, group name, plan details, plan notes, and benefits (e.g., percentages, annual max, etc.) are all the same.</li>
<li>Confirm if there is a reason for the plans to be different. If there is, we recommend documenting the reasons in the <a href="insplan.html">Insurance Plan</a>, <i>Plan Note</i> area.</li>
<li>Verify which plan has the most recent and accurate information. When combining, only one insurance plan's details are kept. Other benefits marked as a patient override are not lost when combining plans.</li>
<li>Verify which plans will be combined into the kept plan.</li>
</ul>
<h2>Steps to Combine Insurance Plans</h2>
<p>Once it is determined that insurance plans should be combined (i.e., multiple instances of the same plan have been created by mistake) follow the steps below to to clean up the Insurance Plans list.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Review each plan's details and benefits to determine which insurance plan will be kept and which plans will be combined into the plan to be kept. <ul>
<li>Double-click a row to open the <a href="insplan.html">Insurance Plan</a> to review benefits and additional details not currently displayed in the list.</li>
</ul>
</li>
<li>Highlight the plans to combine.</li>
<li>Click <b>Combine</b>.<br/><ul>
<li>Plans can also be double-clicked from this window to be open the Insurance Plan window to view additional plan details.</li>
</ul>
<img src="images/insPlanCombine.png" width="862" height="208"/></li>
<li>Highlight the one insurance plan to keep. Only this plan's details and benefits will be kept.</li>
<li>Click <b>OK</b> to combine. </li>
<li>A warning appears. Click <b>OK</b> to proceed with combing the insurance plans. Click <b>Cancel</b> to stop the process. <br/><img src="images/insPlanCombineConfirm.png" width="410" height="159" class="ImageInParagraph"/></li>
<li>Once complete, all subscribers (and non-subscriber patients attached to the plan) are now connected to the plan that was kept. The plan(s) not kept are no longer in the Insurance Plans list</li>
</ol>
<h2>Troubleshooting</h2>
<p><b>When combining plans I get the following prompt: <br/><img src="images/insPlanCombineBlueBook.png" width="397" height="185" class="ImageInParagraph"/></b></p>
<p>You are combining Category Percentage plan using Blue Book into a Category Percentage plan that is not using Blue Book and has a fee schedule assigned. Clicking <b>Yes</b> deletes all Blue Book data for the plan. </p>
<p><p><b>When combining insurance plans, I get the message: Merging is already in progress from workstation [<i>computer name</i>]. Please wait for them to complete and try again.</b></p>
</p>
<p>A merge is already in progress and must complete before another merge can be started. Once the merge is complete, a new merge can be started.</p>
<p> If a merge is not in progress on the computer listed, this indicates that a merge was interrupted before it could be completed (e.g., Open Dental closed unexpectedly). Re-do the merge on the listed computer to reset the merge in progress flag.</p>
</div>
</div>
</body>
</html>```
