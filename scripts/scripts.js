function showDate()
    {
    	var now = new Date();
    	var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
    	var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
    	var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
    	function fourdigits(number)
    	{
    		return (number < 1000) ? number + 1900 : number;
    	}

    tnow=new Date();
    thour=now.getHours();
    tmin=now.getMinutes();
    tsec=now.getSeconds();

    if (tmin<=9) { tmin="0"+tmin; }
    if (tsec<=9) { tsec="0"+tsec; }
    if (thour<10) { thour="0"+thour; }

    today = days[now.getDay()] + ", " + date + " " + months[now.getMonth()] + ", " + (fourdigits(now.getYear())) + " - " + thour + ":" + tmin +":"+ tsec;
    document.getElementById("dateDiv").innerHTML = today;
    }
    setInterval("showDate()", 1000);