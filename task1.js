var data = [
    { id: 10, name: "A" },
    { id: 20, name: "B" },
    { id: 10, name: "A" },
    { id: 20, name: "C" },
    { id: 50, name: "B" }
];
var seen = {};
var uniqueData = data.filter(function (item) {
    if (seen[item.id]) {
        return false;
    }
    else {
        seen[item.id] = true;
        return true;
    }
});
console.log(uniqueData)