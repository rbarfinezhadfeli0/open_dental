# File: ./www.opendental.com/manual/dsreports.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Dental Student Reports</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('dsreports','dsevaluations','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/dsreports.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/dsreports.html" >v24.2</option><option value="https://www.opendental.com/manual241/dsreports.html" >v24.1</option><option value="https://www.opendental.com/manual233/dsreports.html" >v23.3</option><option value="https://www.opendental.com/manual232/dsreports.html" >v23.2</option><option value="https://www.opendental.com/manual231/dsreports.html" >v23.1</option><option value="https://www.opendental.com/manual224/dsreports.html" >v22.4</option><option value="https://www.opendental.com/manual223/dsreports.html" >v22.3</option><option value="https://www.opendental.com/manual222/dsreports.html" >v22.2</option><option value="https://www.opendental.com/manual221/dsreports.html" >v22.1</option><option value="https://www.opendental.com/manual214/dsreports.html" >v21.4</option><option value="https://www.opendental.com/manual213/dsreports.html" >v21.3</option><option value="https://www.opendental.com/manual212/dsreports.html" >v21.2</option><option value="https://www.opendental.com/manual211/dsreports.html" >v21.1</option><option value="https://www.opendental.com/manual205/dsreports.html" >v20.5</option><option value="https://www.opendental.com/manual204/dsreports.html" >v20.4</option><option value="https://www.opendental.com/manual203/dsreports.html" >v20.3</option><option value="https://www.opendental.com/manual202/dsreports.html" >v20.2</option><option value="https://www.opendental.com/manual201/dsreports.html" >v20.1</option><option value="https://www.opendental.com/manual194/dsreports.html" >v19.4</option><option value="https://www.opendental.com/manual193/dsreports.html" >v19.3</option><option value="https://www.opendental.com/manual192/dsreports.html" >v19.2</option><option value="https://www.opendental.com/manual191/dsreports.html" >v19.1</option><option value="https://www.opendental.com/manual184/dsreports.html" >v18.4</option><option value="https://www.opendental.com/manual183/dsreports.html" >v18.3</option><option value="https://www.opendental.com/manual182/dsreports.html" >v18.2</option><option value="https://www.opendental.com/manual181/dsreports.html" >v18.1</option><option value="https://www.opendental.com/manual174/dsreports.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Dental Student Reports</p></div>
<div class="GeneralPageContent">
<p>The Dental Schools Evaluation Report generates a list of student evaluation grades by dental course.</p>
<p>In <a href="dsevaluations.html">Evaluations</a>, click Reports.</p>
<img src="images/dsReports.png" width="915" height="390"/><p>See <a href="dentalschools.html">Dental Schools</a>.</p>
<p>Choose criteria to filter the report results:</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Date Start</b> / <b>Date End</b>: Enter a date range to limit the report to.</li>
<li><b>Courses</b>: Highlight the <a href="dscourses.html">Dental School Courses</a> to include in the report or check <b>All Courses</b> to include all. Affects the available Instructors.</li>
<li><b>Instructors</b>: Highlight the <a href="dsinstructors.html">Dental School Instructors</a> to include in the report or check <b>All Instructors</b> to include all. Affects the available Students.</li>
<li><b>Students</b>: Highlight the <a href="dsstudents.html">Dental School Students</a> to include in the report or click <b>All Students</b> to highlight all students in the list.</li>
</ul>
<p>Click <b>OK</b> to generate the report.</p>
<p>Student evaluations matching the selected criteria are included in the report.</p>
<img src="images/dsReportPrint.png" width="745" height="386"/><ul>
<li><b>Arrows</b>: Click the left/right arrow to jump pages in a multi-page report.</li>
<li><b>Query View</b>: Open the report in the <a href="queryoverview.html">Query</a> window.</li>
<li><b>Export</b>: Save the report as a TXT or XLS file.</li>
<li><b>Print</b>: Print the report to the default printer.</li>
</ul>
</div>
</div>
</body>
</html>```
