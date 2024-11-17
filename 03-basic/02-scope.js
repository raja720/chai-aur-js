// diffrence btw let var const and diffrence btw bloked scope and global scope;

if (true) {
    let a = "400"
    var b = 500
    const c = 300

}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
   const username = "baja singh"

   function two(){
    const website = "youtube"
    // console.log(username);
    
   }
//    console.log(website) this is not run because it is outside of its scope
   two()
}

one()

if(true){
    const crushName = "shiriti"
    if(crushName === "shiriti"){
        const likesMe = "loves raja"
        // console.log(crushName + " " +likesMe);
    }
    // console.log(likesMe) smjhe biru isme scope ka khel hai
}
// console.log(crushName) also in it

// ++++++++++++++++++++++++ intresting +++++++++++++++++++++++++++++
console.log(addOne(19))
function addOne(num){
    return num+1
}
// console.log(addOne(19))
// addTwo(2) cannot acces any variable before initialiization
const addTwo = function (num){
    return num*2
}
console.log(addTwo(2))