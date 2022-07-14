/**
 * Adds a span pipe (|) separator between each element
 * @param elements - elements to be separated
 * @returns {JSX.Element} - elements with separators
 */
function addSeparators(elements: JSX.Element[]): JSX.Element[] {
  // remove the final character from unit if count is exactly 1
  const separatedElements: JSX.Element[] = []
  const separator: JSX.Element = <span> | </span>

  elements.forEach((v, i, arr) => {
    separatedElements.push(...intercolateSep(v, i, arr, separator))
  })

return separatedElements
}

function intercolateSep(el: JSX.Element, index: number, els: JSX.Element[], sep: JSX.Element): JSX.Element[] {
  if (index < els.length - 1) {
    return [el]
  }
  return [el, sep]
}

export default addSeparators;
