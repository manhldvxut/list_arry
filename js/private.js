 
$(document).ready(function() {
	var lookup = {
	   // 1 Công nghệ thông tin
	   'Option 1': ['A00 - Toán, Vật lí, Hóa học', 'A01 - Toán, Vật lí, Tiếng Anh', 'A16 - Toán, Khoa học tự nhiên, Ngữ Văn', 'D90 - Toán, Khoa học tự nhiên, Tiếng Anh'],
	   // 2 Công nghệ sinh học
	   'Option 2': ['A00 - Toán, Vật lí, Hóa học', 'A02 - Toán, Vật lí, Sinh học', 'B00 - Toán, Hóa học, Sinh học', 'D90 - Toán, Khoa học tự nhiên, Tiếng Anh'],
	   // 3 Kỹ thuật xây dựng
	   'Option 3': ['A00 - Toán, Vật lí, Hóa học', 'A01 - Toán, Vật lí, Tiếng Anh', 'D07 - Toán, Hóa học, Anh', 'C01 - Ngữ Văn, Toán, Vật lý'],
	   // 4 Quản trị kinh doanh
	   'Option 4': ['A00 - Toán, Vật lí, Hóa học', 'A01 - Toán, Vật lí, Tiếng Anh', 'D01 - Ngữ Văn, Toán, Anh', 'D90 - Toán, Khoa học tự nhiên, Tiếng Anh'],
	   //5 Quản trị khách sạn
	   'Option 5': ['A00 - Toán, Vật lí, Hóa học', 'D01 - Ngữ Văn, Toán, Anh', 'D96 - Toán, Khoa học xã hội, Tiếng Anh', 'A04 - Toán, Vật lý, Địa lý'],
	   // 6 Kế toan
	   'Option 6': ['A00 - Toán, Vật lí, Hóa học', 'A01 - Toán, Vật lí, Tiếng Anh', 'D01 - Ngữ Văn, Toán, Anh', 'D90 - Toán, Khoa học tự nhiên, Tiếng Anh'],
	   // 7 Tài chính ngân hàng
	   'Option 7': ['A00 - Toán, Vật lí, Hóa học', 'A01 - Toán, Vật lí, Tiếng Anh', 'D01 - Ngữ Văn, Toán, Anh', 'D90 - Toán, Khoa học tự nhiên, Tiếng Anh'],
	   // 8 Ngôn ngữ Anh
	   'Option 8': ['D01 - Ngữ Văn, Toán, Anh', 'D90 - Toán, Khoa học tự nhiên, Tiếng Anh', 'D78 - Ngữ Văn, Khoa học xã hội, Tiếng Anh', 'A01 - Toán, Vật lí, Tiếng Anh'],
	};

	$('#options').on('change', function() {
	   // Set selected option as variable
	   var selectValue = $(this).val();
	   $('#choices').empty();
	   
	   for (i = 0; i < lookup[selectValue].length; i++) {
	      // Output choice in the target field
	      $('#choices').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
	   }

	   // nhap diem tung mon
	   var list_mon = document.getElementById("choices").value;
		var mon = list_mon.split(' - ')[0];
		if(mon == "A00"){
			document.getElementById("subject1").innerHTML = 'Toán';
			document.getElementById("subject2").innerHTML = 'Vật lý';
			document.getElementById("subject3").innerHTML = 'Hóa học';
		}
		else if(mon == "A01"){
			document.getElementById("subject1").innerHTML = 'Toán';
			document.getElementById("subject2").innerHTML = 'Vật lý';
			document.getElementById("subject3").innerHTML = 'Anh';
		}
		else if(mon == "A02"){
			document.getElementById("subject1").innerHTML = 'Toán';
			document.getElementById("subject2").innerHTML = 'Vật lý';
			document.getElementById("subject3").innerHTML = 'Sinh học';
		}
		else if(mon == "A04"){
			document.getElementById("subject1").innerHTML = 'Toán';
			document.getElementById("subject2").innerHTML = 'Vật lý';
			document.getElementById("subject3").innerHTML = 'Địa';
		}
		else if(mon == "A16"){
			document.getElementById("subject1").innerHTML = 'Toán';
			document.getElementById("subject2").innerHTML = 'Khoa học tự nhiên';
			document.getElementById("subject3").innerHTML = 'Ngữ Văn';
		}
		else if(mon == "B00"){
			document.getElementById("subject1").innerHTML = 'Toán';
			document.getElementById("subject2").innerHTML = 'Hóa học';
			document.getElementById("subject3").innerHTML = 'Sinh học';
		}
		else if(mon == "C01"){
			document.getElementById("subject1").innerHTML = 'Ngữ văn';
			document.getElementById("subject2").innerHTML = 'Toán';
			document.getElementById("subject3").innerHTML = 'Vật lý';
		}
		else if(mon == "D01"){
			document.getElementById("subject1").innerHTML = 'Toán';
			document.getElementById("subject2").innerHTML = 'Ngữ văn';
			document.getElementById("subject3").innerHTML = 'Anh';
		}
		else if(mon == "D07"){
			document.getElementById("subject1").innerHTML = 'Toán';
			document.getElementById("subject2").innerHTML = 'Hóa học';
			document.getElementById("subject3").innerHTML = 'Anh';
		}
		else if(mon == "D78"){
			document.getElementById("subject1").innerHTML = 'Ngữ văn';
			document.getElementById("subject2").innerHTML = 'Khoa học xã hội';
			document.getElementById("subject3").innerHTML = 'Anh';
		}
		else if(mon == "D90"){
			document.getElementById("subject1").innerHTML = 'Toán';
			document.getElementById("subject2").innerHTML = 'Khoa học tự nhiên';
			document.getElementById("subject3").innerHTML = 'Anh';
		}
		else if(mon == "D96"){
			document.getElementById("subject1").innerHTML = 'Toán';
			document.getElementById("subject2").innerHTML = 'Khoa học xã hội';
			document.getElementById("subject3").innerHTML = 'Anh';
		}
		else{
			document.getElementById("subject1").innerHTML = 'Môn 1';
			document.getElementById("subject2").innerHTML = 'Môn 2';
			document.getElementById("subject3").innerHTML = 'Môn 3';
		}
	});

	 $(document).keyup(function (e) {

        let subject1 = $('input[name=subject1]');
        let subject2 = $('input[name=subject2]');
        let subject3 = $('input[name=subject3]');
        let sum = $('input[name=sum]');
        if (subject1.val() !== '' && subject2.val() !== '' && subject3.val() !== ''){
        	sum.val(parseFloat(subject1.val()) + parseFloat(subject2.val()) + parseFloat(subject3.val()));
        }
    });
});
