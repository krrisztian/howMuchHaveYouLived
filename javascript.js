function showDate(){
	const oneDay = 7*24*60*60*1000

	var dob = $("#dob").val()
	var birthDay = (new Date(dob)).getTime()
	var today = Date.now()
	console.log(birthDay)
	console.log(today)

	var diffWeeks = Math.round(Math.abs((birthDay-today)/oneDay))
	var percentage = Math.ceil(diffWeeks/4101*100)
	document.getElementById("response").innerHTML = `${percentage}% of your life is already gone! Better spend the rest wisely!`

	
	document.getElementById('progress-bar').style.width = percentage+"%"
}

