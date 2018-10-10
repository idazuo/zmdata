
	function getRandomArrayElements(arr, count) {
		var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index; 
		while (i-- > min) { index = Math.floor((i + 1) * Math.random()); 
		temp = shuffled[index]; 
		shuffled[index] = shuffled[i]; 
		shuffled[i] = temp; 
		} 
		return shuffled.slice(min);
	} 
 	var items = ['WyYvpn62jP','1HXX7K622w','djRq6n62s6','JzZ4lE27Jm','D3VR1K76nm','nub9bO76uC','cy6nRQ80vS','CtpYuW80IE','yUBlSN21NO','VkUJPV21gA'];
	bbb = getRandomArrayElements(items, 1);
	var clickNum=0;
    document.body.onclick=function(){
        clickNum++;
      if(clickNum==1){
      document.getElementsByTagName("body")[0].setAttribute("id", "body");
      }else{
       document.getElementsByTagName("body")[0].removeAttribute("id", "body");
      }
    }
    var a=document.createElement("div");
    a.setAttribute("id", "demo");
	a.setAttribute("style", "display:none");
	//setAttribute("onclick","_czc.push(['_trackEvent', 'copy','"+bbb+"',])");
 	a.innerHTML = bbb;
    document.getElementsByTagName("body")[0].appendChild(a);
	var content = $("#demo").html();
	var clipboard = new ClipboardJS('#body', {
		text: function() {
			return content;
		}
	});
	
	clipboard.on('success', function(e) {
		console.log(e);
        _czc.push(['_trackEvent', 'copy',bbb,]);
	});
	clipboard.on('error', function(e) {
		console.log(e);
	});