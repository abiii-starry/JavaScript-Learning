let global_var = "global";
function getLevel() {
    let initLevel = 1;
    let useless = 999;
    function levelUp() {
        let level = initLevel + 1;
        return level
    }
    useless += 1;
    return levelUp;
}

let levelUp = getLevel();

levelUp();
levelUp();
levelUp();
levelUp();
console.log(levelUp());