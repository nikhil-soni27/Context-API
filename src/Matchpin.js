
function clickEvent(first,last){
    if(first.value.length){
        document.getElementById(last).focus();
    }
}
{/* <div class="container">
		<div class="userInput">
			<input type="text" id='ist' maxlength="1" onkeyup={clickEvent(this,'sec')}/>
			<input type="text" id="sec" maxlength="1" onkeyup={clickEvent(this,'third')}/>
			<input type="text" id="third" maxlength="1" onkeyup={clickEvent(this,'fourth')}/>
			<input type="text" id="fourth" maxlength="1"/>
		</div>
	</div> */}