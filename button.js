var arrbuttonvisible=[];//click them,then something will be shown on the output
var arrbuttonnonvisible=[];//which is nonvisible when click it
var div = document.getElementsByClassName('body')[0];
var outputp = document.getElementById('output');
var label=['1','2','3','4','5','6','7','8','9','0','.','+','-','\u00D7','\u00F7','(',')','DEL','AC','='];
var arrnumber=[];
for(var i=0;i<17;i++){
	arrbuttonvisible.push(document.createElement('button'));
	div.appendChild(arrbuttonvisible[i]);
	if((i+1)%4==0){
		div.appendChild(document.createElement('br'));
	}
}
for (var i = 0; i < 3; i++) {
	arrbuttonnonvisible.push(document.createElement('button'));
	div.appendChild(arrbuttonnonvisible[i]);
}
var output="";
arrbuttonvisible.forEach(function(element,index){
		element.innerHTML=label[index];
		element.onclick=function(){
		output+=label[index];
		outputp.innerHTML=output;
	}
});
arrbuttonnonvisible.forEach(function(element,index){
	element.innerHTML=label[index+17];
})
arrbuttonnonvisible[0].onclick=function(){
	output=outputp.innerHTML;
	output=output.slice(0,output.length-1);
	outputp.innerHTML=output;
}
arrbuttonnonvisible[1].onclick=function(){
	output='';
	outputp.innerHTML=output;
}
arrbuttonnonvisible[2].onclick=function(){
	var reg1=/\u00D7/g;
	var reg2=/\u00F7/g;
	output=output.replace(reg1,'*');
	output=output.replace(reg2,'/');
	try{
		output=eval(output);
		outputp.innerHTML=output;
	}catch(error){
		outputp.innerHTML=error.toString();
	}
	
}