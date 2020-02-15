$(document).ready(function(){

    $("#Phone").click( function() {
        if( !this.hasAttribute('placeholder') ){
            $(this).inputmask({"mask": "+(999) 999-99-99"});
        }
    });

    $('.datepicker').pickadate({
        today: '',
        clear: 'Clear selection',
        close: 'Cancel'
    });

    $("#Paid").change(function() {
        if(this.checked) {
          $('#How-Much').fadeIn('slow');
        }
    });
    
    $("#Not-Paid").change(function() {
        if(this.checked) {
          $('#How-Much').fadeOut('slow');
        }
    });

    $("#Support-Yes").change(function() {
        if(this.checked) {
          $('#What-Support').fadeIn('slow');
        }
    });
    
    $("#Support-No").change(function() {
        if(this.checked) {
          $('#What-Support').fadeOut('slow');
        }
    });

    var criteria_counter = 2;
    $(".Add-Criteria").click(function() {
        $(".Add-Here").append('<div class="md-form"><input type="text" id="Criteria-'+criteria_counter+'" class="form-control" name="Criteria-'+criteria_counter+'"><label for="Criteria-'+criteria_counter+'">Criteria '+criteria_counter+'</label></div>');
        criteria_counter++;
    });

    var support_counter = 2;
    $(".Add-Support").click(function() {
        $(".Add-Here-Support").append('<div class="md-form"><input type="text" id="Support-'+support_counter+'" class="form-control" name="Support-'+support_counter+'"><label for="Support-'+support_counter+'">Support '+support_counter+'</label></div>');
        support_counter++;
    });
	// console.clear();
});
var currentTab = 0;
showTab(currentTab);

function showTab(n) {
    
	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";
	if (n == 0)
	{
		document.getElementById("prevBtn").style.display = "none";
	} else 
	{
		document.getElementById("prevBtn").style.display = "inline";
	}
	if (n == (x.length - 1))
	{
		document.getElementById("nextBtn").style.display="none";
		document.getElementById("submit").style.display="inline";
	} else
	{
		document.getElementById("nextBtn").style.display="inline";
		document.getElementById("submit").style.display="none";
	}
	fixStepIndicator(n);
}

function nextPrev(n) {

	var x = document.getElementsByClassName("tab");
	if (n == 1 && !validateForm()) return false;
	x[currentTab].style.display = "none";
	currentTab = currentTab + n;
	if (currentTab >= x.length) {
		return false;
	}
	showTab(currentTab);
}

function validateForm() {
	var x, y, i, valid = true;
	x = document.getElementsByClassName("tab");
	y = x[currentTab].getElementsByTagName("input");
	for (i = 0; i < y.length; i++) {
		if (y[i].value == "" && y[i].hasAttribute('required')) {
		y[i].className += " invalid";
		valid = false;
		}
	}
	if (valid) {
		document.getElementsByClassName("step")[currentTab].className += " finish";
	}
	return valid;
}

function fixStepIndicator(n) {
	var i, x = document.getElementsByClassName("step");
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(" active", "");
	}
	x[n].className += " active";
}   