function imageLoad(source, desc, update){
	document.getElementById('imageload').src = source;
	document.getElementById('textload').innerHTML = desc;
	document.getElementById('lastupdate').innerHTML = update;
}