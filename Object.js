// Object is Non-primitive data types in js .

const item = {
    "Number" : 786,
    "Name" :"Ankit",
    "SayTrue":true,
    "notpredict": undefined
}

console.log(item); //output --> { Number: 786, Name: 'Ankit', SayTrue: true, notpredict: undefined }

console.log(item["Name"]);   // output -->Ankit

console.log(item.SayTrue);