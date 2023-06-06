let output=document.getElementById("input");

function display(num)
{
    output.value+=num;
}

function calculate()
{
    try
    {
       let total=eval(output.value);
       output.value=total;
    }  
    
    catch{
        alert("Use Proper Syntax");
    }
}

function deleted()
{
    output.value="";
}
