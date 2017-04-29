/**
 * Created by Aaron on 2017/4/28.
 */
function startArithmetic(){
    if(operator != "") {
        currentNumber = parseFloat(currentNumber == "" ? "0" : currentNumber);
        currentResult = parseFloat(currentResult == "" ? "0" : currentResult);
        if (operator == "+") {
            currentResult += currentNumber;
        } else if (operator == "-") {
            currentResult -= currentNumber;
        } else if (operator == "*") {
            currentResult *= currentNumber;
        } else if (operator == "/") {
            if(currentNumber == 0){
                alert("除数不能为0");
                return;
            }
            currentResult /= currentNumber;
        }else if(operator == "C"){
            operator = "";
            currentResult = 0;
            currentNumber = "";
            show("");
        }else if(operator == "CE"){
            show("");
        }else if(operator == "MC"){
            operator = "";
            currentResult = 0;
            currentNumber = "";
            show("");
        }else if(operator == "MR"){
            show(currentResult);
        }else if(operator == "MS"){
            if(currentResult != "" && currentResult != 0){
                show("M " + currentResult);
            }else {
                show(currentResult);
            }
        }else if(operator == "M+"){
            if(currentResult == 0){
                currentResult = currentNumber;
            }
            currentResult += currentResult;
            show(currentResult)
        }
    }
}