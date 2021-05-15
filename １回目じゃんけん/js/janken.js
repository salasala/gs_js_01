
function rsp(playerSelect) {
    let result;
    let playerSelectHand;
    let comSelectHand;
    let resultString;
    let random = Math.random();
    let comSelect = Math.floor(random * 3);
    console.log(comSelect);
    console.log(playerSelect);

    
    if (playerSelect == comSelect) {
       
        result = 2;
    } else {
        
        if (playerSelect == 0) {
            if (comSelect == 1) {
                result = 1;
            } else {
                result = 0;
            }
        } else if (playerSelect == 1) {
            if (comSelect == 0) {

                result = 0;
            } else {
                result = 1;
            }
        } else {
            if (comSelect == 0) {
                result = 1;
            } else {
                result = 0;
            }
        }
    }
    console.log(result);

    if (playerSelect == 1) {
        playerSelectHand = 'グー';
    } else if (playerSelect == 2) {
        playerSelectHand = 'チョキ';
    } else {
        playerSelectHand = 'パー';
    }

    if (comSelect == 1) {
        comSelectHand = 'グー';
    } else if (comSelect == 2) {
        comSelectHand = 'チョキ';
    } else {
        comSelectHand = 'パー';
    }

    if (result == 1) {
        resultString = '負け';
    } else if (result == 2) {
        resultString = '勝ち';
    } else {
        resultString = 'あいこ';
    }

    document.getElementById('player').innerHTML = 'あなたは ' + playerSelectHand;
    document.getElementById('computer').innerHTML =
        'コンピューターは ' + comSelectHand;
    document.getElementById('resultMsg').innerHTML = '結果は ' + resultString;
}