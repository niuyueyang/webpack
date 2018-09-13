//document.querySelector("#app").innerText='Hello webpack3.0';
import $ from '../common/jquery-2.1.0.js';
import Tool from './tool.js';
Tool.prints();
$("#app").text('Hello webpack');
$("#app").on('click',function(){
	alert(1);
});
//prints();

