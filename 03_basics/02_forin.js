const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObj) {
//      console.log(key);
// }

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

// for(const key in programming){
//     console.log(key);
// }
for(const key in programming){
    console.log(programming[key]);
}