var arr=[1,2,3,4,5];
document.write("arr ="+"["+arr+"]"+"<br>")
var arr1=JSON.parse(JSON.stringify(arr))
document.write("arr1 ="+"["+arr1+"]"+"<br>")
arr[0]=100
document.write("arr ="+"["+arr+"]"+"<br>","arr1 ="+"["+arr1+"]"+"<br>");