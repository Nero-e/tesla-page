import { useRef, useEffect } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const YourComponent = () => {
  const scrollPositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useScrollPosition(({ currPos }) => {
    scrollPositionRef.current = currPos;
  });

  // Accede a las coordenadas almacenadas en el ref
  const { x, y } = scrollPositionRef.current;

  // Ahora tienes acceso a las coordenadas de la página según el scroll
  console.log('Posición X:', x);
  console.log('Posición Y:', y);

  // Resto de tu lógica y JSX para el componente

  return (
    <div>
      
    </div>
  );
};

export default YourComponent;