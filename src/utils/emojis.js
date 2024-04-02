export const symbolOptions = [
    { label: '❌', value: '❌' },
    { label: '⭕️', value: '⭕️' },
    { label: '😊', value: '😊' },
    { label: '😎', value: '😎' },
    { label: '😍', value: '😍' },
    { label: '😂', value: '😂' },
    { label: '🤣', value: '🤣' },
    { label: '😇', value: '😇' },
    { label: '😋', value: '😋' },
    { label: '😜', value: '😜' },
    { label: '😉', value: '😉' },
    { label: '😘', value: '😘' },
    { label: '🤪', value: '🤪' },
    { label: '😃', value: '😃' },
    { label: '🙂', value: '🙂' },
  ];

 export const randomEmoji = () => symbolOptions.sort(() => Math.random() - 0.5)
 