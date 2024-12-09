
const transitions = {
    q0: { '0': null, '1': 'q1' },
    q1: { '0': 'q2', '1': 'q1' },
    q2: { '0': 'q2', '1': 'q1' },
  };
  
  
  const initialState = 'q0';
  const finalState = 'q2';
  
  function processFSM() {
    const input = document.getElementById('inputString').value.trim();
    const output = document.getElementById('output');
    output.textContent = '';
  
    let currentState = initialState;
    let result = '';
    let accepted = true;
  
    for (const char of input) {
      
      if (char !== '0' && char !== '1') {
        output.textContent = `Invalid input: Only '0' and '1' are allowed.`;
        return;
      }
  
      const nextState = transitions[currentState][char];
      result += `${currentState},${char}--->${nextState}\n`;
  
      if (!nextState) {
        accepted = false;
        break;
      }
  
      currentState = nextState;
    }
  
    if (accepted && currentState === finalState) {
      result += '\nResult: Accepted';
    } else {
      result += '\nResult: Rejected';
    }
  
    output.textContent = result;
  }
  