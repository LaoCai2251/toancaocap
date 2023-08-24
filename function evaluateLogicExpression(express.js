function evaluateLogicExpression(expression) {
    // Logic evaluation code
    const variables = extractVariables(expression);
    const tableRows = generateTruthTable(variables);
    const parsedExpression = parseExpression(expression);
  
    const result = tableRows.map(row => {
      const evaluated = evaluateParsedExpression(parsedExpression, row);
      return [...row, evaluated];
    });
  
    return result;
  }
  
  function extractVariables(expression) {
    // Logic to extract unique variables from the expression
  }
  
  function generateTruthTable(variables) {
    // Logic to generate all possible combinations of variable values
  }
  
  function parseExpression(expression) {
    // Logic to parse the logic expression into a usable format
  }
  
  function evaluateParsedExpression(parsedExpression, row) {
    // Logic to evaluate the parsed expression using variable values from the row
  }
  
  function displayResultTable(result) {
    const tableHTML = generateTableHTML(result);
    resultTable.innerHTML = tableHTML;
  }
  
  function generateTableHTML(result) {
    let tableHTML = '<table><tr>';
  
    // Generate header row
    const headerRow = result[0].map(variable => `<th>${variable}</th>`).join('');
    tableHTML += `${headerRow}<th>Result</th></tr>`;
  
    // Generate data rows
    result.slice(1).forEach(row => {
      const dataRow = row.map(item => `<td>${item}</td>`).join('');
      tableHTML += `<tr>${dataRow}</tr>`;
    });
  
    tableHTML += '</table>';
    return tableHTML;
  }
  