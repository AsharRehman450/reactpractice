import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

export const Card = ({ id, imgSrc, title, desc }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={imgSrc} alt={title} />
      <h2>Id: {id}</h2>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};
