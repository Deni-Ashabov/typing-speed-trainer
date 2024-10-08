import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { getUsersState } from '../../../features/typingTrainer/selectors';
import {
  CorrectText,
  Display,
  IncorrectText,
  TextSpan,
  Warning
} from './TextDisplay.styled';
import {
  completeTest,
  endTest,
  incrementErrors,
  setUserInput,
  startTest
} from '../../../features/typingTrainer/typingTrainerSlice';

const TextDisplay = () => {
  const dispatch = useDispatch();
  const {
    text,
    userInput,
    startTime,
    isCompleted,
  } = useSelector(state => getUsersState(state));
  const [isCapsLock, setIsCapsLock] = useState(false);
  const [focusInput, setFocusInput] = useState(false); // Состояние для управления фокусом на textarea

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    // Проверка состояния Caps Lock при любом нажатии клавиши
    setIsCapsLock(e.getModifierState('CapsLock'));

    // Игнорируем специальные клавиши, которые не должны влиять на ввод текста
    if (['Tab', 'CapsLock', 'Shift', 'Control', 'Alt', 'Meta'].includes(e.key)) {
      e.preventDefault();
      return;
    }

    if (e.key === ' ') {
      e.preventDefault(); // Предотвращение прокрутки страницы при нажатии пробела
    }

    if (e.key === 'Backspace') {
      // Если нажата клавиша Backspace, то ничего не делаем
      return;
    }

    if (!startTime) {
      dispatch(startTest());
    }

    const currentInput = userInput + e.key;

    // Если символ введен неверно, увеличиваем счетчик ошибок
    if (e.key !== text[userInput.length]) {
      dispatch(incrementErrors());
    }

    // Обновляем введенный текст только если длина не превышает длину исходного сообщения
    if (userInput.length < text.length) {
      dispatch(setUserInput(currentInput));
    }

    if (currentInput.length === text.length) {
      dispatch(completeTest());
      dispatch(endTest());
    }
  }, [userInput, text, dispatch, startTime]);

  useEffect(() => {
    if (isCompleted) return;

    // Подписываемся на событие нажатия клавиши
    window.addEventListener('keydown', handleKeyPress);

    // Отписываемся при размонтировании компонента
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress, isCompleted]);

  const handleTextareaClick = () => setFocusInput(true);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const currentInput = e.target.value;

    if (
      text[userInput.length] &&
      currentInput[userInput.length] !==
      text[userInput.length]
    ) {
      dispatch(incrementErrors());
    }

    if (currentInput.length <= text.length) {
      dispatch(setUserInput(currentInput));
    }

    if (currentInput.length === text.length) {
      dispatch(completeTest());
      dispatch(endTest());
    }
  };

  const renderedText = useMemo(() => {
    // Показываем букву в зависимости от корректности ввода
    return text.split('').map((char, i) => {
      if (i < userInput.length) {
        if (userInput[i] === char) {
          return <CorrectText key={i}>{char}</CorrectText>;
        }
        return <IncorrectText key={i}>{char}</IncorrectText>;
      }
      return <TextSpan key={i}>{char}</TextSpan>;
    });
  }, [text, userInput]);

  const textareaFocus = () => dispatch(startTest())

  return (
    <Display>
      <textarea
        value={userInput}
        onChange={handleTextareaChange}
        onFocus={textareaFocus}
        onClick={handleTextareaClick}
        aria-label="Typing input"
        autoFocus={focusInput}
        style={{
          position: 'absolute',
          opacity: 0,
          width: '100%',
          height: '100%',
          fontSize: '24px',
          border: 'none',
          resize: 'none',
          overflow: 'hidden'
        }}
      />
      <div style={{ position: 'relative' }}>
        <span>{renderedText}</span>
        {isCapsLock && <Warning>Caps Lock is ON</Warning>}
      </div>
    </Display>
  );
};

export default React.memo(TextDisplay);
