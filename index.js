function saturdayFun (activity) {
    activity = typeof activity !== 'undefined' ? activity : 'roller-skate';
    return (`This Saturday, I want to ${activity}!`)
    
}
 function mondayWork (job) {
     job = typeof job !== 'undefined' ? job : 'go to the office'
     return (`This Monday, I will ${job}.`)
 }
 function wrapAdjective(parameter ="*") {
     return function innerFunction(msg='special') {
        return (`You are ${parameter}${msg}${parameter}!`)
 }
}
