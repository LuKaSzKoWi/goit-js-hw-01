function getElementWidth(content, padding, border) {
    'use strict'
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);

    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
    
    return totalWidth;
}

// Check result
console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 