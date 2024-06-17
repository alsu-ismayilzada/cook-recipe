import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch,useSelector } from 'react-redux';
import likev1 from "../images/likev1.svg";
import likev2 from "../images/likev2.svg";
import Recipe from './Recipe';
import { addRecipies, clearRecipies } from '../redux/favoriteRecipiesSlice';

Modal.setAppElement('#root');

const Cooks = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const favoriteRecipies = useSelector((state) => state.favoriteRecipies);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const addFavorite = (hit) => {
    if (props.isFavorite) {
      dispatch(clearRecipies({ index: hit.label }));
    } else {
      if(!favoriteRecipies.some(favRecipe => favRecipe.label === hit.label)){
        dispatch(addRecipies({
          image: hit.image,
          label: hit.label,
          totalTime: hit.totalTime,
          calories: hit.calories,
          cuisineType: hit.cuisineType,
          mealType: hit.mealType,
          dietLabels: hit.dietLabels,
          ingredientLines: hit.ingredientLines,
          url: hit.url
        }));
      }
  };
}
  return (
    <div className='Cooks'>
      <div className='cook-card' key={props.index}>
        <img className='food-image' src={props.image} alt={`Food ${props.index}`} />
        <div className='food-header'>
          <p className='food-name'>{props.label}</p>
          <p className='calories'>{Math.round(props.calories)} KKAL</p>
        </div>
        <p className='food-preparation-time'>
          {props.totalTime !== 0 ? props.totalTime >= 60 ? `${Math.floor(props.totalTime / 60)}h ${props.totalTime % 60} minutes` : `${props.totalTime} minutes` : null}
        </p>
        <div className='bottom'>
          <img src={props.isFavorite ? likev2 : likev1} alt="like" onClick={() => addFavorite({
            index: props.index,
            image: props.image,
            label: props.label,
            totalTime: props.totalTime,
            calories: props.calories,
            cuisineType: props.cuisineType,
            mealType: props.mealType,
            dietLabels: props.dietLabels,
            ingredientLines: props.ingredientLines,
            url: props.url
          })} />
          <button onClick={openModal}>Read More</button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Recipe Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '640px',
            padding: '20px',
            height: 'auto',
            paddingTop: "50px"
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            overflowY: 'auto',
          },
        }}
      >
        <Recipe {...props} />
      </Modal>
    </div>
  );
};

export default Cooks;
