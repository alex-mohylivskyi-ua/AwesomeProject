import { createSlice } from '@reduxjs/toolkit'

export const exerciseManagerSlice = createSlice({
name: 'exerciseManager',
initialState: {
    selectedVariant: null,
    correctVariant: -1,
    isCorrectVariantSelected: false,
    isLastWord: false,
    currentCardNumber: 0,
    totalNumberOfCards: 0,
    isChecked: false,
    userHealth: 5
},
reducers: {
    setSelectedVariant: (state, action) => {
      state.selectedVariant = action.payload;
    },
    setCorrectVariant: (state, action) => {
      state.correctVariant = action.payload;
    },
    setIsCorrectVariantSelected: (state, action) => {
      state.isCorrectVariantSelected = action.payload;
    },
    setIsLastWord: (state, action) => {
      state.isLastWord = action.payload;
    },
    setCurrentCardNumber: (state, action) => {
      state.currentCardNumber = action.payload;
    },
    setTotalNumberOfCards: (state, action) => {
      state.totalNumberOfCards = action.payload;
    },
    setIsChecked: (state, action) => {
        state.isChecked = action.payload;
      },
  },
});



export const { setCorrectVariant, setSelectedVariant, setCurrentCardNumber, setTotalNumberOfCards, setIsCorrectVariantSelected, setIsChecked } = exerciseManagerSlice.actions;
export const selectCorrectVariant = state => state.exerciseManager.correctVariant;
export const selectSelectedVariant = state => state.exerciseManager.selectedVariant;
export const selectCurrentCardNumber = state => state.exerciseManager.currentCardNumber;
export const selectTotalNumberOfCards = state => state.exerciseManager.totalNumberOfCards;
export const selectIsCorrectVariantSelected = state => state.exerciseManager.isCorrectVariantSelected;
export const selectIsChecked = state => state.exerciseManager.isChecked;

export default exerciseManagerSlice.reducer