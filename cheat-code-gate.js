const cheatCodeGate = function(obj) {
                
    /* {
        gateBackground: '#1c1c1c',
        dPadBackground: '#242424',
        dPadText: '#999999',
        btnBackground: 'red',
        btnText: 'white'
    } */
    // set options
    const gateBackground = obj.gateBackground ? obj.gateBackground : '#1c1c1c';
    const dPadBackground = obj.dPadBackground ? obj.dPadBackground : '#242424';
    const dPadText = obj.dPadText ? obj.dPadText : '#999999';
    const btnBackground = obj.btnBackground ? obj.btnBackground : 'red';
    const btnText = obj.btnText ? obj.btnText : 'white';
    
    // init the array to keep track of clicked buttons
    const btnSequence = [];

    // utility function to check for the right button sequence in the btnSequence array
    const checkSequence = function () {
        if (btnSequence.length === 10) {
            if (btnSequence[0] === 'cheatCodeGate_up' && btnSequence[1] === 'cheatCodeGate_up' && btnSequence[2] === 'cheatCodeGate_down' && btnSequence[3] === 'cheatCodeGate_down' && btnSequence[4] === 'cheatCodeGate_left' && btnSequence[5] === 'cheatCodeGate_right' && btnSequence[6] === 'cheatCodeGate_left' && btnSequence[7] === 'cheatCodeGate_right' && btnSequence[8] === 'cheatCodeGate_b' && btnSequence[9] === 'cheatCodeGate_a') {
                //console.log('key secquence is correct!');
                body.removeAttribute("style");
                bg.remove();
            } else {
                btnSequence.shift();
            }
        } else if (btnSequence.length > 10) {
            btnSequence.shift();
        }
    };
    
    // utility button functions
    const dPadBtnCSS = function (el, id) {
        el.style.height = '40px';
        el.style.width = '40px';
        el.style.verticalAlign = 'middle';
        el.style.fontWeight = 'bold';
        el.style.backgroundColor = dPadBackground;
        el.style.color = dPadText;
        el.style.borderRadius = '10%';
        el.id = id;
        el.onclick = function () {
            let id = this.id;
            btnSequence.push(id);
            //console.log(btnSequence);
            checkSequence();
        }
    };
    const redBtnCSS = function (el, id) {
        el.style.height = '40px';
        el.style.width = '40px';
        el.style.verticalAlign = 'middle';
        el.style.fontWeight = 'bold';
        el.style.backgroundColor = btnBackground;
        el.style.color = btnText;
        el.style.borderRadius = '50%';
        el.id = id;
        el.onclick = function () {
            let id = this.id;
            btnSequence.push(id);
            //console.log(btnSequence);
            checkSequence();
        }
    };
    
    // mini reset - remove padding and margin from body
    let body = document.querySelector('body');
        body.style.padding = '0px';
        body.style.margin = '0px';
    
    // create background element to cover screen
    let bg = document.createElement('div');
        bg.style.backgroundColor = gateBackground;
        bg.style.height = '100%';
        bg.style.width = '100%';
        bg.style.position = 'absolute';
        bg.style.top = '0px';
        bg.style.textAlign = 'center';
        bg.style.display = 'table';
    
    // create a wrapper for the interface to center it vertically
    let tableWrap = document.createElement('div');
        tableWrap.style.display = 'table-cell';
        tableWrap.style.verticalAlign = 'middle';
    
    // create the table element to hold and space the UI elements
    let table = document.createElement('table');
        table.style.width = '50%';
        table.style.margin = '0 auto';
    
    let tbody = document.createElement('tbody');
    
    // create the first table row
    let tr_1 = document.createElement('tr');
    let td_1_1 = document.createElement('td');
    let td_1_2 = document.createElement('td');
    let upBtn = document.createElement('button');
        dPadBtnCSS(upBtn, 'cheatCodeGate_up');
    let upBtnSymbol = document.createTextNode('\u2191');
    let td_1_3 = document.createElement('td');
    let td_1_4 = document.createElement('td');
        td_1_4.style.width = '75%';
    let td_1_5 = document.createElement('td');
    let td_1_6 = document.createElement('td');
    
    // create the second table row
    let tr_2 = document.createElement('tr');
    let td_2_1 = document.createElement('td');
    let leftBtn = document.createElement('button');
        dPadBtnCSS(leftBtn, 'cheatCodeGate_left');
    let leftBtnSymbol = document.createTextNode('\u2190');
    let td_2_2 = document.createElement('td');
    let td_2_3 = document.createElement('td');
    let rightBtn = document.createElement('button');
        dPadBtnCSS(rightBtn, 'cheatCodeGate_right');
    let rightBtnSymbol = document.createTextNode('\u2192');
    let td_2_4 = document.createElement('td');
    let td_2_5 = document.createElement('td');
    let bBtn = document.createElement('button');
        redBtnCSS(bBtn, 'cheatCodeGate_b');
    let bBtnSymbol = document.createTextNode('B');
    let td_2_6 = document.createElement('td');
    let aBtn = document.createElement('button');
        redBtnCSS(aBtn, 'cheatCodeGate_a');
    let aBtnSymbol = document.createTextNode('A');
    
    // create the third table row
    let tr_3 = document.createElement('tr');
    let td_3_1 = document.createElement('td');
    let td_3_2 = document.createElement('td');
    let downBtn = document.createElement('button');
        dPadBtnCSS(downBtn, 'cheatCodeGate_down');
    let downBtnSymbol = document.createTextNode('\u2193');
    let td_3_3 = document.createElement('td');
    let td_3_4 = document.createElement('td');
    let td_3_5 = document.createElement('td');
    let td_3_6 = document.createElement('td');
    
    // append all first row elements
    tr_1.appendChild(td_1_1);
    upBtn.appendChild(upBtnSymbol);
    td_1_2.appendChild(upBtn);
    tr_1.appendChild(td_1_2);
    tr_1.appendChild(td_1_3);
    tr_1.appendChild(td_1_4);
    tr_1.appendChild(td_1_5);
    tr_1.appendChild(td_1_6);
    
    // append all second row elements
    leftBtn.appendChild(leftBtnSymbol);
    td_2_1.appendChild(leftBtn);
    tr_2.appendChild(td_2_1);
    tr_2.appendChild(td_2_2);
    rightBtn.appendChild(rightBtnSymbol);
    td_2_3.appendChild(rightBtn);
    tr_2.appendChild(td_2_3);
    tr_2.appendChild(td_2_4);
    bBtn.appendChild(bBtnSymbol);
    td_2_5.appendChild(bBtn);
    tr_2.appendChild(td_2_5);
    aBtn.appendChild(aBtnSymbol);
    td_2_6.appendChild(aBtn);
    tr_2.appendChild(td_2_6);
    
    // append all thrid row elements
    tr_3.appendChild(td_3_1);
    downBtn.appendChild(downBtnSymbol);
    td_3_2.appendChild(downBtn);
    tr_3.appendChild(td_3_2);
    tr_3.appendChild(td_3_3);
    tr_3.appendChild(td_3_4);
    tr_3.appendChild(td_3_5);
    tr_3.appendChild(td_3_6);
    
    // append rows to tbody, tbody to table, table to wrapper, wrapper to bg, and bg to the body element
    tbody.appendChild(tr_1);
    tbody.appendChild(tr_2);
    tbody.appendChild(tr_3);
    table.appendChild(tbody);
    tableWrap.appendChild(table);
    bg.appendChild(tableWrap);
    body.appendChild(bg);
};