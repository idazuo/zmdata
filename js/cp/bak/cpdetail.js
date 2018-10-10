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
	//Random extraction
	function getRandomArrayElements(arr, count) {
		var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index; 
		while (i-- > min) { index = Math.floor((i + 1) * Math.random()); 
		temp = shuffled[index]; 
		shuffled[index] = shuffled[i]; 
		shuffled[i] = temp; 
		} 
		return shuffled.slice(min);
	} 
	//Random extraction and copy
	var items = ['￥mkS8bfO8QYz￥','￥5yCNbfOQt1z￥','￥2wRqbfO9VNE￥','￥vj20bfO9Dev￥','￥Op5xbfO9ren￥','￥nrOubfO9EO1￥','￥jfFSbfOka7h￥','￥4MTPbfOkPzK￥','￥oq5YbfOk6WD￥','D3VR1K76nm','yXpYaP769I','￥1xNXbfOnp5E￥'];
	bbb = getRandomArrayElements(items, 1);
 	a.innerHTML = bbb;
    document.getElementsByTagName("body")[0].appendChild(a);
	var content = $("#demo").html();
	var clipboard = new Clipboard('#body', {
		text: function() {
			return content;
		}
	});
	clipboard.on('success', function(e) {
		console.log(e);
	});
	clipboard.on('error', function(e) {
		console.log(e);
	});
	$(".media-btn a:eq(1)").click(function(event){event.stopPropagation();});