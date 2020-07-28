export const YOUR_PROFILE_CODE = () => (`
<div style="padding: 80px;"> <!-- This is padding -->
<!DOCTYPE html>
<html>
<head>
<style>
body {
   
    margin:0;
  	color: black; /*font color*/
    text-shadow:-3px -4px 1px green; /*gives your text a shadow*/
    
}
  
  /*this part will allow you to keep the scrollbar off the screen*/
 .content, .outer-border { 
                width: 820px; /* make this a little wider than your profile window so that the scrollbar can't be seen*/
                height: 820px; /*same as above*/
				padding-right:50px; /*how far your text and images will get from the right border*/
                margin: auto; /*centers your profile*/
                box-shadow:0px 0px 5px 2px green; /* gives the border a shadow, can be removed, green can also be replaced with hex code or other colors the px part is about the width etc. */
                
                
            } 
            .outer-border {
                
                position: relative; /*this keeps your text and images within your window*/
                border-radius:15px; /*this allows for the rounded corner, you can remove this if you'd rather have it squared*/
                overflow: hidden;  /*this hides the scrollbar*/

            } 
            .inner-border { /*this creates the actual scrollbar do not move it*/
                position: absolute; 
                left: 0; 
                overflow-x: hidden; /*hides any surpluss of text/images etc rather than making a bottom scrollbar*/
                overflow-y: scroll; /*creates the vertical scrollbar*/
            } 
           



.wrapper { /*this is the actual profile window*/
	max-width: 800px; /* How wide you want it to be */
  	max-height: 800px; /* How high you want it to be */
	padding: 50px;/* width of padding */
	overflow: auto; /* gives you a scrollbar */
  	height: 100%; /*how much of your profile will actually be inside your profile window in height*/
  	width: 100%;  /*how much of your profile will actually be inside your profile window in width*/
	background:url(https://i.imgur.com/JZxBNhA.png); /*this is your background, the url can obviously be replaced by your own image or you can remove url(link) and put in a hexcode/color do not leave this blank*/
    margin:auto; /*all the this centers your profile on the website*/

</style>
</head>
<body> <!-- This is where the information you have put in above is inserted into your profile, do not touch this -->
<div class="outer-border">
            <div class="inner-border"> 
                <div class="content"> 

<div class="wrapper">
  
  <!-- Profile html starts here --> 
<center><b><font size="7;">
Character name</font></b><br>
<br>
<img src="IMAGEURL" style="width:400px;border:3px solid black"></center> <!-- Top image --> 
<br>
<br>
<img src="IMAGEURL" align="left" style="width:300px;height:400px;border:3px solid black"> <!-- First Image Left --> 
<br>
<br><img src="IMAGEURL" align="right" style="width:300px;height:400px;border:3px solid black">  <!-- First Image Right --> 

<center>
<font size="3;">This<br>
is<br>
just <br>
some<br>
<br>
song<br>
text<br>
is<br>
really<br>
simple<br> </font></center>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<font size="5;">
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
</font>
<br>
<img src="IMAGEURL" align="left" style="width:300px;height:400px;border:3px solid black">  <!-- Second Image Left --> 
<br>
<center> <font size="3;">This<br>
is<br>
just <br>
some<br>
<br>
song<br>
text<br>
is<br>
really<br>
simple<br></font></center>
<br>
<br>
<br>
<br>
<img src="IMAGEURL" align="right" style="width:300px;height:400px;border:3px solid black">  <!-- Second Image Right --> 
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<font size="5;">
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
</font>
<br>
<br>
<img src="IMAGEURL" align="left" style="width:300px;height:400px;border:3px solid black">  <!-- Third Image Left --> 
<br>
<br>
<br>
<center> <font size="3;">This<br>
is<br>
just <br>
some<br>
<br>
song<br>
text<br>
is<br>
really<br>
simple<br></center></font><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<font size="5;">
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
Information: <b>Information</b> <br>
</font>
<br>
<br>
<br>
<center><img src="IMAGEURL"  style="width:700px;border:3px solid black"></center>  <!-- Last Image --> 
<br>
<br>
</div>
</div>
</div>
</div>
</body>
<!-- Please do not remove the following! --> 
<a href="https://chat.roleplace.com/Profile/Monienijntje" style="display:block;text-align:right;margin:0 auto;font-family:century gothic,arial,sans-serif;font-size:9px;letter-spacing:2px;margin-top:20px;color:#999;text-decoration:none;" target="_blank">CODE BY MONIENIJNTJE</a>
</html>
`);