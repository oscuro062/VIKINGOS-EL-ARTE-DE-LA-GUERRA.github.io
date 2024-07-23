if(localStorage.pagecount)
	{
		localStorage.pagecount=Number(localStorage.pagecount) +1;
	}
	else
	{
		localStorage.pagecount=1;
	}
	document.getElementById("contador").innerHTML="EHH TU HAS PASADO POR AQUI Y NO HAS BEBIDO HIRDOMIEL " + localStorage.pagecount + " veces.";
	