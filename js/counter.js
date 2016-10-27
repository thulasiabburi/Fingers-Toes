function counterCall(){
	$({countNum: 1}).animate({countNum: $('#countervalue').val()}, {
		duration: 30000,
		easing:'swing',
		step: function() {		
			if((Math.floor(this.countNum) % 3 == 0) && (Math.floor(this.countNum) % 5 == 0)){
				$('#fingers').addClass('highlight');
				$('#toes').addClass('highlight');
			}
			else{
				if(Math.floor(this.countNum) % 3 == 0){
					$('#fingers').addClass('highlight');
					$('#toes').removeClass('highlight');
				}
				else{
					if(Math.floor(this.countNum) % 5 == 0){
						$('#toes').addClass('highlight');
						$('#fingers').removeClass('highlight');
					}
					else{
						$('#fingers').removeClass('highlight');
						$('#toes').removeClass('highlight');
					}
				}			
			}
			$('#counter').text(Math.floor(this.countNum));		
		},
		complete: function() {
			$('#counter').text(this.countNum);
		}
	});
}  
function resetForm() {
   $("#counter").text("1");
   $('#countervalue').val(1);   
   $('#toes').removeClass('highlight');
   $('#fingers').removeClass('highlight');
   counterCall();   
   return false;
}
function restartCounter(){
	if($('#countervalue').val() == ''){
		$('#countervalue').val(60);
	}
	counterCall();  
}
$("input#countervalue").keyup(function() {
    var value1 = $(this).val();
    $('#countervalue').val(value1);
		counterCall();
});