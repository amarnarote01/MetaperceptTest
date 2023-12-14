// Create a function to return the longest word in a string.
// Input: “dummy text of the printing and typesetting industry.”
// Output: typesetting 
// Input: “It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distributionqqqqqqqqqqqqqqqqqqq of letters, as opposed to using 'Content here, content here', making it look like readable English”
// Output: distributionqqqqqqqqqqqqqqqqqqq 


function findLongestString(String) {
    const arr = String.split(" ");
    var longString ="";
    arr.forEach(s => {
        if(longString.length < s.length) {
            longString = s;
        }
        
    })
    return longString;
}

const result  = findLongestString("dummy text of the printing and typesetting industry");
console.log(result);