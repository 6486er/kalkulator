let prevNumber=''
let calculationOperator=''
let currentNumber='0'

const calculatorScreen=document.querySelector('.calculatorScreen')

const updateScreen=(number)=>{
  calculatorScreen.value=number
}

const inputNumber=(number)=>{
  if(currentNumber===0){
    currentNumber=number
  }else{
    currentNumber+=number
  }
}

const inputOperator=(operator)=>{
  if(calculationOperator===''){
    prevNumber=currentNumber
  }
  calculationOperator=operator
  currentNumber='0'
}

const clearAll=()=>{
  prevNumber=''
  calculationOperator=''
  currentNumber='0'
}

const inputDecimal=(dot)=>{
  if(currentNumber.includes('.')){
    return
  }
  currentNumber+=dot
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number)=>{
  number.addEventListener("click",(event)=>{
    inputNumber("event.target.value")
    updateScreen(currentNumber)
  })
})

const operators=document.querySelectorAll(".operator")

operators.forEach((operator)=>{
  operator.addEventListener("click",(event)=>{
    inputOperator(event.target.value)
  })
})

const equalSign=document.querySelectorAll('.equal-sign')

equalSign.addEventListener('click',()=>{
  calculate()
  updateScreen(currentNumber')
})

const calculate=()=>{
  let result=''
  switch(calculationOperator){
      case"+":
        result=parseFloat(prevNumber)+parseFloat(currentNumber)
        break
      case"-":
        result=parseFloat(prevNumber)-parseFloat(currentNumber)
        break
      case"*":
        result=parseFloat(prevNumber)*parseFloat(currentNumber)
        break
      case"/":
        result=parseFloat(prevNumber)/parseFloat(currentNumber)
        break
    default:
      return
  }
  currentNumber=result
  calculationOperator=''
}

const clearBtn=document.querySelector('.all-clear')

clearBtn.addEventListener('click',()=>{
  clearAll()
  updateScreen(cirrentNumber)
})

const decimal=document.querySelector('.decimal')

decimal.addEventListener('click',(event)=>{
  inputDecimal(event.target.value)
  updateScreen(cirrentNumber)
})


