
// Jsdatatype ---JSON.stringify---> JsonString in localStorage  ==>>  Serialization
// JsonString from localStorage ---JSON.parse---> JsDataType   ==>>  Deserialization



const myStory= {
    name: "Thazin Naing",
    hobby: "writing code",
    age: 22,
    job: "no job"
}

const covertToString = JSON.stringify(myStory)
localStorage.setItem("Story", covertToString)

const getData = localStorage.getItem("bio")

const convertToJsObject= JSON.parse(getData)
console.log(convertToJsObject)
console.log(typeof convertToJsObject)
console.log(convertToJsObject.hobby)
console.log(convertToJsObject["job"])

const myStories= [
    {
        name: "Thazin Naing",
        hobby: "writing code",
        age: 22,
        job: "no job"
    },
    {
        name: "Sai PuTuu",
        hobby: "YitLone",
        age: 21,
        job: "developer"
    }
]

const serializationData=JSON.stringify(myStories)
localStorage.setItem("stories", serializationData)

const getDataFromLS= localStorage.getItem("stories")

const deserialization= JSON.parse(getDataFromLS)
console.log(deserialization)
console.log(typeof deserialization)
console.log(deserialization[0]["job"])
console.log(deserialization[1].name)

const arr=[1,3,5,6]

const serializeArray=JSON.stringify(arr)
localStorage.setItem("ArrayItem", serializeArray)
console.log(typeof serializeArray)


const getArrayData=localStorage.getItem("ArrayItem")
console.log(typeof getArrayData)

const deserializeString=JSON.parse(getArrayData)
console.log(typeof deserializeString)
console.log(deserializeString[2])






