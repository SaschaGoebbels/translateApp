import classes from './modalBox.module.css';
import ButtonRound from './buttonRound';

const ModalBox = props => {
  const onClickHandler = el => {
    props.clickmodalBox(el);
    if (el === 'x' && props.modalState.dismiss) {
      props.modalState.dismiss(props.modalState.value);
    }
    if (el === 'check' && props.modalState.confirm) {
      props.modalState.confirm(props.modalState.value);
    }
  };
  return (
    <div
      className={`${classes.modalBox}  ${
        props.modalState.hideModalBox && classes.modalBox__hide
      } `}
    >
      <div
        className={`${classes.modalBox__card} ${classes.modalBox__card_gradient}`}
      >
        <header className={classes.modalBox__header}>
          <h2>{props.modalState.title}</h2>
        </header>
        <div className={classes.modalBox__messageBox}>
          <p>{props.modalState.message}</p>
        </div>
        <footer className={classes.modalBox__footer}>
          {props.modalState.showBtnX && (
            <ButtonRound
              btnId="x"
              className={classes.buttonAddEdit}
              buttonName={'x'}
              color={'#AD5050'}
              iconColor={''}
              isFav={''}
              onClickHandler={onClickHandler}
            />
          )}
          {props.modalState.showBtnTrash && (
            <ButtonRound
              btnId="trash"
              className={classes.buttonAddEdit}
              buttonName={'trash'}
              color={'#AD5050'}
              iconColor={''}
              isFav={''}
              onClickHandler={onClickHandler}
            />
          )}
          <ButtonRound
            btnId="check"
            className={classes.buttonAddEdit}
            buttonName={'check'}
            color={''}
            iconColor={''}
            isFav={''}
            onClickHandler={onClickHandler}
          />
        </footer>
      </div>
    </div>
  );
};

export default ModalBox;
