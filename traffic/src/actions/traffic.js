export function addSegment() {
  return { type: 'ADD_SEGMENT' }
}

export function updateName(currentName, newName) {
  return { type: 'UPDATE_NAME', currentName, newName }
}

export function updatePercentage(nameOfSegment, newPercentage) {
  return { type: 'UPDATE_PERCENTAGE', nameOfSegment, newPercentage }
}

export function updateCountry(nameOfSegment, newCountry) {
  return { type: 'UPDATE_COUNTRY', nameOfSegment, newCountry }
}

export function updateInstitution(nameOfSegment, newInstitution) {
  return { type: 'UPDATE_INSTITUTION', nameOfSegment, newInstitution }
}