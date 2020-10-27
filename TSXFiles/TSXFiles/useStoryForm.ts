// import { useState } from "react";

// type State = { title: string; description: string; text: string }

// const useForm = (): {
//   state: State;
//   onHandleChange: (evt: Event) => void;
//   onHandleSubmit: (state: State, createStory: any, handleClose: any) => Promise<void>;
//   showError: boolean;
//   showConfirmation: boolean;
// } => {


//   const [state, setState] = useState({
//     title: "",
//     description: "",
//     text: "",
//   });

//   const [showError, setShowError] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const onHandleChange = (evt: any) => {
//     const value = evt.target.value;

//     setState({
//       ...state,
//       [evt.target?.name]: value,
//     });
//   };

//   const onHandleSubmit = async (state: State, createStory: (any: any) => void, handleClose: () => void) => {
//     let formData: State = {
//         title: '',
//         description: '',
//         text: ''
//     };
//     if (!state.title || !state.description || !state.title) {
//       setShowError(true);
//       setTimeout(() => {
//         setShowError(false);
//       }, 2000);
//     } else {
//       formData.title = state.title;
//       formData.description = state.description;
//       formData.text = state.text;
//       setShowConfirmation(true);
//       setState({
//         title: "",
//         description: "",
//         text: "",
//       });
//       setTimeout(() => {
//         console.log("closed");
//         setShowConfirmation(false);
//         createStory(formData);
//         console.log("created");
//         handleClose();
//       }, 2000);
//     }
//   };

//   return { state, onHandleChange, onHandleSubmit, showError, showConfirmation };
// };

// export default useForm;
