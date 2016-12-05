const segmentsReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_SEGMENT':
            return {
                segments: [
                    ...state.segments, 
                    {
                        "name": "Give me a name!",
                        "percentage": 0,
                        "country": "us",
                        "institution": "msu.edu"
                    }
                ]
            };
        case 'UPDATE_NAME':
            return {
                segments: state.segments.map(segment => segment.name === action.currentName ? { ...segment, name: action.newName } : { ...segment})
            };
        case 'UPDATE_PERCENTAGE':
            return {
                segments: state.segments.map(segment => segment.name === action.nameOfSegment ? { ...segment, percentage: action.newPercentage } : { ...segment})
            };
        case 'UPDATE_COUNTRY':
            return {
                segments: state.segments.map(segment => segment.name === action.nameOfSegment ? { ...segment, country: action.newCountry } : { ...segment})
            };
        case 'UPDATE_INSTITUTION':
            return {
                segments: state.segments.map(segment => segment.name === action.nameOfSegment ? { ...segment, institution: action.newInstitution } : { ...segment})
            };
        default:
            return state
    }
};

export default segmentsReducer