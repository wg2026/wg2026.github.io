// JavaScript Document

// "target" is not xhtml strict //
<!--
var allPageTags = new Array(); 

function target_blank()
{
 var a_Tags = document.getElementsByTagName("a");
 
 for (i = 0; i < a_Tags.length; i++)
 {
   if (a_Tags[i].getAttribute("href") && 
	   a_Tags[i].getAttribute("rel") == "external")
   {
     a_Tags[i].target = '_blank';
   }
 }
 
}

function expand_textarea(textArea)
{

while (textArea.rows > 9 &&	textArea.scrollHeight < textArea.offsetHeight)
	{
		textArea.rows--;
	}
	var h=0;
	while (textArea.scrollHeight > textArea.offsetHeight && h!==textArea.offsetHeight)
	{
		h=textArea.offsetHeight;
		textArea.rows++;
	}
	textArea.rows++;
}


//-->