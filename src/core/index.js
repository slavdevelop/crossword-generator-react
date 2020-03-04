export function getCharsCoordinates(wordObject) {
    let charObjects = [];

    for (let i = 0; i < wordObject.length; i++) {
        let newCharObj = {
            char: wordObject.text.split("")[i]
        };
        
        if (i === 0) {
            newCharObj["rowNumber"] = wordObject.startRow;
            newCharObj["colNumber"] = wordObject.startCol;
        } else {
            if (wordObject.isHorizontal) {
                newCharObj["rowNumber"] = wordObject.startRow;
                newCharObj["colNumber"] = wordObject.startCol + i;
            } else {
                newCharObj["rowNumber"] = wordObject.startRow + i;
                newCharObj["colNumber"] = wordObject.startCol;
            }
        }

        charObjects.push(newCharObj);
    }

    return charObjects;
}