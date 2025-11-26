# File: ./www.opendental.com/manual243/searchmanual.html

```html
<!DOCTYPE html>
<html>
<head>
	<!--[if lt IE 9]> <link rel="stylesheet" href="https://www.opendental.com/css/ie8.css" type="text/css" /><![endif]-->
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
	<meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" /> 
	<title>Open Dental Software - Search</title>
    <link href="resources/manual2.css" rel="stylesheet" type="text/css">
	<link href="../css/searchFromServer.css" rel="stylesheet" type="text/css">
	<script src="resources/searchManual2.js"></script>
    <script src="resources/searchterms2.js"></script>
    <script src="resources/manualToc.js"></script>
    <script src="resources/manual.js"></script>
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="../js/searchFromServer.js" type="text/javascript"></script>
	<link rel="icon" type="image/png" href="../favicon.png">
	<link href="https://fonts.googleapis.com/css?family=Roboto&amp;display=swap" rel="stylesheet">
	<style type="text/css">.GeneralPageContent{
            /*position:fixed;
            top:100px;
            bottom:0px;
            left:0px;
            right:0px;*/
        }
        .LeftTree{
            display:none;
        }
        .RightMain{
            margin-left:0px;
            margin-right:0px;
        }
        @media screen and (min-width: 700px) {/*When the viewport is bigger, show tree*/
            /*.GeneralPageContent{
                left:390px;
            }*/
            .LeftTree {
                display:block;
            }
            .RightMain{
                margin-left:384px;
            }
        }
		.formLabel {/*phones*/
            position:absolute;
			display:none;
			text-align:left;
		}
		@media only screen and (min-width: 350px) {/*larger screens*/
            /*Don't ever show it
			.formLabel{
			    display:block
		    }
            #textSearch{
                left:65px;
                max-width:245px;
            }*/
		}
        .TopBarHome, .TopBarSearch {/*show on phones and for smaller sizes than other pages*/
            display: block;
        }
        @media screen and (min-width: 700px) {/*When the tree is showing*/
            .TopBarHome, .TopBarSearch {
                display: none;/*hide */
            }
        }
	</style>
</head>
<body onLoad="init();initSearch()">
    <nav class="LeftTree">
    	<div class="TopBarLeft"><p>Table of Contents</p></div>
        <!--div id="search"><a href="search.html">Search</a></div-->
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
                <div class="TopBarTitle">Manual<select id="SelectVersion" class="TopBarVersionDrop" onchange="location = this.options[this.selectedIndex].value;
						for (var i = 0; i < document.getElementById('SelectVersion').options.length; i++) {
							if (document.getElementById('SelectVersion').options[i].attributes.selected)
								document.getElementById('SelectVersion').selectedIndex=i;
						}">
						<option value="https://www.opendental.com/manual243/searchmanual.html" selected>v24.3</option>
						<option value="https://www.opendental.com/manual242/searchmanual.html">v24.2 </option>
						<option value="https://www.opendental.com/manual241/searchmanual.html">v24.1</option>
						<option value="https://www.opendental.com/manual233/searchmanual.html">v23.3</option>
						<option value="https://www.opendental.com/manual232/searchmanual.html">v23.2</option>
						<option value="https://www.opendental.com/manual231/searchmanual.html">v23.1</option>
						<option value="https://www.opendental.com/manual224/searchmanual.html">v22.4</option>
						<option value="https://www.opendental.com/manual223/searchmanual.html">v22.3</option>
						<option value="https://www.opendental.com/manual222/searchmanual.html">v22.2</option>
					</select>
				</div>
                <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif" /><p>Manual<p></div></a>
            </div>
        </div>
        <div class="TopBar2"><p>Search</p></div>
		<!-- New search -->
        <div class="">
			<form id="formMain" name="formMain" autocomplete="off" enctype="multipart/form-data" style="margin:0 auto;">
				<div id="resultContainer">
					<div class="dropDown">
						<input id="textSearch" type="text" name="textSearch" autoComplete="off">
						<input id="searchIcon" type="submit" name="searchIcon" autoComplete="off" value="">
					</div>
					<div>
						<ul id="results" name="selectResults">
						</ul>
					</div>
				</div>
			</form>
        </div>
    </div>
</body>
</html>
```
